import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ReviewPhoto from "./icons/mainReview.svg"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export function StockSwiper() {
//     const getData = async () => {
//         let response = await fetch('https://loremflickr.com/500/400');
//             let json = await response.json();
//             console.log(json)
// }
const slidesCount = Array.from(Array(6).keys());

    return (
        <>
            <div className="swiper-navigate">
                <a href='/' className="fa-solid fa-arrow-left"
                    target="_blank" rel="noopener noreferrer"> </a>
                <a href='/' className="fa-solid fa-arrow-right"
                    target="_blank" rel="noopener noreferrer"> </a>
            </div>
            <Swiper
                slidesPerView={2}
                slidesPerGroup={1}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false
                }}
                pagination={{
                    el: ".swiper-pagination",
                    clickable: true
                }}
                navigation={{
                    nextEl: ".fa-arrow-right",
                    prevEl: ".fa-arrow-left",
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className='stock-swiper'>
                <div className="swiper-wrapper">
                    {slidesCount.map((i) => {
                        return (<SwiperSlide key={i+2}>
                            <img src={`https://loremflickr.com/500/400?a${i}=${i}`} loading="lazy" alt={`stock ${i+1}`} />
                            <div className="swiper-description">
                                <div className="swiper-percent">Фантастическая распродажа  до -50%</div>
                                <div className="swiper-dates">только с 1 февраля по 5 февраля</div>
                            </div>
                        </SwiperSlide>)
                    })}
                </div>
                <div className="swiper-pagination"></div>
            </Swiper>
        </>
    )
}
export function ReviewSwiper() {
    const slidesCount = Array.from(Array(5).keys());
    return (
        <>
            <div className="swiper-navigate">
                <a href='/' className="fa-solid fa-arrow-left"
                    target="_blank" rel="noopener noreferrer"> </a>
                <a href='/' className="fa-solid fa-arrow-right"
                    target="_blank" rel="noopener noreferrer"> </a>
            </div>
            <Swiper
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false
                }}
                pagination={{
                    el: ".swiper-pagination",
                    clickable: true
                }}
                navigation={{
                    nextEl: ".fa-arrow-right",
                    prevEl: ".fa-arrow-left",
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className='stock-swiper'>
                <div className="swiper-wrapper">
                    {slidesCount.map((i) => {
                        return (<SwiperSlide className="swiper-slide" key={i}><img src={ReviewPhoto} loading="lazy" alt={`review ${i+1}`} />

                        </SwiperSlide>)
                    })}
                </div>
                <div className="swiper-pagination"></div>
            </Swiper>
        </>
    )
}