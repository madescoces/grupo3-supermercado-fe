import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { Producto } from 'src/model/producto/producto'

interface IDataGridComponent {
  products: Producto[]
}

export const DatagridComponent = ({ products }: IDataGridComponent) => {
  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'ID Producto', width: 120 },
    { field: 'col2', headerName: 'Nombre Producto', width: 200 },
    { field: 'col3', headerName: 'Nombre Góndola', width: 200 },
    { field: 'col4', headerName: 'Descripción Presentación', width: 400 },
  ]

  const getRows = (): GridRowsProp => {
    return products.map((element, index) => ({
      id: index,
      col1: element.productoId,
      col2: element.productoNombre,
      col3: element.gondolaNombre,
      col4: element.presentacionDesc,
    })) as GridRowsProp
  }

  return <DataGrid className="grid" columns={columns} rows={getRows()} />
}
