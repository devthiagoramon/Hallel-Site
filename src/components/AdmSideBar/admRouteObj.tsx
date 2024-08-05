import { Calendar, House } from "phosphor-react";
import { ReactNode } from "react";

export interface AdmRouteType {
  title: string;
  description?: string;
  link: string;
  Icon?: ReactNode;
}

export const admRoutesObj: AdmRouteType[] = [
  {
    title: "Inicio",
    link: "/administrador",
    Icon: <House size={32} />,
  },
  {
    title: "Eventos",
    link: "/administrador/eventos",
    description: "Módulo de eventos da comunidade",
    Icon: <Calendar size={32} />,
  },
];
