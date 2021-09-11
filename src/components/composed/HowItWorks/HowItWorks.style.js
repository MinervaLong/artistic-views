import styled from "styled-components";
//import Colors from "theme/Colors";

export const HowItWorksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 5rem;
    padding-bottom: 5rem;
    overflow: hidden;

    .howItWorks {
        width: 40%;
        text-align: center;
    }

    h2 {
        text-align: center;
        text-decoration: underline;
    }

    p{
        text-align: center;
        line-height: 3ch;
    }

    button {
        min-width: 130px;
        height: 40px;
        color: #fff;
        padding: 5px 10px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        outline: none;
        border-radius: 20px;
        border: 2px solid #495057;
        background: #722D78;
        
    }
    button:hover {
        background: #fff;
        color: #722D78;
    }
    

    @media screen and (max-width: 800px){
        .howItWorks {
            width: 90%
        }
    }
`