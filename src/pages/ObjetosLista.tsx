import { useEffect, useState } from "react";
import StatusObjeto from "../types/StatusObjeto";
import geralRequest from "../services/geralRequest";

function ObjetosLista() {
  const [objetos, setObjetos] = useState<StatusObjeto[]>([]);

  async function getObjetos() {
    const { data }: { data: StatusObjeto[] } = await geralRequest.get('/objetos')
    setObjetos(data)
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
        <h2 className="font-medium text-xl" >Lista de Objetos</h2>
      </div>

      <div className="flex mx-3">
        <button onClick={atualizar}
          className="py-2 px-3 border font-medium ml-auto rounded-xl border-gray-600 bg-blue-800 hover:opacity-50 hover:boder-gray-400 ">Atualizar</button>
      </div>

      <table className="table-auto mx-auto w-full mt-10">
        <thead>
          <tr className="font-medium text-left border-b">
            <th className="">Nome do Objeto</th>
            <th className="">Código do Objeto</th>
            <th className="">Data Prevista de Entrega</th>
            <th className="">Status do Objeto</th>
            <th className="">Localização</th>
          </tr>
        </thead>
        <tbody>
          {objetos.map((obj, i) => (
            <tr key={i} className="border-b  text-sm" >
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
  )
}

export default ObjetosLista