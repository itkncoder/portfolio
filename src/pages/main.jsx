import Wrapper from "../layout/wrapper"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { arashov, avolon, devlans, forceexchange, movigo, neon, promgarelka, rightbook, techyes, tosai, worldit } from "../assets";

import Title from "react-vanilla-tilt"

const Main = () => {
    return (
        <div>
            <Wrapper>
                <div className="flex justify-between flex-col lg:flex-row px-[25px] lg:px-0 items-center">
                    <div data-aos="fade-left">
                        <p className="text-[18px] text-[#E5E9F0] font-[450]">Hi all. I am</p>
                        <h1 className="text-[62px] font-[400] text-[#E5E9F0]">Khatamov Nuriddin</h1>
                        <h2 className="text-[#4D5BCE] text-[32px] font-[450]">{">"} Front-end developer</h2>
                        <div className="mt-[80px]">
                            <p className="text-[#607B96] font-[450]">// here you can see some of my projects</p>
                            <p className="text-[#607B96] font-[450] mt-[8px]">// you can also see more on my Github page</p>
                            <p className="text-[#607B96] font-[500] mt-[8px]">
                                <span className="text-[#4D5BCE]">const</span> 
                                <span className="text-[#43D9AD]"> githubLink</span>
                                <span> = </span> 
                                <span>
                                    <a className="text-[#E99287] hover:underline" href="https://github.com/itkncoder" target="_blank">“https://github.com/itkncoder”</a>
                                </span>;
                            </p>
                        </div>
                    </div>
                    <img src={neon} className="absolute -z-20 w-[1000px]" width={800} />    
                    <div data-aos="fade-right" className="hidden lg:block">                    
                        <Swiper
                            direction={'vertical'}
                            spaceBetween={15}
                            slidesPerView={2.5}
                            className="swiper"
                        >
                            <SwiperSlide>
                                <Title style={{border: 0}}>
                                    <a href="https://movigo.netlify.app" target="_blank">
                                        <img src={movigo} alt="movigo" className="w-[450px] shadow-xl rounded-[20px]" />
                                    </a>
                                </Title>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Title style={{border: 0}}>
                                    <a href="https://arashov.uz" target="_blank">
                                        <img src={arashov} alt="arashov" className="w-[450px] shadow-xl rounded-[20px]" />
                                    </a>
                                </Title>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Title style={{border: 0}}>
                                    <a href="https://devlans.netlify.app" target="_blank">
                                        <img src={devlans} alt="devlans" className="w-[450px] shadow-xl rounded-[20px]" />
                                    </a>
                                </Title>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Title style={{border: 0}}>
                                    <a href="https://rightbook.uz" target="_blank">
                                        <img src={rightbook} alt="rightbook" className="w-[450px] shadow-xl rounded-[20px]" />
                                    </a>
                                </Title>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Title style={{border: 0}}>
                                    <a href="https://forceexchange.vercel.app" target="_blank">
                                        <img src={forceexchange} alt="forceexchange" className="w-[450px] shadow-xl rounded-[20px]" />
                                    </a>
                                </Title>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Title style={{border: 0}}>
                                    <a href="https://promgarelka.uz" target="_blank">
                                        <img src={promgarelka} alt="promgarelka" className="w-[450px] shadow-xl rounded-[20px]" />
                                    </a>
                                </Title>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Title style={{border: 0}}>
                                    <a href="https://worldit.netlify.app" target="_blank">
                                        <img src={worldit} alt="worldit" className="w-[450px] shadow-xl rounded-[20px]" />
                                    </a>
                                </Title>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Title style={{border: 0}}>
                                    <a href="https://techyes.vercel.app/" target="_blank">
                                        <img src={techyes} alt="techyes" className="w-[450px] shadow-xl rounded-[20px]" />
                                    </a>
                                </Title>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Title style={{border: 0}}>
                                    <a href="https://avolon.netlify.app/" target="_blank">
                                        <img src={avolon} alt="avolon" className="w-[450px] shadow-xl rounded-[20px]" />
                                    </a>
                                </Title>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Title style={{border: 0}}>
                                    <a href="https://tosai.vercel.app" target="_blank">
                                        <img src={tosai} alt="tosai" className="w-[450px] shadow-xl rounded-[20px]" />
                                    </a>
                                </Title>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Main