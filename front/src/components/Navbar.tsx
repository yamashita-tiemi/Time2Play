import styled from 'styled-components';
import { NavLink } from "react-router-dom";


export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  backgroud-color: "0000";
  width: 100%;
  heigth: 80px
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
` 

export const LogoNavbar = styled.div`
    width: 60%;
    margin: auto 0 auto 2%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
  
export default function Navbar() {
    return (
        <NavBar>
            <LogoNavbar>
                <NavLink to={"/"}>Logo</NavLink>
            </LogoNavbar>
            <MainNavbar>
                <NavLi>
                    <NavLink to={"/"}>Page 1</NavLink>
                </NavLi>
                <NavLi>
                    <NavLink to={"/"}>Page 2</NavLink>
                </NavLi>
                <NavLi>
                    <NavLink to={"/"}>Login</NavLink>
                </NavLi>
            </MainNavbar>
        </NavBar>
    );
}