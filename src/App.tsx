import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { TaskListPage } from './pages/TaskListPage'
import { AddTaskPage } from './pages/AddTaskPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TaskListPage />} />
          <Route path="add" element={<AddTaskPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App