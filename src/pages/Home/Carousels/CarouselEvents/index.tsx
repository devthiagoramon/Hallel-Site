import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ContainerCarousel, DivItem, ImageItem, TitleEvents } from './styles';
import { useEffect, useState } from 'react';
import { ListEventsDTO } from 'types/dtoTypes';
import { useListEvents } from 'hooks/useListEvents';
import SemImagemEvento from "../../../../assets/not_found_image_evento1.png"
import { useNavigate } from 'react-router-dom';

const CarouselEvents = () => {

    const [slidesPerView, setSlidesPerView] = useState(4)
    const navigate = useNavigate()
    const { data: events } = useListEvents()

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

    const handleDetailsEvent = (eventId: string) => {
        navigate("/detalhesEvento", {
            state: {
                eventId: eventId
            }
        })
    }

    return (
        <ContainerCarousel>
            <Swiper
                slidesPerView={slidesPerView}
                modules={[Navigation, Pagination, A11y, Scrollbar]}
                spaceBetween={30}
                a11y={{ enabled: true }}
                title='Eventos'
            >
                {events?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <DivItem onClick={()=> handleDetailsEvent(item.id)}>
                            {item.imagem ? (
                                <ImageItem
                                    src={item.imagem}
                                    alt={`evento-${item.titulo}-image`}
                                />
                            ) : (
                                <ImageItem
                                    src={SemImagemEvento}
                                    alt={`sem-imagem-${item.titulo}`}
                                />
                            )}
                            <TitleEvents>{item.titulo}</TitleEvents>
                        </DivItem>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ContainerCarousel>
    )
}

export default CarouselEvents