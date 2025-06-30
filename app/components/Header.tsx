import React from 'react'
import {GithubIcon, CheckCheck } from 'lucide-react'
import Github from './Github'
import localFont from 'next/font/local'
/*Fonts not working only*/
const Header = () => {
  return (
    <main>
        <div className='text-4xl text-gray-950 bg-green-400 font-semibold flex my-3 '>
            <div className='${BitFont} p-5'> 
                ToDo App 
            </div>
            <div className='my-5 '>
                <CheckCheck size={40}/>
                
            </div>  
        </div>
        <div>
            <Github />
        </div>
    </main>
  )
}

export default Header