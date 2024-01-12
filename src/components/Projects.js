import React from 'react'
import Card from './Card'

import jwt from '../images/JWT.png'
import spring from '../images/Spring.png'
import news from '../images/News.jpg'
import hotel from '../images/Hotel.jpg'
import sports from '../images/Sports.jpg'
import chess from '../images/Chess.png'

const jwtLink = "https://github.com/Tom24090119/JWT-In-Action.git"
const springLink = "https://github.com/Tom24090119/SpringDataJPA.git"
const newsLink = "https://github.com/Tom24090119/News-Channel-React-Basic.git"
const hotelLink = "https://github.com/Tom24090119/Hotel-Reservations.git"
const sportsLink = "https://github.com/ZacharyDeGraeve/comp3020ms3.git"

export default function Project(){


    
    return(
        <>
            <div className='container'>
                <div className='container'>
                    <div className='container border-bottom'>
                        <h1 className='fs-1 fw-bold text-white'>
                            Projects
                        </h1>
                    </div>
                    <div className='container d-flex justify-content-center flex-wrap p-0'>
                        <Card link={jwtLink} url ={jwt} heading = "JWT Authorization" desc = "Using Spring Boot and Spring Security, made a stateless application in which User is given a token a after successful authentication " ></Card>
                        <Card link={springLink} url ={spring} heading = "Institution Management" desc = "With Spring Boot and Spring Data JPA with postgres as Database, created an management system in which students can enrol in specific courses and get books" ></Card>
                        <Card link={newsLink} url ={news} heading = "News App " desc = "Used News API, fetched news and displayed news using REACT also used react-routers" ></Card>
                        <Card link={hotelLink} url ={hotel} heading = "Hotel Reservation" desc = "Using core Java concepts, made a prototype of hotel reservation system, where users can make , cancel or change a reservation " ></Card>
                        <Card link={sportsLink} url ={sports} heading = "Sports Playbook" desc = "As part of Human-Computer Group project, we as a group create a protoype of sports playbook. Users can view library of different sports and have ability of creating one of their own" ></Card>
                        <Card url ={chess} heading = "Chess Game" desc = "This GUI game was created as part of course assignment using Java. User can play a full game with a proper chess board." ></Card>
                    </div>
                </div>
            </div>
        </>
    )
}