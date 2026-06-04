import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function EventBanner() {
    return(
        <div id="event_banner">
            <div className="swiper_box">
                <Swiper modules={[Pagination, Navigation]} navigation={true} pagination={{type: 'fraction'}}>
                    <SwiperSlide>
                        <Link to="/" className="event_link">
                            <h3>SPECIAL OFFER</h3>
                            <p>이달의 첫 구매 할인 혜택</p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/" className="event_link">
                            <h3>MEMBERSHIP PROGRAM</h3>
                            <p>아식스 멤버십 혜택</p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/" className="event_link">
                            <h3>REVIEW BENEFIT</h3>
                            <p>아식스 리뷰 혜택</p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/" className="event_link">
                            <h3>LAUNCH CALENDAR</h3>
                            <p>아식스 런칭 일정</p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/" className="event_link">
                            <h3>SPECIAL OFFER</h3>
                            <p>이달의 첫 구매 할인 혜택</p>
                        </Link>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    )
}