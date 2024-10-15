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
    margin-top: 20px;
`;

export const BoxLeft = styled.section`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2%;
`;

export const BoxDia = styled.div`
    width: 80%;
    height: 30%;
    display: flex;
    flex-direction: column;
`;

export const BoxAluguel = styled.div`
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border-radius: 10px;
`;

export const BoxInfos = styled.div<{ bg?: string }>`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background-color: ${(props) => props.bg || '#4da999a1'};
    border-radius: 10px;
    padding: 5px;
    margin: 5% 0;
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
    width: 90%;
    height: 92%;
    display: flex;
    justify-content: space-between;
`;

export const SubBoxHorarios = styled.div`
    width: 49.5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const BoxHorario = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    margin-bottom: 1%;
`;

export const HorarioCheck = styled.div`
    background-color: #2F5D55;
    width: 15%;
    height: 100%;
    border-radius: 10px 0 0 10px;
`;

export const Horario = styled.div`
    background-color: #4da999a1;
    width: 85%;
    height: 100%;
    border-radius: 0 10px 10px 0;
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
                            <TextTitleHorarios>Passo 1:</TextTitleHorarios>
                            <BoxInfos>
                            <Text color="#000" fontSize="20px">Selecione o Dia</Text>
                            <Text color="#000" fontSize="20px">Dia</Text>
                            </BoxInfos>
                        </BoxDia>
                        <BoxAluguel>
                            <BoxInfos bg="#84a09b42">
                                <Text color="#000" fontSize="20px">Valor da Locação</Text>
                                <Text color="#000" fontSize="20px">Valor Total</Text>
                            </BoxInfos>
                            <ButtonPrimary>Alugar</ButtonPrimary>
                        </BoxAluguel>
                    </BoxLeft>
                    <BoxRight>
                        <TextTitleHorarios>Passo 2: Selecione o(s) Horário(s)</TextTitleHorarios>
                        <BoxHorarios>
                            <SubBoxHorarios>
                                <BoxHorario>
                                    <HorarioCheck></HorarioCheck>
                                    <Horario></Horario>
                                </BoxHorario>
                                <BoxHorario>
                                    <HorarioCheck></HorarioCheck>
                                    <Horario></Horario>
                                </BoxHorario>
                            </SubBoxHorarios>
                            <SubBoxHorarios>
                                <BoxHorario>
                                    <HorarioCheck></HorarioCheck>
                                    <Horario></Horario>
                                </BoxHorario>
                            </SubBoxHorarios>
                        </BoxHorarios>
                    </BoxRight>
                </BoxQuadra>
            </SectionQuadra>
            <Footer />
        </>
    )
}