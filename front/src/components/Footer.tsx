import { styled } from "styled-components";

export const FooterComponent = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #2F5D55;
  width: 100%;
  height: 60px;
  color: #E4DED0;
`;

export default function Footer() {
    return (
        <FooterComponent>
            Todos os direitos reservados...
        </FooterComponent>
    );
}