import { NavLink } from 'react-router-dom'
import type { TaskListProps } from '../types/task'
import { TaskItem } from './TaskItem'
import './TaskList.css'

export function TaskList({ tasks, onToggle, onDelete, onClearCompleted }: TaskListProps) {
  const completedCount = tasks.filter((t) => t.completed).length
  const activeCount = tasks.length - completedCount

  const handleClearCompleted = () => {
    const isConfirmed = window.confirm('Точно удалить выполненные задачи?')
    if (isConfirmed) {
      onClearCompleted()
    }
  }

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>Задач пока нет</p>
        <NavLink to="/add" className="empty-link">
            Добавьте первую задачу
          </NavLink>
      </div>
    )
  }

  return (
    <div className="task-list-wrapper">
      <div className="task-stats">
        <span>
          {activeCount} активных · {completedCount} выполненных
        </span>
        {completedCount > 0 && (
          <button className="clear-btn" onClick={handleClearCompleted}>
            Очистить выполненные
          </button>
        )}
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  )
}