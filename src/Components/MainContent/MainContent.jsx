import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from "./Card"

const MainContent = () => {
    const [mainData, setMainData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/main_content')
            .then(res => {
                setMainData(res.data)
            }).catch(err => console.dir(err))
    }, [])

    console.log('mainContent', mainData)
    return (
        <div className="mainContent">
            {mainData.map(item => <Card data={item} />)}
            {/* <Card />
            <Card />
            <Card /> */}
        </div>
    )
}

export default MainContent
