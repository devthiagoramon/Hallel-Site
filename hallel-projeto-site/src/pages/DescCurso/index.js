import "./descCurso.css";
import CapaCurso from "../../images/capacurso.png";
import Icon1 from "../../images/icon1.png";
import Icon2 from "../../images/icon2.png";
import Icon3 from "../../images/icon3.png";
import Icon4 from "../../images/icon4.png";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress, Skeleton } from "@mui/material";

function DescCurso() {
  const [curso, setCurso] = useState({});
  const { idCurso } = useParams();

  useMemo(() => {
    let url = "http://localhost:8080/api/cursos/descCurso/" + idCurso;

    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((curso) => {
        setCurso(curso.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="containerDescCurso">
      {curso.nome === undefined ? (
        <>
          <section className="conteudo-topo">
            <h1>
              <Skeleton variant="text" width={200} />
            </h1>
            <p>
              Assista as aulas e tenha acesso aos módulos especiais, com
              exercícios e material exclusivo!
            </p>
          </section>

          <div className="left">
            <section className="conteudo-curso">
              <h2> O que você irá aprender: </h2>
              <Skeleton variant="text" width={400} />
              <Skeleton variant="text" width={400} />
              <Skeleton variant="text" width={400} />

              <h2> Conteúdo e materiais: </h2>

              <Skeleton variant="rounded" width={300} height={200} />
              <h2> Descrição: </h2>
              <Skeleton variant="rounded" width={500} height={100} />
            </section>
          </div>

          <div className="right">
            <img src={CapaCurso} alt="capa do curso" className="cart-image" />
            <section className="capacurso-infos">
              <Skeleton
                variant="rounded"
                sx={{ ml: 1, mb: 2, mt: 3 }}
                width={"95%"}
                height={100}
              />
              <button className="button" id="button1">
                {" "}
                MATRICULAR-ME{" "}
              </button>
              <button className="button" id="button2">
                {" "}
                ADICIONAR AOS FAVORITOS{" "}
              </button>
            </section>
          </div>
        </>
      ) : (
        <>
          <section className="conteudo-topo">
            <h1>{curso.nome}</h1>
            <p>
              Assista as aulas e tenha acesso aos módulos especiais, com
              exercícios e material exclusivo!
            </p>
          </section>

          <div className="left">
            <section className="conteudo-curso">
              <h2> O que você irá aprender: </h2>
                <section className="conteudo-curso">
              <ul>
                <li> Nam suscipit turpis vel diam vestibulum, at volutpat. </li>
                <li>
                  {" "}
                  Mauris quis nisi vestibulum, mollis risus vel, dapibus lorem.{" "}
                </li>
                <li>
                  {" "}
                  Aenean non est consequat, aliquet ipsum ac, pellentesque
                  velit.{" "}
                </li>
              </ul>
                        <li> Aenean non est consequat, aliquet ipsum ac, pellentesque velit. </li>
              <h2> Conteúdo e materiais: </h2>
              {curso.modulos !== null ? (
                <>
                  {" "}
                  {curso.modulos.map((modulo) => {
                    return (
                      <>
                        <div id="modulo">
                          {" "}
                          <label> {modulo.tituloModulo} </label>{" "}
                        </div>
                        <ul>
                          {modulo.videosModulo !== null ? (
                            <>
                              {modulo.videosModulo.map((video) => {
                                <li>
                                  {" "}
                                  AULA {video.numVideo} - {video.tituloVideo}{" "}
                                </li>;
                              })}
                            </>
                          ) : (
                            <></>
                          )}
                          {modulo.atividadesModulo !== null ? (
                            <>
                              {modulo.atividadesModulo.map((atividade) => {
                                return (
                                  <li>ATIVIDADE {atividade.tituloAtividade}</li>
                                );
                              })}
                            </>
                          ) : (
                            <></>
                          )}
                        </ul>
                      </>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
                        <li> TESTE DE CONHECIMENTO </li>
              <h2> Descrição: </h2>
              {curso.descricao !== null ? (
                <>
                  <p>{curso.descricao}</p>
                </>
              ) : (
                <></>
              )}
              </section>
          </section>
        </div>

          <div className="right">
            <img src={CapaCurso} alt="capa do curso" className="cart-image" />
            <section className="capacurso-infos">
              <img src={Icon1} alt="icone 1" className="icones" id="icone1" />
              <p id="txt-icon1"> 12h de duração </p> <br />
              <img src={Icon2} alt="icone 2" className="icones" id="icone2" />
              <p id="txt-icon2">
                {" "}
                {curso.qtdMaterias !== null ? (
                  <>{curso.qtdMaterias}</>
                ) : (
                  <></>
                )}{" "}
                materias disponíveis para download{" "}
              </p>{" "}
              <br />
              <img src={Icon3} alt="icone 3" className="icones" id="icone3" />
              <p id="txt-icon3">
                {" "}
                {curso.qtdMaterias !== null ? (
                  <>{curso.qtdAtividades}</>
                ) : (
                  <></>
                )}{" "}
                testes de conhecimento{" "}
              </p>{" "}
              <br />
              <img src={Icon4} alt="icone 4" className="icones" id="icone4" />
              <p id="txt-icon4"> Certificado de conclusão </p>
              <button className="button" id="button1">
                {" "}
                MATRICULAR-ME{" "}
              </button>
              <button className="button" id="button2">
                {" "}
                ADICIONAR AOS FAVORITOS{" "}
              </button>
            </section>
          </div>
        </>
      )}
    </div>
  );

}


export default DescCurso;