import { styled } from "styled-components";

export const BoxTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
`;

export const TextTitle = styled.h1`
    color: #89AE29;
    font-size: 36px;
`;

export default function Title(
    {children}:{children: React.ReactNode}
    ) {
    return (
        <BoxTitle>
            <TextTitle>
                {children}
            </TextTitle>
        </BoxTitle>
    );
}

export const TextTitleHorarios = styled.h1`
    color: #000;
    font-size: 20px;
`;

export function TitleHorarios(
    {children}:{children: React.ReactNode}
    ) {
    return (
        <BoxTitle>
            <TextTitleHorarios>
                {children}
            </TextTitleHorarios>
        </BoxTitle>
    );
}