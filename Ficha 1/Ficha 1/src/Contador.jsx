import { useState } from "react";
function Contador() {
  const [numero, setNumero] = useState(0);
  return (
    <div className="card">
      <h2>Contador</h2>
      <div className="numero">{numero}</div>
      <button onClick={() => setNumero(numero + 1)}>+</button>
      <button
        onClick={() => {
          if (numero > 0) {
            setNumero(numero - 1);
          }
        }}
      ></button>
    </div>
  );
}
export default Contador;
