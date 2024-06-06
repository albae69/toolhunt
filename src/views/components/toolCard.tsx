import { ITool } from '../../types/entity'

const ToolCard = ({
  id,
  name,
  description,
  image,
  visits,
  verified,
  category,
}: ITool) => {
  return (
    <main class='relative border-2 border-slate-900 hover:bg-slate-800 bg-slate-950 rounded-xl overflow-hidden transition duration-200'>
      <div class='h-20 bg-slate-900/50 border-b border-slate-800' />
      {image != null ? (
        <img
          src={`/public/images/${id}/${image}`}
          alt='tool image'
          class='rounded-lg ml-6 -mt-10'
          height={80}
          width={80}
        />
      ) : (
        <div class='bg-slate-400 h-16 w-16 rounded-lg ml-6 -mt-10' />
      )}
      <div class='p-6 space-y-2'>
        <div class='flex gap-2 items-center'>
          <a href={`tools/${id}`}>
            <h3>{name}</h3>
          </a>
          {verified === 1 && (
            <div class='text-blue-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1.5em'
                height='1.5em'
                viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M9.592 3.2a5.727 5.727 0 0 1-.495.399c-.298.2-.633.338-.985.408c-.153.03-.313.043-.632.068c-.801.064-1.202.096-1.536.214a2.713 2.713 0 0 0-1.655 1.655c-.118.334-.15.735-.214 1.536a5.707 5.707 0 0 1-.068.632c-.07.352-.208.687-.408.985c-.087.13-.191.252-.399.495c-.521.612-.782.918-.935 1.238c-.353.74-.353 1.6 0 2.34c.153.32.414.626.935 1.238c.208.243.312.365.399.495c.2.298.338.633.408.985c.03.153.043.313.068.632c.064.801.096 1.202.214 1.536a2.713 2.713 0 0 0 1.655 1.655c.334.118.735.15 1.536.214c.319.025.479.038.632.068c.352.07.687.209.985.408c.13.087.252.191.495.399c.612.521.918.782 1.238.935c.74.353 1.6.353 2.34 0c.32-.153.626-.414 1.238-.935c.243-.208.365-.312.495-.399c.298-.2.633-.338.985-.408c.153-.03.313-.043.632-.068c.801-.064 1.202-.096 1.536-.214a2.713 2.713 0 0 0 1.655-1.655c.118-.334.15-.735.214-1.536c.025-.319.038-.479.068-.632c.07-.352.209-.687.408-.985c.087-.13.191-.252.399-.495c.521-.612.782-.918.935-1.238c.353-.74.353-1.6 0-2.34c-.153-.32-.414-.626-.935-1.238a5.574 5.574 0 0 1-.399-.495a2.713 2.713 0 0 1-.408-.985a5.72 5.72 0 0 1-.068-.632c-.064-.801-.096-1.202-.214-1.536a2.713 2.713 0 0 0-1.655-1.655c-.334-.118-.735-.15-1.536-.214a5.707 5.707 0 0 1-.632-.068a2.713 2.713 0 0 1-.985-.408a5.73 5.73 0 0 1-.495-.399c-.612-.521-.918-.782-1.238-.935a2.713 2.713 0 0 0-2.34 0c-.32.153-.626.414-1.238.935'
                  opacity='.5'></path>
                <path
                  fill='currentColor'
                  d='M16.374 9.863a.814.814 0 0 0-1.151-1.151l-4.85 4.85l-1.595-1.595a.814.814 0 0 0-1.151 1.151l2.17 2.17a.814.814 0 0 0 1.15 0z'></path>
              </svg>
            </div>
          )}
        </div>
        <p class='text-sm'>{description}</p>
        <div class='absolute right-2 top-2 flex gap-2'>
          <p class='text-sm'>{visits} visits</p>
          <p class='bg-orange-700 text-orange-300 text-xs font-medium rounded px-2 py-1'>
            {category}
          </p>
        </div>
      </div>
    </main>
  )
}

export default ToolCard
