import React from 'react'
import AboutMe from './AboutMe'


const style = {
    color : 'aqua',
    fontSize: '5vw'
}

export default function Description(){
    return (
        <>
            <div className='container-l mx-0 px-0 mt-5'>
                <h1 className = "fw-bold" style={style}>HI,</h1>
                <h1 className = "fw-bold" style={style}>I AM AARYAMAN 👋</h1>
            </div>
            <AboutMe></AboutMe>
        </>
    )

}