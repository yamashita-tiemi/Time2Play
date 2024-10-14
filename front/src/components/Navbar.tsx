import styled from 'styled-components';
import { NavLink } from "react-router-dom";
// import ThemeType from 
import { color, ColorProps } from 'styled-system';


export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #2F5D55;
  width: 100%;
  height: 60px;
`;

export const MainNavbar = styled.ul`
  list-style-type: none;
  display: flex !important;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
  margin-right: 2%;
`;

export const NavLi = styled.li`
  text-align: center;
  margin: 15px auto;
`;

export const LogoNavbar = styled.div`
    width: 60%;
    margin: auto 0 auto 2%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const LinkNavbar = styled(NavLink)`
    color: #E4DED0;
    text-decoration: none;
    padding: 10px;
`;
  
export default function Navbar() {
    return (
        <NavBar>
            <LogoNavbar>
                <LinkNavbar to={"/"}>Logo</LinkNavbar>
            </LogoNavbar>
            <MainNavbar>
                <NavLi>
                    <LinkNavbar to={"/agendamentos"}>Page 1</LinkNavbar>
                </NavLi>
                <NavLi>
                    <LinkNavbar to={"/quadras"}>Page 2</LinkNavbar>
                </NavLi>
                <NavLi>
                    <LinkNavbar to={"/"}>Login</LinkNavbar>
                </NavLi>
            </MainNavbar>
        </NavBar>
    );
}