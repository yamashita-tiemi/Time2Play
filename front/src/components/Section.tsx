import { Children } from "react";
import { styled } from "styled-components";

export const BoxSectionPrimary = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #E4DED0;
`;

export default function SecionPrimary(
    {children}:{children: React.ReactNode}
    ) {
    return (
        <BoxSectionPrimary>
            {children}
        </BoxSectionPrimary>
    );
}