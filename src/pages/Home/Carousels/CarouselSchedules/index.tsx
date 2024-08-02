import { ListEventsDTO } from "types/dtoTypes"
import { ContainerCarouselSchedules, ContainerItem, ContainerMessages, ImagemItem, TittleDay } from "./styles"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

const CarouselSchedules = () => {

    const [slidesPerView, setSlidesPerView] = useState(2)

    const data = [
        {
            id: "1",
            imagem: "https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=600",
            date: new Date(),
            titulo: "Evento 1",
            dia: "Segunda"
        },
        {
            id: "2",
            imagem: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600",
            date: new Date(),
            titulo: "Evento 2",
            dia: "Terça"
        },
        {
            id: "3",
            imagem: "https://images.pexels.com/photos/16310530/pexels-photo-16310530/free-photo-of-casas-residencias-construcao-predio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            date: new Date(),
            titulo: "Evento 3",
            dia: "Quarta"
        },
        {
            id: "4",
            imagem: "https://images.pexels.com/photos/57980/pexels-photo-57980.jpeg?auto=compress&cs=tinysrgb&w=600",
            date: new Date(),
            titulo: "Evento 4",
            dia: "Quinta"
        },
        {
            id: "5",
            imagem: "https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=600",
            date: new Date(),
            titulo: "Evento 5",
            dia: "Sexta"
        },
        {
            id: "6",
            imagem: "https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=600",
            date: new Date(),
            titulo: "Evento 6",
            dia: "Sábado"
        }
    ]

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth < 1200) {
                setSlidesPerView(1)
            }
            else {
                setSlidesPerView(2)
            }
        }

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, [])

    return (
        <ContainerCarouselSchedules>
            <Swiper
                slidesPerView={slidesPerView}
                modules={[Navigation, Pagination, A11y, Scrollbar]}
                a11y={{ enabled: true }}
                direction="vertical"
                
                style={{
                    width: "100%",
                }}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ContainerItem>
                            <ImagemItem src={item.imagem} alt="slider" />
                            <ContainerMessages>
                                <TittleDay>{item.dia}</TittleDay>
                            </ContainerMessages>
                        </ContainerItem>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ContainerCarouselSchedules>
    )

}

export default CarouselSchedules