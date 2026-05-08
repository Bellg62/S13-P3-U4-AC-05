import { useState } from 'react'
import './App.css'
import Chart from './components/chart'

function App() {
  const [graficaActual, setGraficaActual] = useState('/polar_scatter.html')
  const [titulo, setTitulo] = useState('Dispersión Polar')
  const [mostrarCreditos, setMostrarCreditos] = useState(false)

  return (
    <div className="container">
      <h2>Gráficas de Datos Climáticos con Plotly</h2>

      <div className="button-group">
        <button
          onClick={() => {
            setGraficaActual('/polar_scatter.html')
            setTitulo('Dispersión Polar')
            setMostrarCreditos(false)
          }}
        >
          Scatter Polar
        </button>

        <button
          onClick={() => {
            setGraficaActual('/polar_line.html')
            setTitulo('Líneas')
            setMostrarCreditos(false)
          }}
        >
          Line Chart
        </button>

        <button
          onClick={() => {
            setGraficaActual('/polar_bar.html')
            setTitulo('Barras')
            setMostrarCreditos(false)
          }}
        >
          Bar Chart
        </button>

        <button
          onClick={() => {
            setTitulo('Créditos')
            setMostrarCreditos(true)
          }}
        >
          Créditos
        </button>
      </div>

      <hr />

      {mostrarCreditos ? (
        <div className="credits-page" style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Universidad de Colima</h1>
          <h2 style={{ marginTop: '20px' }}>Facultad de Ingeniería, Mecánica y Eléctrica.</h2>
          <p style={{ marginTop: '16px', fontSize: '1rem', lineHeight: '1.6' }}>
            Proyecto desarrollado por:<br></br>
            <strong>Perla Isabel García Andrade</strong>.<br></br>
            <strong>Delgado Guillermo José Antonio</strong>. 
          </p>
          <p style={{ marginTop: '12px', fontSize: '0.95rem' }}>
            Visualización de datos climáticos usando Plotly y React.
          </p>
          <p style={{ marginTop: '10px', fontSize: '0.90rem' }}>
            08 de mayo de 2026
          </p>
        </div>
      ) : (
        <Chart path={graficaActual} title={titulo} />
      )}
    </div>
  )
}

export default App