import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(name, calories, fat, carbs, protein) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein
    };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable(props) {

    return ( <
        TableContainer component = {
            Paper
        } >
        <
        Table aria - label = "simple table"
        style = {
            {
                minWidth: '300px'
            }
        } { ...props
        } >
        <
        TableHead >
        <
        TableRow >
        <
        TableCell > Dessert(100 g serving) < /TableCell> <
        TableCell align = "right" > Calories < /TableCell> <
        TableCell align = "right" > Protein & nbsp;
        (g) < /TableCell> <
        /TableRow> <
        /TableHead> <
        TableBody > {
            rows.map((row) => ( <
                TableRow key = {
                    row.name
                } >
                <
                TableCell scope = "row" > {
                    row.name
                } <
                /TableCell> <
                TableCell align = "right" > {
                    row.calories
                } < /TableCell> <
                TableCell align = "right" > {
                    row.protein
                } < /TableCell> <
                /TableRow>
            ))
        } <
        /TableBody> <
        /Table> <
        /TableContainer>
    );
}