import styled from "styled-components";
//import Colors from "theme/Colors";

export const CoverWrapper = styled.div`
    position: absolute;
    z-index: -1;
    background-color: #E8DCEF;
    box-shadow: 0px 4px 8px 0px rgba(50, 50, 50, 0.29);
    text-align: center;
	width: 100%;
	height: auto;
	background-size: cover;
	background-attachment: fixed;
	position: relative;
	overflow: hidden;
	border-radius: 0 0 85% 85% / 30%;
    display: flex;
    justify-content: center;
    

    .overlay {
        width: 30%;
	    height: 100%;
	    padding: 50px;
	    
        p {
            font-size: medium;
            margin: 0%;
            word-spacing: 1ch;
            letter-spacing: 1ch;
        }
	
    }
`