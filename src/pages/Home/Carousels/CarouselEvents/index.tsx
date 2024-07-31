import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ContainerCarousel, DivItem, ImageItem, TitleEvents } from './styles';
import { useEffect, useState } from 'react';
import { ListEventsDTO } from 'types/dtoTypes';

const CarouselEvents = () => {

    const [slidesPerView, setSlidesPerView] = useState(4)

    const data: ListEventsDTO[] = [
        {
            id: "1",
            imagem: "https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=600",
            date: new Date(),
            titulo: "Evento 1",
        },
        {
            id: "2",
            imagem: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600",
            date: new Date(),
            titulo: "Evento 2"
        },
        {
            id: "3",
            imagem: "https://images.pexels.com/photos/16310530/pexels-photo-16310530/free-photo-of-casas-residencias-construcao-predio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            date: new Date(),
            titulo: "Evento 3"
        },
        {
            id: "4",
            imagem: "https://images.pexels.com/photos/57980/pexels-photo-57980.jpeg?auto=compress&cs=tinysrgb&w=600",
            date: new Date(),
            titulo: "Evento 4"
        },
        {
            id: "5",
            imagem: "https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=600",
            date: new Date(),
            titulo: "Evento 5"
        },
        {
            id: "6",
            imagem: "https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=600",
            date: new Date(),
            titulo: "Evento 6"
        }
    ]

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth < 1200) {
                setSlidesPerView(1)
            }
            else {
                setSlidesPerView(4)
            }
        }

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, [])

    return (
        <ContainerCarousel>
            <Swiper
                slidesPerView={slidesPerView}
                modules={[Navigation, Pagination, A11y, Scrollbar]}
                spaceBetween={30}
                a11y={{ enabled: true }}
                title='Eventos'
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <DivItem>
                            <ImageItem src={item.imagem} alt="slider" />
                            <TitleEvents>{item.titulo}</TitleEvents>
                        </DivItem>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ContainerCarousel>
    )
}

export default CarouselEvents