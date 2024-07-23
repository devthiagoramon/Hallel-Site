import HeaderHome from 'components/Headers/HeaderHome'
import TitleH from 'components/TitleH'
import ImgQuemSomos from '../../../assets/quem-somos.png'
import { QuemSomosContainer } from './style'

const QuemSomos = () => {
    return (
        <>
            <QuemSomosContainer className="global">
                <img src={ImgQuemSomos} />
                <div className="container-text">
                    <TitleH size='medium' color='black'>Quem somos</TitleH>
                    <hr className="line" />
                    <p className="paragrafo1">
                        {" "}
                        Nossa história começou a partir do Ministério de Música Hallel, e estava
                        a serviço da RCC desde 1988. Na coordenação do Ministério, Clenir Viana
                        Guimarães, atendeu ao chamado que Deus suscitou em seu coração, para dar
                        início a um grupo de oração e mais tarde no desejo de ir além, nascia a
                        Comunidade Católica Hallel.
                    </p>
                    <p className="paragrafo2">
                        Em um mundo de guerra, ódio, violência, somos chamados a ser
                        anunciadores do amor incondicional de Deus pela humanidade através de
                        nossas vidas e do acolhimento daqueles que necessitam, resgatando o ser
                        humano na sua dignidade, no seu amor próprio (amar a si mesmo -
                        auto-estima) e principalmente no relacionamento com Deus (amá-Lo sobre
                        todas as coisas), pois quem se sente amado é capaz de amar.
                    </p>
                    <p className="paragrafo3">
                        A dimensão do resgate é na totalidade daquilo que o ser humano é corpo e
                        espírito, isso envolve o seu ser social, psíquico e espiritual.
                        Acreditamos que a partir do conhecimento e da amizade com Deus, o ser
                        humano vai se abrindo a sua graça e sendo capaz de se tornar um
                        resgatador de outras almas. Assim ajudaremos na educação humana e
                        espiritual transformando o mundo em lugar de amor.
                    </p>

                    <br />
                    <span>
                        <p className="frasefinal">
                            Conheça mais sobre nossa Comunidade acessando as demais páginas.
                        </p>
                    </span>
                </div>
            </QuemSomosContainer>
        </>
    )
}

export default QuemSomos