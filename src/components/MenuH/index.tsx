import { Menu, MenuProps } from "@szhsin/react-menu";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

interface MenuH extends MenuProps { }

const MenuH = (props: MenuH) => {
    return <Menu {...props}>{props.children}</Menu>;
};

export default MenuH;
