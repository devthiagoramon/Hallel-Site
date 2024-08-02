import { Empty } from "@phosphor-icons/react";
import TitleH from "components/TitleH";

interface NotFoundTableComponentHProps {
  title: string;
}

const NotFoundTableComponentH = ({
  title,
}: NotFoundTableComponentHProps) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        flexWrap: "wrap",
        height: "100%"
      }}
    >
      <Empty size={80} color="#F44336" />
      <TitleH color="black" size="medium">
        {title}
      </TitleH>
    </div>
  );
};

export default NotFoundTableComponentH;
