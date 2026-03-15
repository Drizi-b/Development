import React, { useState } from 'react';

export function Counter () {
  const [contador, setContador] = useState(0); //estado do contador que inicia em zero

        return (
          <div>
            <h1>{contador}</h1>
            <div>
              <button
                onClick={() => {
                  setContador(contador - 1)
                }}
              >
                Diminuir
              </button>
              <button
                onClick={() => {
                  setContador(contador + 1);
                }}
              >
                Aumentar
              </button>

            </div>            
          </div>
        );
    }