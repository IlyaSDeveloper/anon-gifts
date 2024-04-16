import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ReviewPhoto from "./icons/mainReview.svg";

const createSlides = (count, contentRenderer) => {
  return [...Array(count)].map((_, i) => contentRenderer(i));
};

const CommonSwiper = ({ slidesCount, slidesPerView, className, contentRenderer }) => (
  <Swiper
    slidesPerView={slidesPerView}
    slidesPerGroup={1}
    spaceBetween={30}
    centeredSlides={true}
    loop={true}
    autoplay={{
      delay: 3500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className={className}
  >
    {createSlides(slidesCount, contentRenderer)}
    <div className="swiper-pagination" />
  </Swiper>
);

export function StockSwiper() {
  const slidesCount = 6;
  const contentRenderer = (i) => (
    <SwiperSlide key={i}>
      <img src={`https://loremflickr.com/500/400?a${i}=${i}`} loading="lazy" alt={`Stock item ${i + 1}`} />
      <div className="swiper-description">
        <div className="swiper-percent">Фантастическая распродажа до -50%</div>
        <div className="swiper-dates">только с 1 февраля по 5 февраля</div>
      </div>
    </SwiperSlide>
  );

  return (
    <>
      <CommonSwiper
        slidesCount={slidesCount}
        slidesPerView={2}
        className='stock-swiper'
        contentRenderer={contentRenderer}
      />
    </>
  );
}

export function ReviewSwiper() {
  const slidesCount = 5;
  const contentRenderer = (i) => (
    <SwiperSlide key={i}>
      <img src={ReviewPhoto} loading="lazy" alt={`Review ${i + 1}`} />
    </SwiperSlide>
  );

  return (
    <>
      <CommonSwiper
        slidesCount={slidesCount}
        slidesPerView={3}
        className='review-swiper'
        contentRenderer={contentRenderer}
      />
    </>
  );
}