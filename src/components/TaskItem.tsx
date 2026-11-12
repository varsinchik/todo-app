import type { TaskItemProps } from '../types/task'
import './TaskItem.css'


export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
    const handleDelete = () => {
    const isConfirmed = window.confirm('Точно удалить эту задачу?')
    if (isConfirmed) {
      onDelete(task.id)
    }
  }

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <button
        className="checkbox"
        onClick={() => onToggle(task.id)}
        aria-label={task.completed ? 'Отметить как невыполненную' : 'Отметить как выполненную'}
      >
        {task.completed ? '✓' : ''}
      </button>

      <span className="task-text" onClick={() => onToggle(task.id)}>
        {task.text}
      </span>

      <button className="delete-btn" onClick={handleDelete} aria-label="Удалить задачу">
        ×
      </button>
    </li>
  )
}