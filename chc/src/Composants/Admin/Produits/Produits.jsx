import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import { DeleteOutline } from "@material-ui/icons";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { useEffect, useState } from "react";
import {
  delete_produit,
  get_produits,
} from "../../../Redux/Actions/produitActions";
import "./produits.css";
import { Link } from "react-router-dom";

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

function Produits({history}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_produits());
  }, []);

  const produit = useSelector((state) => state.produitReducers.produits);

  const handleDelete = (id) => {
    if (window.confirm("Etes-vous sur de le vouloir supprimé?")) {
      dispatch(delete_produit(id),history);
      window.confirm("Produit supprimé avec succées");
    }
  };
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
    <div className="produit">
      <Link to="/AjoutProduit">
        {" "}
        <button className="addProductButton">
          Ajouter un nouveau produits
        </button>
      </Link>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1000 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Nom du produit</StyledTableCell>
              <StyledTableCell align="center">Image du produit</StyledTableCell>
              <StyledTableCell align="center">Prix du produit</StyledTableCell>
              <StyledTableCell align="center">Catégories</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {produit
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product) => (
                <StyledTableRow key={product._id}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {product.nom}
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ minWidth: 50 }}>
                    <img src={product.image} className="productListImg" />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {product.prix}Dt
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {product.categorie}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <i class="fas fa-edit"></i>
                    <DeleteOutline
                      className="productListDelete"
                      onClick={() => handleDelete(product._id)}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={produit.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}

export default Produits;
