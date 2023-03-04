import { Typography } from "@mui/material";
import ExampleSegment from "../../shared/examples/ExampleSegment";

const PartPurpose = ({ fill, viewbox, d, text }) => {
    return (  
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <ExampleSegment
                fill={fill}
                viewbox={viewbox}
                d={d}
            />
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