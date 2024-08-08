import ProfilesPhoto from "components/ProfilesPhoto";
import { HTMLProps } from "react";
import { MembroResponseListDTO } from "types/admDTOTypes";
import { UserSelectHContainer } from "./style";

interface UserSelectHProps extends HTMLProps<HTMLDivElement> {
  user: MembroResponseListDTO;
  selected?: boolean;
}

const UserSelectH = ({
  user,
  selected,
  ...props
}: UserSelectHProps) => {
  return (
    <UserSelectHContainer $selected={selected} {...props}>
      <ProfilesPhoto
        size={50}
        src={user.imagem}
        userName={user.nome}
      />
      <section className="right">
        <label>{user.nome}</label>
        <span>{user.email}</span>
      </section>
    </UserSelectHContainer>
  );
};

export default UserSelectH;
