import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1550547660-d9450f859349" className="d-block w-100" style={{ height: "600px", objectFit: "cover" }} alt="chicken-burger" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" className="d-block w-100" style={{ height: "600px", objectFit: "cover" }} alt="Food-dishes" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd" className="d-block w-100" style={{ height: "600px", objectFit: "cover" }} alt="burger" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
