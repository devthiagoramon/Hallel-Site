import React from 'react'
import "./card_doacao_objeto.css"

const CardObjetoDoacao = (props) => {
    return (
        <div className='contCardObjetoDoacao'>
            <div className='headCardObjetoDoacao'>
                {props.imagem !== "" ? <div>
                    <img src={props.imagem} /><div className='sobrePosicaoObjetoDoacao'></div></div> : <div className='semImagemCardObjeto'>
                    <div className='sobrePosicaoObjetoDoacao'></div>
                </div>

                }
            </div>
            <div className='bodyCardObjetoDoacao'>
                <label>{props.nome}</label>
            </div>
        </div>
    )
}

export default CardObjetoDoacao;