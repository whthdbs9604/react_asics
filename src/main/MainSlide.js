import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function MainSlide() {

    return(
        <div id="main_slider">
                <Swiper slidesPerView={1} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }} modules={[Autoplay]} className="swiper_main">
                    <SwiperSlide className="swiper-slide">
                        <Link to="/">
                            <img src={`${process.env.PUBLIC_URL}/img/main_slide_1.png`} alt="메인 슬라이드" />
                            <div className="slide_title">
                                    <p>젤 레볼루션 5</p>
                                    <h3>GEL-RESOLUTION™ 5</h3>
                                    <p>테니스 헤리티지를 재해석한 라이프 스타일 스니커즈</p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <Link to="/">
                            <img src={`${process.env.PUBLIC_URL}/img/main_slide_2.png`} alt="메인 슬라이드" />
                            <div className="slide_title">
                                    <p>젤 벤쳐 6</p>
                                    <h3>GEL-VENTURE™ 5</h3>
                                    <p>테니스 헤리티지를 재해석한 라이프 스타일 스니커즈</p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <Link to="/">
                            <img src={`${process.env.PUBLIC_URL}/img/main_slide_3.png`} alt="메인 슬라이드" />
                            <div className="slide_title">
                                    <p>젤 님버스 10.1</p>
                                    <h3>GEL-NIMBUS™ 10.1</h3>
                                    <p>테니스 헤리티지를 재해석한 라이프 스타일 스니커즈</p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <Link to="/">
                            <img src={`${process.env.PUBLIC_URL}/img/main_slide_4.png`} alt="메인 슬라이드" />
                            <div className="slide_title">
                                    <p>젤 레볼루션 5</p>
                                    <h3>GEL-RESOLUTION™ 5</h3>
                                    <p>테니스 헤리티지를 재해석한 라이프 스타일 스니커즈</p>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <Link to="/">
                            <img src={`${process.env.PUBLIC_URL}/img/main_slide_5.png`} alt="메인 슬라이드" />
                            <div className="slide_title">
                                    <p>젤 님버스 28</p>
                                    <h3>GEL-NIMBUS™ 28</h3>
                                    <p>테니스 헤리티지를 재해석한 라이프 스타일 스니커즈</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
        </div>
    )

}