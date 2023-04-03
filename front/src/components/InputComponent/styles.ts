import styled from "styled-components";

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    margin: 0.5em;

    width: 90%;
    max-width: 300px;

    color: var(--grey-0);

    input {
        width: 100%;
        padding: 0.5em;
    }
`;

export const DivPasswordInput = styled(DivInput)`
    div {
        position: relative;

        button {
            position: absolute;
            right: 0.2em;

            top: 50%;
            transform: translateY(-45%);

            svg {
                width: 1.5em;
                height: 1.5em;
            }
        }
    }
`