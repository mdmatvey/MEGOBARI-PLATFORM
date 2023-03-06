import { observer } from "mobx-react-lite";
import { FormGroup, FormControlLabel, Switch, ThemeProvider } from "@mui/material";
import MapSegment from "../../entities/MapSegment/MapSegment";
import SatelliteShot from "../../Общснимок.JPG"
import theme from "../../shared/consts/styles/styleConsts";
import './styles.css'
import { useState } from "react";

const VectorMap = observer(() => {
  const [isSatellite, setIsSatellite] = useState(false)

  const handleSwitchChange = () => {
    setIsSatellite(prevState => !prevState)
  }
  
  return (
    <ThemeProvider theme={theme}>
      <div className="back" style={{ height: 650, position: 'relative' }}>
        <div style={{ opacity: isSatellite ? 1 : 0, transition: '.2s', position: 'relative', top: 105, left: 168, width: 945, height: 520 }}>
          <img 
            src={SatelliteShot} 
            alt="Satellite shot" 
            style={{ width: '100%', height: '100%' }} 
          />
          <div style={{ width: '100%', height: '100%', position: 'absolute', bottom: 0, top: 0, boxShadow: 'inset -10px -10px 10px 20px white' }}></div>
        </div>
        <div style={{ opacity: isSatellite ? 0.75 : 1, transition: '.2s' }}>
          <MapSegment
            segmentID={1}
            top={156}
            left={358}
            width="188"
            height="84"
            viewBox="0 0 188 84"
            d="m116 22.5 19.5 8 26 18.353L178 60.5l8.5 4.79-63 9.787L72.5 83 1.718 68.5l3.897-8 4.385-9L19.5 32 29 12.5l22-11 38 4 11.118 7L116 22.5Z"
            forSale={false}
            buffer={false}
          />
          <MapSegment
            segmentID={2}
            top={220}
            left={468}
            width="146"
            height="109"
            viewBox="0 0 146 109"
            d="M95.5 12 86 26.5l15.053 11 10.947 8 15 7.5 15 7.5 3 1-32.5 34.018-11.447 11.982H19L1 77l12.5-65.922 63-9.787L95.5 12Z"
            forSale={false}
            buffer={false}
          />
          <MapSegment
            segmentID={3}
            top={223}
            left={348}
            width="140"
            height="111"
            viewBox="0 0 140 111"
            d="M22.5 93 20 84.919 4.403 34.5 1 23.5l10.718-22L82.5 16l51-7.922L121 74l18 30.5L32.288 110 22.5 93Z"
            forSale={false}
            buffer={false}
          />
          <MapSegment
            segmentID={4}
            top={280}
            left={579}
            width="133"
            height="119"
            viewBox="0 0 133 119"
            d="m121 30.5 8.75 6.231 2.25 1.602-8 3.167L110.5 72l-5 5.75-5 5.75L95 97l-15 16-3.889 5L45 65 1.5 35.518 34 1.5l29 9.667L121 30.5Z"
            forSale={true}
            buffer={false}
          />
          <MapSegment
            segmentID={5}
            top={314}
            left={521}
            width="136"
            height="131"
            viewBox="0 0 136 131"
            d="m108.5 103 19-10.5 6.611-8.5L103 31 59.5 1.518 48.053 13.5H1l19.5 57-19 15.2 66 43.517 7-4.717 10.25-7.25L95 110l6.75-3.5 6.75-3.5Z"
            forSale={false}
            buffer={false}
          />
          <MapSegment
            segmentID={6}
            top={326}
            left={378}
            width="164"
            height="98"
            viewBox="0 0 164 98"
            d="M62.5 82.5 52.5 53 30 43.654 20 39.5 1.288 7 108 1.5h35l19.5 57-19 15.2L115 96.5l-52.5-14Z"
            forSale={false}
            buffer={false}
          />
          <MapSegment
            segmentID={7}
            top={398}
            left={440}
            width="150"
            height="109"
            viewBox="0 0 150 109"
            d="m30 48-9.5-12.5-19-25 52.5 14L82.5 1.7l66 43.517L132.5 56l-16 12.5L111 83l-9.5 13.5-5 11H70v-42M30 48l26.5 11.594M30 48l26.5 11.594M70 65.5l-13.5-5.906M70 65.5l-13.5-5.906"
          />
          <MapSegment // buffer
            segmentID={8}
            top={317}
            left={535}
            width="184"
            height="190"
            viewBox="0 0 184 190"
            d="m1.5 188.5 5-11L16 164l5.5-14.5 16-12.5 16-10.783 7-4.717 10.25-7.25L81 107l6.75-3.5 6.75-3.5 19-10.5 6.611-8.5L124 76l15-16 5.5-13.5 5-5.75 5-5.75L168 4.5l8-3.167 6.5 4.63L172.5 35 165 46.5l-9.5 11.4-13 15.6-3.5 3.63-10 10.37-12.5 9.5L96 112.333l-1.5 1.122L55 143M1.5 188.5l36-30.617M1.5 188.5l36-30.617M55 143l-17.5 14.883M55 143l-17.5 14.883"
            forSale={false}
            buffer={true}
          />
          <MapSegment
            segmentID={9}
            top={321}
            left={689}
            width="114"
            height="157"
            viewBox="0 0 114 157"
            d="m44 13 23.5 33L82 54.286 92 60l20.947 33-12.447 16.5-6.429 3-8.571 4-9 9.5-1.333 4L54.5 155.5l-36-48-17-53.6L11 42.5 18.5 31l10-29.038L44 13Z"
            forSale={false}
            buffer={false}
          />
          <MapSegment
            segmentID={10}
            top={373}
            left={630}
            width="115"
            height="139"
            viewBox="0 0 115 139"
            d="M34 31.5 21.5 41 1 56.333 35 133.5l42.5 4 36-34-36-48-17-53.6-13 15.6-3.5 3.63L34 31.5Z"
            forSale={false}
            buffer={false}
          />
          <MapSegment
            segmentID={11}
            top={428}
            left={535}
            width="131"
            height="122"
            viewBox="0 0 131 122"
            d="m1.5 77.5 35 33.5H78l9.625 3.5 16.875 6.136L130 78.5 96 1.333l-1.5 1.122L55 32M1.5 77.5l36-30.617M1.5 77.5l36-30.617M55 32 37.5 46.883M55 32 37.5 46.883"
            forSale={false}
            buffer={false}
          />
          <MapSegment
            segmentID={12}
            top={446}
            left={638}
            width="129"
            height="128"
            viewBox="0 0 129 128"
            d="m127.5 1-1.333 4m0 0L123 14.5V23l-11.5 28.5-2.5 12v10l3.5 10-1 5.5-.5 6 .5 10.841L103 107l-34.5 20-58-21.091-9-3.273L27 60.5l42.5 4 36-34L126.167 5Z"
            forSale={false}
            buffer={false}
          />
          <MapSegment // buffer
            segmentID={13}
            top={413}
            left={746}
            width="63"
            height="140"
            viewBox="0 0 63 140"
            d="M43.5 55 62 10.536 55.947 1 43.5 17.5l-6.429 3-8.571 4-9 9.5-1.333 4L15 47.5V56L3.5 84.5 1 96.5v10l3.5 10-1 5.5-.5 6 .5 10.841L16.523 111.5 22 100l12.5-14.5 9-18.5V55Z"
            forSale={false}
            buffer={true}
          />
          <MapSegment
            segmentID={14}
            top={422}
            left={761}
            width="111"
            height="118"
            viewBox="0 0 111 118"
            d="M28.5 46 47 1.536 89.823 69 108.5 98.425l-58 5.075-25.5 13-23.477-14L7 91l12.5-14.5 9-18.5V46Z"
            forSale={false}
            buffer={false}
          />
          <MapSegment
            segmentID={15}
            top={519}
            left={749}
            width="184"
            height="69"
            viewBox="0 0 184 69"
            d="m18 54-3-23-13.5 1.84L14.523 5.5 38 19.5l25.5-13 58-5.075 1 1.575L152 14.022 168 20l15 17.5-10 8.333L147 67.5l-71-7.43L18 54Z"
            forSale={false}
            buffer={false}
          />
        </div>
      </div>
      <FormGroup sx={{ width: '100%' }}>
        <FormControlLabel 
        control={
          <Switch 
            onChange={handleSwitchChange}
            sx={{ color: theme.palette.secondary.main }} 
          />
        }  
        label="Гибрид" 
        sx={{ marginLeft: 'auto', marginRight: 20 }}
        />
      </FormGroup>
    </ThemeProvider>
  );
})

export default VectorMap;
