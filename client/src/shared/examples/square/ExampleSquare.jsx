const ExampleSquare = ({ fill, ...args }) => {
    
    return (  
        <svg
            width="20"
            height="20"
            viewBox="0 0 10 10" 
            xmlns="http://www.w3.org/2000/svg"
        >
            {
                args.linearGradient
                && 
                <linearGradient gradientTransform="rotate(90)" id={`linear-gradient#${args.index}`}>
                    <stop offset="25%" stop-color={args.color1}/>
                    <stop offset="100%" stop-color={args.color2}/>
                </linearGradient>
            }
            <rect 
                width="10" 
                height="10"
                rx="2"
                fill={args.linearGradient ? `url(#linear-gradient#${args.index})` : fill}
            />
        </svg>
    );
}
 
export default ExampleSquare;