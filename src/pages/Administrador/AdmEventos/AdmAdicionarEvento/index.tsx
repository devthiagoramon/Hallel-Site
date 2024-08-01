import { yupResolver } from "@hookform/resolvers/yup";
import Textarea from "@mui/joy/Textarea";
import { Button, IconButton, Switch, TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { adicionarEventService } from "api/admin/eventos/eventosAdmAPI";
import AdmLocationInput from "components/AdmLocationInput";
import SelectImageContainerH from "components/SelectImageContainerH";
import TitleH from "components/TitleH";
import dayjs from "dayjs";
import { CaretLeft } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AddEventAdmDTO, LocationMapType } from "types/admDTOTypes";
import { maskForValueInReal } from "utils/masks";
import * as yup from "yup";
import {
    AdmAdicionarEditarEventoContainer,
    AdmAdicionarEditarEventoForm,
    AdmAdicionarEditarEventoInputs,
} from "./style";

const schema = yup
    .object({
        titulo: yup.string().required("Digite um titulo!").trim(),
        descricao: yup.string().trim(),
        date: yup.string().required("Digite uma data!"),
        localizacao: yup
            .string()
            .required("Digite uma localização")
            .trim(),
        valorDoEvento: yup.string(),
        destaque: yup.boolean(),
    })
    .required();
interface SchemaAdicionarEventoType {
    titulo: string;
    descricao: string;
    date: Date;
    localizacao: string;
    valorDoEvento?: string;
    destaque?: boolean;
}

const AdmAdicionarEvento = () => {
    const navigator = useNavigate();

    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [banner, setBanner] = useState<
        string | ArrayBuffer | undefined
    >();
    const [imagem, setImagem] = useState<
        string | ArrayBuffer | undefined
    >();
    const [errorBanner, setErrorBanner] = useState<boolean>(false);
    const [errorImagem, setErrorImagem] = useState<boolean>(false);

    const [isPago, setIsPago] = useState<boolean>(false);
    const [locationInfos, setLocationInfos] =
        useState<LocationMapType>();

    const handleGoBack = () => {
        navigator(-1);
    };

    const onSubmit = async (data: any) => {
        if (!validateForms()) {
            return;
        }

        try {
            const dto: AddEventAdmDTO = {
                banner: String(banner),
                date: dayjs(data.date).toDate(),
                descricao: data.descricao || null,
                destaque: data.destaque,
                imagem: String(imagem),
                localEvento: {
                    latitude: locationInfos?.lat,
                    localizacao: data.localizacao,
                    longitude: locationInfos?.lng,
                },
                titulo: data.titulo,
                valorDoEvento: data.valorDoEvento || 0,
            };
            const response = await adicionarEventService(dto);

            if (response) {
                navigator(-1);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const validateForms = () => {
        let value = false;
        console.log("Validate");
        if (imagem && imagem !== "") {
            value = true;
            setErrorImagem(false);
        } else {
            value = false;
            setErrorImagem(true);
        }
        if (banner && banner !== "") {
            value = true;
            setErrorBanner(false);
        } else {
            value = false;
            setErrorBanner(true);
        }

        return value;
    };

    return (
        <AdmAdicionarEditarEventoContainer>
            <TitleH color="black" size="medium">
                <IconButton onClick={handleGoBack}>
                    <CaretLeft size={32} />
                </IconButton>{" "}
                Adicionar evento
            </TitleH>
            <AdmAdicionarEditarEventoForm onSubmit={handleSubmit(onSubmit)}>
                <label className="form-controller">Banner</label>
                <SelectImageContainerH
                    error={errorBanner}
                    style={{ width: "100%", height: 425 }}
                    setValue={setBanner}
                    minHeigth="375"
                    minWidth="1440"
                    value={banner}
                />
                <label className="form-controller">Foto do evento</label>
                <SelectImageContainerH
                    error={errorImagem}
                    style={{ width: "70%", height: 375 }}
                    setValue={setImagem}
                    minHeigth="375"
                    minWidth="875"
                    value={imagem}
                />
                <AdmAdicionarEditarEventoInputs>
                    <div className="input-container">
                        <label className="form-controller">Titulo</label>
                        <TextField
                            inputProps={{ ...register("titulo") }}
                            label="Titulo"
                            error={!!errors["titulo"]}
                            helperText={errors["titulo"]?.message}
                        />
                    </div>
                    <div className="input-container">
                        <label className="form-controller">Descrição</label>
                        <Textarea
                            {...register("descricao")}
                            minRows={2}
                            placeholder="Descrição"
                        />
                    </div>
                    <div className="input-container">
                        <label className="form-controller">Data e horário</label>
                        <DateTimePicker
                            label="Data e horário"
                            disablePast
                            slotProps={{
                                textField: {
                                    error: !!errors["date"],
                                    helperText: errors["date"]?.message,
                                    ...register("date"),
                                },
                            }}
                        />
                    </div>
                    <div className="input-container">
                        <label className="form-controller">Localização</label>
                        <AdmLocationInput
                            onPlaceSelect={(place) =>
                                setValue("localizacao", place)
                            }
                            onLocationSelect={(location) =>
                                setLocationInfos(location)
                            }
                            place={getValues("localizacao")}
                            textFieldProps={{
                                error: !!errors["localizacao"],
                                helperText: errors["localizacao"]?.message,
                            }}
                        />
                    </div>
                    <div className="input-container">
                        <label className="form-controller">
                            Destacar evento?
                        </label>
                        <Switch
                            color="primary"
                            size="medium"
                            value={getValues("destaque")}
                            onChange={(e, checked) => setValue("destaque", checked)}
                        />
                    </div>
                    <div className="input-container">
                        <label className="form-controller">É pago?</label>
                        <Switch
                            color="primary"
                            size="medium"
                            value={isPago}
                            onChange={(e, checked) => setIsPago(checked)}
                        />
                    </div>
                    {isPago && (
                        <div className="input-container">
                            <label className="form-controller">
                                Valor do evento
                            </label>
                            <TextField
                                inputProps={{
                                    ...register("valorDoEvento"),
                                    onChange: (e) => {
                                        setValue("valorDoEvento", maskForValueInReal(e));
                                    },
                                }}
                            />
                        </div>
                    )}
                </AdmAdicionarEditarEventoInputs>
                <Button
                    variant="contained"
                    type="submit"
                    sx={{ width: "40%", mt: 4 }}
                >
                    Adicionar evento
                </Button>
            </AdmAdicionarEditarEventoForm>
        </AdmAdicionarEditarEventoContainer>
    );
};

export default AdmAdicionarEvento;
