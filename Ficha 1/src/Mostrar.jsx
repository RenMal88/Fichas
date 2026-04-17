import { useState } from "react";

function Mostrar() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="card text-center shadow p-4" style={{ width: "280px" }}>
        <h2 className="mb-3">Mostrar / Ocultar</h2>

        <button
          className={`btn ${mostrar ? "btn-danger" : "btn-primary"} mb-3`}
          onClick={() => setMostrar(!mostrar)}
        >
          {mostrar ? "Ocultar info" : "Mostrar info"}
        </button>

        {mostrar && <div className="alert alert-info fw-bold mb-0">Renzo</div>}
      </div>
    </div>
  );
}

export default Mostrar;
