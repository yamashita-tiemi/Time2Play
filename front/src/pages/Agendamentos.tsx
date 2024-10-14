import { styled } from "styled-components";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import OrgCard from "../components/Card/OrgCard";
import Title from "../components/Title";
import Filter from "../components/Filter";

export const SectionAgendamentos = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    background-color: #E4DED0;
`;

export const Orgs = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Agendamentos = () => {
    return(
        <>
            <Navbar/>
            <SectionAgendamentos>
                <Title></Title>
                <Filter></Filter>
                <Orgs>
                    <OrgCard></OrgCard>
                    <OrgCard></OrgCard>
                    <OrgCard></OrgCard>
                    <OrgCard></OrgCard>
                </Orgs>
            </SectionAgendamentos>
            <Footer/>
        </>
    )
}