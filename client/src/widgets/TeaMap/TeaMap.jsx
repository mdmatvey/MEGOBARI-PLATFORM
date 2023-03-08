import SquareMap from "../../features/SquareMap/SquareMap";
import MapControls from '../../features/MapControls/MapControls'
import { Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import RotateScreen from "../../entities/RotateScreen/RotateScreen";
import { observer } from "mobx-react-lite";

const TeaMap = observer(() => {
    const { userStore } = useContext(Context)

    const [mapXS, setMapXS] = useState(9)
    const [controlsXS, setControlsXS] = useState(3)

    const [controlsSliderXS, setControlsSliderXS] = useState(2)
    const [controlsParamsXS, setControlsParamsXS] = useState(9)
    const [sliderOrientation, setSliderOrientation] = useState('vertical')

    useEffect(() => {
        if (userStore.userWidth < 1100) {
            setMapXS(12)
            setControlsXS(12)

            setControlsSliderXS(12)
            setControlsParamsXS(12)
            setSliderOrientation('horizontal')
        } else if (userStore.userWidth >= 1100) {
            setMapXS(9)
            setControlsXS(3)

            setControlsSliderXS(2)
            setControlsParamsXS(9)
            setSliderOrientation('vertical')
        } 
    }, [userStore.userWidth])

    return ( 
        userStore.userWidth < 550
        ?
            <RotateScreen />
        :
            <Grid container>
                <Grid item xs={mapXS}>
                    <SquareMap />
                </Grid>
                <Grid item xs={controlsXS}>
                    <MapControls 
                        sliderOrientation={sliderOrientation} 
                        controlsSliderXS={controlsSliderXS} 
                        controlsParamsXS={controlsParamsXS} 
                    />
                </Grid>
            </Grid>
    );
})
 
export default TeaMap;