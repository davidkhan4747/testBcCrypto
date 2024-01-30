import styled from "styled-components";


export const HeadDrawer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

        h2 {
            font-size: 20px;
            font-weight: 600;
            line-height: 26px; /* 130% */
        }
`

export const CenterMail = styled.h3`
    color: var(--darktheme-Gray-scale-Gray-1, #616D8D);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
    text-align: center;
    margin-top: 52px;

   
` 

export const OperationsHistory = styled.div`
    margin-top: 12px;
    padding: 12px 0;
    border-top: 1px solid #222B44;
    h2 {
        color: var(--darktheme-base-white, #FFF);
        font-family: "IBM Plex Sans";
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 26px; /* 130% */
        margin-bottom: 20px;
    }
`