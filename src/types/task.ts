export interface Task {
  id: number
  text: string
  completed: boolean
  createdAt: string
}

export interface TaskItemProps {
  task: Task
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export interface TaskListProps {
  tasks: Task[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
  onClearCompleted: () => void
}