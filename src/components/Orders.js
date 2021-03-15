import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Mannaseh', 'KBR 3RT5'),
  createData(1, '16 Mar, 2019', 'Paul Okoth', 'KCM R45T'),
  createData(2, '16 Mar, 2019', 'Tom Maina', 'KBC E455'),
  createData(3, '16 Mar, 2019', 'Michael Ogiri', 'KAC R567'),
  createData(4, '15 Mar, 2019', 'Bruce Omondi', 'KMC 3E45'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date Lost</TableCell>
            <TableCell> Car Owner</TableCell>
            <TableCell>Number Plate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="default" href="#" onClick={preventDefault}>
          See more cars
        </Link>
      </div>
    </React.Fragment>
  );
}