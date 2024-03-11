import { useEffect, useState } from "react";
import StatusObjeto from "../../types/StatusObjeto";
import geralRequest from "../../services/geralRequest";
import GenericModal from "../../componentes/GenericModal";

import Novo from './Novo'

function ObjetosLista() {
  const [objetos, setObjetos] = useState<StatusObjeto[]>([]);

  async function getObjetos() {
    const { data }: { data: StatusObjeto[] } = await geralRequest.get('/objetos')
    setObjetos(data || [])
  }

  async function atualizar() {
    await geralRequest.put('/atualizar')
    getObjetos()
  }

  useEffect(() => {
    getObjetos()
  }, [])

  return (
    <div className="p-2 text-white">
      <div className="">
        <h2 className="fs-4" >Lista de Objetos</h2>
      </div>
      <div className="d-flex py-1">
        <GenericModal buttonText="Novo" buttonColor="success" buttonExtraClass="ms-auto" modalTitle="Cadastrar Objeto" >
          <Novo getObjetos={getObjetos} />
        </GenericModal>
        <button onClick={atualizar}
          className="btn btn-primary ms-1">Atualizar
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-dark">
          <thead className="">
            <tr>
              <th>Nome do Objeto</th>
              <th>Código do Objeto</th>
              <th>Data Prevista de Entrega</th>
              <th>Status do Objeto</th>
              <th>Localização</th>
            </tr>
          </thead>
          <tbody>
            {objetos.map((obj, i) => (
              <tr key={i} >
                <td>{obj.nomeObjeto}</td>
                <td>{obj.codigoObjeto}</td>
                <td>{obj.dataPrevistaDeEntrega}</td>
                <td>{obj.statusObjeto}</td>
                <td>{obj.localizacao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ObjetosLista