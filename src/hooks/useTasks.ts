import { useState, useEffect } from 'react'
import type { Task } from '../types/task'

const STORAGE_KEY = 'todo-tasks'

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return

    const newTask: Task = {
      id: Date.now(),
      text: trimmed,
      completed: false,
      createdAt: new Date().toISOString(),
    }

    setTasks((prev) => [newTask, ...prev])
  }

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed))
  }

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    clearCompleted,
  }
}