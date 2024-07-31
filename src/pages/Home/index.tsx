import ValidateToken from "utils/validateToken";
import { HomeContainer } from "./style";

const Home = () => {
    return (
        <>
            <ValidateToken />
            <HomeContainer></HomeContainer>
        </>
    );
};

export default Home;
