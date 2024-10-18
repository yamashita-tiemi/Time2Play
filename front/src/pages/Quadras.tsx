import { styled } from "styled-components";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Title from "../components/Title";
import Filter from "../components/Filter";
import SecionPrimary from "../components/Section";
import QuadraCard from "../components/Card/QuadraCard";
import { QuadraType } from "models/quadra.interface";
import { Organizacao, QuadraAPI } from "../api";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { OrganizacaoType } from "models/organizacao.interface";

export const QuadrasList = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Quadras = () => {
    const [quadras, setQuadras] = useState<QuadraType[]>([]);
    const [isError, setIsError] = useState<boolean>(false);

    const location = useLocation();
    const { id_org } = location.state as { id_org: number }

    useEffect(() => {
        QuadraAPI.getQuadras(id_org)
            .then((data) => {
                setQuadras(data)
            })
            .catch((err) => {
                setIsError(true)
            });
        return () => { };
    }, []);

    return (
        <>
            <SecionPrimary>
                <Title>Quadras</Title>
                <Filter></Filter>
                <QuadrasList>
                    {quadras.map((quadra) => (
                        <QuadraCard quadra={quadra}></QuadraCard>
                    ))}
                </QuadrasList>
            </SecionPrimary>
        </>
    )
}