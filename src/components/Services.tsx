import styled from "styled-components";

export default function Services() {

    const data = [
        {
            title: "Os melhores preços",
            subTitle: "lorem impsum"
        },
        {
            title: "Pagamento flexível",
            subTitle: "lorem impsum"
        },
        {
            title: "Encontre o melhor destino",
            subTitle: "lorem impsum"
        }
    ];
    return(
        <Section>
            {
                data.map((service) => {
                    return(
                        <div className="service">
                            <h3>{service.title}</h3>
                            <p>{service.subTitle}</p>
                        </div>
                    )
                })
            }
        </Section>
    )
}

const Section = styled.section`
    padding: 1rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;

    .service {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        background-color: aliceblue;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px;
        transition: 0.3s ease-in-out;
        border-radius: .5rem;

        &:hover {
            transform: translateX(0.4rem) translateY(-1rem);
            box-shadow: rgba(0, 0, 0, .35) 0px 0px 15px;
        }
    }

    @media screen and (min-width: 280px) and (max-width: 780px) {
        grid-template-columns: repeat(autofill, minmax(250px, 1fr));
    }

    @media screen and (min-width: 720px) and (max-width: 780px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;