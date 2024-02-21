import React, { useState } from 'react';
import styles from './Create.module.css';


function Create() {
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  const handleDataChange = (event) => {
    setData(event.target.value);
  };

  const handleHoraChange = (event) => {
    setHora(event.target.value);
  };

  const handleAddData = async () => {
    if (data && hora) {
      const newData = {
        data,
        hora,
      };

      try {
        const response = await fetch('http://localhost:5000/Projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newData),
        });

        if (response.ok) {
          console.log('Data adicionada com sucesso');
          window.location.href = "/match";
          setData('');
          setHora('');
        } else {
          console.error('Falhou');
        }
      } catch (error) {
        console.error('Erro:', error);
      }
    }
  };

  return (
    <div>    
      <div className={styles.inputContainer}>
        <input
          type="date"
          placeholder="Data"
          value={data}
          onChange={handleDataChange}
        />
        <input
          type="time"
          placeholder="Hora"
          value={hora}
          onChange={handleHoraChange}
        />
        <button onClick={handleAddData}>Adicionar</button>
      </div>
    </div>
  );
}

export default Create;
