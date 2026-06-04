import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';

export default function MainSlide() {
    return(
        <div id="style_magazine">
            <h2>STYLE MAGAZINE</h2>
            <div className="slider_container">
                <Swiper slidesPerView={3} spaceBetween={24} modules={[FreeMode]}  className="style_swiper_wrap">
                    <SwiperSlide className="style_swiper">
                        <Link to="/" className="style_link">
                            <img src={`${process.env.PUBLIC_URL}/img/magazine_1.png`} alt="스타일사진" />
                            <div className="style_hover_box">
                                <img src={`${process.env.PUBLIC_URL}/img/style_hover.png`} alt="신발" />
                                <div className="hover_title">
                                    <span>남여 공용 신발</span>
                                    <p>젤 키네틱 플루언트</p>
                                    <span className="color">색상 : CREAM / CREAM</span>
                                    <h3>229,000원</h3>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="style_swiper">
                        <Link to="/" className="style_link">
                            <img src={`${process.env.PUBLIC_URL}/img/magazine_2.png`} alt="스타일사진" />
                            <div className="style_hover_box">
                                <img src={`${process.env.PUBLIC_URL}/img/style_hover.png`} alt="신발" />
                                <div className="hover_title">
                                    <span>남여 공용 신발</span>
                                    <p>젤 키네틱 플루언트</p>
                                    <span className="color">색상 : CREAM / CREAM</span>
                                    <h3>229,000원</h3>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="style_swiper">
                        <Link to="/" className="style_link">
                            <img src={`${process.env.PUBLIC_URL}/img/magazine_3.png`} alt="스타일사진" />
                            <div className="style_hover_box">
                                <img src={`${process.env.PUBLIC_URL}/img/style_hover.png`} alt="신발" />
                                <div className="hover_title">
                                    <span>남여 공용 신발</span>
                                    <p>젤 키네틱 플루언트</p>
                                    <span className="color">색상 : CREAM / CREAM</span>
                                    <h3>229,000원</h3>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="style_swiper">
                        <Link to="/" className="style_link">
                            <img src={`${process.env.PUBLIC_URL}/img/magazine_4.png`} alt="스타일사진" />
                            <div className="style_hover_box">
                                <img src={`${process.env.PUBLIC_URL}/img/style_hover.png`} alt="신발" />
                                <div className="hover_title">
                                    <span>남여 공용 신발</span>
                                    <p>젤 키네틱 플루언트</p>
                                    <span className="color">색상 : CREAM / CREAM</span>
                                    <h3>229,000원</h3>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="style_swiper">
                        <Link to="/" className="style_link">
                            <img src={`${process.env.PUBLIC_URL}/img/magazine_5.png`} alt="스타일사진" />
                            <div className="style_hover_box">
                                <img src={`${process.env.PUBLIC_URL}/img/style_hover.png`} alt="신발" />
                                <div className="hover_title">
                                    <span>남여 공용 신발</span>
                                    <p>젤 키네틱 플루언트</p>
                                    <span className="color">색상 : CREAM / CREAM</span>
                                    <h3>229,000원</h3>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="style_swiper">
                        <Link to="/" className="style_link">
                            <img src={`${process.env.PUBLIC_URL}/img/magazine_6.png`} alt="스타일사진" />
                            <div className="style_hover_box">
                                <img src={`${process.env.PUBLIC_URL}/img/style_hover.png`} alt="신발" />
                                <div className="hover_title">
                                    <span>남여 공용 신발</span>
                                    <p>젤 키네틱 플루언트</p>
                                    <span className="color">색상 : CREAM / CREAM</span>
                                    <h3>229,000원</h3>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}