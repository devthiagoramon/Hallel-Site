import { useSnackbar } from "notistack";
import { ImageSquare } from "phosphor-react";
import { Dispatch, HTMLProps, SetStateAction, useRef } from "react";
import { SelectImageHContainer } from "./style";

interface SelectImageH extends HTMLProps<HTMLInputElement> {
    setSelectedImage: Dispatch<
        SetStateAction<string | ArrayBuffer | undefined>
    >;
}

const SelectImageH = ({
    setSelectedImage,
    ...props
}: SelectImageH) => {
    const refInput = useRef<HTMLInputElement>(null);
    const { enqueueSnackbar } = useSnackbar();

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];

        if (!file.type.startsWith("image/")) {
            enqueueSnackbar("Selecione uma imagem!", { variant: "error" });
        }

        const reader = new FileReader();

        reader.onloadend = () => {
            if (!reader.result) {
                return false;
            }
            setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <SelectImageHContainer>
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
