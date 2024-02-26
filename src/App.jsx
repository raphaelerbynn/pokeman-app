import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes"
import { UiProvider } from "./Context"

function App() {

  return (
    <UiProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </UiProvider>
  )
}

export default App
