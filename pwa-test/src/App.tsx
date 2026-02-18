import { useEffect, useState } from 'react'

const saveTasks = (tasks: string[]) =>
  localStorage.setItem('tasks', JSON.stringify(tasks))

const loadTasks = (): string[] =>
  JSON.parse(localStorage.getItem('tasks') || '[]')

function App() {
  const [tasks, setTasks] = useState<string[]>([])

  // Cargar al iniciar
  useEffect(() => {
    setTasks(loadTasks())
  }, [])

  // Guardar cuando cambian
  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  return (
    <>
      <h1>Tasks</h1>
      <button onClick={() => setTasks([...tasks, 'Nueva tarea'])}>
        Agregar
      </button>

      {tasks.map((task, i) => (
        <div key={i}>{task}</div>
      ))}
    </>
  )
}

export default App
