import {
  Box,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { StudentsTableBody } from "../StudentsTableBody/StudentsTableBody";

export const StudentsTable = ({ students }) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 0, width: "70%" }}>
      {" "}
      {/* Eliminamos padding */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <TableContainer>
          <Table color="primary">
            <TableHead
              sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
            >
              <TableRow>
                <TableCell sx={{ color: "white" }} align="center">
                  nombre
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  apellido
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  email
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  cursos
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  {" "}
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  Editar
                </TableCell>
                <TableCell sx={{ color: "white" }} align="center">
                  Borrar
                </TableCell>
              </TableRow>
            </TableHead>
            <StudentsTableBody students={students} />
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default StudentsTable;
