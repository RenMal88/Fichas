import { useState } from "react";

function Contador() {
  const [numero, setNumero] = useState(0);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="card text-center p-4 shadow" style={{ width: "250px" }}>
        <h2 className="mb-3">Contador</h2>

        <div className="display-4 fw-bold mb-3">{numero}</div>

        <div className="d-flex justify-content-center gap-2">
          <button
            className="btn btn-success"
            onClick={() => setNumero(numero + 1)}
          >
            +
          </button>

          <button
            className="btn btn-danger"
            onClick={() => {
              if (numero > 0) {
                setNumero(numero - 1);
              }
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contador;
