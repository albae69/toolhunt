import { ITool } from '../../types/entity'
import TemplateBase from '../templates/templateBase'

const Manage = ({ tools }: { tools: ITool[] }) => {
  return (
    <TemplateBase>
      <main class='space-y-12'>
        {tools.map((tool) => {
          return (
            <main class='flex gap-4 items-center'>
              <img
                src={`/public/images/${tool.id}/${tool.image}`}
                class='h-20 w-20 rounded-lg'
              />
              <div class='space-y-2'>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
                <div class='flex gap-2'>
                  {tool.isPublic === 0 ? (
                    <button
                      class='w-fit'
                      hx-patch={`/tools/${tool.id}/publish`}>
                      Publish
                    </button>
                  ) : (
                    <button
                      class='w-fit'
                      hx-patch={`/tools/${tool.id}/unpublish`}>
                      Unpublish
                    </button>
                  )}
                  {tool.verified === 0 ? (
                    <button class='w-fit' hx-patch={`/tools/${tool.id}/verify`}>
                      Verify
                    </button>
                  ) : (
                    <button
                      class='w-fit'
                      hx-patch={`/tools/${tool.id}/unverify`}>
                      Unverify
                    </button>
                  )}
                </div>
              </div>
            </main>
          )
        })}
      </main>
    </TemplateBase>
  )
}

export default Manage
