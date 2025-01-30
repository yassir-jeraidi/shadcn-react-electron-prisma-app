import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Navbar(): React.JSX.Element {
  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">Electron.js</span>
        </h1>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            {landings.map((landing) => (
              <li key={landing.id}>
                <Link to={landing.route} className="block py-2">
                  {landing.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

type Landing = {
  id: string
  title: string
  route: string
}

const landings: Landing[] = [
  {
    id: nanoid(),
    title: 'Users',
    route: '/'
  },
  {
    id: nanoid(),
    title: 'Posts',
    route: '/posts'
  }
]
