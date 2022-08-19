import styled from 'styled-components';


export default function Navbar() {
    return(
        <Nav>
            <div className="brand">
                <div className="container">
                    <p>lo.go</p>
                    Travel Agency
                </div>
                <div className="toggle"></div>
            </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Serviços</a></li>
                <li><a href="#recommend">Lugares</a></li>
                <li><a href="#testimonials">Depoimentos</a></li>
            </ul>
            <button>Conectar</button>
        </Nav>
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
        border: nnone;
        color: #FFFFFF;
        background-color: #48cae4;
        text-transform: uppercase;
        font-size: 1.1rem;
        letter-spacing: 1.1rem;
        transition: .3s ease-in-out;

        &:hover {
            background-color: #023e8a;
        }
    }
`;