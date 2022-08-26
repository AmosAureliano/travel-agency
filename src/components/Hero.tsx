import styled from 'styled-components';
import homeImage from '../assets/travel-background.jpg';

export default function Hero() {
    return(
        <Section id="hero">
            <div className="background">
                <img src={homeImage} alt=""/>
            </div>

            <div className="content">
                <div className="title">
                    <h1>VIAJE E EXPLORE</h1>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
                </div>
            </div>

            <div className="search">
                <div className="container">
                    <label htmlFor="">Para onde você quer ir?</label>
                    <input type="text" placeholder="Procure o local desejado"/>
                </div>
                <div className="container">
                    <label htmlFor="">Check-in</label>
                    <input type="date"/>
                </div>
                <div className="container">
                    <label htmlFor="">Check-out</label>
                    <input type="date"/>
                </div>
                <button>Explorar</button>
            </div>
        </Section>
    )
}

const Section = styled.section`
    position: relative;
    margin-top: 2rem;
    width: 100%;
    height: 100%;
    
    .background {
        height: 100%; 

        img {
            width: 100%;
            border-radius: 2rem;
            filter: brightness(60%);
        }
    }

    .content {
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        .title {
            color: #FFFFFF;

            h1 {
                font-size: 3rem;
                letter-spacing: 0.2rem;
            }

            p {
                text-align: center;
                padding: 0 30vw;
                margin-top: 0.5rem;
                font-size: 1.2rem;
            }
        }
    }

    .search {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        padding: 0.5rem;
        border-radius: 0.5rem;
        position: absolute;
        top: 50vh;
        left: 25vw;
        align-self: center;
        z-index: 3;

        .container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 1.5rem;

            label {
                font-size: 1.1rem;
                color: #02035e;
            }

            input {
                background-color: transparent;
                border: none;
                text-align: center;
                color: #000000;

                &[type="date"] {
                    padding-left: 3rem;
                }

                &::placeholder {
                    color:  #000000;
                }

                &:focus {
                    outline: none;
                }
            }
        }

        button {
            padding: 1rem;
            cursor: pointer;
            border-radius: 0.3rem;
            border: none;
            color: #FFFFFF;
            background-color: #4361ee;
            font-size: 1.1rem;
            text-transform: uppercase;
            transition: .3s ease-int-out;
            
            &:hover {
                background-color: #023e8a;
            }
        }

    }

    @media screen and (min-width: 280px) and (max-width: 980px) {
        height: 25rem;

        .background {
            img {
                height: 100%;
            }
        }

        .content {
            .title {
                h1 {
                    font-size: 1rem;
                }

                p {
                    font-size: .8rem;
                    padding: 1vw;
                }
            }

            .search {
                flex-direction: column;
                padding: .8rem;
                gap: .8rem;

                .container {
                    padding: 0 .8rem;
                    
                    input[type="date"] {
                        padding-left: 1rem 
                    }
                }

                button {
                    padding: 1rem;
                    font-size: 1rem;
                }
            }
        }
    }
`