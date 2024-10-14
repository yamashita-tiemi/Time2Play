import { styled } from "styled-components";

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}

export const BoxButtonPrimary = styled.button`
    width: 60%;
    height: 50px;
    background-color: #89AE29;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items:center;
    margin-right: 10px;
    color: #fff;
    box-shadow: 10px 10px 18px -7px rgba(0,0,0,0.8);
    -webkit-box-shadow: 10px 10px 18px -7px rgba(0,0,0,0.8);
    -moz-box-shadow: 10px 10px 18px -7px rgba(0,0,0,0.8);
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
`;

export const ButtonPrimary:React.FC<ButtonProps> = props => {
    const {children, ...rest} = props;

    return (
        <BoxButtonPrimary {...rest}>{children}</BoxButtonPrimary>
    )
}

export const BoxButtonQuadra = styled.button`
    width: 40%;
    height: 40px;
    background-color: #89AE29;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items:center;
    margin-right: 10px;
    color: #E4DED0;
    box-shadow: 10px 10px 18px -7px rgba(0,0,0,0.8);
    -webkit-box-shadow: 10px 10px 18px -7px rgba(0,0,0,0.8);
    -moz-box-shadow: 10px 10px 18px -7px rgba(0,0,0,0.8);
    font-weight: 600;
`;

export const ButtonQuadra:React.FC<ButtonProps> = props => {
    const {children, ...rest} = props;

    return (
        <BoxButtonQuadra {...rest}>{children}</BoxButtonQuadra>
    )
}

export const BoxButtonLogin = styled.button`
    width: 60%;
    height: 40px;
    background-color: #89AE29;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items:center;
    margin-right: 10px;
    color: #E4DED0;
    box-shadow: 10px 10px 18px -7px rgba(0,0,0,0.8);
    -webkit-box-shadow: 10px 10px 18px -7px rgba(0,0,0,0.8);
    -moz-box-shadow: 10px 10px 18px -7px rgba(0,0,0,0.8);
    font-weight: 600;
    text-transform: uppercase;
`;

export const ButtonLogin:React.FC<ButtonProps> = props => {
    const {children, ...rest} = props;

    return (
        <BoxButtonLogin {...rest}>{children}</BoxButtonLogin>
    )
}