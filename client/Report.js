import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, email, role, salesInvolved, totalSales) {
  return { name, email, role, salesInvolved, totalSales};
}

const rows = [
  createData('Matt Demon', 'mat@email.com', 'buyer', 4, 450),
  createData('Eliza Holden', 'holden@email.com', 'seller', 2, 1550),
  createData('John Dean', 'dean@test.com', 'buyer', 11, 2340),
  createData('Dave Crypt', 'dave@live.com', 'seller', 17, 3470),
  createData('Heyden Peter', 'peter@email.com', 'buyer', 9, 1250),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Sales Involved</TableCell>
            <TableCell align="right">Total Amount (Sales)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.role}</TableCell>
              <TableCell align="right">{row.salesInvolved}</TableCell>
              <TableCell align="right">{row.totalSales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}