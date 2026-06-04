import { Link } from "react-router-dom";

export default function Footer() {
      return (
            <footer id="footer">
                <div className="footer-wrap">
                    <div className="footer_logo">
                        <Link to="/" className="logo"><img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="로고 이미지" /></Link>
                        <div>
                            <Link to="/"><img src={`${process.env.PUBLIC_URL}/img/instagram.svg`} alt="인스타" /></Link>
                            <Link to="/"><img src={`${process.env.PUBLIC_URL}/img/facebook.svg`} alt="페이스북" /></Link>
                            <Link to="/"><img src={`${process.env.PUBLIC_URL}/img/kakao.svg`} alt="카카오" /></Link>
                        </div>
                    </div>

                    <ul>
                        <li>
                            <h3>고객 상담실 080 - 929 - 3535 | 080 - 930 - 3535</h3>
                            <p>운영시간 : 월~금 AM 10:00 ~ PM 17:00 / 점심시간 : PM 12:00 ~ 13:00<br/>
                                *공휴일은 고객 상담실 휴무입니다.</p>
                            
                            <Link to="/">이용 약관</Link>
                            <Link to="/">쿠키 규정</Link>
                            <Link to="/">개인정보처리방침</Link>
                            
                            <p>(주) 아식스코리아 대표 : 김현무<br/>
                                주소: 서울특별시 중구 을지로 5길 16 (삼화타워) 14F<br/>
                                대표 전화 : 02-3663-8335 고객 상담실 : 080-930-3535<br/>
                                사업자등록번호 : 109-86-10809 통신판매신고번호 : 2018-서울중구-0740<br/>
                                E-mail : customercare-kr@asics.com<br/>
                                </p>
                                <p>사업자 정보 확인<br/></p>
                                <p>ⓒ 2024 ASICS Korea<br/></p>
                                
                        </li>

                        <li>
                            <div>
                                <Link to="/">사이트맵</Link>
                                <Link to="/">매장찾기</Link>
                            </div>

                            <div>
                                <Link to="/">고객센터</Link>
                                <Link to="/">공지사항</Link>
                                <Link to="/">뉴스 & 이벤트</Link>
                                <Link to="/">주문 조회</Link>
                                <Link to="/">FAQ</Link>
                                <Link to="/">사이즈 가이드</Link>
                            </div>

                            <div>
                                <Link to="/">회사소개</Link>
                                <Link to="/">About ASICS</Link>
                                <Link to="/">Sustainability</Link>
                                <Link to="/">Carbon Footprint</Link>
                                <Link to="/">Move Her Mind</Link>
                                <Link to="/">The World Mental Health Day</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </footer>
      )
}