import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'


const LayoutComponent = ({ children }) => {

    return (

        <div className='layout-component'>
            <Navigation />
            <div component='main' className='main-component-wrapper'>
                {children}
            </div>
            <Footer />
        </div>

    )
}

export default LayoutComponent