import SettingsIcon from '@mui/icons-material/Settings';
import { Typography } from '@mui/material';
import theme from '../../shared/consts/styles/styleConsts';
import './styles.css'

const Settings = () => {
    return (  
        <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <SettingsIcon className='settingsGear' style={{ width: '40vw', height: '40vh', color: theme.palette.primary.main }} />
            <Typography variant="h2" component="p">Здесь пока ничего нет 😕</Typography>
        </div>
    );
}
 
export default Settings;