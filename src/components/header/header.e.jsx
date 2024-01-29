import styled from 'styled-components'



export const HeaderBlock = styled.header`
    border-radius: 17px;
    background: var(--darktheme-Gray-scale-Gray-4, #121825);
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
`


export const Header_Nav = styled.div`
    display: flex;
    align-items: center;
    gap: 44px;
`

export const Title = styled.h1`
    font-size: 22px;
    font-weight: 600;
    line-height: 29px; /* 131.818% */
`

export const Organization_block = styled.button`

    display: flex;
    align-items: center;
    gap: 10px;
    transition: 0.3s all ease-in-out;
    div {
        max-width: 24px;
        max-height: 24px;

        img {
            width: 100%;
        }
    }
    &:hover {
        h2 {

            color: #4785FF;
        }
    }
`


export const Organization_Title = styled.h2`
    transition: 0.3s all ease-in-out;

    color: var(--darktheme-base-white, #FFF);
    font-family: "IBM Plex Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 137.5% */
`


export const Header_profile = styled.button`
    border-radius: 6px;
    border: 1px solid var(--darktheme-Gray-scale-Gray-3, #222B44);
    background: var(--darktheme-Gray-scale-Gray-4, #121825);
    padding: var(--const-spacer-lvl_1, 8px) 14px;


    display: flex;
    align-items: center;
    gap: 12px;

`


export const User_avatar = styled.div`
    max-width: 32px;
    max-height: 32px;

    img {
        width: 100%;
        height: 100%;
    }
`

export const AdminSubs = styled.div`
    span {
        color: var(--darktheme-Gray-scale-Gray-1, #616D8D);
        font-size: 12px;
        font-weight: 400;
        line-height: 16px; /* 133.333% */
    }

    h2 {
        color: var(--darktheme-base-white, #FFF);
        font-family: "IBM Plex Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px; /* 128.571% */
    }
`