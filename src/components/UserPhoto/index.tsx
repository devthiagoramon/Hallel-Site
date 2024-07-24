import { Avatar } from "@mui/material";
import { UserCircle } from "phosphor-react";
import { useSelector } from "react-redux";
import { selectUserPhoto } from "store/userSlice";
import { CSSProperties } from "styled-components";

interface UserPhotoProps {
    photoStyle?: CSSProperties;
}

const UserPhoto = ({ photoStyle }: UserPhotoProps) => {
    const photo = useSelector(selectUserPhoto) || "";

    if (photo === "") {
        return (
            <UserCircle size={60} style={photoStyle} color="#FAFAFA" />
        );
    } else {
        return (
            <Avatar
                src={photo}
                sx={{ width: 60, height: 60, ...photoStyle }}
            />
        );
    }
};

export default UserPhoto;
