import { styled } from "styled-components";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import OrgCard from "../components/Card/OrgCard";
import Title from "../components/Title";
import Filter from "../components/Filter";
import SecionPrimary from "../components/Section";

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
            <SecionPrimary>
                <Title>Agendamento</Title>
                <Filter></Filter>
                <Orgs>
                    <OrgCard></OrgCard>
                    <OrgCard></OrgCard>
                    <OrgCard></OrgCard>
                    <OrgCard></OrgCard>
                </Orgs>
            </SecionPrimary>
            <Footer/>
        </>
    )
}