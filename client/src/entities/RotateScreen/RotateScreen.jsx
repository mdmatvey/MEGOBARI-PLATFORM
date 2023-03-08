import ScreenRotationIcon from '@mui/icons-material/ScreenRotation';
import { Typography } from '@mui/material';
import './styles.css'

const RotateScreen = () => {
    return (  
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 0', overflow: 'hidden' }}>
          <ScreenRotationIcon sx={{ fontSize: 200 }} className='screenRotate' />
          <Typography sx={{ marginTop: 3, fontSize: '1.1rem' }}>Поверните телефон горизонтально для корректного отображения карты</Typography>
       </div>
    );
}
 
export default RotateScreen;