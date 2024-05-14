// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./Swiper.module.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import homeImg1 from "../../assets/img/home/home1.png";
import homeImg2 from "../../assets/img/home/homeImg2.jpg";
import homeImg3 from "../../assets/img/home/homeImg3.webp";
import homeImg4 from "../../assets/img/home/homeImg4.jpg";

import motoImg from "../../assets/img/home/moto.png";

export default function App() {
    return (
        <>
            <div className={styles.swiper__content}>
                <div className={styles.swiper__container}>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img
                                className={styles.swiper__img}
                                src={homeImg1}
                                alt=""
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className={styles.swiper__img}
                                src={homeImg2}
                                alt=""
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className={styles.swiper__img}
                                src={homeImg3}
                                alt=""
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className={styles.swiper__img}
                                src={homeImg4}
                                alt=""
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={styles.swiper__content_right}>
                    <img src={motoImg} alt="" />
                    <p>Лодочный мотор Suzuki DF9.9BRS</p>
                    <div className={styles.sale_content}>
                        <p className={styles.sale__text}>
                            Акция действует до
                            <br />
                            <p className={styles.sale__text_color}>
                                31.08.2020
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
