import { ListRounded } from '@mui/icons-material';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'

const EsquerdaBodyCodFinanceiro = () => {
  return (
    <div className="esquerda_body_cf">
      <div className="header_esquerda_cf">
        <h3>Lista de Códigos</h3>
        <ListRounded sx={{ width: "30px", height: "30px", color: "#252525" }} />
      </div>
      <div className="body_esquerda_cf">
        <TableContainer sx={{maxWidth: "100%"}} component={Paper}>
          <Table sx={{width: "100%"}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Número do código</TableCell>
                <TableCell>Descrição</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default EsquerdaBodyCodFinanceiro