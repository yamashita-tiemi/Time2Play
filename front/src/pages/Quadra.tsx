import { styled } from "styled-components";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Title, { TextTitleHorarios } from "../components/Title";
import Text from "../components/Text";
import { ButtonPrimary } from "../components/Button";

export const SectionQuadra = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #E4DED0;
`;

export const BoxQuadra = styled.section`
    width: 95%;
    height: 500px;
    display: flex;
    justify-content: space-between;
`;

export const BoxLeft = styled.section`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 5% 0 2% 0;
    background-color: blue;
`;

export const BoxDia = styled.div`
    width: 80%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

export const BoxRight = styled.section`
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const BoxHorarios = styled.div`
    background-color: pink;
    width: 90%;
    height: 92%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Quadra = () => {
    return (
        <>
            <Navbar />
            <SectionQuadra>
                <Title> Quadra Z</Title>
                <BoxQuadra>
                    <BoxLeft>
                        <BoxDia>
                            <Text>Escolha o Dia</Text>
                            <Text>Dia</Text>
                        </BoxDia>
                        <BoxDia>
                            <Text>Valor da Locação</Text>
                            <Text>Valor Total</Text>
                        </BoxDia>
                        <ButtonPrimary>Alugar</ButtonPrimary>
                    </BoxLeft>
                    <BoxRight>
                        <TextTitleHorarios>Selecione os Horários</TextTitleHorarios>
                        <BoxHorarios></BoxHorarios>
                    </BoxRight>
                </BoxQuadra>
            </SectionQuadra>
            <Footer />
        </>
    )
}