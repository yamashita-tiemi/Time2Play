import { styled } from "styled-components";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Text from "../components/Text";
import { ButtonLogin } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const SectionLogin = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 120px);
`;

export const BoxLogin = styled.div`
    background-color: #E4DED0;
    width: 50%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
    border-radius: 10px;
    padding-bottom: 20px;
`;

export const Borda = styled.div`
    background-color: #2F5D55;
    width: 100%;
    height: 15%;
    border-radius: 10px 10px 0 0;
`;

export const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 20px;
`;

export const BoxInput = styled.div`
    width: 70%;
    height: 60%;
    border-radius: 10px 10px 0 0;
`;

export const InputLogin = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    margin: 10px 0 20px 0;
`;

export const Login = () => {
    const navigate = useNavigate();
    const goAdmin = () => navigate("/admin");

    return (
        <>
            <SectionLogin>
                <BoxLogin>
                    <Borda />
                    <Box>
                        <BoxInput>
                            <Text color="#000" fontSize="16px">
                                Email:
                            </Text>
                            <InputLogin placeholder="Digite seu email aqui" />
                            <Text color="#000" fontSize="16px">
                                Senha:
                            </Text>
                            <InputLogin placeholder="Digite sua senha aqui" />
                        </BoxInput>
                        <ButtonLogin onClick={goAdmin}>
                            Login
                        </ButtonLogin>
                    </Box>
                </BoxLogin>
            </SectionLogin>
        </>
    )
}