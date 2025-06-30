'use client';

import React from 'react'
import {GithubIcon} from 'lucide-react'

const Github = () => {
  return (
    <div className='absolute top-6 right-5 text-gray-950' >
            <a href='https://github.com/modestassumption' target='_blank' >
                <GithubIcon size={40}/>
                <p>GitHub</p>
            </a>     
    </div>
  )
}

export default Github
