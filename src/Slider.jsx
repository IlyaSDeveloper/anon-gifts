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
                    {/* <SwiperSlide><img src="https://loremflickr.com/500/400" loading="lazy" alt="stock 1" />
                        <div className="swiper-description">
                            <div className="swiper-percent">Фантастическая распродажа  до -50%</div>
                            <div className="swiper-dates">только с 1 февраля по 5 февраля</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="https://loremflickr.com/500/400?a=2" loading="lazy" alt="stock 2" />
                        <div className="swiper-description">
                            <div className="swiper-percent">Фантастическая распродажа  до -50%</div>
                            <div className="swiper-dates">только с 1 февраля по 5 февраля</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="https://loremflickr.com/500/400?a=3" loading="lazy" alt="stock 3" />
                        <div className="swiper-description">
                            <div className="swiper-percent">Фантастическая распродажа  до -50%</div>
                            <div className="swiper-dates">только с 1 февраля по 5 февраля</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="https://loremflickr.com/500/400?a=4" loading="lazy" alt="stock 4" />
                        <div className="swiper-description">
                            <div className="swiper-percent">Фантастическая распродажа  до -50%</div>
                            <div className="swiper-dates">только с 1 февраля по 5 февраля</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="https://loremflickr.com/500/400?a=5" loading="lazy" alt="stock 5" />
                        <div className="swiper-description">
                            <div className="swiper-percent">Фантастическая распродажа  до -50%</div>
                            <div className="swiper-dates">только с 1 февраля по 5 февраля</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="https://loremflickr.com/500/400?a=6" loading="lazy" alt="stock 6" />
                        <div className="swiper-description">
                            <div className="swiper-percent">Фантастическая распродажа  до -50%</div>
                            <div className="swiper-dates">только с 1 февраля по 5 февраля</div>
                        </div>
                    </SwiperSlide> */}
                </div>
                <div className="swiper-pagination"></div>
            </Swiper>
        </>
    )
}
export function ReviewSwiper() {

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
                    <SwiperSlide className="swiper-slide"><img src={ReviewPhoto} loading="lazy" alt="review 1" />

                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={ReviewPhoto} loading="lazy" alt="review 2" />

                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={ReviewPhoto} loading="lazy" alt="review 3" />

                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={ReviewPhoto} loading="lazy" alt="review 4" />

                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={ReviewPhoto} loading="lazy" alt="review 5" />

                    </SwiperSlide>
                </div>
                <div className="swiper-pagination"></div>
            </Swiper>
        </>
    )
}