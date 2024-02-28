import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes"
import { DataProvider, UiProvider } from "./Context"

function App() {

  return (
    <DataProvider>
      <UiProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </UiProvider>
    </DataProvider>
  )
}

export default App
