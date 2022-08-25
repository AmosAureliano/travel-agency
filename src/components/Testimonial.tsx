import styled from "styled-components"

export default function Testimonial() {
    return(
        <Section>
            <div className="title">
                <h2>Quem Viajou Conosco Sabe!</h2>
            </div>               
            <div className="testimonials">
                <div className="testimonial">
                    <p>lorem ipsum dolor sit amet, consectetur.</p>

                    <div className="info">
                        <div className="details">
                            <h4>Stephen Kartner</h4>
                            <span>CEO - Kartner Solutions</span>
                        </div>
                    </div>
                </div>

                <div className="testimonial">
                    <p>lorem ipsum dolor sit amet, consectetur.</p>

                    <div className="info">
                        <div className="details">
                            <h4>Stephen Kartner</h4>
                            <span>CEO - Kartner Solutions</span>
                        </div>
                    </div>
                </div>

                <div className="testimonial">
                    <p>lorem ipsum dolor sit amet, consectetur.</p>

                    <div className="info">
                        <div className="details">
                            <h4>Stephen Kartner</h4>
                            <span>CEO - Kartner Solutions</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

const Section = styled.section`
    margin: 5rem 0;

    .title {
        text-align: center;
        margin-bottom: 2rem;
    }

    .testimonials {
        display: flex;
        justify-content: center;
        margin: 0 2rem;
        gap: 2rem;

        .testimonial {
            background-color: aliceblue;
            padding: 2rem;
            border-radius: 0.5rem;
            box-shadow: rgba(100, 100, 111,0 0.2) 0px 7px 29px;
            transition: .3s ease-in-out;

            &:hover {
                transform: translateX(.4rem) translateY(-1rem);
                box-shadow: rgba(0, 0, 0, .35) 0px 5px 15px;
            }

            .info {
                display: flex;
                justify-content: center;
                gap: 1rem;
                align-items: center;
                margin-top: 1rem;

                .details {
                    span {
                        font-size: .9rem;
                    }
                }
            }
        }
    }
`;