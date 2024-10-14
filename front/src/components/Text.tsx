import { styled } from "styled-components";

export const BoxText = styled.p`
    font-size: 24px;
    color: #E4DED0;
`;

export default function Text(
    {children}:{children: React.ReactNode}
    ) {
    return (
        <BoxText>
            {children}
        </BoxText>
    );
}