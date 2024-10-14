import { styled } from "styled-components";

export const BoxFilter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 24px 0;
`;

export const InputSearch = styled.input`
    width: 50%;
    padding: 10px;
    border-radius: 10px;
`;

export const InputFilter = styled.input`
    width: 15%;
    padding: 10px;
`;

export default function Filter() {
    return (
        <BoxFilter>
            <InputSearch placeholder="Pesquisa"></InputSearch>
            <InputFilter placeholder="Filtro"></InputFilter>
        </BoxFilter>
    );
}