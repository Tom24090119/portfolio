'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download'; 

export default function Introduction() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} sx={{ mt: 5 }}>
                    <Box
                        component="img"
                        src="image.png" 
                        alt="Description of the image"
                        sx={{ maxWidth: '80%', height: 'auto', mt: 2, ml: { xs: 0, sm: 10 } }}
                    />
                </Grid>
                <Grid item xs={12} sm={8} sx={{ mt: 5 }}>
                    <Box sx={{ mx: { xs: 2, sm: 20 } }}>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                mt: 2,
                                display: 'flex',
                                alignItems: 'center',
                                bgcolor: '#1976d2',
                                '&:hover': { bgcolor: '#1565c0' },
                                height: 50, 
                                width: 300,  
                            }}
                            href="/Aaryaman-Resume.pdf" 
                            download
                        >
                            <DownloadIcon sx={{ mr: 1 }} />
                            Download Resume
                        </Button>

                        <Typography variant='h2' sx={{ color: 'white', mb: 4 }}>
                            I am a Software Developer
                        </Typography>
                        <Typography variant='h3' sx={{ color: 'white', mb: 4 }}>
                            My goal is to become a skilled software developer specializing in web-based backend applications.
                        </Typography>
                        <Typography variant='h3' sx={{ color: 'white', mb: 4 }}>
                            I am particularly enthusiastic about Java programming, leveraging its versatility and robustness to create scalable and efficient solutions.
                        </Typography>
                        <Typography variant='h5' sx={{ color: 'white', mb: 4 }}>
                            My journey in Computer Science has equipped me with a solid foundation in algorithms, data structures, and software design principles, which I continuously apply to my projects.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
