import Imagem1 from "../../../../assets/imagemCarrossel1.jpg"
import Imagem2 from "../../../../assets/imagemCarrosel2.jpg"
import Imagem3 from "../../../../assets/imagemCarrosel3.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { ContainerCarousel, ImageItem } from "./styles";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function MainCarousel() {

    const data = [
        { id: "3", image: Imagem3 },
        { id: "1", image: Imagem1 },
        { id: "2", image: Imagem2 },
    ]

    return (
        <ContainerCarousel>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ImageItem src={item.image} alt="slider" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </ContainerCarousel>
    );
}

export default MainCarousel;
