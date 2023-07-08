import { AddRounded, DoneRounded, ErrorRounded } from '@mui/icons-material';
import { Textarea } from '@mui/joy'
import { Button, CircularProgress, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const InputsBodyDespesasEvento = (props) => {
    const [despesaEvento, setDespesaEvento] = useState({
        nome: "",
        descricao: "",
        num_tipoDespesa: '',
        valor: 0,
        quantidade: 0,
    });

    const idEvento = props.evento.id;

    const [enviando, setEnviando] = useState(false);
    const [enviado, setenviado] = useState(null);

    const handleChangeSelect = (e) => {
        setDespesaEvento(prevState => {
            return { ...prevState, num_tipoDespesa: e.target.value }
        })
    }

    const adicionarDespesaEmEvento = () => {

        setEnviando(true);

        axios.post("http://localhost:8080/api/administrador/eventos/" + idEvento + "/despesa/add", {
            ...despesaEvento
        }, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(() => {
            setEnviando(false);
            setenviado(true);
            props.setChangedTabela(!props.changedTabela)
            setTimeout(() => {
                setenviado(null);
            }, 3000);

        }).catch(() => {
            setenviado(false);
            setEnviando(false);
            setTimeout(() => {
                setenviado(null);
            }, 3000);
        })
    }

    return (
        <div className='container_inputs_despesas_evento'>
            <div className='inputs_despesas_evento'>
                <label className='inputs_despesas_evento_rotulo'>Adicionar Despesa</label>
                <label>Nome da despesa <span className='obrigatorio'>*</span></label>
                <TextField size='small' value={despesaEvento.nome} onChange={(e) => {
                    setDespesaEvento(prevState => {
                        return { ...prevState, nome: e.target.value }
                    })
                }} />
                <label>Descrição <span className='obrigatorio'>*</span></label>
                <Textarea variant='outlined' value={despesaEvento.descricao} maxRows={5} onChange={(e) => {
                    setDespesaEvento(prevState => {
                        return { ...prevState, descricao: e.target.value }
                    })
                }} />
                <label>Tipo da despesa <span className='obrigatorio'>*</span></label>
                <Select size='small' value={despesaEvento.num_tipoDespesa} onChange={handleChangeSelect}>
                    <MenuItem value={1}>Dinheiro</MenuItem>
                    <MenuItem value={2}>Alimento</MenuItem>
                    <MenuItem value={3}>Limpeza</MenuItem>
                    <MenuItem value={4}>Acessório</MenuItem>
                    <MenuItem value={5}>Roupas</MenuItem>
                </Select>
                {despesaEvento.num_tipoDespesa !== '' &&
                    <>
                        {despesaEvento.num_tipoDespesa !== 1
                            ?
                            <>
                                <label>Quantidade</label>
                                <TextField value={despesaEvento.quantidade}
                                    onChange={(e) => {
                                        setDespesaEvento(prevState => {
                                            return { ...prevState, quantidade: e.target.value }
                                        })
                                    }} type='number' size='small' sx={{ maxWidth: "30%" }} />
                            </>
                            :
                            <>
                                <label>Valor</label>
                                <TextField value={despesaEvento.valor}
                                    onChange={(e) => {
                                        setDespesaEvento(prevState => {
                                            return { ...prevState, valor: e.target.value }
                                        })
                                    }} size='small' type='number' sx={{ maxWidth: "30%" }} />
                            </>}
                    </>
                }

                <div className='btn_despesas_evento'>
                    {enviado === null &&
                        <>
                            {enviando === false ? 
                            <Button variant='contained' endIcon={<AddRounded />} onClick={adicionarDespesaEmEvento}>Adicionar</Button> : 
                            <Button variant='contained'>Enviando <CircularProgress sx={{color:"#FAF4F4"}}/></Button>}
                        </>
                    }
                    {enviado === false &&
                        <Button variant='contained' endIcon={<ErrorRounded/>} color='error'>Error</Button>
                    }
                    {enviado === true && 
                        <Button variant='contained' endIcon={<DoneRounded/>} color='success'>Adicionado!</Button>
                    }
                </div>
            </div>
        </div>
    )
}

export default InputsBodyDespesasEvento