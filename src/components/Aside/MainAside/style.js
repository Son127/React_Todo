import { css } from "@emotion/react";

export const style = css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;

    width: 300px;
    height: 100%;   
    background-color: white;
    transition: left 1s ease;
`
export const sideHidden = css`
    left: -300;
`;
export const pushButton = css`
    position: fixed;
    top: 0;
    left: 300px;
    z-index: 99;

    border: none;
    outline: none;

    font-size: 50px;
    background-color: white;
`;

export const pushButton2 = css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;

    border: none;
    outline: none;

    font-size: 50px;
    background-color: white;
`;
