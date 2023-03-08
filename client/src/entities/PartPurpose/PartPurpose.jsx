import { Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useState, useEffect, useContext } from "react";
import { Context } from "../..";

const PartPurpose = observer(({ component, text, width }) => {
    const { userStore } = useContext(Context)

    const [showDash, setShowDash] = useState(true)
    const [margin, setMargin] = useState(10)

    useEffect(() => {
        if (userStore.userWidth < 400) {
            setShowDash(false)
            setMargin(10)
        } else if (userStore.userWidth >= 400) {
            setShowDash(true)
            setMargin(0)
        }
    }, [userStore.userWidth])

    return (  
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: width, marginRight: margin }}>
                {component}
            </div>
            {
                showDash && <Typography variant="h6" component="p" fontWeight={'bold'} style={{ margin: '0 20px' }}>
                    —
                </Typography>
            }
            <Typography variant="h6" component="p" fontWeight={'bold'} style={{ marginLeft: margin }}>
                {text}
            </Typography>
        </div>
    );
})
 
export default PartPurpose;