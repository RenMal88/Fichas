import { useState } from "react";
function Mostrar() {
  const [mostrar, setMostrar] = useState(false);
  return (
    <div className="card">
      <h2>Mostrar/Ocultar</h2>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "ocultar info" : "mostrar info"}
      </button>
      {mostrar && <p>Renzo</p>}
    </div>
  );
}
export default Mostrar;
