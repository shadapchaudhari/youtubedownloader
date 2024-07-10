import React from 'react'

const Nav = () => {
  return (
    <>
      <section>
        <div className="Nav md:h-14 h-full md:flex justify-start bg-gray-300 uppercase">
          <ul className='md:flex md:space-x-10 md:p-4 md:ml-10 md:text-base text-xs'>
            <li><a href="">Home</a></li>
            <li className='md:mt-0 mt-2'><a href="">Tools</a></li>
            <li className='md:mt-0 mt-2'><a href="">FackChat</a></li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Nav