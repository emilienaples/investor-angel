// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports
import TableBasic from 'src/views/tables/TableBasic'
import TableDense from 'src/views/tables/TableDense'
import TableSpanning from 'src/views/tables/TableSpanning'
import TableCustomized from 'src/views/tables/TableCustomized'
import TableCollapsible from 'src/views/tables/TableCollapsible'
import TableStickyHeader from 'src/views/tables/TableStickyHeader'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { useState, useEffect } from 'react'
import { getRequest } from 'src/@core/utils/api'
import { useRouter } from 'next/router'
import { baseUrl } from 'src/config/contants'

const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein }
}



const Debt = () => {

  const router = useRouter()
  const [debtData, setDebtData] = useState([])

  console.log('Annuity Data', debtData)
  

  useEffect(()=> {
    const token = localStorage.getItem("adminInfo")
    console.log('TOKEN...', token)
    

     if(token == "" || token == null) {
        router.push('/')
      }

      getRequest(`${baseUrl}/forms/debt_details/`)
      .then(response => {
        setDebtData(response.data)
      })
      .catch(error => {
        console.error(error);
    });
    
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='#' target='_blank'>
          Debt/Loan
          </Link>
        </Typography>
        {/* <Typography variant='body2'>Tables display sets of data. They can be fully customized</Typography> */}
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='' titleTypographyProps={{ variant: 'h6' }} />
          {/* <TableBasic /> */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>S. No</TableCell>
                  <TableCell align='center'>Credit Card Debt</TableCell>
                  <TableCell align='center'>Margin Debt</TableCell>
                  <TableCell align='center'>Automobile Debt</TableCell>
                  <TableCell align='center'>Student Loan</TableCell>
                  <TableCell align='center'>Mortgage Loan</TableCell>
                  <TableCell align='center'>Other Debt</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {debtData.map((item, index) => {
                  return(
                    <TableRow
                  key={index}
                  sx={{
                    '&:last-of-type td, &:last-of-type th': {
                      border: 0
                    }
                  }}
                >
                  <TableCell component='th' scope='row'>
                    {index+1}
                  </TableCell>
                  <TableCell align='center'>{item?.ccDebt}K</TableCell>
                  <TableCell align='center'>{item?.marginDebt}K</TableCell>
                  <TableCell align='center'>{item?.autoDebt}K</TableCell>
                  <TableCell align='center'>{item?.studentDebt}K</TableCell>
                  <TableCell align='center'>{item?.mortgageDebt}K</TableCell>
                  <TableCell align='center'>{item?.otherDebt}K</TableCell>
                </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Debt
