import { Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';

export default function MenWomen() {
    return(
        <div id="men_women">
            <h2>LIGHTER & FASTER</h2>

            <div>
                <button className="active">MEN</button>
                <button>WOMEN</button>
            </div>

            <Swiper slidesPerView={4.5} modules={[FreeMode]} spaceBetween={12}  slidesOffsetBefore={90} >
                <SwiperSlide className="wear_slide">
                    <Link to="/" className="wear_link">
                        <img src={`${process.env.PUBLIC_URL}/img/wear_1.png`} alt=""/>
                        <p>맨즈 사이버쿨 숏 슬리브 셔츠</p>
                        <span>49,000원</span>
                    </Link> 
                </SwiperSlide>

                <SwiperSlide className="wear_slide">
                    <Link to="/" className="wear_link">
                        <img src={`${process.env.PUBLIC_URL}/img/wear_2.png`} alt="맨즈"/>
                        <p>맨즈 사이버쿨 숏 슬리브 셔츠</p>
                        <span>49,000원</span>
                    </Link> 
                </SwiperSlide>

                <SwiperSlide className="wear_slide">
                    <Link to="/" className="wear_link">
                        <img src={`${process.env.PUBLIC_URL}/img/wear_3.png`} alt="맨즈"/>
                        <p>맨즈 사이버쿨 숏 슬리브 셔츠</p>
                        <span>49,000원</span>
                    </Link> 
                </SwiperSlide>

                <SwiperSlide className="wear_slide">
                    <Link to="/" className="wear_link">
                        <img src={`${process.env.PUBLIC_URL}/img/wear_4.png`} alt="맨즈"/>
                        <p>맨즈 사이버쿨 숏 슬리브 셔츠</p>
                        <span>49,000원</span>
                    </Link> 
                </SwiperSlide>

                <SwiperSlide className="wear_slide">
                    <Link to="/" className="wear_link">
                        <img src={`${process.env.PUBLIC_URL}/img/wear_5.png`} alt="맨즈"/>
                        <p>맨즈 사이버쿨 숏 슬리브 셔츠</p>
                        <span>49,000원</span>
                    </Link> 
                </SwiperSlide>

                <SwiperSlide className="wear_slide">
                    <Link to="/" className="wear_link">
                        <img src={`${process.env.PUBLIC_URL}/img/wear_6.png`} alt="맨즈"/>
                        <p>맨즈 사이버쿨 숏 슬리브 셔츠</p>
                        <span>49,000원</span>
                    </Link> 
                </SwiperSlide>

                <SwiperSlide className="wear_slide">
                    <Link to="/" className="wear_link">
                        <img src={`${process.env.PUBLIC_URL}/img/wear_7.png`} alt="맨즈"/>
                        <p>맨즈 사이버쿨 숏 슬리브 셔츠</p>
                        <span>49,000원</span>
                    </Link> 
                </SwiperSlide>
            </Swiper>
        </div>
    )
}