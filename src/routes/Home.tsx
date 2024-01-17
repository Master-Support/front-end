import {useFetch} from "../hooks/useFetch.ts";

type Repository = {
    ID: number;
    codigoObjeto: string;
    nomeObjeto: string;
    dataPrevistaDeEntrega: string;
    statusObjeto: string;
    localizacao: string;
};

const Home = () => {
    const { data: repositories, isFetching } =
        useFetch<Repository[]>("http://localhost:8080/api/v1/envio/objetos");
    return (
        <div>
            {isFetching && <p>Carregando...</p>}
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Código do Objeto</th>
                    <th>Nome do Objeto</th>
                    <th>Data Prevista de Entrega</th>
                    <th>Status do Objeto</th>
                    <th>Localização</th>
                </tr>
                </thead>
                <tbody>
                {repositories?.map(repo => (
                    <tr key={repo.ID}>
                        <td>{repo.ID}</td>
                        <td>{repo.codigoObjeto}</td>
                        <td>{repo.nomeObjeto}</td>
                        <td>{repo.dataPrevistaDeEntrega}</td>
                        <td>{repo.statusObjeto}</td>
                        <td>{repo.localizacao}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {!isFetching && repositories?.length === 0 && <p>No data available</p>}
        </div>
    );
};

export default Home;
