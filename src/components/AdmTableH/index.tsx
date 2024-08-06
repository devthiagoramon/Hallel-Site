import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import NotFoundTableComponentH from "components/NotFoundTableComponent";

interface AdmTableHProps extends DataGridProps {
    titleNotFound: string;
}

const AdmTableH = ({ titleNotFound, ...props }: AdmTableHProps) => {
    return (
        <DataGrid
            slots={{
                noRowsOverlay: () => (
                    <NotFoundTableComponentH title={titleNotFound} />
                ),
                noResultsOverlay: () => (
                    <NotFoundTableComponentH title={titleNotFound} />
                ),
            }}
            sx={{ height: 600, maxHeight: "100%" }}
            hideFooter
            {...props}
        />
    );
};

export default AdmTableH;
