import React from 'react';
import {BiLinkExternal} from "react-icons/bi";
import {Link} from "react-router-dom";

const LinkForDropDown = ({to, titulo}) => {
    return (
        <Link to={to}>{titulo}<BiLinkExternal/></Link>
    );
};

export default LinkForDropDown;