import TitleH from "components/TitleH";
import ImgFundadora from '../../../assets/Fundadora-final(1).png';
import { FundadoraContainer } from "./style";

const Fundadora = () => {
    return (
        <FundadoraContainer>
            <div className="square">
                <TitleH textStyle={{ alignSelf: "center" }} color="white" size="medium">
                    Fundadora
                </TitleH>
                <section className="content">
                    <section className="leftcontainer">
                        <p>
                            Clenir Viana Guimarães, nascida na Cidade de Parintins,
                            veio à Manaus para cursar faculdade de Administração.
                            Trabalha no Tribunal de Contas da União.
                        </p>
                        <p>
                            Participou da Renovação Carismática desde os 13 anos.
                            Coordenou a Secretaria Davi e a Secretaria Paulo Apóstolo
                            na RCC, participou do Conselho Diocesano da RCC,
                            representou os Movimentos e as Comunidades de Vida na
                            Assembléia Pastoral Arquidiocesana; estudou Teologia no
                            Instituto de Teologia, Pastoral e Ensino Superior -
                            ITEPES.
                        </p>
                        <p>
                            Atendendo ao chamado de Deus em seu coração e seguindo o
                            impulso do Espírito Santo deu início à Comunidade Católica
                            Hallel partir de seu trabalho como Coordenadora do
                            Ministério de Música Hallel, até então pertencente a RCC.
                        </p>
                        <p>
                            Hoje é celibatária, fez seus compromissos definitivos como
                            consagrada na Comunidade de Vida Hallel, por ocasião do
                            seu aniversário de 50 anos, no dia 27/06/2016, numa
                            celebração proferida pelo Bispo Emérito Dom Luiz Soares
                            Vieira, na Catedral Metropolitana de Manaus. Com muita
                            alegria e sempre apaixonada por seu Amado Esposo continua
                            seu missão de resgatadora de almas, saciando a sede de
                            almas de Jesus na cruz.{" "}
                        </p>
                    </section>
                    <section className="rightcontainer">
                        <img
                            src={ImgFundadora}
                            alt="Imagem da Fundadora"
                            className="fundadora-img"
                        />
                        <span>- Clenir Viana Guimarães -</span>
                    </section>
                </section>
            </div>
        </FundadoraContainer>
    );
};

export default Fundadora;
