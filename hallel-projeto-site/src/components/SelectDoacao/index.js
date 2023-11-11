import React from "react";

const SelectDoacao = (props) =>{
    return(
        <div>
            <label style={{
                color: '#165336',
                fontSize: '20px',
                fontWeight: 'bold'
            }} >{props.label}</label>
            <select
                style={{
                    width: '150px',
                    height: '25px',
                    color: '#165336',
                    marginLeft: '10px'
                }}
                value={props.value}
                onChange={props.onChange}
            >
                {props.children}
            </select>
        </div>
    )
}

export default SelectDoacao;