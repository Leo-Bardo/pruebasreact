import React, { useState } from 'react';
import '../App.css';

function Mover() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  <div>Estoy aqui</div>
  // Función para manejar el inicio del arrastre
  const handleMouseDown = (event) => {
    setDragging(true);
    // Obtener la posición inicial del mouse
    const initialX = event.clientX;
    const initialY = event.clientY;
    
    // Función para manejar el movimiento del mouse
    const handleMouseMove = (event) => {
      if (dragging) {
        // Calcular la nueva posición del cuadro
        const dx = event.clientX - initialX;
        const dy = event.clientY - initialY;
        setPosition(prevPosition => ({
          x: prevPosition.x + dx,
          y: prevPosition.y + dy
        }));
        // Actualizar la posición inicial del mouse
        initialX = event.clientX;
        initialY = event.clientY;
      }
    };
    
    // Función para manejar el final del arrastre
    const handleMouseUp = () => {
      setDragging(false);
      // Remover los event listeners
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    // Agregar event listeners al documento
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  return (
    <div className="container">
      <div
        className="box"
        style={{ left: position.x, top: position.y }}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
}

export default Mover;
