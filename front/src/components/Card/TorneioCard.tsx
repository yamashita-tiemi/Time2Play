import { ButtonQuadra } from "../Button";
import Text from "../Text";
import Title from "../Title";
import { styled } from "styled-components";

export const BoxTorneio = styled.div`
    width: 80%;
    background-color: #fff;
    border: 4px double #89ae29;
    border-radius: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5%;
`;

const BoxInfo = styled.div`
    width:80%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const BoxIcons = styled.div`
    width:80%;
    display: flex;
    justify-content: center;
`;

export default function TorneioCard() {
    const goInstagram = () => {
            window.open(`https://www.instagram.com/`, '_blank');
    }

    return (
        <BoxTorneio>
            <Title>Torneio Verão Esportivo</Title>
            <BoxInfo>
                <Text fontSize="20px" color="#5E7430">Um evento que reúne os amantes do esporte em competições emocionantes!</Text>
                <Text fontSize="20px" color="#5E7430">O torneio contará com as modalidades de <b>futebol, vôlei de praia e tênis</b></Text>
                <Text fontSize="20px" color="#5E7430"><b>Data:</b> 15 a 17 de janeiro de 2024</Text>
                <Text fontSize="20px" color="#5E7430"><b>Local:</b> Arena Multiuso - Avenida do Esporte, 123, Centro.</Text>
            </BoxInfo>
            <BoxIcons>
                <ButtonQuadra color="#fff" onClick={goInstagram}>Saiba mais</ButtonQuadra>
            </BoxIcons>
        </BoxTorneio>
    );
}