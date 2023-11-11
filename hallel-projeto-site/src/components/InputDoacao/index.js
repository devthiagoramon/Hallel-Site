import React from "react";

const InputDoacao = (props) => {
    return(
        <div>
             <label style={{
                color: '#165336',
                fontSize: '20px',
                fontWeight: 'bold'
            }} >{props.label}</label>
            <input 
                type="text"
                value={props.valie}
                onChange={props.onChange}
                style={{
                    borderBottom: '1px solid #165336',
                    width: '100px',
                    height: '25px',
                    marginLeft: '5px'
                }}
            />
        </div>
    )
}

export default InputDoacao;