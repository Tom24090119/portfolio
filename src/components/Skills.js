import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import WebIcon from '@mui/icons-material/Web';
import TerminalIcon from '@mui/icons-material/Terminal';
import CloudIcon from '@mui/icons-material/Cloud';

function CarouselItem({ title, skills, image, icons }) {
    return (
        <Card
            sx={{
                position: 'relative',
                overflow: 'hidden',
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: 'white',
                    padding: 2,
                }}
            >
                <Typography variant="h2" sx={{ mb: 4 }}>
                    {title}
                </Typography>

                <List sx={{ color: 'white' }}>
                    {skills.map((skill, index) => (
                        <ListItem key={index}>
                            <ListItemIcon sx={{ color: 'white' }}>
                                {icons[index]}
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant="h3">
                                        {skill}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Card>
    );
}

function Skills() {
    const carouselItems = [
        {
            title: 'Frontend Skills', // Title for frontend
            skills: ['JavaScript', 'React', 'HTML', 'CSS'],
            image: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            icons: [<WebIcon />, <WebIcon />, <CodeIcon />, <CodeIcon />],
        },
        {
            title: 'Backend Skills', // Title for backend
            skills: ['Java', 'C++', 'Spring Boot', 'Spring Security', 'Spring Data JPA'],
            image: 'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            icons: [<CodeIcon />, <TerminalIcon />, <CodeIcon />, <SecurityIcon />, <StorageIcon />],
        },
        {
            title: 'Database Skills', // Title for database
            skills: ['SQL', 'MongoDB', 'MySQL', 'Neo4j'],
            image: 'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            icons: [<StorageIcon />, <StorageIcon />, <StorageIcon />, <StorageIcon />],
        },
        {
            title: 'DevOps Skills', // Title for devops
            skills: ['Docker'],
            image: 'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            icons: [<CloudIcon />],
        },
    ];

    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={2000}
            centerMode={false}
            containerClass="container-with-dots"
            draggable
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            responsive={{
                desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 1,
                },
                mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 1,
                },
                tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 1,
                },
            }}
            rewindWithAnimation
            swipeable
        >
            {carouselItems.map((item, index) => (
                <CarouselItem
                    key={index}
                    title={item.title}
                    image={item.image}
                    skills={item.skills}
                    icons={item.icons}
                />
            ))}
        </Carousel>
    );
}

export default Skills;
