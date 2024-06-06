import ToolCard from '../components/toolCard'
import TemplateBase from '../templates/templateBase'

const SubmissionForm = () => {
  return (
    <TemplateBase>
      <main class='space-y-12'>
        <header class='flex justify-between items-center'>
          <a href=''>toolhunt.</a>
          <a href=''>
            <button>Submit tools</button>
          </a>
        </header>
        <section class='flex flex-col items-center justify-center gap-6'>
          <h1 class='lg:px-32 text-center'>Share your tools</h1>
          <p>We will verify your tools</p>
        </section>
        <section>
          <input name='name' placeholder='name' />
          <input name='image' type='file' />
          <textarea name='description'></textarea>
          <input name='url' placeholder='url' />
          <select>
            <option value='open-sources'>Open sources</option>
            <option value='free'>Free</option>
            <option value='freemium'>Freemium</option>
            <option value='Premium'>Premium</option>
          </select>
          <button>Submit</button>
        </section>
      </main>
    </TemplateBase>
  )
}

export default SubmissionForm
