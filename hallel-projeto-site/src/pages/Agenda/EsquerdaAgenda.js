import React from "react";
import dayjs from "dayjs";
import { Badge } from "@mui/material";
import {
  DateCalendar,
  LocalizationProvider,
  PickersDay,
  ptBR,
} from "@mui/x-date-pickers";

const EsquerdaAgenda = () => {
  const initialValue = dayjs();
  const diasEmDestaque = [2, 18, 24];

  function ServerDay(props) {
    const { day, outsideCurrentMonth, ...other } = props;

    const isSelected =
      !props.outsideCurrentMonth &&
      diasEmDestaque.indexOf(props.day.date()) >= 0;

    return (
      <Badge
        key={props.day.toString()}
        overlap="circular"
        badgeContent={isSelected ? "●" : undefined}
      >
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={day}
        />
      </Badge>
    );
  }

  return (
    <div className="esquerda_agenda">
      <DateCalendar
        defaultValue={initialValue}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: diasEmDestaque,
        }}
      />
    </div>
  );
};

export default EsquerdaAgenda;