import React from 'react';

const DropDownHeaderHallel = ({id, titulo, openDropDown, children}) => {
    return (
        <>
            {openDropDown &&
                <div className={"cont_dropdown"} id={id}>
                    <h2 style={{alignSelf: "center", color: "#FAFAFA"}}>{titulo}</h2>
                    <div className="line_divider"></div>
                    <div className={"cont_links_dropdown"}>
                        {children}
                    </div>
                </div>
            }
        </>
    );
}

export default DropDownHeaderHallel;