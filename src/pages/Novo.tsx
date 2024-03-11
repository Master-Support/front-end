import { FormEvent, useEffect, useState } from "react";
import geralRequest from "../services/geralRequest";
import StatusObjeto from "../types/StatusObjeto";

function Home() {
  const [codigoObjeto, setCodigoObjeto] = useState<string>();
  const [nomeObjeto, setNomeObjeto] = useState<string>();

  async function addObjeto(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response: StatusObjeto = await geralRequest.post('', { codigoObjeto: codigoObjeto, nomeObjeto: nomeObjeto })
  };



  return (
    <div className="">


      <div className="">
        <main className="">

          <form onSubmit={(e) => addObjeto(e)} className="">
            <div className="mb-1">
              <label htmlFor="email" className="">Nome
                do Objeto</label>
              <input type="text" id="email"
                className=""
                placeholder="Vibinho"
                onChange={(e) => setNomeObjeto(e.target.value)} required />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="">Código
                do Objeto</label>
              <input type="text" id="email"
                className=""
                placeholder="Código do Objeto"
                onChange={(e) => setCodigoObjeto(e.target.value)} required />
            </div>
            <button type="submit"
              className="">Submit
            </button>
          </form>
          <div id="trackingInfo" className="hidden">
            <h2 className="text-lg font-semibold mb-2">Informações de Rastreamento:</h2>
            <div id="report" className="border p-4 rounded-md">
            </div>
          </div>
        </main>
      </div>


    </div>
  );
};

export default Home;