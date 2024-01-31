import React from "react"
import { useState } from "react"
import './styleChamada.css'
import { IconButton } from "@mui/material"
import Stack from '@mui/material/Stack';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import VideocamIcon from '@mui/icons-material/Videocam';
import { ExitToApp, Mic } from "@mui/icons-material";

const Principal = ({titulo, link}) =>{

    return(

        <section>


            <div className="informacoesChamada">

            <label>Nome da chamada</label>
            <label>link da chamada</label>

            </div>
        </section>
    )
}


const VideoArea = ({nome_participante}) =>{


    return(

        <section>


            <div className="component_video">

                <label>{nome_participante}</label>
            </div>
        </section>
    );
}



const RightArea = (nome, video) =>{


    return(

        <section className="ChamadaChat">

            <label>Chat</label>
        </section>
    );
}


const BottomArea = () =>{

    return(

        <section className="bottom_area">
            <Stack direction="row" spacing={1}>
                <IconButton aria-label="mic" color="primary">
                    <Mic />
                </IconButton>
                <IconButton aria-label="video" color="secondary">
                    <VideocamIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm">
                    <PresentToAllIcon />
                </IconButton>
                <IconButton  aria-label="add to shopping cart" color="primary">
                    <ExitToApp />
                </IconButton>
                </Stack>
        </section>
    );
}


function VideoChamada(){


    return(

        <section className="principal_chamada">

            <Principal/>



            <div className="colunaMeio">

            <div className="videoChamada_area">

    
            <VideoArea/>

            <VideoArea/>

            <VideoArea/>

            <VideoArea/>

            
            <VideoArea/>

            <VideoArea/>

            <VideoArea/>

            <VideoArea/>

            </div>


            <RightArea/>
            
            
            </div>

            <BottomArea/>

        </section>

    )
}

export default VideoChamada;