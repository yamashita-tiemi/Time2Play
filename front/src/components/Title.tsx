import { styled } from "styled-components";

export const BoxTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const TextTitle = styled.h1`
    color: #89AE29;
    font-size: 36px;
`;

export default function Title() {
    return (
        <BoxTitle>
            <TextTitle>
                TITLE
            </TextTitle>
        </BoxTitle>
    );
}