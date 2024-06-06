import staticPlugin from '@elysiajs/static'
import { html } from '@elysiajs/html'
import { Elysia } from 'elysia'
import { appRouter } from './router/appRouter'

const app = new Elysia()
  // plugins
  .use(html())
  .use(staticPlugin())
  // router
  .use(appRouter)
  // port
  .listen(3001)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
