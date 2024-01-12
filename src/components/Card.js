import React from 'react'


export default function Card(props) {


    return (
        <>
            <div className="card text-bg-dark mt-5 me-5 text-decoration-none" style={{ width: "18rem" }}>
                <a href={props.link} className='text-decoration-none text-white'>
                    <img src={props.url} className="card-img-top" alt="hello" />
                    <div className="card-body">
                        <div className='container d-flex justify-content-center'>
                            <p className='fs-2 '>{props.heading}</p>
                        </div>
                        <p className="card-text">{props.desc}</p>
                    </div>
                </a>

            </div>
        </>
    )
}