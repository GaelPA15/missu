'use client';  // Asegúrate de tener esta directiva para el componente del cliente

import { useState } from 'react';

export default function Home() {
  const [isYesClicked, setIsYesClicked] = useState(false);

  // Función para mover el botón "No" cuando intenten hacer clic en él
  const moveButton = () => {
    const button = document.getElementById("noButton");
    if (button) {
      const x = Math.random() * 80;
      const y = Math.random() * 80;
      button.style.left = `${x}%`;
      button.style.top = `${y}%`;
    }
  };

  return (
    <div className="container">
      <h1 className="title">Nos vamos a ver?</h1>
      {!isYesClicked ? (
        <div className="buttons">
          <button className="yes-button" onClick={() => setIsYesClicked(true)}>
            Sí
          </button>
          {/* Aquí está el truco, el botón "No" tiene un onMouseOver y onTouchStart */}
          <button
            id="noButton"
            className="no-button"
            onMouseOver={moveButton} // Funciona en escritorio
            onTouchStart={moveButton} // Funciona en móviles
            disabled // Esto hace que no se pueda hacer clic en el botón
          >
            No
          </button>
        </div>
      ) : null}
      {isYesClicked && (
        <p className="message">
          ¡Perfecto! Confirma cuando vernos por WhatsApp: 7445061556, te amo Iris ❤️
        </p>
      )}
    </div>
  );
}
