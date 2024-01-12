import React from 'react'
import Image from './Image'
import Description from './Description'
import Skills from './Skills'
import Project from './Projects'
import Contact from './Contact'

export default function Main() {
    return (
        <>
            <div className="container-fluid bg-black px-0">
                <div className='container-l mx-0 px-0'>
                    <Image></Image>
                    <Description></Description>
                    <Skills></Skills>
                    <Project></Project>
                    <Contact></Contact>
                </div>
            </div>
        </>
    )
}