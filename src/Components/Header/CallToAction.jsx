import React, { useState, useEffect } from 'react'

const CallToAction = (props) => {
    const { cta } = props
    const msg = cta.message.split(/(?<=\,)/)

    return (
        <div className="cta">
            <div className="ctaMessage">
                {msg.map(m => <h1>{m}</h1>)}
            </div>
            <div className="ctaLinks">
                <a href={cta.button.url}>
                    <button>{cta.button.text}</button>
                </a>
                <p>{cta.second.text} <a href={cta.third.url}>{cta.third.text}</a></p>
            </div>
        </div>
    )
}

export default CallToAction
