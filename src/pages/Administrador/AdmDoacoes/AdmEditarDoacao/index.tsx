import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { editDoacaoAdmService } from "api/admin/doacao/admDoacaoAPI";
import AdmListSelectUserH from "components/AdmListSelectUserH";
import TitleH from "components/TitleH";
import dayjs from "dayjs";
import { useSnackbar } from "notistack";
import AdmBodyH from "pages/Administrador/components/AdmBodyH";
import { AdmContainer } from "pages/Administrador/components/AdmContainerH/style";
import AdmHeaderH from "pages/Administrador/components/AdmHeaderH";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    selectSelectedDonationObjectRedux
} from "store/admDonationSlice";
import { CriarEditarDoacaoDTO } from "types/admDTOTypes";
import {
    StatusDoacao,
    TipoDoacaoAdm,
    TipoDoadoresAdm,
} from "types/admTypes";
import {
    maskForValueInReal,
    maskForValueUnit,
    transformToNumber,
} from "utils/masks";
import * as yup from "yup";
import AdmSelectStatusDoacao from "../AdmAdicionarDoacao/components/AdmSelectStatusDoacao";
import AdmSelectTiposDoadoresAdm from "../AdmAdicionarDoacao/components/AdmSelectTipoDoadoresAdm";
import AdmSelectTiposDoacaoAdm from "../AdmAdicionarDoacao/components/AdmSelectTiposDoacaoAdm";
import AnonimoForms from "../AdmAdicionarDoacao/components/AnonimoForms";
import { AdmAdicionarEditarDoacaoForm } from "../AdmAdicionarDoacao/style";

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

const AdmEditarDoacao = () => {
    const dispatch = useDispatch();
    const objectEdit = useSelector(selectSelectedDonationObjectRedux);
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
        setError,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [doador, setDoador] = useState<TipoDoadoresAdm>(
        objectEdit.anonimo ? "anonimo" : "membro",
    );
    const [tipoDoacao, setTipoDoacao] = useState<TipoDoacaoAdm>(
        objectEdit.objeto ? "objeto" : "dinheiro",
    );
    const [statusDoacao, setStatusDoacao] = useState<StatusDoacao>();

    const { enqueueSnackbar } = useSnackbar();
    const navigation = useNavigate();

    const onSubmit = async (data: any) => {
        if (!validateForms()) return;

        const dto: CriarEditarDoacaoDTO = {
            ...data,
            valor: transformToNumber(data.valor),
            status: statusDoacao || data.status,
        };
        try {
            const response = await editDoacaoAdmService(objectEdit.id, dto);
            enqueueSnackbar("Doação editada com sucesso!", {
                variant: "success",
            });
            navigation(-1);
        } catch (error) {
            console.error(error);
        }
    };

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
            if (!getValues("nameObjeto") || getValues("nameObjeto") == "") {
                setError("nameObjeto", {
                    type: "required",
                    message: "Digite o nome do objeto",
                });
                value = false;
            }
            if (!getValues("valor") || getValues("valor")?.includes("0")) {
                setError("valor", {
                    type: "required",
                    message: "Digite a quantidade do objeto",
                });
                value = false;
            }
        }

        return value;
    }

    useEffect(() => {
        if (objectEdit) {
            setValue("date", objectEdit.date || dayjs().toDate());
            setValue("dateEntregue", objectEdit.dateEntregue || undefined);
            setValue("emailDonator", objectEdit.emailDonator || undefined);
            setValue("idDonator", objectEdit.idDonator || undefined);
            setValue("isAnonimo", objectEdit.anonimo || false);
            setValue("isObjeto", objectEdit.objeto || false);
            setValue("nameDonator", objectEdit.nameDonator || undefined);
            setValue("nameObjeto", objectEdit.nameObjeto || undefined);
            setValue("status", objectEdit.status || StatusDoacao.PENDENTE);
            setValue(
                "telefoneDonator",
                objectEdit.telefoneDonator || undefined,
            );
            setValue(
                "valor",
                objectEdit.objeto
                    ? `${objectEdit.valor} UN`
                    : new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(objectEdit.valor || 0),
            );
            setStatusDoacao(objectEdit.status || undefined);
        }
    }, [objectEdit]);

    return (
        <AdmContainer>
            <AdmHeaderH
                title="Editar doação"
                goBack
            />
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
                        selectProps={{ error: !doador, defaultValue: doador }}
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
                            selectedMember={{
                                id: objectEdit.idDonator || "",
                                email: "",
                                imagem: "",
                                nome: "",
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
                            error: !!errors["valor"],
                            defaultValue: tipoDoacao,
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
                        <div
                            style={{
                                display: "grid",
                                rowGap: 8,
                                marginTop: 16,
                                maxWidth: 400,
                            }}
                        >
                            <TextField
                                inputProps={{ ...register("nameObjeto") }}
                                label="Nome do objeto"
                                error={!!errors["nameObjeto"]}
                                helperText={errors["nameObjeto"]?.message}
                            />
                            <TextField
                                label="Quantidade de objetos"
                                inputProps={{
                                    ...register("valor"),
                                    onChange: (e) =>
                                        setValue("valor", maskForValueUnit(e)),
                                }}
                                sx={{ minWidth: 400, mt: 1 }}
                                error={!!errors["valor"]}
                                helperText={errors["valor"]?.message}
                            />
                        </div>
                    )}
                    <TitleH
                        textStyle={{ fontWeight: "500" }}
                        size="short"
                        color="black"
                    >
                        Status da doação
                    </TitleH>
                    <AdmSelectStatusDoacao
                        value={statusDoacao}
                        isObjeto={tipoDoacao === "objeto"}
                        onSelect={(status) => {
                            setValue("status", status);
                            setStatusDoacao(status);
                        }}
                        selectProps={{
                            error: !!errors["status"],
                            value: statusDoacao,
                        }}
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
                            value={dayjs(getValues("date"))}
                            sx={{ width: 300 }}
                        />
                        {tipoDoacao === "objeto" && (
                            <DatePicker
                                label="Data do recebimento da doação"
                                format="DD/MM/YYYY"
                                slotProps={{
                                    textField: {
                                        inputProps: {
                                            ...register("dateEntregue"),
                                            onChange: (e: any) =>
                                                setValue("dateEntregue", e?.toDate() || dayjs().toDate()),
                                        },
                                    },
                                }}
                                value={dayjs(getValues("dateEntregue"))}
                                sx={{ width: 300 }}
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
                        Editar
                    </Button>
                </AdmAdicionarEditarDoacaoForm>
            </AdmBodyH>
        </AdmContainer>
    );
};

export default AdmEditarDoacao;
