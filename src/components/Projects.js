'use client'
import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import Link from 'next/link';
const ProjectCard = ({ title, description, imageUrl, url }) => {
    return (
        <Link href={url} style={{ textDecoration: 'none' }}> 
            <Card sx={{
                height: '600px',
                mx: { xs: 1, md: 5 },
                my: 10,
                boxShadow: 5,
                borderRadius: 3,
                overflow: 'hidden',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.05)',
                },
            }}>
                <CardMedia
                    component="img"
                    height="300" 
                    image={imageUrl}
                    alt={title}
                    sx={{
                        filter: 'brightness(0.85)',
                        transition: 'filter 0.3s ease-in-out',
                        '&:hover': {
                            filter: 'brightness(1)',
                        },
                    }}
                />
                <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 'bold',
                                    mb: 2,
                                    color: 'primary.main',
                                }}
                            >
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: 'text.secondary',
                                    lineHeight: 1.6,
                                }}
                            >
                                {description}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Link>
    );
};


export default function Projects() {
  
    return (
        <Box sx={{ flexGrow: 1, mx: { xs: 2, sm: 30 } }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box>
                        <ProjectCard
                            title="2 Factor Authentication"
                            description="Made a backend authentication system using Spring Security, Spring Mail, and Spring Boot. The system authenticates using a username and password and then generates an OTP. Access is only allowed if both the password and OTP validations are successful."
                            imageUrl="twofactor.jpg"
                            url="https://github.com/Tom24090119/TwoFactorAuthentication"
                        />
                    </Box>
                    <Box>
                        <ProjectCard
                            title="Email Verification"
                            description="Made a Backend service to verify the user’s registered email-id using Spring Mail, Spring Data JPA and MYSQL Database. System will only register the account if it doesn’t exist. Once account is registered, system will send a verification link to the users email-ID. Users are able to login only if there email-ID is verified."
                            imageUrl="emailveri.jpg"
                            url="https://github.com/Tom24090119/Email-Verification"
                        />
                    </Box>
                    <Box>
                        <ProjectCard
                            title="JWT Authorization"
                            description="Using Spring Boot and Spring Security, made a stateless application in which User is given a token a after successful authentication "
                            imageUrl="jwt.png"
                            url="https://github.com/Tom24090119/JWT-In-Action"
                        />
                    </Box>
                    <Box>
                        <ProjectCard
                            title="Institution Management"
                            description="With Spring Boot and Spring Data JPA with postgres as Database, created an management system in which students can enrol in specific courses and get books"
                            imageUrl="springboot.png"
                            url="https://github.com/Tom24090119/SpringDataJPA"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <ProjectCard
                            title="News App"
                            description="Used News API, fetched news and displayed news using REACT also used react-routers"
                            imageUrl="news.jpg"
                            url="https://github.com/Tom24090119/News-Channel-React-Basic"
                        />
                    </Box>
                    <Box>
                        <ProjectCard
                            title="Hotel Reservation"
                            description="Using core Java concepts, made a prototype of hotel reservation system, where users can make , cancel or change a reservation "
                            imageUrl="hotel.jpg"
                            url="https://github.com/Tom24090119/Hotel-Reservations"
                        />
                    </Box>
                    <Box>
                        <ProjectCard
                            title="Sports Playbook"
                            description="As part of Human-Computer Group project, we as a group create a protoype of sports playbook. Users can view library of different sports and have ability of creating one of their own"
                            imageUrl="sports.jpg"
                            url="https://github.com/ZacharyDeGraeve/comp3020ms3"
                        />
                    </Box>
                    <Box>
                        <ProjectCard
                            title="Chess Game"
                            description="This GUI game was created as part of course assignment using Java. User can play a full game with a proper chess board."
                            imageUrl="chess.png"
                            url="https://github.com/Tom24090119/TwoFactorAuthentication"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
