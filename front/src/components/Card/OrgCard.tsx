import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const BoxOrg = styled.div`
    background-color: #5E7430;
    width: 30%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
    border-radius: 10px;
`;

export const LogoOrg = styled.div`
    width: 80%;
    height: 120px;
    background-color: pink;
`;

export const BoxInfoOrg = styled.div`
    width: 80%;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const NomeOrg = styled.p`
    color: #E4DED0;
    font-size: 20px;
`;

export const ModalidadesOrg = styled.div`
    width: 90%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export const ModalidadeOrg = styled.div`
    width: 45%;
    height: 24px;
    background-color: #E4DED0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    border: 2px solid #89ae29;
`;

export default function OrgCard({organizacao}:{organizacao:any}) {
    const navigate = useNavigate();
    const goQuadras = () => {
        navigate(`/${organizacao.nome}`, { state: { id_org: organizacao.id } })
    }
    
    return (
        <BoxOrg onClick={goQuadras}>
            <LogoOrg>
                {organizacao.logo_path}
            </LogoOrg>
            <BoxInfoOrg>
                <NomeOrg>
                    {organizacao.nome}
                </NomeOrg>
                <ModalidadesOrg>
                    <ModalidadeOrg>Volei</ModalidadeOrg>
                    <ModalidadeOrg>Volei de areia</ModalidadeOrg>
                    <ModalidadeOrg>Futebol</ModalidadeOrg>
                    <ModalidadeOrg>Beach Tennis</ModalidadeOrg>
                    <ModalidadeOrg>Futsal</ModalidadeOrg>
                </ModalidadesOrg>
            </BoxInfoOrg>
        </BoxOrg>
    );
}