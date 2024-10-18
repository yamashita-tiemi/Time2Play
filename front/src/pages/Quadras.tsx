import { styled } from "styled-components";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Title from "../components/Title";
import Filter from "../components/Filter";
import SecionPrimary from "../components/Section";
import QuadraCard from "../components/Card/QuadraCard";
import { QuadraType } from "models/quadra.interface";
import { QuadraAPI } from "../api";
import { useState, useEffect } from "react";

export const QuadrasList = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Quadras = () => {
    const [quadras, setQuadras] = useState<QuadraType[]>([]);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        QuadraAPI.getQuadras()
            .then((data) => {
                setQuadras(data)
                console.log(data)
            })
            .catch((err) => {
                setIsError(true)
                console.log("erro")
            });
        return () => { };
    }, []);

    return (
        <>
            <Navbar />
            <SecionPrimary>
                <Title>Quadras</Title>
                <Filter></Filter>
                <QuadrasList>
                    {quadras.map((quadra) => (
                        <QuadraCard quadra={quadra}></QuadraCard>
                    ))}
                </QuadrasList>
            </SecionPrimary>
            <Footer />
        </>
    )
}