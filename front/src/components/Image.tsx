import styled from "styled-components";

const BoxImg = styled.div<{ width?: string; height?: string; margin?: string }>`
    width: ${(props) => props.width || '80%'};
    min-height: ${(props) => props.height || '120px'};
    margin: ${(props) => props.margin || '0'};
    display: flex;
    justify-content: center;
`;

export default function ImageBox(
    {width, height, margin, fileName}: {width?: string, height?: string, margin?: string, fileName: string} 
    ) {
        let graphImage
        if(fileName) {
            graphImage = require('../../public/' + fileName).default
        }
    return (
        <BoxImg width={width} height={height} margin={margin}>
            <img src={ graphImage}/>
        </BoxImg>
    );
}