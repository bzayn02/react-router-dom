import React from 'react'
import { TopNavbar } from './header/Navbar'
import { Footer } from './footer/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <TopNavbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
