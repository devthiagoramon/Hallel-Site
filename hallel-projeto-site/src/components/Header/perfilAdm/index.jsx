import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

import {
  AccountBalance,
  AccountCircleRounded,
  Class,
  Diversity1Rounded,
  Diversity3,
  Event,
  ExitToAppRounded,
  LogoutRounded,
  PaymentRounded,
  Person4Rounded,
  VolunteerActivismRounded,
} from "@mui/icons-material";
import { useState } from "react";
import { Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ModalPerfilAdm = (props) => {

  const navigator = useNavigate();

  const listaAdministrador = [
    {
      text: "Cursos - ADM",
      icon: "cursos",
      url: "/administrador/cursos",
      action: "redirect",
    },
    {
      text: "Financeiro - ADM",
      icon: "financeiro",
      url: "/administrador/painelFinanceiro",
      action: "redirect",
    },
    {
      text: "Eventos - ADM",
      icon: "eventos",
      url: "/administrador/eventos",
      action: "redirect",
    },
    {
      text: "Membros - ADM",
      icon: "membros",
      url: "/administrador/membros",
      action: "redirect",
    },
    {
      text: "Associados - ADM",
      icon: "associados",
      url: "/administrador/painelFinanceiro/associados",
      action: "redirect",
    },
    {
      text: "Pagamentos Associados - ADM",
      icon: "associadosPagamentos",
      url: "/administrador/painelFinanceiro/pagamentosAssociado",
      action: "redirect",
    },
    {
      text: "Doações - ADM",
      icon: "doacao",
      url: "/administrador/painelFinanceiro/doacoes/dinheiro",
      action: "redirect",
    },
    {
      text: "Doações de objeto - ADM",
      icon: "doacaoObjeto",
      url: "/administrador/painelFinanceiro/doacoes/objeto",
      action: "redirect",
    },
    {
      text: "Perfil - ADM",
      icon: "perfil",
      url: "/perfil",
      action: "redirect",
    },
    {
      text: "Sorteio - Associados",
      icon: "sorteioAssociados",
      url: "/administrador/sorteio",
      action: "redirect",
    },
    { text: "Sair", icon: "sair", url: "/", action: "logout" },
  ];

  function getImage(icon) {
    if (icon === "cursos") {
      return <Class />;
    } else if (icon === "financeiro") {
      return <AccountBalance />;
    } else if (icon === "eventos") {
      return <Event />;
    } else if (icon === "associados") {
      return <Person4Rounded />;
    } else if (icon === "membros") {
      return <Diversity3 />;
    } else if (icon === "perfil") {
      return <AccountCircleRounded />;
    } else if (icon === "doacao") {
      return <VolunteerActivismRounded />;
    } else if (icon === "doacaoObjeto") {
      return <Diversity1Rounded />;
    } else if (icon === "associadosPagamentos") {
      return <PaymentRounded />;
    } else if (icon === "sorteioAssociados") {
      return (
        <GiPerspectiveDiceSixFacesRandom
          style={{ width: "1.5em", height: "2em" }}
        />
      );
    } else if (icon === "sair") {
      return <LogoutRounded />;
    }
  }

  function getAction(action, url){
    if(action === "redirect"){
      navigator(url);
    }else if(action === "logout"){
      localStorage.clear()
      navigator(url);
    }
  }

  return (
    <div>
      <SwipeableDrawer
        style={{ position: "absolute" }}
        anchor="right"
        open={props.isOpen}
        onClose={() => props.fecharModal()}
        onKeyDown={() => props.fecharModal()}
      >
        <Box sx={{ width: 300 }} role="presentation">
          <List>
            <ListItem onClick={() => props.fecharModal()}>
              <ListItemIcon sx={{ right: 0 }}>
                <ExitToAppRounded />
              </ListItemIcon>
            </ListItem>
            {listaAdministrador.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemIcon sx={{ pl: 4 }}>
                  {getImage(item.icon)}
                </ListItemIcon>
                <ListItemButton
                  onClick={() => {
                    getAction(item.action, item.url)
                  }}
                >
                  <ListItemText sx={{ pl: 4 }} primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </div>
  );
};

export default ModalPerfilAdm;
