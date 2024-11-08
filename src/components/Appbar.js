'use client';
import * as React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';

function Navbar({ onNavigate }) {
    return (
        <Box sx={{
            flexGrow: 1,
            height: { xs: 'auto', md: '120px' },
            position: 'sticky',  
            top: 0,             
            zIndex: 1000,        
        }}>
            <Grid container spacing={0} sx={{ height: '100%' }}>
                <Grid item xs={12} md={4} sx={{ height: '100%' }}>
                    <Box sx={{
                        flexGrow: 1,
                        bgcolor: '#000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        px: 10,
                        height: '100%',
                        color: 'white'
                    }}>
                        <Typography variant="h4">
                            Aaryaman
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={8} sx={{ height: '100%' }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'stretch', 
                        justifyContent: 'space-between',
                        bgcolor: '#333',
                        height: '100%',
                        px: 1 
                    }}>
                        <Button
                            onClick={onNavigate('introduction')}
                            sx={{
                                color: '#bdbdbd',
                                ':hover': {
                                    color: '#18ffff',
                                },
                                height: { xs: '100%', md: 'auto' }, 
                                flex: 1,
                                mb: { xs: 1, md: 0 }, 
                            }}
                        >
                            <Typography>
                                introduction
                            </Typography>
                        </Button>
                        <Button
                            onClick={onNavigate('skills')}
                            sx={{
                                color: '#bdbdbd',
                                ':hover': {
                                    color: '#18ffff',
                                },
                                height: { xs: '100%', md: 'auto' }, 
                                flex: 1,
                                mb: { xs: 1, md: 0 }, 
                            }}
                        >
                            <Typography>
                                skills
                            </Typography>
                        </Button>
                        <Button
                            onClick={onNavigate('projects')}
                            sx={{
                                color: '#bdbdbd',
                                ':hover': {
                                    color: '#18ffff',
                                },
                                height: { xs: '100%', md: 'auto' }, 
                                flex: 1,
                                mb: { xs: 1, md: 0 }, 
                            }}
                        >
                            <Typography>
                                projects
                            </Typography>
                        </Button>
                        <Button
                            onClick={onNavigate('contact')}
                            sx={{
                                color: 'white',
                                backgroundColor: '#5221e6',
                                ':hover': {
                                    backgroundColor: '#7e57c2',
                                },
                                height: { xs: '100%', md: 'auto' }, 
                                flex: 1,
                                mb: { xs: 1, md: 0 },
                            }}
                        >
                            <Typography>
                                Contact
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Navbar;
