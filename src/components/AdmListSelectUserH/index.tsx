import { LinearProgress, TextField } from "@mui/material";
import { listMembrosAdmService } from "api/admin/membros/admMembrosAPI";
import { MagnifyingGlass } from "phosphor-react";
import {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { CSSProperties } from "styled-components";
import { MembroResponseListDTO } from "types/admDTOTypes";
import UserSelectH from "./components/UserSelectH";
import { AdmListSelectUserHContainer } from "./style";

interface AdmListSelectUserHProps {
    onSelect: (user: MembroResponseListDTO) => void;
    containerUserStyle?: CSSProperties;
    containerStyle?: CSSProperties;
}

const AdmListSelectUserH = ({
    onSelect,
    containerUserStyle,
    containerStyle,
}: AdmListSelectUserHProps) => {
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);
    const [searchText, setSearchText] = useState<string>("");
    const [selectedUser, setSelectedUser] =
        useState<MembroResponseListDTO>();
    const [loading, setLoading] = useState<boolean>(false);

    const [membros, setMembros] = useState<MembroResponseListDTO[]>([]);

    const membrosSearch = useMemo(() => {
        const text = searchText.toLowerCase();

        return Array.from(
            new Set(
                membros.filter((membro) =>
                    membro.nome.toLowerCase().includes(text),
                ),
            ),
        );
    }, [membros, searchText]);

    const containerRef = useRef(null);

    const loadMoreData = useCallback(async () => {
        setLoading(true);

        try {
            const response = await listMembrosAdmService(page, size);
            if (!response || response.length === 0) {
                setLoading(false);
                return;
            }

            setMembros((prev) => [...prev, ...response]);
            setPage((prev) => prev + 1);
        } catch (error) {
            console.error("Error ao ler os membros!");
        }
        setLoading(false);
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const { scrollTop, scrollHeight, clientHeight } =
                containerRef.current as HTMLDivElement;
            if (scrollTop + clientHeight >= scrollHeight && !loading) {
                loadMoreData();
            }
        };
        if (!containerRef.current) return;
        const container = containerRef.current as HTMLDivElement;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            return () =>
                container.removeEventListener("scroll", handleScroll);
        }
    }, [loadMoreData, loading]);

    useEffect(() => {
        loadMoreData();
    }, [loadMoreData]);

    return (
        <AdmListSelectUserHContainer
            style={containerStyle}
            ref={containerRef}
        >
            <LinearProgress
                sx={{
                    position: "absolute",
                    width: "100%",
                    top: 0,
                    left: 0,
                    display: loading ? "block" : "none",
                }}
            />
            <TextField
                label="Procurar por nome"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                sx={{ width: "40%" }}
                InputProps={{
                    endAdornment: <MagnifyingGlass size={24} />,
                }}
            />
            <div className="user-container" style={containerUserStyle}>
                {membrosSearch.map((membro, index) => {
                    return (
                        <UserSelectH
                            key={index}
                            onClick={() => {
                                setSelectedUser(membro);
                                onSelect(membro);
                            }}
                            user={membro}
                            selected={selectedUser === membro}
                        />
                    );
                })}
            </div>
        </AdmListSelectUserHContainer>
    );
};

export default AdmListSelectUserH;
