import React from 'react'

export default function Contact() {
    return (
        <>
            <div className='container mt-5 text-white'>
                <div className='container d-flex justify-content-center border-bottom mb-5'>
                    <p className='fs-1 fw-bold text-white'> Contact Me</p>
                </div>

                <div className='container fs-3 mt-5'>
                    <form >
                        <div className="d-block mb-3">
                            <label htmlFor="name" className='d-block'>Your Name:</label>
                            <input type="text" className="form-control text-white" id="name" placeholder="Enter your Name"  style={{ textColor:'white',background:'black', width: '100%' }}/>
                        </div>

                        <div className=" d-block mb-3">
                            <label htmlFor="emailAddress" className='d-block'>Email Address :</label>
                            <input type='email' id='emailAddress' className='form-control text-white' placeholder="Enter your Email ID" style={{ background:'black', width: '100%' }} />
                        </div>

                        <div className='d-block mb-3'>
                            <label className='d-block' htmlFor='message'>Message : </label>
                            <textarea id='message' rows='4' cols='50' className='text-white fs-6' style={{ background:'black', width: '100%' }}></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
        </>
    )
}