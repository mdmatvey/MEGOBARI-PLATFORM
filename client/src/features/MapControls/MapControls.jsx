import { useContext, useEffect, useState } from "react";
import { Button, Container, Divider, FormControl, InputLabel, MenuItem, Select, Slider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "../../shared/consts/styles/styleConsts";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import EmptyCart from "../../entities/EmptyCart/EmptyCart";

const MapControls = observer(({ sliderOrientation, controlsSliderXS, controlsParamsXS }) => {
  const { mapStore } = useContext(Context)

  const [teaType, setTeaType] = useState('black')
  const [weightMultiplier, setWeightMultiplier] = useState(1)

  useEffect(() => {
    switch(teaType) {
        case 'black': 
            setWeightMultiplier(5)
            break;
        case 'green':
            setWeightMultiplier(5)
            break;
        case 'white':
            setWeightMultiplier(1)
            break;
        case 'gaba':
            setWeightMultiplier(2.9)
            break;
        case 'oolong':
            setWeightMultiplier(3)
            break;
        case 'roasted':
            setWeightMultiplier(3)
            break;
        case 'puer':
            setWeightMultiplier(2.9)
            break;
        default:
            setWeightMultiplier(1)
            break;
    }
  }, [teaType])

  return ( 
        <ThemeProvider theme={theme}>
            <Container sx={{ height: '100%' }}>
                <Grid container height={'100%'} width={'100%'} sx={{ margin: '0 auto' }}>
                    <Grid item xs={controlsSliderXS}>
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
                            < >
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
                                        <MenuItem value={'gaba'}>Габа</MenuItem>
                                        <MenuItem value={'oolong'}>Улун</MenuItem>
                                        <MenuItem value={'roasted'}>Жаренный</MenuItem>
                                        <MenuItem value={'puer'}>Пуэр</MenuItem>
                                    </Select>
                                </FormControl>
                                <Typography variant="h5" sx={{ marginTop: 2}}>Выбрано {mapStore.pickedRects.length * 10} м&#xB2;</Typography> 
                                <Divider sx={{ marginTop: 2}} />
                                <Typography variant="h5" sx={{ marginTop: 2}}>Чая будет получено {mapStore.pickedRects.length * 0.1 * weightMultiplier} кг</Typography> 
                                <Divider sx={{ marginTop: 2}} />
                                <Typography variant="h5" sx={{ marginTop: 2}}s>Стоимость: {mapStore.pickedRects.length * 3500} ₽</Typography> 
                                <Button variant="contained" sx={{ marginTop: 2}}>Купить</Button>
                            </>
                        }    
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
})
 
export default MapControls;