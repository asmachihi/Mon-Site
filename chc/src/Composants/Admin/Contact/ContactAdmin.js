import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { useEffect } from "react";
import { get_contacts } from "../../../Redux/Actions/contactActions";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 10,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function ContactAdmin() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_contacts());
  }, []);

  const contact = useSelector((state) => state.contactReducers.contacts);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Nom</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Société</StyledTableCell>
            <StyledTableCell align="center">Téléphone</StyledTableCell>
            <StyledTableCell align="center">Messages</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contact
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((contact) => (
              <StyledTableRow key={contact.nom}>
                <StyledTableCell align="center" component="th" scope="row">
                  {contact.nom}
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ minWidth: 50 }}>
                  {contact.email}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {contact.nom_societe}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {contact.num_tel}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {contact.message}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <i class="fas fa-trash-alt"></i>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={contact.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default ContactAdmin;
