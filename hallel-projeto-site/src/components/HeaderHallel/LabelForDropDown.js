import React from 'react';
import {IoIosArrowBack} from "react-icons/io";

const LabelForDropDown = ({id, isOpen, onClick, titulo}) => {
    return (
        <label id={id} onClick={onClick}>
            {titulo}
            {!isOpen
                ? <IoIosArrowBack size={20} className={"arrow-up-icon"}/> :
                <IoIosArrowBack size={20} className={"arrow-down-icon"}/>}
        </label>
    );
};

export default LabelForDropDown;