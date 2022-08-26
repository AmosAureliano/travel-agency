import { useState } from "react";
import styled from "styled-components";

export default function ScrollToTop() {
    const [scrollState, setScrollState] = useState(false);

    const toTop = () => {
        window.scrollTo({ top: 0});
    }
    window.addEventListener("scroll", () => {
        window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
    })

    return(
        <ToTop>
            <p>Logo</p>
        </ToTop>
    )
}

const ToTop = styled.div`
    display: ${({scrollState}) => (scrollState ? "block" : "none")};
    position: fixed;
    bottom: 1rem;
    right: 2rem;
    z-index: 10;
    cursor: pointer;
    border-radius: 2rem;
    background-color: #1900ff39;

`;