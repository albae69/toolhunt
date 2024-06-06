export interface ITool {
  id: string
  name: string
  description: string
  category: string
  image: string | Blob
  url: string
  visits: number
  verified: number
  isPublic: number
}
