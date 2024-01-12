import React from 'react'

const banner = {
    borderRadius : '25px',
    background: 'linear-gradient(135deg, #4d4d4d, #000000)'
}


export default function AboutMe(){
    return(
        <>
        <div className='container d-flex justify-content-centre mt-5'>
                <div className='container-fluid text-white' style={banner}>

                  <div className='container d-flex justify-content-center align-items-center border-bottom'>
                    <p className='fs-1 fw-bold'>
                        About Me 
                    </p>
                  </div>

                  <div className='container text-start'>
                        <ul className='ms-5'>
                            <li className='fs-3 mt-3'>
                                Third Year Computer Science Student at University Of Manitoba.
                            </li>

                            <li className='fs-3 mt-3'>
                                During my leisure time, I enjoy developing new web applications, refining my skill set, and exploring innovative ideas.
                            </li>
                            
                            <li className='fs-3 mt-3'>
                                I can effectively collaborate within team-oriented projects.
                            </li>

                            <li className='fs-3 mt-3'>
                                I have an inclination for engaging in volunteer activities and actively participating in hackathons.
                            </li>

                        </ul>
                        <p className='fs-3 mt-5'>
                            I am actively looking for opportunities in tech world On-site or Remote. 
                        </p>
                        <p className='fs-3'>
                            I am also willing to relocate if needed.
                        </p>
                  </div>
                </div>
            </div>
        </>
    )
}