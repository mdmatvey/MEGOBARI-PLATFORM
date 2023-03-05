const ExampleSegment = ({ fill, viewbox, d }) => {
    return (  
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="70"
            height="70"
            fill={fill} 
            viewBox={viewbox}
        >
            <path 
                stroke="#fff" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={d}
            />
        </svg>   
    );
}
 
export default ExampleSegment;