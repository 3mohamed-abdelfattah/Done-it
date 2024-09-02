import { TaskProvider } from "./context/TaskContext"
import { MainPage } from "./pages/main/MainPage"


function App() {
  return (
    <TaskProvider>
      <MainPage />
    </TaskProvider>
  )
}

export default App
