import { styled } from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

export const SectionHome = styled.section`
    display: flex;
    width: 100%;
    height: 600px;
    padding: 100px 50px;
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

export const Text = styled.p`
    font-size: 24px;
`;


export const Home = () => {
    return(
        <>
            <Navbar/>
            <SectionHome>
                <SectionHomeLeft>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                    <Text>
                        Phasellus rutrum urna eget semper placerat. 
                    </Text>
                    <Text>
                        BUTTON 
                    </Text>
                </SectionHomeLeft>
                <SectionHomeRight>
                    <BoxTorneio>
                        Torneio
                    </BoxTorneio>
                </SectionHomeRight>
            </SectionHome>
            <Footer/>
        </>
    )
}