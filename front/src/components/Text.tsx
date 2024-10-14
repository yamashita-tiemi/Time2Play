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

export const BoxTextLogin = styled.p`
    font-size: 16px;
    color: #000;
`;

export  function TextLogin(
    {children}:{children: React.ReactNode}
    ) {
    return (
        <BoxTextLogin>
            {children}
        </BoxTextLogin>
    );
}