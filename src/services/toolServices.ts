import { createId } from '@paralleldrive/cuid2'
import { client } from '../models/client'
import { ITool } from '../types/entity'

export const toolServices = {
  getData: ({ isPublic, q }: { isPublic: boolean; q?: string }) => {
    const query = q || ''
    const CLAUSE = isPublic ? `AND t.is_public = 1` : ''

    const allTools = client
      .query(
        `
        SELECT 
            t.id AS id,
            t.name AS name,
            t.description AS description,
            t.category AS category,
            t.image AS image,
            t.verified as verified,
            t.is_public as isPublic,
            t.url AS url,
            a.visits AS visits
        FROM
            tools t
        JOIN
            analytics a ON a.tool_id = t.id
        WHERE
          (t.name LIKE ? OR t.description LIKE ?)
          ${CLAUSE}
        `
      )
      .all(`%${query}%`, `%${query}%`) as ITool[]

    return allTools
  },

  createData: ({
    name,
    description,
    image,
    url,
    category,
  }: Omit<ITool, 'id' | 'visits' | 'verified' | 'isPublic'>) => {
    const toolId = createId()
    const analyticId = createId()

    client
      .query(
        `INSERT INTO tools (id, name, description, image, url, category) VALUES(?,?,?,?,?,?)`
      )
      .run(toolId, name, description, image as string, url, category)

    client
      .query(`INSERT INTO analytics (id, tool_id) VALUES (?,?)`)
      .run(analyticId, toolId)

    const currentTool = client
      .query(
        `SELECT 
            t.id AS id,
            t.name AS name,
            t.description AS description,
            t.image AS image,
            t.url AS url,
            a.visits AS visits
        FROM
            tools t
        JOIN
            analytics a ON a.tool_id = t.id
        WHERE 
            t.id = ?
        `
      )
      .all(toolId) as ITool[]

    return currentTool[0]
  },

  publishData: (id: string, mode: 'publish' | 'unpublish') => {
    const publishValue = mode === 'publish' ? 1 : 0

    client
      .query(`UPDATE tools SET is_public = ? WHERE id = ?`)
      .run(publishValue, id)
  },

  verifyData: (id: string, mode: 'verify' | 'unverify') => {
    const verifyValue = mode === 'verify' ? 1 : 0

    client
      .query(`UPDATE tools SET verified = ? WHERE id = ?`)
      .run(verifyValue, id)
  },

  updateAnalytics: (id: string) => {
    client
      .query('UPDATE analytics SET visits = visits + 1 WHERE tool_id = ? ')
      .run(id)

    const url = client.query('SELECT url FROM tools WHERE id = ?').all(id)

    return url[0] as ITool
  },
}
