import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Cards, Table } from "phosphor-react";
import { Dispatch, SetStateAction } from "react";

interface ExibitionEventOptionProps {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}

const ExibitionEventOption = ({
    setValue,
    value,
}: ExibitionEventOptionProps) => {
    return (
        <ToggleButtonGroup
            value={value}
            exclusive
            onChange={(e, value) => setValue(value)}
        >
            <ToggleButton value={"card"}>
                <Cards size={24} color="#42A5F5" />
            </ToggleButton>
            <ToggleButton value={"table"}>
                <Table size={24} color="#42A5F5" />
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default ExibitionEventOption;
