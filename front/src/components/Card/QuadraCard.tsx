import { ButtonQuadra } from "../Button";
import Text from "../Text";
import { styled } from "styled-components";

export const BoxQuadra = styled.div`
    background-color: #5E7430;
    width: 49%;
    height: 200px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0;
    border-radius: 10px;
`;

export const FotoQuadra = styled.div`
    background-color: pink;
    width: 150px;
    height: 150px;
    margin: 0 20px;
`;

export const InfoQuadra = styled.div`
    width: 75%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

export const BoxModalidades = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
`;

export const ModalidadeQuadra = styled.div`
    width: 30%;
    height: 24px;
    background-color: #E4DED0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;

export default function QuadraCard() {
    return (
        <BoxQuadra>
            <FotoQuadra></FotoQuadra>
            <InfoQuadra>
                <Text>QUADRA Y</Text>
                <BoxModalidades>
                    <ModalidadeQuadra>Volei</ModalidadeQuadra>
                    <ModalidadeQuadra>Volei de areia</ModalidadeQuadra>
                    <ModalidadeQuadra>Futebol</ModalidadeQuadra>
                    <ModalidadeQuadra>Beach Tennis</ModalidadeQuadra>
                    <ModalidadeQuadra>Futsal</ModalidadeQuadra>
                </BoxModalidades>
                <ButtonQuadra>
                    Ver Disponibilidade
                </ButtonQuadra>
            </InfoQuadra>
        </BoxQuadra>
    );
}