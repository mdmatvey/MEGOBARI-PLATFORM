import AddBoxIcon from '@mui/icons-material/AddBox';
import { Typography } from '@mui/material';
import './styles.css'

const EmptyCart = () => {
    return (  
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '20px 0' }}>
            <AddBoxIcon 
                className='addSector'
                sx={{ fontSize: 200 }} 
            />
            <Typography>Вы не отметили ни одного сектора</Typography>
        </div>
    );
}
 
export default EmptyCart;