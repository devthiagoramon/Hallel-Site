import "./descEvento.css"
import "../../images/evento.jpg"

function DescEvento() {
    return (

        <div>

            <div className="titulo">
                <h1> Vocacional Hallel Lançai as Redes 2023 </h1>
            </div>

            <div className="image-bg" > </div>

            <main className="container">
                <p id="titulo-desc"> O que é necessário para você ser feliz? </p>
                <br />
                <p>
                    Quando eu pensava em uma vocação, costumava logo pensar em realizações humanas, profissionais, afetivas, financeiras, etc.
                    Essas conquistas são importantes na vida de todos nós, mas elas não foram e não são capazes de preencher o vazio existencial dentro de mim.
                    Esse vazio só pode ser preenchido por Alguém: Deus, e por aquilo que Ele tem para a minha vida. Isso é a verdadeira vocação.
                    Encontrar a sua vocação é o que vai lhe trazer a verdadeira felicidade.
                    E eu sei, que você quer preencher esse vazio, assim como também eu queria.
                    Então dê um passo concreto hoje! Basta participar do nosso encontro – LANÇAI AS REDES. </p>
                <br />
                <p> Serão 2 dias para você conhecer mais sobre o que é uma vocação e o Carisma Hallel!
                    Faça sua inscrição. </p>
                <br />
                <h4> Acesse o Link na BIO agora mesmo e venha ser feliz! </h4>
                <br />
                <br />
                <br />
                <hr />
                <br />
                <br />

                {/*container-infos é o container principal*/}
                <div className="container-infos">

                    <div className="infos-left">
                        <div className="conteudoLeft">
                            <label className="title"> Data: </label>
                            <label className="cont"> 10/03 e 11/03 </label>
                        </div>

                        < br />

                        <div className="conteudoLeft">
                            <label className="title"> Horário: </label>
                            <label className="cont">1° dia - 19H30 e 2° dia - 15H </label>
                        </div>
                        < br />

                        <div className="conteudoLeft">
                            <label className="title">Endereço:</label>
                            <label className="cont">Comunidade Católica Hallel - RUA LEONARDO MALCHER, 194</label>
                        </div>
                    </div>

                    <div className="infos-right">

                        <h4 id="titulo-palestrantes"> COLABORADORES E PALESTRANTES </h4>
                        <br />
                        <div className="infos-palestrantes">
                            <label>EMMERSON SANTA RITA</label> <br /><br />
                            <label>LUCIANA BARBOSA VILAÇA</label> <br /><br />
                            <label>MANFRED VEIGA</label> <br />
                        </div>

                    </div>

                </div>

            </main>

        </div>

    );
}

export default DescEvento;