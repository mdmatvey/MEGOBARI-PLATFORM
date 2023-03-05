import { Typography } from "@mui/material";

const PartPurpose = ({ component, text }) => {

    return (  
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {component}
            <Typography variant="h6" component="p" fontWeight={'bold'} style={{margin: '0 20px'}}>
                —
            </Typography>
            <Typography variant="h6" component="p" fontWeight={'bold'}>
                {text}
            </Typography>
        </div>
    );
}
 
export default PartPurpose;