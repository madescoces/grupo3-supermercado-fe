import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from '@mui/material'
import { ITableList, ITitle } from 'src/interfaces/interfaces'
import { Producto } from 'src/model/producto/producto'
import { TableList } from 'src/model/tablelist/tablelist'

interface IDataGridComponent {
  products: Producto[]
}

export const DatagridComponent = ({ products }: IDataGridComponent) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }))

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }))

  const tableTitles:ITitle[] = [
    {
      title: 'ID Producto',
      aligment: undefined,
    },
    {
      title: 'Producto',
      aligment: 'right',
    },
    {
      title: 'Góndola',
      aligment: 'right',
    },
    {
      title: 'Descripción',
      aligment: 'right',
    },
  ]

  const tableData:ITableList = {
    data: products,
    titles: tableTitles
  }  
  
  const table = new TableList(tableData)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {table.titles.map((title)=><StyledTableCell align={title.aligment}>{title.title}</StyledTableCell>)}            
          </TableRow>
        </TableHead>
        <TableBody>
          {table.data.map((row, index) => (
            <StyledTableRow key={index}>
              
              <StyledTableCell component="th" scope="row">
                {row.productoId}
              </StyledTableCell>
              <StyledTableCell align="right">{row.productoNombre}</StyledTableCell>
              <StyledTableCell align="right">{row.gondolaNombre}</StyledTableCell>
              <StyledTableCell align="right">{row.presentacionDesc}</StyledTableCell>              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )

  // return <DataGrid className="grid" columns={columns} rows={getRows()} />
}
