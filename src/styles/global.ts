import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* RESET PADRÃO */
  :root{
    --orange-primary: #F2B807;
    --orange-second: #F28F16;
    --yellow: #F5DB13;
    --yellow-dark: #dec714;
    --red:#D93E30;
    --green: #73D677;
    --green-dark: #82c984;

    --white:#F6F7F9;

    --color-stats: grey;
    --color-stats-label: grey;
    --color-stats-label-clicked: grey;

    --yellow-gradient: linear-gradient(180deg, #F5DB13 0%, #F2B807 100%);
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
  width: 100%;
  height: 100%;
  }

  html{
    scroll-behavior: smooth;
    @media (max-width: 768px) {
    font-size:87.5%;
  }
  }

  body{
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
    position: relative;
  }

  body, input, textarea, button{
    font-family: 'Karla', sans-serif;
    font-weight:  400;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

body.menu-expanded {
  overflow: hidden;
  .pokedex{
    header{
      margin-top: -2rem;
    }
  }

  .creditosPage{
    header{
      margin-top: -2rem;
    }
  }

  header{
    box-shadow: 0px 300px 0px rgba(1, 17, 38, 0.2);
    border-radius: 0px 0px 16px 16px;
    position: absolute;
    top: 0;
    animation: open 1s;

    @keyframes open {
      from{
        transform: translateY(-30rem);
        box-shadow: none;
      }
      to{
        transform: translateY(0px);
        box-shadow: none;
      }
    }

    .navigation{
    flex-direction: column;
    gap: 2rem;
    

      .menu{
      display: block;
      top: 0;
      left: 0;
      width: 100vw;

        ul{
            flex-direction: column;
            align-items: center;
          }
  }
  }
  }
}

.labelRadio{
  &.clickedOn-normal {
    background: linear-gradient(270deg, #bdbdb7 0.15%, #aaaa99 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-fire {
    background: linear-gradient(270deg, #b33327 0.15%, #d93e30 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-water {
    background: linear-gradient(270deg, #5bc7fa 0.15%, #35baff 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-electric {
    background: linear-gradient(270deg, #fbd76a 0.15%, #ffcc33 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-grass {
    background: linear-gradient(270deg, #99d482 0.15%, #77cc55 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-ice {
    background: linear-gradient(270deg, #66ccff 0.15%, #00aaff 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-fighting {
    background: linear-gradient(270deg, #bb5544 0.15%, #bc6a5c 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-poison {
    background: linear-gradient(270deg, #bf73b0 0.15%, #aa5599 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-ground {
    background: linear-gradient(270deg, #e2ca83 0.15%, #ddbb55 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-flying {
    background: linear-gradient(270deg, #8899ff 0.15%, #5b73fb 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-psychic {
    background: linear-gradient(270deg, #fc8d8d 0.15%, #ff5959 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-bug {
    background: linear-gradient(270deg, #c2d43a 0.15%, #aabb22 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-rock {
    background: linear-gradient(270deg, #c7bc8f 0.15%, #bbaa66 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-ghost {
    background: linear-gradient(270deg, #8f8fc7 0.15%, #6666bb 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-dragon {
    background: linear-gradient(270deg, #a498f0 0.15%, #7766ee 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-dark {
    background: linear-gradient(270deg, #926f5d 0.15%, #775544 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-steel {
    background: linear-gradient(270deg, #c9c9cf 0.15%, #aaaabb 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

  &.clickedOn-fairy {
    background: linear-gradient(270deg, #f4c8f4 0.15%, #ee99ee 100%);
    box-shadow: inset -4px -4px 0px rgba(0, 0, 0, 0.2);
  }

}

.inputsRadio{
  &.normal {
    background: radial-gradient(circle,#aaaa99 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.fire {
    background: radial-gradient(circle,#d93e30 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.water {
    background: radial-gradient(circle,#35baff 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.electric {
    background: radial-gradient(circle,#ffcc33 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.grass {
    background: radial-gradient(circle,#77cc55 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.ice {
    background: radial-gradient(circle,#00aaff 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.fighting {
    background: radial-gradient(circle,#bc6a5c 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.poison {
    background: radial-gradient(circle,#aa5599 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.ground {
    background: radial-gradient(circle,#ddbb55 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.flying {
    background: radial-gradient(circle,#5b73fb 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.psychic {
    background: radial-gradient(circle,#ff5959 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.bug {
    background: radial-gradient(circle,#aabb22 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.rock {
    background: radial-gradient(circle,#bbaa66 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.ghost {
    background: radial-gradient(circle,#6666bb 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.dragon {
    background: radial-gradient(circle,#7766ee 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.dark {
    background: radial-gradient(circle,#775544 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.steel {
    background: radial-gradient(circle,#aaaabb 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }

  &.fairy {
    background: radial-gradient(circle,#ee99ee 30%, rgba(255, 255, 255, 1) 100%);
    border: 0!important;
  }
}

.textColorType{
  &.normal {
    color:#aaaa99;
    background: none;
  }

  &.fire {
    background: none;
    color:#d93e30;
  }

  &.water {
    background: none;
    color:#35baff;
  }

  &.electric {
    background: none;
    color:#ffcc33;
  }

  &.grass {
    background: none;
    color:#77cc55;
  background: none;

  }

  &.ice {
    background: none;
    color:#00aaff;
  }

  &.fighting {
    background: none;
    color:#bc6a5c;
  }

  &.poison {
    background: none;
    color:#aa5599;
  }

  &.ground {
    background: none;
    color:#ddbb55;
  }

  &.flying {
    background: none;
    color:#5b73fb;
  }

  &.psychic {
    background: none;
    color:#ff5959;
  }

  &.bug {
    background: none;
    color:#aabb22;
  }

  &.rock {
    background: none;
    color:#bbaa66;
  }

  &.ghost {
    background: none;
    color:#6666bb;
  }

  &.dragon {
    background: none;
    color:#7766ee;
  }

  &.dark {
    background: none;
    color:#775544;
  }

  &.steel {
    background: none;
    color:#aaaabb;
  }

  &.fairy {
    background: none;
    color:#ee99ee;
  }
}

.normal {
    background: linear-gradient(270deg, #bdbdb7 0.15%, #aaaa99 100%);
  }

  .fire {
    background: linear-gradient(270deg, #b33327 0.15%, #d93e30 100%);
  }

  .water {
    background: linear-gradient(270deg, #5bc7fa 0.15%, #35baff 100%);
  }

  .electric {
    background: linear-gradient(270deg, #fbd76a 0.15%, #ffcc33 100%);
  }

  .grass {
    background: linear-gradient(270deg, #99d482 0.15%, #77cc55 100%);
  }

  .ice {
    background: linear-gradient(270deg, #66ccff 0.15%, #00aaff 100%);
  }

  .fighting {
    background: linear-gradient(270deg, #bb5544 0.15%, #bc6a5c 100%);
  }

  .poison {
    background: linear-gradient(270deg, #bf73b0 0.15%, #aa5599 100%);
  }

  .ground {
    background: linear-gradient(270deg, #e2ca83 0.15%, #ddbb55 100%);
  }

  .flying {
    background: linear-gradient(270deg, #8899ff 0.15%, #5b73fb 100%);
  }

  .psychic {
    background: linear-gradient(270deg, #fc8d8d 0.15%, #ff5959 100%);
  }

  .bug {
    background: linear-gradient(270deg, #c2d43a 0.15%, #aabb22 100%);
  }

  .rock {
    background: linear-gradient(270deg, #c7bc8f 0.15%, #bbaa66 100%);
  }

  .ghost {
    background: linear-gradient(270deg, #8f8fc7 0.15%, #6666bb 100%);
  }

  .dragon {
    background: linear-gradient(270deg, #a498f0 0.15%, #7766ee 100%);
  }

  .dark {
    background: linear-gradient(270deg, #926f5d 0.15%, #775544 100%);
  }

  .steel {
    background: linear-gradient(270deg, #c9c9cf 0.15%, #aaaabb 100%);
  }

  .fairy {
    background: linear-gradient(270deg, #f4c8f4 0.15%, #ee99ee 100%);
  }

/* RESET PADRÃO */
`;
