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
import { ModalDelete } from "../ModalDelete/ModalDelete";
import ModalEdit from "../ModalEdit/ModalEdit";
import { useState } from "react";

export const StudentsTable = ({ students }) => {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const [selectedRow, setSelectedRow] = useState({
    _id: "",
    nombre: "",
    apellido: "",
    email: "",
    cursos: [],
    myFile: "",
  });

  const handleDeleteClick = (rowData) => {
    setSelectedRow(rowData);
    setOpenModalDelete(true);
  };

  const handleEditClick = (rowData) => {
    setSelectedRow(rowData);
    setOpenModalEdit(true);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 0, width: "70%" }}>
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
            <StudentsTableBody
              students={students}
              handleDeleteClick={handleDeleteClick}
              handleEditClick={handleEditClick}
            />
          </Table>
        </TableContainer>
        <ModalEdit
          openModalEdit={openModalEdit}
          setOpenModalEdit={setOpenModalEdit}
          selectedRow={selectedRow}
        />
        <ModalDelete
          openModalDelete={openModalDelete}
          setOpenModalDelete={setOpenModalDelete}
          selectedRow={selectedRow}
        />
      </div>
    </Box>
  );
};

export default StudentsTable;
