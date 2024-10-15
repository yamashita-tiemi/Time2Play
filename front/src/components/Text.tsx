import { styled } from "styled-components";
import { fontSize } from "styled-system";

export const BoxText = styled.p<{ color?: string; fontSize?: string }>`
    font-size: ${(props) => props.fontSize || '24px'};
    color: ${(props) => props.color || '#E4DED0'};
`;

export default function Text(
    {children, color, fontSize}: {children: React.ReactNode, color?: string, fontSize?: string}
    ) {
    return (
      <BoxText color={color} fontSize={fontSize}>
        {children}
      </BoxText>
    );
}