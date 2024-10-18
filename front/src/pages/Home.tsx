import { styled } from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import TorneioCard from "../components/Card/TorneioCard";
import { ButtonPrimary } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const SectionHome = styled.section`
    display: flex;
    width: 100%;
    min-height: calc(100vh - 120px);
    padding: 100px 50px;
    background-color: #E4DED0;
`;

export const SectionHomeLeft = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

export const SectionHomeRight = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
`;

export const Text = styled.p`
    font-size: 24px;
`;


export const Home = () => {
    const navigate = useNavigate();
    const goAgendamentos = () => navigate("/agendamentos");

    return(
        <>
            <SectionHome>
                <SectionHomeLeft>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                    <Text>
                        Phasellus rutrum urna eget semper placerat. 
                    </Text>
                    <ButtonPrimary onClick={goAgendamentos}>
                        Agendar
                    </ButtonPrimary>
                </SectionHomeLeft>
                <SectionHomeRight>
                    <TorneioCard/>
                </SectionHomeRight>
            </SectionHome>
        </>
    )
}