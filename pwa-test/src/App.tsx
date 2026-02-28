import { useEffect, useState } from 'react'

function App() {
  const [tasks, setTasks] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')

  // Cargar al iniciar (solo una vez)
  useEffect(() => {
    const saved = localStorage.getItem('tasks')
    if (saved) {
      setTasks(JSON.parse(saved))
    }
  }, [])

  // Guardar cuando cambian las tareas
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue])
      setInputValue('') // Limpiar input
    }
  }

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Task Manager PWA</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe una tarea..."
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button onClick={addTask} style={{ padding: '8px 15px', cursor: 'pointer' }}>
          Agregar
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task, i) => (
          <li key={i} style={{ 
            background: '#f4f4f4', 
            margin: '5px 0', 
            padding: '10px', 
            display: 'flex', 
            justifyContent: 'space-between',
            borderRadius: '4px'
          }}>
            {task}
            <button 
              onClick={() => deleteTask(i)} 
              style={{ background: '#ff4444', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && <p>No hay tareas pendientes.</p>}
    </div>
  )
}

export default App