import { styled } from "styled-components";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import OrgCard from "../components/Card/OrgCard";
import Title from "../components/Title";
import Filter from "../components/Filter";
import SecionPrimary from "../components/Section";
import { OrganizacaoType } from "models/organizacao.interface";
import { useEffect, useState } from "react";
import { Organizacao } from "../api";

export const Orgs = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Agendamentos = () => {
    const [orgs, setOrgs] = useState<OrganizacaoType[]>([]);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        Organizacao.getOrgs()
            .then((data) => {
                setOrgs(data);
            })
            .catch((err) => {
                setIsError(true);
            });
        return () => { };
    }, []);

    return (
        <>
            <SecionPrimary>
                <Title>Agendamento</Title>
                <Filter></Filter>
                <Orgs>
                    {orgs.map((org) => (
                        <OrgCard organizacao={org} ></OrgCard>
                    ))}
                </Orgs>
            </SecionPrimary>
        </>
    )
}