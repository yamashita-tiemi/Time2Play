import styled from "styled-components";
import imgagemEscolhida from '../../public/org1.png';

const BoxImg = styled.div<{ width?: string; height?: string; margin?: string }>`
    width: ${(props) => props.width || '80%'};
    min-height: ${(props) => props.height || '120px'};
    margin: ${(props) => props.margin || '0'};
    display: flex;
    justify-content: center;
`;

export default function ImageBox(
    {width, height, margin}: {width?: string, height?: string, margin?: string} 
    ) {
    return (
        <BoxImg width={width} height={height} margin={margin}>
            <img src={imgagemEscolhida}/>
        </BoxImg>
    );
}