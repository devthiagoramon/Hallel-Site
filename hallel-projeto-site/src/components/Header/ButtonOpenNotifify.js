import React, {useState} from "react";
import NotificacaoIcon from "../../images/NotificacaoIcon";

const ButtonOpenNotifify = () => {
    const [openNotifiies, setOpenNotifiies] = useState(false);

    const handleOpenNotifies = () => {
      setOpenNotifiies(!openNotifiies);
    }

    return (
        <div className={"cont_btn_open_notify"} onClick={handleOpenNotifies}>
            <NotificacaoIcon/>
        </div>
    )
}

export default ButtonOpenNotifify;
