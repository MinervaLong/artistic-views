import styled from "styled-components";
//import Colors from "theme/Colors";

export const NavWrapper = styled.div`
    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 4.5rem;
        background-color: #E1E6E2;
        color: #722D78;
        box-shadow: 0px 4px 8px 0px rgba(50, 50, 50, 0.29);
    }

    .logo {
        width: 40px;
        margin-top: .5rem;
    }

    .navLinks {
        display: flex;
        justify-content: flex-end;
        list-style: none;
        width: 75%;
    }

    a {
        text-decoration: none;
    }

    li {        
        font-size: medium;
        font-weight: bold;
        padding: 10px 20px;
        margin: 0.5rem;
        cursor: pointer;
        list-style: none;

    }

    button {
        display: none;
    }

    @media screen and (max-width: 400px) {
     
        .logo {
            display: flex;
            position: absolute;
            top: 15px;
            left: 35px;
        }

        .navLinks {
            display: none;
        }

        .navLinksResp {
            position: absolute;
            display: block;
            list-style: none;
            background-color: #D4D8D5;
            left: 0;
            top: 55px;
            transition: all 0.5s ease-out;
            width: 100%;
        }

        li {
            text-align: center;
            color: #722D78;
            padding: 25px;
            width: 100%;
            transition: all 0.5s ease;


        }
        
        button {
            display: block;
            position: absolute;
            font-size: 30px;
            color: #722D78;
            background-color: #E1E6E2;
            border: none;
            outline: none;
            top: 15px;
            right: 25px;
        }
    }
`