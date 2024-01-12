import React from 'react'
import image from '../images/Image.png'

export default function Image() {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center mt-5">
                <img
                    src={image}
                    className="img-fluid border rounded-circle float-end"
                    alt="hello"
                    style={{ width: '500px', height: '500px' }}
                />
            </div>
        </>
    )
}