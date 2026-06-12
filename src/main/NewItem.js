import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';

export default function MainSlide() {
    return(
        <div id="new_item" data-aos="fade-up">
            <h2>NEW ARRIVALS</h2>

            <Swiper slidesPerView={4.5} modules={[FreeMode]} className="swiper_newItem">
                <SwiperSlide className="slide_newItem">
                    <Link to="/" className="item_link">
                        <img src={`${process.env.PUBLIC_URL}/img/new_item_1.png`} alt="신발"/>
                        <span>GT 2160</span>
                        <p>149,000원</p>
                    </Link> 
                </SwiperSlide>

                <SwiperSlide className="slide_newItem">
                    <Link to="/" className="item_link">
                        <img src={`${process.env.PUBLIC_URL}/img/new_item_2.png`} alt="신발"/>
                        <span>GT 2160</span>
                        <p>149,000원</p>
                    </Link> 
                </SwiperSlide>

                <SwiperSlide className="slide_newItem">
                    <Link to="/" className="item_link">
                        <img src={`${process.env.PUBLIC_URL}/img/new_item_3.png`} alt="신발"/>
                        <span>젤 레졸루션 5</span>
                        <p>199,000원</p>
                    </Link> 
                </SwiperSlide>

                <SwiperSlide className="slide_newItem">
                    <Link to="/" className="item_link">
                        <img src={`${process.env.PUBLIC_URL}/img/new_item_4.png`} alt="신발"/>
                        <span>젤 1130</span>
                        <p>119,000원</p>
                    </Link> 
                </SwiperSlide>

                <SwiperSlide className="slide_newItem">
                    <Link to="/" className="item_link">
                        <img src={`${process.env.PUBLIC_URL}/img/new_item_5.png`} alt="신발"/>
                        <span>젤 레졸루션 5</span>
                        <p>199,000원</p>
                    </Link> 
                </SwiperSlide>

                <SwiperSlide className="slide_newItem">
                    <Link to="/" className="item_link">
                        <img src={`${process.env.PUBLIC_URL}/img/new_item_2.png`} alt="신발"/>
                        <span>GT 2160</span>
                        <p>149,000원</p>
                    </Link> 
                </SwiperSlide>

                <SwiperSlide className="slide_newItem">
                    <Link to="/" className="item_link">
                        <img src={`${process.env.PUBLIC_URL}/img/new_item_3.png`} alt="신발"/>
                        <span>젤 레졸루션 5</span>
                        <p>199,000원</p>
                    </Link> 
                </SwiperSlide>

                <SwiperSlide className="slide_newItem">
                    <Link to="/" className="item_link">
                        <img src={`${process.env.PUBLIC_URL}/img/new_item_4.png`} alt="신발"/>
                        <span>젤 1130</span>
                        <p>119,000원</p>
                    </Link> 
                </SwiperSlide>

                <SwiperSlide className="slide_newItem">
                    <Link to="/" className="item_link">
                        <img src={`${process.env.PUBLIC_URL}/img/new_item_5.png`} alt="신발"/>
                        <span>젤 레졸루션 5</span>
                        <p>199,000원</p>
                    </Link> 
                </SwiperSlide>
            </Swiper>

            <Link to="/" className="more_btn">더보기</Link>

            <Link to="/" className="item_banner"><img src={`${process.env.PUBLIC_URL}/img/banner_1.png`} alt="배너 이미지" /></Link>
      </div>
    )
}