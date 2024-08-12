import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { criarDoacaoAdmService } from "api/admin/doacao/admDoacaoAPI";
import AdmListSelectUserH from "components/AdmListSelectUserH";
import TitleH from "components/TitleH";
import dayjs from "dayjs";
import { useSnackbar } from "notistack";
import AdmBodyH from "pages/Administrador/components/AdmBodyH";
import { AdmContainer } from "pages/Administrador/components/AdmContainerH/style";
import AdmHeaderH from "pages/Administrador/components/AdmHeaderH";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CriarDoacaoDTO, DoacaoObjetoDTO } from "types/admDTOTypes";
import {
    StatusDoacao,
    TipoDoacaoAdm,
    TipoDoadoresAdm,
} from "types/admTypes";
import { maskForValueInReal, transformToNumber } from "utils/masks";
import * as yup from "yup";
import AdmObjetoDoacaoH from "./components/AdmObjetoDoacaoH";
import AdmSelectStatusDoacao from "./components/AdmSelectStatusDoacao";
import AdmSelectTiposDoadoresAdm from "./components/AdmSelectTipoDoadoresAdm";
import AdmSelectTiposDoacaoAdm from "./components/AdmSelectTiposDoacaoAdm";
import AnonimoForms from "./components/AnonimoForms";
import { AdmAdicionarEditarDoacaoForm } from "./style";

export type FormDoacao = {
    isAnonimo?: boolean | undefined;
    nameDonator?: string | undefined;
    telefoneDonator?: string | undefined;
    emailDonator?: string | undefined;
    date: Date;
    dateEntregue?: Date | undefined;
    isObjeto?: boolean | undefined;
    nameObjeto?: string | undefined;
    valor?: string | undefined;
    status: NonNullable<StatusDoacao>;
};

const schema = yup
    .object({
        isAnonimo: yup.boolean(),
        idDonator: yup.string(),
        nameDonator: yup.string(),
        telefoneDonator: yup.string().matches(/\(\d{2}\) \d{5}-\d{4}/gm, {
            excludeEmptyString: true,
            message: "Digite um telefone válido!",
        }),
        emailDonator: yup.string().email("Digite um e-mail valido!"),
        valor: yup.string(),
        date: yup.date().required("Digite uma data"),
        dateEntregue: yup.date(),
        isObjeto: yup.boolean(),
        nameObjeto: yup.string(),
        status: yup
            .string()
            .oneOf(Object.values(StatusDoacao))
            .required("Selecione o estado da doação"),
    })
    .required();

const AdmAdicionarEditarDoacao = () => {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
        setError,
    } = useForm({ resolver: yupResolver(schema) });

    const { enqueueSnackbar } = useSnackbar();
    const navigation = useNavigate();

    const onSubmit = async (data: any) => {
        if (!validateForms()) return;

        if (data.isObjeto) {
            listObjects.forEach(async (object) => {
                const dto: CriarDoacaoDTO = {
                    ...data,
                    valor: object.quantidade,
                    nameObjeto: object.nameObject,
                };
                try {
                    const response = await criarDoacaoAdmService(dto);
                    enqueueSnackbar(
                        `Doação do ${object.nameObject} criada com sucesso!`,
                        {
                            variant: "success",
                        },
                    );
                    navigation(-1);
                } catch (error) {
                    console.error(error);
                }
            });
        } else {
            const dto: CriarDoacaoDTO = {
                ...data,
                valor: transformToNumber(data.valor),
            };
            try {
                const response = await criarDoacaoAdmService(dto);
                enqueueSnackbar("Doação criada com sucesso!", {
                    variant: "success",
                });
                navigation(-1);
            } catch (error) {
                console.error(error);
            }
        }
    };

    const [doador, setDoador] = useState<TipoDoadoresAdm>();
    const [tipoDoacao, setTipoDoacao] = useState<TipoDoacaoAdm>();
    const [listObjects, setListObjects] = useState<DoacaoObjetoDTO[]>(
        [],
    );

    function validateForms() {
        let value = true;
        if (getValues("isAnonimo")) {
            if (!getValues("nameDonator")) {
                setError("nameDonator", {
                    type: "required",
                    message: "Digite o nome!",
                });
                value = false;
            }
            if (!getValues("emailDonator")) {
                setError("emailDonator", {
                    type: "required",
                    message: "Digite o e-mail!",
                });
                value = false;
            }
            if (!getValues("telefoneDonator")) {
                setError("telefoneDonator", {
                    type: "required",
                    message: "Digite o telefone!",
                });
                value = false;
            }
        } else {
            if (!getValues("idDonator")) {
                setError("idDonator", {
                    type: "required",
                    message: "Selecione um usuário",
                });
                value = false;
            }
        }

        if (getValues("isObjeto")) {
            if (listObjects.length === 0) {
                value = false;
            }
        }

        return value;
    }

    return (
        <AdmContainer>
            <AdmHeaderH title="Adicionar doação" goBack />
            <AdmBodyH>
                <AdmAdicionarEditarDoacaoForm
                    onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}
                >
                    <TitleH
                        textStyle={{ fontWeight: "500" }}
                        size="short"
                        color="black"
                    >
                        Doador
                    </TitleH>
                    <AdmSelectTiposDoadoresAdm
                        onSelect={(tipo) => {
                            setDoador(tipo);
                            if (tipo === "anonimo") {
                                setValue("isAnonimo", true);
                                setValue("idDonator", undefined);
                                setValue("nameDonator", undefined);
                                setValue("emailDonator", undefined);
                            } else {
                                setValue("isAnonimo", false);
                            }
                        }}
                        selectProps={{ error: !doador }}
                    />
                    {doador === "anonimo" && (
                        <AnonimoForms
                            setValue={setValue}
                            error={errors}
                            register={register}
                        />
                    )}
                    {doador === "membro" && (
                        <AdmListSelectUserH
                            containerStyle={{ marginTop: 16 }}
                            onSelect={(user) => {
                                setValue("idDonator", user.id);
                                setValue("nameDonator", user.nome);
                                setValue("emailDonator", user.email);
                            }}
                            containerUserStyle={{
                                borderColor: !!errors["idDonator"]
                                    ? "#F44336"
                                    : "rgba(0,0,0,0.15)",
                            }}
                        />
                    )}
                    <TitleH
                        textStyle={{ fontWeight: "500" }}
                        size="short"
                        color="black"
                    >
                        Tipo da doação
                    </TitleH>
                    <AdmSelectTiposDoacaoAdm
                        onSelect={(tipo) => {
                            setTipoDoacao(tipo);
                            if (tipo === "objeto") {
                                setValue("isObjeto", true);
                            } else {
                                setValue("isObjeto", false);
                            }
                        }}
                        selectProps={{
                            error:
                                !!errors["valor"] ||
                                (getValues("isObjeto") && listObjects.length === 0),
                        }}
                    />
                    {tipoDoacao === "dinheiro" && (
                        <>
                            <br />
                            <TextField
                                label="Valor da doação"
                                inputProps={{
                                    ...register("valor"),
                                    onChange: (e) =>
                                        setValue("valor", maskForValueInReal(e)),
                                }}
                                sx={{ minWidth: 400, mt: 4 }}
                                error={!!errors["valor"]}
                                helperText={errors["valor"]?.message}
                            />
                        </>
                    )}
                    {tipoDoacao === "objeto" && (
                        <AdmObjetoDoacaoH
                            listObjects={listObjects}
                            setListObjects={setListObjects}
                            error={
                                listObjects.length > 0 ? false : "Insira um objeto"
                            }
                        />
                    )}
                    <TitleH
                        textStyle={{ fontWeight: "500" }}
                        size="short"
                        color="black"
                    >
                        Status da doação
                    </TitleH>
                    <AdmSelectStatusDoacao
                        isObjeto={getValues("isObjeto")}
                        onSelect={(status) => setValue("status", status)}
                        selectProps={{ error: !!errors["status"] }}
                    />
                    <TitleH
                        textStyle={{ fontWeight: "500" }}
                        size="short"
                        color="black"
                    >
                        Data da doação
                    </TitleH>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            columnGap: "1rem",
                            width: "100%",
                        }}
                    >
                        <DatePicker
                            label="Data da doação"
                            format="DD/MM/YYYY"
                            defaultValue={dayjs()}
                            onChange={(e) =>
                                setValue("date", e?.toDate() || dayjs().toDate())
                            }
                            slotProps={{
                                textField: {
                                    inputProps: {
                                        ...register("date"),
                                    },
                                    error: !!errors["date"],
                                    helperText: errors["date"]?.message,
                                },
                            }}
                            sx={{ width: 300 }}
                            disablePast
                        />
                        {getValues("isObjeto") && (
                            <DatePicker
                                label="Data do recebimento da doação"
                                format="DD/MM/YYYY"
                                slotProps={{
                                    textField: {
                                        inputProps: {
                                            ...register("dateEntregue"),
                                            onChange: (e: any) =>
                                                setValue("dateEntregue", e.target.value),
                                        },
                                    },
                                }}
                                sx={{ width: 300 }}
                                disablePast
                            />
                        )}
                    </div>

                    <br />
                    <Button
                        sx={{ minWidth: 200, height: 45, mt: 4 }}
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Adicionar
                    </Button>
                </AdmAdicionarEditarDoacaoForm>
            </AdmBodyH>
        </AdmContainer>
    );
};

export default AdmAdicionarEditarDoacao;
