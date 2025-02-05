import { Box, Button, TextField } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getStudentsName } from "../../services/getStudentsName";
import { getStudents } from "../../services/getStudents";

export const StudentsToolBar = () => {
  const dispatch = useDispatch();

  const [searchName, setSearchName] = useState("");
  const [buttonView, setButtonView] = useState(false);
  const handleSearch = () => {
    dispatch(getStudentsName({ name: searchName }));
    setButtonView(true);
  };
  const handleBack = () => {
    dispatch(getStudents());
    setButtonView(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 16px",
        backgroundColor: "#f8f8f8",
        borderRadius: "8px",
        gap: "12px",
        width: "69%",
        margin: "0 auto",
        mt: 4,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}></Box>
      {buttonView && (
        <Button variant="contained" color="primary" onClick={handleBack}>
          <ArrowBackIosNewIcon />
        </Button>
      )}

      <TextField
        size="small"
        placeholder="Buscar..."
        variant="standard"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        sx={{ flex: 1 }}
      />

      <Button variant="contained" color="primary" onClick={handleSearch}>
        <SearchIcon />
      </Button>
    </Box>
  );
};

export default StudentsToolBar;
