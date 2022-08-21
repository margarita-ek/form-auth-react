import { useState } from "react"

import { StyledWrapper } from "./App.styles"
import Header from "./components/Header/Header"

import { useAppRoutes } from "./routes"


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  const routes = useAppRoutes(isAuthenticated, setIsAuthenticated)

  return (
      <StyledWrapper>
        <Header />
        {routes}
      </StyledWrapper>
  )
}

export default App
