import { useContext, useEffect, useState } from "react";
import { Button, Divider, FormControl, InputLabel, MenuItem, Select, Slider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "../../shared/consts/styles/styleConsts";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

const MapControls = observer(() => {
  const { mapStore } = useContext(Context)

  const [teaType, setTeaType] = useState('black')
  const [priceMultiplier, setPriceMultiplier] = useState(1)

  useEffect(() => {
    switch(teaType) {
        case 'black': 
            setPriceMultiplier(1)
            break;
        case 'green':
            setPriceMultiplier(2)
            break;
        case 'white':
            setPriceMultiplier(3)
            break;
        default:
            setPriceMultiplier(1)
            break;
    }
  }, [teaType])

  return ( 
        <ThemeProvider theme={theme}>
            <Grid container height={'100%'}>
                <Grid item xs={2}>
                    <Slider
                        sx={{
                            '& input[type="range"]': {
                            WebkitAppearance: 'slider-vertical',
                            },
                        }}
                        orientation="vertical"
                        value={mapStore.scale} 
                        onChange={((e) => mapStore.setScale(e.target.value))}
                        aria-label="Масштаб"
                        min={100}
                        max={300}
                        color={"primary"}
                    />
                </Grid>
                <Grid item xs={9}>
                    {
                    mapStore.pickedRects.length === 0
                    ?
                        'Beps'
                    :
                        <>
                            <FormControl fullWidth>
                                <InputLabel>Сорт</InputLabel>
                                <Select
                                    value={teaType}
                                    label="Сорт"
                                    onChange={(e) => setTeaType(e.target.value)}
                                >
                                    <MenuItem value={'black'}>Черный</MenuItem>
                                    <MenuItem value={'green'}>Зеленый</MenuItem>
                                    <MenuItem value={'white'}>Белый</MenuItem>
                                </Select>
                            </FormControl>
                            <Typography variant="h5">Выбрано {mapStore.pickedRects.length * 10} м&#xB2;</Typography> 
                            <Divider />
                            <Typography variant="h5">Чая будет получено {mapStore.pickedRects.length * 0.5} кг</Typography> 
                            <Divider />
                            <Typography variant="h5">Стоимость: {mapStore.pickedRects.length * 10 * priceMultiplier}$</Typography> 
                            <Button variant="contained">Купить</Button>
                        </>
                    }    
                </Grid>
            </Grid>
        </ThemeProvider>
    );
})
 
export default MapControls;