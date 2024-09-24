import React from 'react'
import Header from '../components/header/header'
import About from '../components/about/about'

import Skills from '../components/Skills/Skills'

function home() {
    return (
        <div className='container'>
          
            <div className='header'>
                <Header />
            </div>
            <div>
                <About />
            </div>
            <div>
                <Skills/>
            </div>
        </div>
    )
}

export default home
