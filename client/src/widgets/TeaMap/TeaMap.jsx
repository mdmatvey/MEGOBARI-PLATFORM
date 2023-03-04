import SquareMap from "../../features/SquareMap/SquareMap";
import MapControls from '../../features/MapControls/MapControls'
import { Grid } from "@mui/material";

const TeaMap = () => {

    return ( 
        <Grid container sx={{ marginTop: '5%' }}>
            <Grid item xs={9}>
                <SquareMap />
            </Grid>
            <Grid item xs={3}>
                <MapControls />
            </Grid>
        </Grid>
    );
}
 
export default TeaMap;