import {DataGrid, GridColDef, GridRowsProp} from '@mui/x-data-grid'

const rows: GridRowsProp = [
  { id: 1, col1: '1', col2: 'Producto 1', col3: 'Góndola 1', col4: 'Descrición 1' },
  { id: 2, col1: '2', col2: 'Producto 2', col3: 'Góndola 2', col4: 'Descrición 2' },
  { id: 3, col1: '3', col2: 'Producto 3', col3: 'Góndola 3', col4: 'Descrición 3' },
  { id: 4, col1: '4', col2: 'Producto 4', col3: 'Góndola 4', col4: 'Descrición 4' },
  { id: 5, col1: '5', col2: 'Producto 5', col3: 'Góndola 5', col4: 'Descrición 5' },
  { id: 6, col1: '6', col2: 'Producto 6', col3: 'Góndola 6', col4: 'Descrición 6' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'ID Producto', width: 120 },
  { field: 'col2', headerName: 'Nombre Producto', width: 200 },
  { field: 'col3', headerName: 'Nombre Góndola', width: 200 },
  { field: 'col4', headerName: 'Descripción Presentación', width: 400 },
];

export const DatagridComponent = () => {
  return(
    <DataGrid className="grid" columns={columns} rows={rows} />
  )
}