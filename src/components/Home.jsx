import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
const data = [
    {"Name":"sredha","Course":"mca","Place":"pta","Address":"sruthy bhavan"},
    {"Name":"anju","Course":"mca","Place":"kottyam","Address":"anju bhavan"},
    {"Name":"arun","Course":"mca","Place":"pta","Addrees":"jghgg"}
  ];

const Home = () => {
  return (
    <div>
        <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table"/>
            <Table>
           <TableHead>
            
            <TableRow>
                <TableCell align="center">NAME</TableCell>
                <TableCell>COURSE</TableCell>
                <TableCell>PLACE</TableCell>
                <TableCell>ADDRESS</TableCell>
             


            


            </TableRow>
            </TableHead>
<TableBody>
{data.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell align="right">{item.Name}</TableCell>
            <TableCell align="right">{item.Course}</TableCell>
            <TableCell align="right">{item.Place}</TableCell>
            <TableCell align="right">{item.Address}</TableCell>
            
           
        </TableRow>
))}

    </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Home