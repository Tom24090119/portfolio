'use client'
import { Box } from "@mui/material"
import Navbar from "./Appbar";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";

export default function MainSections() {
    const handleScroll = (id) => () => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <Box>
            <Navbar onNavigate={handleScroll} />
            <Box id="introduction" sx={{ minHeight: '80vh', bgcolor: '#333' }}>
                <Introduction />
            </Box>
            <Box id="skills" sx={{ minHeight: '80vh', bgcolor: '#000' }}>
                <Skills />
            </Box>
            <Box id="projects" sx={{ minHeight: '100vh', bgcolor: '#212121' }}>
                <Projects />
            </Box>
            <Box id="contact" sx={{ minHeight: '80vh', bgcolor: '#333' }}>
                <Contact />
            </Box>
        </Box>
    )
}