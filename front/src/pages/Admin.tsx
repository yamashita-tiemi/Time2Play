import Table from "../components/Table";
import { ButtonAdd, ButtonPrimary, ButtonQuadra } from "../components/Button";
import Title from "../components/Title";
import { styled } from "styled-components";

const SectionAdmin = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: calc(100vh - 120px);
    background-color: #E4DED0;
`;

const SectionCRUD = styled.div`
    width: 80%;
    height: 100%;
`;

const BoxCRUD = styled.div`
    display: flex;
    justify-content: space-evenly;
`;



export const Admin = () => {
    return (
        <>
            <SectionAdmin>
                <Title>Nome Organizacao</Title>
                <SectionCRUD>
                    <BoxCRUD>
                        <ButtonAdd>Nova Quadra</ButtonAdd>
                        <ButtonAdd backgroundColor="#d8be2c">Editar</ButtonAdd>
                        <ButtonAdd backgroundColor="#bd4d24">Deletar</ButtonAdd>
                    </BoxCRUD>
                    <Table></Table>
                </SectionCRUD>
            </SectionAdmin>
        </>
    )
}