import { useState } from "react";
import geralRequest from "../../services/geralRequest";
import StatusObjeto from "../../types/StatusObjeto";

interface Props {
  turnModalOff?: () => void,
  getObjetos: () => Promise<void>
}

function Home({ turnModalOff = () => { }, getObjetos }: Props) {
  const [codigoObjeto, setCodigoObjeto] = useState<string>();
  const [nomeObjeto, setNomeObjeto] = useState<string>();

  async function addObjeto() {
    const response: StatusObjeto = await geralRequest.post('', { codigoObjeto: codigoObjeto, nomeObjeto: nomeObjeto })
    await getObjetos()

  };

  return (
    <div className="">
      <div className="">
        <div className="mb-1">
          <label htmlFor="email" className="">Nome do Objeto</label>
          <input type="text" id="email" className="form-control" placeholder="Vibinho"
            onChange={(e) => setNomeObjeto(e.target.value)} required />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="">Código do Objeto</label>
          <input type="text" id="email" className="form-control" placeholder="Código do Objeto"
            onChange={(e) => setCodigoObjeto(e.target.value)} required />
        </div>
        <div className="d-flex">
          <button className="btn btn-warning ms-auto" onClick={turnModalOff} >Cancelar</button>
          <button className="btn btn-success ms-1" onClick={addObjeto} >Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default Home;