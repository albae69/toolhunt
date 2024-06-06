import Elysia from 'elysia'
import Home from '../views/pages/Home'
import SubmissionForm from '../views/pages/submissionForm'

export const appRouter = new Elysia()
  // interfaces
  .get('/', () => <Home />)
  .get('/tools', () => {})
  .get('/tools/manage', () => {})
  .get('/tools/submissions', () => <SubmissionForm />)
  // functionality
  .get('/tools/:id', () => {})
  .post('/tools', () => {})
  .patch('/tools', () => {})
