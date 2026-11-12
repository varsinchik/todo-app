import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

export function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <h1 className="logo">Тестовое приложение Todo</h1>
        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Список задач
          </NavLink>
          <NavLink to="/add" className={({ isActive }) => (isActive ? 'active' : '')}>
            Добавить задачу
          </NavLink>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}