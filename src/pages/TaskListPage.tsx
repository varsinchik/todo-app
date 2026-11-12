import { useTasks } from '../hooks/useTasks'
import { TaskList } from '../components/TaskList'

export function TaskListPage() {
  const { tasks, toggleTask, deleteTask, clearCompleted } = useTasks()

  return (
    <div>
      <h2 className="page-title">Список задач</h2>
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onClearCompleted={clearCompleted}
      />
    </div>
  )
}