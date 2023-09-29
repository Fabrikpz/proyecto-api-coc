import React, { useState } from 'react';

function BarraDeBusqueda() {
  const [input, setInput] = useState('');
  const [recomendaciones, setRecomendaciones] = useState([]);

  // Función para mostrar recomendaciones
  function mostrarRecomendaciones() {
    // Simulación de recomendaciones (puedes obtener estas recomendaciones de tu fuente de datos)
    const sugerencias = ['Recomendación 1', 'Recomendación 2', 'Recomendación 3'];
    setRecomendaciones(sugerencias);
  }

  return (
    <div>
      <input
        className="mimi"
        value={input}
        placeholder="Ingrese su ID"
        onChange={(e) => {
          setInput(e.target.value);
          mostrarRecomendaciones();
        }}
      />
      <ul>
        {recomendaciones.map((sugerencia, index) => (
          <li key={index}>{sugerencia}</li>
        ))}
      </ul>
    </div>
  );
}

export default BarraDeBusqueda;
