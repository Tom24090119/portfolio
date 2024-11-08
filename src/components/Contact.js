'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Snackbar } from '@mui/material'; 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MuiAlert from '@mui/material/Alert';
import emailjs from '@emailjs/browser';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState('');
    const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const messageWithEmail = `${formData.message}\n\nFrom: ${formData.email}`;
        
        const emailData = {
            ...formData,
            message: messageWithEmail 
        };

        emailjs.send('service_jl6m6fb', 'template_lzwe27o', emailData, 'R2-gf8b6JnyPYYCDJ')
            .then((response) => {
                console.log('Email successfully sent!', response.status, response.text);
                setSnackbarMessage('Email sent successfully!');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                setFormData({ name: '', email: '', message: '' });
            }, (err) => {
                console.error('Failed to send email. Error: ', err);
                setSnackbarMessage('Failed to send email. Please try again.');
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
            });
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    return (
        <Box 
            sx={{ 
                flexGrow: 1, 
                mx: { xs: 2, sm: 20 }, // Responsive margins
                padding: { xs: 2, sm: 0 }, // Responsive padding
            }} 
            component="form" 
            onSubmit={sendEmail}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 20 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h1' color='white'>
                                Contact me
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h3' color='white'>
                                Phone:
                            </Typography>
                            <Typography variant='h3' color='white'>
                                (204) 963-3397
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h3' color='white'>
                                Email:
                            </Typography>
                            <Typography variant='h3' color='white'>
                                Aaryamaanpol15@gmail.com
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{ mt: 20 }}>
                            <TextField
                                id="name-input"
                                label="Name"
                                name="name"
                                variant="outlined"
                                fullWidth
                                value={formData.name}
                                onChange={handleChange}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: 'white',
                                    },
                                    '& .MuiInputBase-input': {
                                        color: 'white',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="email-input"
                                label="Email"
                                name="email"
                                variant="outlined"
                                fullWidth
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: 'white',
                                    },
                                    '& .MuiInputBase-input': {
                                        color: 'white',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="message-input"
                                label="Message"
                                name="message"
                                multiline
                                rows={10}
                                fullWidth
                                value={formData.message}
                                onChange={handleChange}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: 'white',
                                    },
                                    '& .MuiInputBase-input': {
                                        color: 'white',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant='contained' fullWidth sx={{ height: 50 }}>
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
}
