import { Box } from "@chakra-ui/react"
import Header from "./components/header"
import Main from "./components/Main"

function App() {

  return (
    <Box bg='blackAlpha.900' h="auto">
      <Header />
      <Main />
    </Box>
  )
}

export default App
