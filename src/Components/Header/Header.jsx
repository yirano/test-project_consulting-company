import React from 'react'
import CallToAction from "./CallToAction"
import Nav from "./Nav"
import SubMenu from "./SubMenu"

const Header = () => {
    return (
        <div className="header">
            <Nav />
            <CallToAction />
            <SubMenu />
        </div>
    )
}

export default Header
