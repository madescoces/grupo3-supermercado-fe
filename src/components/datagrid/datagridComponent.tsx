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
  handleRowClick: (id:number) => void
}

export const DatagridComponent = ({ products, handleRowClick }: IDataGridComponent) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: `var(--tableHead)`,
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
      title: 'Presentación',
      aligment: 'right',
    },
  ]

  const tableData:ITableList = {
    data: products,
    titles: tableTitles
  }  
  
  const table = new TableList(tableData)

  return (
    <TableContainer className="grid" component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {table.titles.map((title, index)=><StyledTableCell key={index} align={title.aligment}>{title.title}</StyledTableCell>)}            
          </TableRow>
        </TableHead>
        <TableBody>
          {table.data.map((row, index) => (
            <StyledTableRow key={index} onClick={() => handleRowClick(row.id)}>              
              <StyledTableCell component="th" scope="row">
                {row.id_producto}
              </StyledTableCell>
              <StyledTableCell align="right">{row.producto}</StyledTableCell>
              <StyledTableCell align="right">{row.gondola}</StyledTableCell>
              <StyledTableCell align="right">{row.presentacion}</StyledTableCell>              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )  
}
