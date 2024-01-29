import styled from "styled-components";


export const MainSectionBlock = styled.section`
    border-radius: var(--tablet-spacer-lvl_2, 18px);
    background: var(--darktheme-Gray-scale-Gray-4, #121825);
    padding: 24px 0px ;
    margin-top: 40px;

`

export const MainBlockHeader = styled.div`
    /* border-radius: var(--tablet-spacer-lvl_2, 18px); */
    background: var(--darktheme-Gray-scale-Gray-4, #121825);
    padding: 0 24px 24px 24px;
    
    border-bottom: 1px solid #222B44 ;
`
export const Title = styled.h1`
    font-size: 22px;
    font-weight: 600;
    line-height: 29px; /* 131.818% */
`

export const UsersBlock = styled.div`
    margin-top: 29px;
    padding: 0 24px;
    
`

export const Search = styled.div`
    margin: 24px 0;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: var(--const-spacer-lvl_1, 8px);
    border: 1px solid var(--darktheme-Gray-scale-Gray-2, #313E62);
    background: var(--darktheme-Gray-scale-Gray-4, #121825);
    color: #fff;
    padding: 0 16px;
    
    
    div {
        max-width: 16px;
        max-height: 16px;
        img {
            width: 100%;
            height: 100%;
         }
    }
   
    input {
        border: none;
        padding: 10px 16px;
        outline: none;
        background: none;
        color: #fff;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px; /* 128.571% */
        width: 100%;
        font-family: "IBM Plex Sans", sans-serif;
     
            &::placeholder { 
            color: var(--darktheme-Gray-scale-Gray-1, #616D8D);
            
            /* other/input-sm */
            font-family: "IBM Plex Sans", sans-serif;
            font-size: 14px;
            font-weight: 400;
            line-height: 18px; /* 128.571% */
            }
    }
    
   
`


export const TablleUsers = styled.table`
    width: 100%;
    thead {
        background: var(--darktheme-base-black, #0E0C15);
        border-radius: 8px;
        border-radius: 5px;
        
        width: 100%;
            tr {
                text-align: center;

                td {
                    padding: 14px 20px;
                    color: var(--darktheme-Gray-scale-Gray-6, #9CA3AF);
                    word-break:normal;
                    /* desktop text/body-s-medium */
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 18px; /* 128.571% */
                }
            }
    }


`