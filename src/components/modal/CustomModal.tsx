import './CustomModal.css'
import { Modal, IconButton, Card, CardContent, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { BigProducto } from 'model/producto/bigproducto'

export interface CustomModalProps {
  producto: BigProducto
  open: boolean
  onClose: () => void
}

export const CustomModal = ({ producto, open = false, onClose }: CustomModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Card elevation={3} style={{ maxWidth: 400, margin: '20px auto' }}>
        <CardContent>
          <IconButton className="modal-close" aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>          
          <Typography color="textSecondary" gutterBottom>
            {producto.id_producto}
          </Typography>

          <Typography variant="subtitle2" color="textSecondary">
            <strong>ID de Reemplazo:</strong> {producto.id_reemplazo}
          </Typography>

          <Typography variant="subtitle2" color="textSecondary">
            <strong>Fecha:</strong> {producto.fecha}
          </Typography>

          <Typography variant="subtitle2" color="textSecondary">
            <strong>Presentación:</strong> {producto.presentacion}
          </Typography>

          <Typography variant="subtitle2" color="textSecondary">
            <strong>Fila:</strong> {producto.fila}
          </Typography>

          <Typography variant="subtitle2" color="textSecondary">
            <strong>Góndola:</strong> {producto.gondola}
          </Typography>

          <Typography variant="subtitle2" color="textSecondary">
            <strong>Sector:</strong> {producto.sector}
          </Typography>

          <Typography variant="subtitle2" color="textSecondary">
            <strong>Repositor:</strong> {producto.repositor}
          </Typography>

          <Typography variant="subtitle2" color="textSecondary">
            <strong>Empresa:</strong> {producto.empresa}
          </Typography>

          <Typography variant="subtitle2" color="textSecondary">
            <strong>Domicilio de la Empresa:</strong> {producto.domicilio_empresa}
          </Typography>
        </CardContent>
      </Card>      
    </Modal>
  )
}
