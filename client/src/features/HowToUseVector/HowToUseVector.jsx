import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import theme from "../../shared/consts/styles/styleConsts";
import PartPurpose from "../../entities/PartPurpose/PartPurpose";
import ExampleSegment from "../../shared/examples/segment/ExampleSegment";

const HowToUseVector = () => {
    return (  
        <Container sx={{paddingBottom: 10}}>
            <Typography variant="h2" component="h2" fontWeight={'bold'} style={{ marginBottom: 10 }}>
                Карта плантации
            </Typography>
            <Typography variant="body1" component="p" fontSize={'1.5rem'} style={{ marginBottom: 30 }}>
                Перед вами векторная карта нашей плантации, расположенной в Грузии. 
                Её общая площадь составляет около 160 000 м&#xB2;. 
                В данный момент для оформления подписки сдаётся участок 
                площадью 1 га (10 000м&#xB2;). Участки обозначены цветами:
            </Typography>
            <PartPurpose
                component={
                    <ExampleSegment
                        fill={theme.palette.primary.dark}
                        viewbox={"0 0 140 140"}
                        d={"M95.5 12 86 26.5l15.053 11 10.947 8 15 7.5 15 7.5 3 1-32.5 34.018-11.447 11.982H19L1 77l12.5-65.922 63-9.787L95.5 12Z"}
                    />
                }
                text={"Участок пока не доступен для подписки"}
            />
            <PartPurpose
                component={
                    <ExampleSegment
                        fill={theme.palette.primary.main}
                        viewbox={"0 0 140 140"}
                        d={"M22.5 93 20 84.919 4.403 34.5 1 23.5l10.718-22L82.5 16l51-7.922L121 74l18 30.5L32.288 110 22.5 93Z"}
                    />
                }
                text={"Участок доступен для подписки"}
            />
            <PartPurpose
                component={
                    <ExampleSegment
                        fill={'gray'}
                        viewbox={"0 0 70 140"}
                        d={"M43.5 55 62 10.536 55.947 1 43.5 17.5l-6.429 3-8.571 4-9 9.5-1.333 4L15 47.5V56L3.5 84.5 1 96.5v10l3.5 10-1 5.5-.5 6 .5 10.841L16.523 111.5 22 100l12.5-14.5 9-18.5V55Z"}
                    />
                }
                text={"Буферная зона"}
            />
            <Typography variant="body1" component="p" fontSize={'1.5rem'} style={{ marginTop: 20 }}>
                Для оформления подписки нажмите на
                один из доступных участков плантации.
            </Typography>
        </Container>
    );
}
 
export default HowToUseVector;