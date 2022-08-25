import { useState } from 'react';
import styled from 'styled-components';
import destination1 from '../assets/miami.jpg';
import destination2 from '../assets/singapura.jpg';
import destination3 from '../assets/thailandia.jpg';

export default function Recommended() {
    const data = [
        {
            image: destination1,
            title: "Miami",
            subtitle: "Lore lorem",
            cost: "13.500",
            duration: "Aproximadamente quatro noites"
        },
        {
            image: destination2,
            title: "Singapura",
            subtitle: "Lore lorem",
            cost: "10.500",
            duration: "Aproximadamente duas noites"
        },
        {
            image: destination3,
            title: "Tailândia",
            subtitle: "Lore lorem",
            cost: "7.500",
            duration: "Aproximadamente três noites"
        }
    ];

    const packages = [
        "Pausa para o final de semana",
        "Pacote de natal",
        "Tour em grupo"
    ];

    const [active, setActive] = useState(1);

    return(
        <Section id="recommend">
            <div className="title">
                <h2>Destinos recomendados</h2>
            </div>

            <div className="packages">
                <ul>
                    {
                        packages.map((pkg, index) => {
                            return(
                                <li
                                    className={active === index + 1 ? "active" : ""}
                                    onClick={() => setActive(index + 1)}
                                >
                                    {pkg}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className="destinations">
                {
                    data.map((destination) => {
                        return(
                            <div className="destination">
                                <img src={destination.image} alt="Imagem de destino"/>
                                <h3>{destination.title}</h3>
                                <p>{destination.subtitle}</p>

                                <div className="info">
                                    <h4>{destination.cost}</h4>
                                </div>

                                <div className="distance">
                                    <span>1000 Km</span>
                                    <span>{destination.duration}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Section>
    )
}

const Section = styled.section`
    padding: 2rem 0;

    .title {
        text-align: center;
    }

    .packages {
        display: flex;
        justify-content: center;
        margin: 2rem 0;

        ul { 
            display: flex;
            list-style-type: none;
            width: max-content;

            li { 
                padding: 1rem 2rem;
                border-bottom: 0.1rem solid #000000;
            }

            .active {
                border-bottom: .5rem solid #8338ec;
            }
        }
    }

    .destinations {
        display: grid;
        grid-template-columns:  repeat(3, 1fr);
        gap: 3rem;
        padding: 0 3rem;

        .destination {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: .5rem;
            background-color: #8338ec14;
            border-radius: 1rem;
            transition: .3s ease-in-out;

            &:hover {
                transform: translateX(0.4rem) translateY(-1rem);
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }

            img {
                width: 100%;
            }

            .info {
                display: flex;
                align-items: center;

                .services {
                    display: flex;
                    gap: 0.3rem;

                    img {
                        width: 2rem;
                        border-radius: 1rem;
                        background-color: #4d2ddb84;
                        padding: 0.2rem 0.4rem;
                    }
                }

                display: flex;
                justify-content: space-between;
            }

            .distance {
                display: flex;
                justify-content: space-between;
            }
        }
    }
`;