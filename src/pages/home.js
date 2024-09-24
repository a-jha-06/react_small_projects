import React from 'react'
import Header from '../components/header/header'
import About from '../components/about/about'

function home() {
    return (
        <div className='container'>
            <div className='header'>
                <Header />
            </div>
            <div>
                <About />
            </div>
        </div>
    )
}

export default home
