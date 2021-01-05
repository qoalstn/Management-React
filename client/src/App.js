import "./App.css";
// import { Component } from "react";
import React from "react";
import Customer from "./components/Customer.js";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((c) => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  img={c.img}
                  birth={c.birth}
                  job={c.job}
                  name={c.name}
                  gender={c.gender}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const customers = [
  {
    id: "1",
    img: "https://placeimg.com/300/100/1",
    name: "Aria",
    birth: "2008088",
    gender: "female",
    job: "student",
  },
  {
    id: "2",
    img: "https://placeimg.com/300/100/2",
    name: "Star",
    birth: "20080977",
    gender: "male",
    job: "student",
  },
  {
    id: "3",
    img: "https://placeimg.com/300/100/3",
    name: "kei",
    birth: "20887088",
    gender: "female",
    job: "student",
  },
];

export default withStyles(styles)(App);
