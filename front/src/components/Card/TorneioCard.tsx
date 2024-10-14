import { styled } from "styled-components";

export const BoxTorneio = styled.div`
    width: 80%;
    background-color: #E4DED0;
    border: 4px double #89ae29;
    border-radius: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function TorneioCard() {
    return (
        <BoxTorneio>
            TORNEIO
        </BoxTorneio>
    );
}