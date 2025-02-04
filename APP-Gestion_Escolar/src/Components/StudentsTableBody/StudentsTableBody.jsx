import { Button, TableBody, TableCell, TableRow } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";

export const StudentsTableBody = ({
  students,
  handleDeleteClick,
  handleEditClick,
}) => {
  return (
    <TableBody>
      {students.map((students) => (
        <React.Fragment key={students._id}>
          <TableRow>
            <TableCell>{students.nombre}</TableCell>
            <TableCell>{students.apellido}</TableCell>
            <TableCell>{students.email}</TableCell>
            <TableCell>{students.cursos}</TableCell>
            <TableCell>{/*foto del alumno*/}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleEditClick(students)}
              >
                <BorderColorIcon />
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDeleteClick(students)}
              >
                <DeleteOutlineIcon />
              </Button>
            </TableCell>
          </TableRow>
        </React.Fragment>
      ))}
    </TableBody>
  );
};
