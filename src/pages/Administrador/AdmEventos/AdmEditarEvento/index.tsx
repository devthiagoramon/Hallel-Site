import { yupResolver } from "@hookform/resolvers/yup";
import Textarea from "@mui/joy/Textarea";
import { Button, IconButton, Switch, TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useQueryClient } from "@tanstack/react-query";
import {
    editarEventAdmService,
    listEventByIdAdmService,
} from "api/admin/eventos/eventosAdmAPI";
import AdmLocationInput from "components/AdmLocationInput";
import SelectImageContainerH from "components/SelectImageContainerH";
import TitleH from "components/TitleH";
import dayjs from "dayjs";
import { ADM_QUERIES } from "hooks/queryConsts";
import { useSnackbar } from "notistack";
import { CaretLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
    AddEditEventAdmDTO,
    LocationMapType,
} from "types/admDTOTypes";
import { maskForValueInReal } from "utils/masks";
import * as yup from "yup";
import {
    AdmAdicionarEditarEventoContainer,
    AdmAdicionarEditarEventoForm,
    AdmAdicionarEditarEventoInputs,
} from "../AdmAdicionarEvento/style";

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

const AdmEditarEvento = () => {
    const { idEvento } = useParams();
    const navigator = useNavigate();
    const queryClient = useQueryClient();

    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const { enqueueSnackbar } = useSnackbar();

    const handleGoBack = () => {
        navigator(-1);
    };

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

    const onSubmit = async (data: any) => {
        if (!validateForms()) {
            return;
        }
        if (!idEvento) {

            return;
        }

        try {
            const dto: AddEditEventAdmDTO = {
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
            const response = await editarEventAdmService(idEvento, dto);
            if (response) {
                enqueueSnackbar("Evento editado com sucesso", {
                    variant: "success",
                });
                queryClient.refetchQueries({
                    queryKey: [ADM_QUERIES.LIST_EVENTS_ADM],
                });
                navigator(-1);
            }
        } catch (error) {
            console.error(error);
            enqueueSnackbar("Error ao editar o evento, tente novamente!", {
                variant: "error",
            });
        }
    };

    const validateForms = () => {
        let value = false;

        if (imagem && imagem !== "") {
            value = true;
            setErrorImagem(false);
        } else {
            value = false;
            setErrorImagem(true);
            enqueueSnackbar("Insira uma imagem para o evento!", {
                variant: "error",
            });
        }
        if (banner && banner !== "") {
            value = true;
            setErrorBanner(false);
        } else {
            value = false;
            setErrorBanner(true);
            enqueueSnackbar("Insira um banner para o evento!", {
                variant: "error",
            });
        }

        return value;
    };
    useEffect(() => {
        async function getEventById() {
            if (!!!idEvento) {
                return;
            }
            try {
                const response = await listEventByIdAdmService(idEvento);
                if (response) {
                    setValue("titulo", response.titulo);
                    setValue("descricao", response.descricao);
                    setValue("destaque", response.destaque || false);
                    setValue(
                        "date",
                        dayjs(response.date).format("DD/MM/YYYY HH:mm"),
                    );
                    setValue("localizacao", response.localEvento.localizacao);
                    if (!!response.valorDoEvento) {
                        setValue(
                            "valorDoEvento",
                            maskForValueInReal(response.valorDoEvento),
                        );
                        setIsPago(true);
                    }

                    setImagem(response.imagem);
                    setBanner(response.banner);
                }
            } catch (error) {
                console.error(error);
            }
        }
        getEventById();
    }, [idEvento]);

    return (
        <AdmAdicionarEditarEventoContainer>
            <TitleH color="black" size="medium">
                <IconButton onClick={handleGoBack}>
                    <CaretLeft size={32} />
                </IconButton>{" "}
                Editar evento
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
                            disablePast
                            // value={dayjs(getValues("date"))}
                            slotProps={{
                                textField: {
                                    error: !!errors["date"],
                                    helperText: errors["date"]?.message,
                                    ...register("date"),
                                },
                            }}
                            onChange={(value) =>
                                setValue("date", value?.toString() || "")
                            }
                            format="DD/MM/YYYY HH:mm"
                            ampm={false}
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
                                value: getValues("localizacao"),
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
                    Editar evento
                </Button>
            </AdmAdicionarEditarEventoForm>
        </AdmAdicionarEditarEventoContainer>
    );
};

export default AdmEditarEvento;
