import styled from "styled-components";
//import Colors from "theme/Colors";

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: space-around;
    align-items: stretch;
    background-color: #E1E6E2;
    font-size: small;
    color: #722D78;
    font-weight: bold;
    box-shadow:  0px -4px 5px 0px rgba(50, 50, 50, 0.29);

    .topFooter {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-content: space-around;
        align-items: center;
     
    }
    .bottomFooter {
        text-align: center;
    }

    .socialMedia img {
        width: 30px;
        height: 30px;
        color: #722D78;
        margin: 0.5rem 1rem 0 1rem;
    }

    button {
        border: none;
        background-color: #E1E6E2;
        color: #722D78;
        font-weight: bold;
        cursor: pointer;
    }

`
