import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import { useState } from 'react';

export default function Navbar() {
    const [navbarState, setNavbarState] = useState(false);

    return(
        <>
            <Nav>
                <div className="brand">
                    <div className="container">
                        <p>lo.go</p>
                        Travel Agency
                    </div>
                    <div className="toggle">
                        {
                            navbarState ? <VscChromeClose onClick={() => setNavbarState(false)} /> : <GiHamburgerMenu onClick={() => setNavbarState(true)} />
                        }
                    </div>
                </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#recommend">Lugares</a></li>
                    <li><a href="#testimonials">Depoimentos</a></li>
                </ul>
                <button>Conectar</button>
            </Nav>
            <ResponsiveNav state={navbarState}>
                <ul>
                    <li><a href="#home" onClick={() => setNavbarState(false)}>Home</a></li>
                    <li><a href="#services" onClick={() => setNavbarState(false)}>Serviços</a></li>
                    <li><a href="#recommend" onClick={() => setNavbarState(false)}>Lugares</a></li>
                    <li><a href="#testimonials" onClick={() => setNavbarState(false)}>Depoimentos</a></li>
                </ul>
            </ResponsiveNav>
        </>
    )
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .brand {
        .container {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.4rem;
            font-size: 1.2rem;
            font-weight: 900;
            text-transform: uppercase;
        }

        .toggle {
            display: none;
        }
    }

    ul { 
        display: flex;
        list-style: none;
        gap: 1rem;
        
        li { 
            a { 
                text-decoration: none;
                color: #0077b6;
                font-size: 1.2rem;
                transition: .5s ease-in-out;
                 
                &:hover {
                    color: #023e8a;
                }

                &:first-of-type {
                    a { 
                        color: #023e8a;
                        font-weight: 900;
                    }
                }
            }
        }
    }

    button {
        padding: .5rem 1rem;
        cursor: pointer;
        border-radius: 1rem;
        border: none;
        color: #FFFFFF;
        background-color: #48cae4;
        text-transform: uppercase;
        font-size: 1.1rem;
        letter-spacing: .25rem;
        transition: .3s ease-in-out;

        &:hover {
            background-color: #023e8a;
        }
    }

    @media screen and (min-width: 280px) and (max-width: 1080px) {
        .brand {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            .toggle {
                display: block;
            }
        }

        ul, button {
            display: none;
        }
    }
`;

const ResponsiveNav = styled.nav`
    display: flex;
    position: absolute;
    z-index: 1;
    background: #FFFFFF;
    width: 100%;
    height: 30vh;
    align-items: center;
    transition: .3s ease-in-out;
    top: ${({ state }) => (state ? "50px" : "-400px")};

    ul {
        list-style-type: none;
        width: 100%;

        li {
            width: 100%;
            margin: 1rem 0;
            margin-left: 2rem;

            a {
                text-decoration: none;
                color: #0077b6;
                font-size: 1.2rem;
                transition: .1s ease-in-out;

                &:hover {
                    color: #023e8a;
                }
            }

            &:first-of-type {
                a {
                    color: #023e8a;
                    font-weight: 900;
                }
            }
        }
    }
`;