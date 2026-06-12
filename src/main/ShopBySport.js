import { Link } from "react-router-dom";

export default function ShopBySport() {
    return(
        <div id="shop_by_sport" data-aos="fade-up">
            <h2>SHOP BY SPORT</h2>
            <div className="sport_wrap">
                <div className="sport">
                    <Link to="/">
                        <img src={`${process.env.PUBLIC_URL}/img/running.png`} alt="운동"/>
                        <p>Running</p>
                        <span>러닝</span>
                    </Link>
                </div>

                <div className="sport">
                    <Link to="/">
                        <img src={`${process.env.PUBLIC_URL}/img/trail.png`} alt="운동"/>
                        <p>Trail Running</p>
                        <span>트레일 러닝</span>
                    </Link>
                </div>

                <div className="sport">
                    <Link to="/">
                        <img src={`${process.env.PUBLIC_URL}/img/indoor.png`} alt="운동"/>
                        <p>Indoor</p>
                        <span>인도어</span>
                    </Link>
                </div>

                <div className="sport">
                    <Link to="/">
                        <img src={`${process.env.PUBLIC_URL}/img/tennis.png`} alt="운동"/>
                        <p>Tennis</p>
                        <span>테니스</span>
                    </Link>
                </div>

                <div className="sport">
                    <Link to="/">
                        <img src={`${process.env.PUBLIC_URL}/img/basketball.png`} alt="운동"/>
                        <p>Basketball</p>
                        <span>농구</span>
                    </Link>
                </div>

                <div className="sport">
                    <Link to="/">
                        <img src={`${process.env.PUBLIC_URL}/img/soccer.png`} alt="운동"/>
                        <p>Soccer</p>
                        <span>축구</span>
                    </Link>
                </div>
            </div>  

            <Link to="/" className="sport_banner"><img src={`${process.env.PUBLIC_URL}/img/sport_banner.png`} alt="배너 이미지" /></Link>

        </div>
    )
}