import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const SubMenu = () => {
    return (
        <div className="subMenu">
            <div className="subMenuPrompt">
                <FontAwesomeIcon icon={faUserCircle} size="3x" />
                <p>How can we help?</p>
            </div>
            <div className="subMenuLinks">
                <a href="#">I own a business.</a>
                <a href="#">I manage or work on a team.</a>
                <a href="#">I'm here to learn.</a>
            </div>
        </div>
    )
}

export default SubMenu
