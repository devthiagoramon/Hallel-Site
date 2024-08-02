import { listMembrosAdmService } from "api/admin/membros/admMembrosAPI";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Administrador = () => {
    const navigation = useNavigate();
    useEffect(() => {
        async function verifyTokenADM() {
            try {
                const members = await listMembrosAdmService();
            } catch (error) {
                navigation("/administrador/signup");
            }
        }
        verifyTokenADM();
    }, []);

    return <div>Administrador</div>;
};

export default Administrador;
