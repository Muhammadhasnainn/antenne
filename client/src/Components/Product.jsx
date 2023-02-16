import React from 'react'
import productData from '../productData'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Product = () => {
    return (
        <div className='product-section py-3'>
            <div className="canvas">
                <div className="heading text-center">
                    <h1 className='py-4'>Dicono di noi</h1>
                    <p>Unisciti alle diverse aziende italiane che hanno già iniziato la loro trasformazione green grazie a Sunprime</p>
                    <div className="line mx-auto my-5"></div>
                </div>

                <div className="card-container d-flex">
                    <Swiper 
                    navigation={true}
                     slidesPerView = {3} 
                      modules={[Navigation]} 
                      breakpoints={{
                        // when window width is >= 640px
                        200: {
                          width: 640,
                          slidesPerView: 1,
                        },
                        700: {
                            width: 1200,
                            slidesPerView: 1.5,
                          },
                      }}
                    
                      className="mySwiper">
                        {productData.map((data) => {
                            return <SwiperSlide className='mx-4'>
                                <div className="Pcard">
                                    <div className="Pcard-content" style={{ height: data.height, width: data.width }}>
                                        <p className='py-5 px-3'>{data.description}</p>
                                    </div>

                                    <div className="Pdetails my-3">
                                        <h6>{data.name}</h6>
                                        <span>{data.tag}</span>
                                    </div>

                                </div>
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>

            </div>
        </div>
    )
}

export default Product