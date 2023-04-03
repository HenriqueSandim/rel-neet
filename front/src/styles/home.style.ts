import styled from "styled-components";

export const DivHome = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--grey-0);

    background-color: var(--grey-4);

    div {
        & > h1 {
            text-align: center;
        }

        width: 90%;
        max-width: 300px;
    }
`