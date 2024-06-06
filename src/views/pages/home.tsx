import TemplateBase from '../templates/templateBase'

const Home = () => {
  return (
    <TemplateBase>
      <main class='space-y-12'>
        <header class='flex justify-between items-center'>
          <a href='/'>toolhunt.</a>
          <a href='/tools/submissions'>
            <button>Submit tools</button>
          </a>
        </header>
        <section class='flex flex-col items-center justify-center gap-6'>
          <div class='px-4 py-1 rounded-full text-sm bg-slate-200 text-slate-950 border border-slate-800 font-medium tracking-tight'>
            Introducting Toolhunt
          </div>
          <h1 class='lg:px-32 text-center'>
            Discover the beneficial tools for your development
          </h1>
          <p>High quality devtools and resources that helps you ship faster</p>
          <input
            name='q'
            placeholder='search tools...'
            class='w-72'
            hx-post='/tools'
            hx-target='#tools'
            hx-trigger='keyup delay:1000ms'
            hx-swap='transition:true'
          />
        </section>
        <section
          id='tools'
          class='grid grid-cols-1 lg:grid-cols-3 gap-8'
          hx-post='/tools'
          hx-trigger='load'
          hx-swap='transition:true'></section>
      </main>
    </TemplateBase>
  )
}

export default Home
