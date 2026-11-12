import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTasks } from '../hooks/useTasks'
import './AddTaskPage.css'

export function AddTaskPage() {
  const [text, setText] = useState('')
  const { addTask } = useTasks()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!text.trim()) return

    addTask(text)
    setText('')
    navigate('/')
  }

  return (
    <div>
      <h2 className="page-title">Добавить задачу</h2>

      <form className="add-form" onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Что нужно сделать?"
          rows={4}
          autoFocus
        />

        <div className="form-actions">
          <button type="button" className="btn-secondary" onClick={() => navigate('/')}>
            Отмена
          </button>
          <button type="submit" className="btn-primary" disabled={!text.trim()}>
            Добавить
          </button>
        </div>
      </form>
    </div>
  )
}