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
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#333', marginBottom: '30px' }}>Task Manager PWA</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe una tarea..."
          style={{ 
            padding: '10px', 
            marginRight: '10px',
            border: '2px solid #007bff',
            borderRadius: '4px',
            fontSize: '14px',
            color: '#333'
          }}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask} style={{ 
          padding: '10px 20px', 
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '14px',
          fontWeight: 'bold'
        }}>
          Agregar
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task, i) => (
          <li key={i} style={{ 
            background: '#ffffff', 
            margin: '8px 0', 
            padding: '15px', 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            color: '#333'
          }}>
            {task}
            <button 
              onClick={() => deleteTask(i)} 
              style={{ 
                background: '#dc3545', 
                color: 'white', 
                border: 'none', 
                borderRadius: '3px', 
                cursor: 'pointer',
                padding: '5px 10px',
                fontWeight: 'bold'
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && <p style={{ color: '#666', fontStyle: 'italic' }}>No hay tareas pendientes.</p>}
    </div>
  )
}

export default App