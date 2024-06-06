import ToolCard from '../components/toolCard'
import TemplateBase from '../templates/templateBase'

const Home = () => {
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
          <div>Introducting Toolhunt</div>
          <h1 class='lg:px-32 text-center'>
            Discover the beneficial tools for your development
          </h1>
          <p>High quality devtools and resources that helps you ship faster</p>
          <input placeholder='search tools...' class='w-72' />
        </section>
        <section class='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <ToolCard />
          <ToolCard />
          <ToolCard />
          <ToolCard />
        </section>
      </main>
    </TemplateBase>
  )
}

export default Home
