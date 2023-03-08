import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import theme from "../../shared/consts/styles/styleConsts";
import PartPurpose from "../../entities/PartPurpose/PartPurpose";
import ExampleSquare from "../../shared/examples/square/ExampleSquare";
import { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const HowToUseVector = observer(() => {
    const { userStore } = useContext(Context)

    const [variant, setVariant] = useState('h2')
    const [fontSize, setFontSize] = useState('1.5rem')

    useEffect(() => {
        if (userStore.userWidth < 470) {
            setVariant('h4')
            setFontSize('1.2rem')
        } else if (userStore.userWidth >= 470) {
            setVariant('h2')
            setFontSize('1.5rem')
        }
    }, [userStore.userWidth])

    return (  
        <Container sx={{paddingBottom: 10}}>
            <Typography variant={variant} component="h2" fontWeight={'bold'} style={{ marginBottom: 10 }}>
                Как пользоваться картой
            </Typography>
            <Typography variant="body1" component="p" fontSize={fontSize} style={{ marginBottom: 20 }}>
                1 сектор равен 10 квадратным метрам
            </Typography>
            <PartPurpose
                component={
                    <ExampleSquare
                        fill={theme.palette.primary.main}
                    />
                }
                text={"Сектор уже занят другим пользователем"}
                width={20}
            />
            <PartPurpose
                component={
                    <ExampleSquare
                        fill={"rgba(88, 132, 92, 0.5)"}
                    />
                }
                text={"Сектор свободен для подписки"}
                width={20}
            />
            <PartPurpose
                component={
                    <ExampleSquare
                        fill={theme.palette.secondary.main}
                    />
                }
                text={"Выбранный вами сектор"}
                width={20}
            />
            <PartPurpose
               component={
                <ExampleSquare
                    fill={"orange"}
                />
            }
                text={"Сектор на который вы подписаны:"}
                width={20}
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
                    width={20}
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
                    width={20}
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
                    width={20}
                />
            </Container>
            <Typography variant="body1" component="p" fontSize={'1.5rem'} style={{ marginTop: 10 }}>
                Для оформления подписки отметьте необходимое количество
                секторов, выберете сорт чая и нажмите кнопку "купить".
            </Typography>
        </Container>
    );
})
 
export default HowToUseVector;