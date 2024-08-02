import { HTMLProps, ReactNode } from "react";
import { MenuItemHContainer } from "./style";

interface MenuItemHProps extends HTMLProps<HTMLDivElement> {
  Icon: ReactNode;
  name: string;
  selected?: boolean;
}

const MenuItemH = ({
  Icon,
  name,
  selected,
  ...props
}: MenuItemHProps) => {
  return (
    <MenuItemHContainer $selected={selected} {...props}>
      {Icon}
      <label>{name}</label>
    </MenuItemHContainer>
  );
};

export default MenuItemH;
