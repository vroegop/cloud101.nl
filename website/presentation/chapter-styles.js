import {css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

const base = css`
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: white 0 0 15px -3px;
  }

  .slide-main-content {
    flex-grow: 1;
  }

  .learning-path {
    max-width: 350px;
    min-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    font-size: 30px;
    height: 1080px;
    align-self: start;
    position: relative;
  }

  .learning-path .header {
    width: 100%;
    background-color: #333;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .learning-path .header h1 {
    font-size: 25px;
    margin: 0;
    padding: 0;
  }

  .learning-path .header p {
    font-size: 25px;
    margin: 5px;
    padding: 0;
  }

  .learning-path .lesson {
    width: 60px;
    height: 60px;
    background-color: #a4db70;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #111;
    border: 2px solid gray;
    box-shadow: gray 3px 3px 3px;
  }

  .learning-path .active {
    background-color: dodgerblue;
    color: white;
  }

  .learning-path .done {
    background-color: gold;
    color: darkgoldenrod;
  }

  .learning-path .footer {
    height: 60px;
  }

  .img1 {
    max-width: 30%;
    position: absolute;
    left: 10px;
    top: 30%;
  }

  .img2 {
    max-width: 30%;
    position: absolute;
    right: 10px;
    top: 60%;
  }
`;

export const eightChapters = css`
    ${base}

  .learning-path .lesson:nth-child(2) {
    margin-left: 0;
  }

  .learning-path .lesson:nth-child(3) {
    margin-left: 30%;
  }

  .learning-path .lesson:nth-child(4) {
    margin-left: 50%;
  }

  .learning-path .lesson:nth-child(5) {
    margin-left: 30%;
  }

  .learning-path .lesson:nth-child(6) {
    margin-left: -20%;
  }

  .learning-path .lesson:nth-child(7) {
    margin-left: -40%;
  }

  .learning-path .lesson:nth-child(8) {
    margin-left: -20%;
  }

  .learning-path .lesson:nth-child(9) {
    margin-left: 0%;
  }
`;