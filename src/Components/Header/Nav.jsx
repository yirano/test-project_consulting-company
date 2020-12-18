import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiedPiperSquare } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        if (window.innerWidth > 999 || document.documentElement.width > 999) {
            setShowMenu(true)
        }
    }, [])
    window.addEventListener('resize', () => {
        if (window.innerWidth > 999 || document.documentElement.width > 999) {
            setShowMenu(true)
        }
    })

    return (
        <div className="nav">
            <div className="logoMenuIcon">
                <div className="logo">
                    <FontAwesomeIcon icon={faPiedPiperSquare} size="4x" />
                    <div className="companyName">
                        <h4>Pretend Company</h4>
                        <p>Consulting Group</p>
                    </div>
                </div>
                <div className="menuIcon" onClick={() => setShowMenu(!showMenu)}>Menu</div>
            </div>

            <div className={showMenu ? "menu " : "menu hideMenu"}>
                <div className="menuLinks">
                    <a href="#">Expertise</a>
                    <a href="#">Events</a>
                    <a href="#">About Us</a>
                    <a href="#">Connect</a>
                    <a href="#">Customer Stories</a>
                </div>
                <div className="menuActions">
                    <button>Let's Talk</button>
                    <div className="search">
                        <FontAwesomeIcon icon={faSearch} size="lg" />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Nav
