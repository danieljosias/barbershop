import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: 'Nunito Sans', sans-serif;
}

button {
  cursor: pointer;
  border: none;
}

li{
  list-style: none;
}

a {
  text-decoration: none;
}

input{
  border: none;
}

::-webkit-scrollbar {
  width: 20px;
  background-color: var(--grey-3);
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px var(--blue);
}

::-webkit-scrollbar-thumb {
  background: var(--blue);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--blue);
}

.toastify-color-progress-success {
  background-color: var(--blue);
  color: var(--white);
  font-size: 1rem;
}

.toastify-color-progress-error {
  background-color: var(--red);
  color: var(--white);
  font-size: 1rem;
}

.Toastify__progress-bar-theme--light {
  background: var(--grey-2);
}

:root{
  --green: #29FFB2;
  --black: #000000;
  --grey-1: #cecece;
  --grey-2: #1E1E1E;
  --red: #F51100;
  --blue: #081690;
  --white: #FFFFFF;
}
`