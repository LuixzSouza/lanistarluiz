'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { ContainerGrid } from './container';
import Image from 'next/image';

const CardSlide = [
    { Img: '/Card1.png' },
    { Img: '/Card2.png' },
    { Img: '/Card3.png' },
    { Img: '/Card4.png' },
    { Img: '/Card5.png' },
    { Img: '/Card6.png' },
    { Img: '/Card7.png' },
];

export function SectionSlide() {
    return (
        <ContainerGrid className="w-full ">
            <div className="relative py-32 text-center">
                <h2 className="text-5xl text-[#7C8999] font-medium pb-20">
                    One payment card per Account? <span className="text-[#29394A]">Yeah no.</span>
                </h2>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: -35,
                        stretch: 0,
                        depth: 100,
                        modifier: 0,
                        
                    }}
                    navigation={true}
                    modules={[EffectCoverflow, Navigation]}
                    className="relative w-full h-full"
                >
                    {CardSlide.map((item, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center bg-transparent">
                            <div className="flex items-center justify-center w-full h-full">
                                <Image
                                    className="object-contain"
                                    src={item.Img}
                                    alt="Cartão"
                                    width={278}
                                    height={340}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="pt-20 text-center flex flex-col justify-center items-center gap-3">
                    <Image src={'/CircleOrang.svg'} alt="Circle Orange" width={36.5} height={36.5} />
                    <p className=' text-[#7C8999]'>ORANGE PLATINUM</p>
                </div>
            </div>
        </ContainerGrid>
    );
}
