import { isTokenExpiredService } from "api/main/mainAPI";
import { getMembroInfoService } from "api/user/userAPI";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveUserInfoRedux } from "store/userSlice";
import { isTokenExist, loadTokenAPI } from "./mainUtils";

const ValidateToken = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        async function verifyToken() {
            const isValid = await isTokenExpiredService();

            if (!isValid) {
                navigate("/signUp");
                localStorage.clear()
            }

            const user = await getMembroInfoService(loadTokenAPI());
            dispatch(saveUserInfoRedux(user));
            // Parte associado
        }
        if (isTokenExist()) {
            verifyToken();
        }
    }, []);

    return <></>;
};

export default ValidateToken;
