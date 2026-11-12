import { HashRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { TaskListPage } from './pages/TaskListPage'
import { AddTaskPage } from './pages/AddTaskPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TaskListPage />} />
          <Route path="add" element={<AddTaskPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App