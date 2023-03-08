import { useContext, useEffect, useState } from "react";
import { Button, Divider, FormControl, InputLabel, MenuItem, Select, Slider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "../../shared/consts/styles/styleConsts";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import EmptyCart from "../../entities/EmptyCart/EmptyCart";

const MapControls = observer(({ sliderOrientation, controlsSliderXS, controlsParamsXS }) => {
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
            <Grid container height={'100%'} width={'100%'} sx={{ margin: '0 auto' }}>
                <Grid item width={'80%'} xs={controlsSliderXS}>
                    <Slider
                        sx={{
                            '& input[type="range"]': {
                                WebkitAppearance: sliderOrientation === 'vertical' ? 'slider-vertical' : 'slider-horizontal',
                            }
                        }}
                        orientation={sliderOrientation}
                        value={mapStore.scale} 
                        onChange={((e) => mapStore.setScale(e.target.value))}
                        aria-label="Масштаб"
                        min={100}
                        max={300}
                        step={10}
                        marks
                        color={"primary"}
                    />
                </Grid>
                <Grid item xs={controlsParamsXS}>
                    {
                    mapStore.pickedRects.length === 0
                    ?
                        <EmptyCart />
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
                            <Typography variant="h5" sx={{ marginTop: 2}}>Выбрано {mapStore.pickedRects.length * 10} м&#xB2;</Typography> 
                            <Divider sx={{ marginTop: 2}} />
                            <Typography variant="h5" sx={{ marginTop: 2}}>Чая будет получено {mapStore.pickedRects.length * 0.5} кг</Typography> 
                            <Divider sx={{ marginTop: 2}} />
                            <Typography variant="h5" sx={{ marginTop: 2}}s>Стоимость: {mapStore.pickedRects.length * 10 * priceMultiplier}$</Typography> 
                            <Button variant="contained" sx={{ marginTop: 2}}>Купить</Button>
                        </>
                    }    
                </Grid>
            </Grid>
        </ThemeProvider>
    );
})
 
export default MapControls;