import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
    // export const stockSwiper = (() => new Swiper(".stock-swiper", {
    //     slidesPerView: 2,
    //     // slidesPerGroup: 2,
    //     spaceBetween: 30,
    //     centeredSlides: true,
    //     loop: true,
    //     // lazyPreloadPrevNext: true,
    //     autoplay: {
    //       delay: 3500,
    //       disableOnInteraction: false
    //     },
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true
    //     },
    //     navigation: {
    //       nextEl: ".fa-arrow-right",
    //       prevEl: ".fa-arrow-left",
    //     }
    // }));
    export default function StockSwiper () {
    //   const progressCircle = useRef(null);
    //   const progressContent = useRef(null);
    //   const onAutoplayTimeLeft = (s, time, progress) => {
    //     progressCircle.current.style.setProperty('--progress', 1 - progress);
    //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    //   }
      return (
        <>
        <div className="swiper-navigate">
        <div className="fa-solid fa-arrow-left"></div>
        <div className="fa-solid fa-arrow-right"></div>
    </div>
        <Swiper
            slidesPerView = {2}
            slidesPerGroup={1}
            spaceBetween = {30}
            centeredSlides = {true}
            loop = {true}
            autoplay = {{
            delay: 3500,
            disableOnInteraction: true
            }}
            pagination = {{
            el: ".swiper-pagination",
            clickable: true
            }}
            navigation = {{
            nextEl: ".fa-arrow-right",
            prevEl: ".fa-arrow-left",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            // onAutoplayTimeLeft={onAutoplayTimeLeft}
            className='stock-swiper'>
            {/* <section className="swiper stock-swiper pb-5"> */}
                {/* <h2 className="text-center pt-5 pb-3">Акции</h2> */}
                <div className="swiper-wrapper">
                    <SwiperSlide><img src="https://api.lorem.space/image/game?w=500&h=400" loading="lazy" alt="stock 1"/>
                        <div className="swiper-description">
                            <div className="swiper-percent">Фантастическая распродажа  до -50%</div>
                            <div className="swiper-dates">только с 1 февраля по 5 февраля</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="https://api.lorem.space/image/game?w=500&h=400&a=2" loading="lazy" alt="stock 2"/>
                        <div className="swiper-description">
                            <div className="swiper-percent">Фантастическая распродажа  до -50%</div>
                            <div className="swiper-dates">только с 1 февраля по 5 февраля</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src="https://api.lorem.space/image/game?w=500&h=400&a=3" loading="lazy" alt="stock 3"/>
                        <div className="swiper-description">
                            <div className="swiper-percent">Фантастическая распродажа  до -50%</div>
                            <div className="swiper-dates">только с 1 февраля по 5 февраля</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src="https://api.lorem.space/image/game?w=500&h=400&a=4" loading="lazy" alt="stock 4"/>
                        <div className="swiper-description">
                            <div className="swiper-percent">Фантастическая распродажа  до -50%</div>
                            <div className="swiper-dates">только с 1 февраля по 5 февраля</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src="https://api.lorem.space/image/game?w=500&h=400&a=5" loading="lazy" alt="stock 5"/>
                        <div className="swiper-description">
                            <div className="swiper-percent">Фантастическая распродажа  до -50%</div>
                            <div className="swiper-dates">только с 1 февраля по 5 февраля</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src="https://api.lorem.space/image/game?w=500&h=400&a=6" loading="lazy" alt="stock 6"/>
                        <div className="swiper-description">
                            <div className="swiper-percent">Фантастическая распродажа  до -50%</div>
                            <div className="swiper-dates">только с 1 февраля по 5 февраля</div>
                        </div>
                    </SwiperSlide>
                </div>
                <div className="swiper-pagination"></div>
       
            {/* </section> */}
            {/* <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div> */}
        </Swiper>
        </>
      )
    }
  //   export const rewiewSwiper = (() => new Swiper(".review-swiper", {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //     loop: true,
  //     autoHeight: true,
  //     autoplay: {
  //       delay: 3500,
  //       disableOnInteraction: false
  //     },
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true
  //     },
  //     navigation: {
  //       nextEl: ".fa-arrow-right",
  //       prevEl: ".fa-arrow-left",
  //     }
  // }));