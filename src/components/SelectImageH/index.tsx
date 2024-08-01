import { useSnackbar } from "notistack";
import { ImageSquare } from "phosphor-react";
import { Dispatch, HTMLProps, SetStateAction, useRef } from "react";
import { CSSProperties } from "styled-components";
import { SelectImageHContainer } from "./style";

interface SelectImageH extends HTMLProps<HTMLInputElement> {
    setSelectedImage: Dispatch<
        SetStateAction<string | ArrayBuffer | undefined>
    >;
    containerStyle?: CSSProperties;
}

const SelectImageH = ({
    setSelectedImage,
    containerStyle,
    ...props
}: SelectImageH) => {
    const refInput = useRef<HTMLInputElement>(null);
    const { enqueueSnackbar } = useSnackbar();

    const handleFileChange = (event: any) => {
        try {
            const file = event.target.files[0];

            if (!file.type.startsWith("image/")) {
                enqueueSnackbar("Selecione uma imagem!", {
                    variant: "error",
                });
            }

            const reader = new FileReader();
            console.log(file);

            reader.onloadend = () => {
                if (!reader.result) {
                    return false;
                }
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        } catch (error) {
            console.error("Cancel file choose");
        }
    };

    return (
        <SelectImageHContainer style={containerStyle}>
            <input
                id="inputPhoto"
                ref={refInput}
                onChange={(e) => handleFileChange(e)}
                type="file"
                {...props}
            />
            <label>Selecionar imagem</label>
            <hr />
            <ImageSquare
                size={24}
                onClick={() => refInput.current?.click()}
            />
        </SelectImageHContainer>
    );
};

export default SelectImageH;
