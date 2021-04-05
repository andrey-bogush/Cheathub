import React, { StrictMode } from "react"
import { render } from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { ChakraProvider } from "@chakra-ui/react"
import { UserProvider } from './context/user.context'

render(
  <StrictMode>
    <UserProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </UserProvider>
  </StrictMode>,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()