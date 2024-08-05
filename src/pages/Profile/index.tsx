import TitleH from "components/TitleH";
import UserPhoto from "components/UserPhoto";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "store/userSlice";
import PersonalInfos from "./PersonalInfos";
import {
    ItemListProfile,
    LeftProfContainer,
    ListProfile,
    ProfileContainer,
    RightProfContainer,
    TitleContainerRightProfCont,
} from "./style";

const Profile = () => {
    const user = useSelector(selectUser);

    const itensMenu: string[] = [
        "Informações pessoais",
        "Associação",
        "Eventos que participo",
        "Sorteios",
        "Sair",
    ];
    const [selectedItemIndex, setSelectedItemIndex] =
        useState<number>(0);


    return (
        <ProfileContainer>
            <LeftProfContainer>
                <UserPhoto
                    photoStyle={{ marginTop: "1.875rem" }}
                    iconColor="#252525"
                    size={250}
                />
                <TitleH size="short" color="black">
                    {user.name}
                </TitleH>
                <span>{user.email}</span>
                <ListProfile>
                    {itensMenu.map((item, index) => {
                        return (
                            <ItemListProfile
                                onClick={() => setSelectedItemIndex(index)}
                                key={index}
                                $selected={selectedItemIndex === index}
                            >
                                {item}
                            </ItemListProfile>
                        );
                    })}
                </ListProfile>
            </LeftProfContainer>
            <RightProfContainer>
                <TitleContainerRightProfCont>
                    <TitleH color="black" size="large">
                        {itensMenu[selectedItemIndex]}
                    </TitleH>
                </TitleContainerRightProfCont>
                {selectedItemIndex === 0 && <PersonalInfos />}
            </RightProfContainer>
        </ProfileContainer>
    );
};

export default Profile;
