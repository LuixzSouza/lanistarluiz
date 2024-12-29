'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { ContainerGrid } from "@/components/container";
import Image from 'next/image';
import { useState } from 'react';

const CardSlide = [
    { Img: '/Card1.png', color: '#dc4625', name: 'Red Diamond' },
    { Img: '/Card2.png', color: '#0c021e', name: 'Black Instant' },
    { Img: '/Card3.png', color: '#ffd30b', name: 'Yellow Gold' },
    { Img: '/Card4.png', color: '#581845', name: 'Purple Royale' },
    { Img: '/Card5.png', color: '#DFFF00', name: 'Lime Luxury' },
    { Img: '/Card6.png', color: '#ffcce3', name: 'Pink Elite' },
    { Img: '/Card7.png', color: '#5DADE2', name: 'Skyline Silver' },
];

export function SectionSlide() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <ContainerGrid className="w-full">
            <div className="relative py-32 text-center">
                <h2 className="text-5xl text-[#7C8999] font-medium pb-20">
                    One payment card per Account? <span className="text-[#29394A]">Yeah no.</span>
                </h2>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={1}  // Inicialmente exibe 1 slide por vez
                    coverflowEffect={{
                        rotate: -35,
                        stretch: 0,
                        depth: 100,
                        modifier: 0,
                    }}
                    navigation={true}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                        // Para telas pequenas (celulares), mostre 1 slide
                        640: {
                            slidesPerView: 1,  // 1 slide
                        },
                        // Para telas médias (tablets), mostre 2 slides
                        768: {
                            slidesPerView: 2,  // 2 slides
                        },
                        // Para telas maiores (monitores), mostre 3 slides
                        1024: {
                            slidesPerView: 3,  // 3 slides
                        },
                    }}
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

                {/* Exibe a div com a cor do cartão e nome, conforme o slide ativo */}
                <div className="pt-20 text-center flex flex-col justify-center items-center gap-3">
                    <div
                        style={{ backgroundColor: CardSlide[activeIndex].color }}
                        className="w-9 h-9 rounded-full"
                    />
                    <p className="text-[#7C8999]">{CardSlide[activeIndex].name}</p>
                </div>
            </div>
        </ContainerGrid>
    );
}
