import styled from "styled-components";
//import Colors from "theme/Colors";

export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 5rem;
    overflow: hidden;

    .about {
        width: 50%
    }

    h2 {
        text-align: center;
        text-decoration: underline;
    }

    p{
        text-align: center;
        line-height: 3ch;
    }

    @media screen and (max-width: 800px){
        .about {
            width: 90%
        }
    }
   
`