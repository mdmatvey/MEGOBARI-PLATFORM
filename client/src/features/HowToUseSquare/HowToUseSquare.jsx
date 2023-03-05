import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import theme from "../../shared/consts/styles/styleConsts";
import PartPurpose from "../../entities/PartPurpose/PartPurpose";
import ExampleSquare from "../../shared/examples/square/ExampleSquare";

const HowToUseVector = () => {
    return (  
        <Container sx={{paddingBottom: 10}}>
            <Typography variant="h2" component="h2" fontWeight={'bold'} style={{ marginBottom: 10 }}>
                Как пользоваться картой
            </Typography>
            <Typography variant="body1" component="p" fontSize={'1.5rem'} style={{ marginBottom: 20 }}>
                1 сектор равен 10 квадратным метрам
            </Typography>
            <PartPurpose
                component={
                    <ExampleSquare
                        fill={theme.palette.primary.main}
                    />
                }
                text={"Сектор уже занят другим пользователем"}
            />
            <PartPurpose
                component={
                    <ExampleSquare
                        fill={"rgba(88, 132, 92, 0.5)"}
                    />
                }
                text={"Сектор свободен для подписки"}
            />
            <PartPurpose
                component={
                    <ExampleSquare
                        fill={theme.palette.secondary.main}
                    />
                }
                text={"Выбранный вами сектор"}
            />
            <PartPurpose
               component={
                <ExampleSquare
                    fill={"orange"}
                />
            }
                text={"Сектор на который вы подписаны:"}
            />
            <Container>
                <PartPurpose
                    component={
                        <ExampleSquare
                            linearGradient={true}
                            color1={"rgb(252, 164, 4)"}
                            color2={"rgb(252, 4, 4)"}
                            index={1}
                        />
                    }
                    text={"Сектор с чёрным (красным) чаем"}
                />
                <PartPurpose
                    component={
                        <ExampleSquare
                            linearGradient={true}
                            color1={"rgb(252, 164, 4)"}
                            color2={"rgb(77, 179, 0)"}
                            index={2}
                        />
                    }
                    text={"Сектор с зеленым чаем"}
                />
                <PartPurpose
                    component={
                        <ExampleSquare
                            linearGradient={true}
                            color1={"rgb(252, 164, 4)"}
                            color2={"rgb(164, 236, 159)"}
                            index={3}
                        />
                    }
                    text={"Сектор с белым чаем"}
                />
            </Container>
            <Typography variant="body1" component="p" fontSize={'1.5rem'} style={{ marginTop: 10 }}>
                Для оформления подписки отметьте необходимое количество
                секторов, выберете сорт чая и нажмите кнопку "купить".
            </Typography>
        </Container>
    );
}
 
export default HowToUseVector;