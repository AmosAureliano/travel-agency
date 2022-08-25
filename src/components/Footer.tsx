import styled from "styled-components"
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
    return(
        <FooterContainer>
            <span>&copy; Travel Agency 2022. Todos os direitos reservados.</span>
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#services">Serviços</a>
                </li>
                <li>
                    <a href="#recommend">Recomendados</a>
                </li>
                <li>
                    <a href="#testimonials">Depoimentos</a>
                </li>
            </ul>

            <ul className="social__links">
                <li>
                    <BsFacebook/>
                </li>
                <li>
                    <BsLinkedin/>
                </li>
                <li>
                    <AiFillInstagram/>
                </li>
            </ul>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    background-color: #d0d8ff;
    padding: 2.5rem;
    border-radius: 0.5rem;

    ul { 
        display: flex;
        list-style-type: none;
        gap: 2rem;

        li {
            a {
                text-decoration: none;
                color: #000000;
                transition: .3s ease-in-out;

                &:hover {
                    color: #302ce9;
                }
            }

            svg {
                font-size: 1.3rem;
                transition: .3s ease-in-out;

                &:hover {
                    color: #302ce9;
                }
            }
        }
    }
`;