import { useNavigate } from 'react-router-dom'
import theme from "../../shared/consts/styles/styleConsts"
import { SEGMENT_ROUTE } from "../../shared/routes/routeConsts"
import './styles.css'

const MapSegment = ({ segmentID, top, left, width, height, viewBox, d, forSale, buffer }) => {
    const navigate = useNavigate()

    return ( 
        <svg 
            onClick={() => {
                if (forSale) {
                    navigate(SEGMENT_ROUTE + '/' + segmentID)
                }
            }}
            className={`segment ${buffer && 'buffer'} ${forSale && 'forSale'}`}
            xmlns="http://www.w3.org/2000/svg" 
            width={width} 
            height={height} 
            fill={buffer ? 'gray' : forSale ? theme.palette.primary.main : theme.palette.primary.dark} 
            viewBox={viewBox} 
            style={{ position: 'absolute', top: top, left: left }}
        >
            <path 
                stroke="#fff" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={d}
                style={{ animationDelay: `${segmentID / 10}s` }}
            />
        </svg>    
    );
}
 
export default MapSegment;