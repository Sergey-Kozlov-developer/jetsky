// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
			<div className="flex items-center justify-between gap-2 sm:pl-12 md:pl-0">
				<div className="sm:hidden md:flex md:h-[400px] md:w-[870px]">
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
								className="h-[400px] w-full"
								src={homeImg1}
								alt=""
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="h-[400px] w-full"
								src={homeImg2}
								alt=""
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="h-[400px] w-full"
								src={homeImg3}
								alt=""
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="h-[400px] w-full"
								src={homeImg4}
								alt=""
							/>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="flex h-[397px] w-[265px] flex-col items-center justify-between border border-solid border-gray-500">
					<img src={motoImg} alt="" />
					<p>Лодочный мотор Suzuki DF9.9BRS</p>
					<div className="h-[100px] w-full bg-slate-200 text-center">
						<p className="pt-7">
							Акция действует до
							<br />
							<span className="text-xl font-bold text-cyan-800">
								31.08.2020
							</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
