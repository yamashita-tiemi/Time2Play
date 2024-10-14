import { styled } from "styled-components";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Title from "../components/Title";
import Filter from "../components/Filter";
import SecionPrimary from "../components/Section";
import QuadraCard from "../components/Card/QuadraCard";

export const QuadrasList = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Quadras = () => {
    return(
        <>
            <Navbar/>
            <SecionPrimary>
                <Title>Quadras</Title>
                <Filter></Filter>
                <QuadrasList>
                    <QuadraCard></QuadraCard>
                    <QuadraCard></QuadraCard>
                    <QuadraCard></QuadraCard>
                </QuadrasList>
            </SecionPrimary>
            <Footer/>
        </>
    )
}