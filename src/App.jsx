import { TaskProvider } from "@/context/TaskContext"
import { MainPage } from "@/pages/main/MainPage"
import Router from "./router"

function App() {

  return (
    <TaskProvider>
      <Router>
        <MainPage />
      </Router>
    </TaskProvider>
  )
}

export default App