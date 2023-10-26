import React from 'react';
import "./modal_perfil.css"
import {Link} from "react-router-dom";
import {RxCross2} from "react-icons/rx";

const ModalPerfilHallel = ({openModal, setOpenModal}) => {
    return (
        <>
            {openModal &&
                <div className="cont_modal_perfil">
                    <div className="cont_header_modal_perfil">
                        <img className="imagem_modal_perfil" alt={"Foto de perfil"}
                             src={"https://imgs.search.brave.com/JQSzpJliirj1t8OrJgQI-BJRGMsojHgA_PxhMQatW58/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/Mzg3NjE2ODEwMzMt/NjQ2MWZmYWQ4ZDgw/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TVRS/OGZIQmxjbk52YmlV/eU1HbGpiMjU4Wlc1/OE1IeDhNSHg4ZkRB/PSZ3PTEwMDAmcT04/MA.jpeg"}/>
                        <div className={"cont_infos_perfil_modal"}>
                            <h3>Joselene</h3>
                            <Link to={"/"} className={"visualizar_perfil_modal"}>Visualizar perfil</Link>
                        </div>
                        <RxCross2 size={24} className="x_icon_modal_perfil" onClick={() => {
                            setOpenModal(false)
                        }}/>
                    </div>
                    <div className="line_divider_modal_perfil"></div>
                    <div className="body_modal_perfil">
                        <Link to={"/"} className={"links_perfil_modal"}>Editar Perfil</Link>
                        <Link to={"/"} className={"links_perfil_modal"}>Tornar-se associado</Link>
                        <Link to={"/"} className={"links_perfil_modal"} style={{color: "red"}}>Sair da conta</Link>
                    </div>
                </div>
            }

        </>
    );
};

export default ModalPerfilHallel;
