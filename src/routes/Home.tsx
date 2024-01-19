import {useFetch} from "../hooks/useFetch.ts";
import {FormEvent, useState} from "react";
import axios from "axios";


type Repository = {
    ID: number;
    codigoObjeto: string;
    nomeObjeto: string;
    dataPrevistaDeEntrega: string;
    statusObjeto: string;
    localizacao: string;
};

const Home = () => {
    const {data: repositories} = useFetch<Repository[]>("http://localhost:8080/api/v1/envio/objetos");
    const [codigoObjeto, setCodigoObjeto] = useState<string>();
    const [nomeObjeto, setNomeObjeto] = useState<string>();

    const addObjeto = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/v1/envio', {
            codigoObjeto : codigoObjeto,
            nomeObjeto : nomeObjeto
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);})
    };

    return (
        <div className="w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <nav
            className="w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <button
                            data-drawer-target="logo-sidebar"
                            data-drawer-toggle="logo-sidebar"
                            aria-controls="logo-sidebar"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                ></path>
                            </svg>
                        </button>
                        <a href="" className="flex ms-2 md:me-24">
                            <img
                                src="https://flowbite.com/docs/images/logo.svg"
                                className="h-8 me-3"
                                alt="FlowBite Logo"
                            />
                            <span
                                className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                MSTracker
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <div className="container mx-auto">
            {/*Área principal*/}
            <main className=" lg:w-3/4 rounded-lg shadow-md p-6 mx-auto">
                {/*ampo de inserção do código de rastreio*/}

                <form onSubmit={(e) => addObjeto(e)} className="max-w-sm mx-auto">
                    <div className="mb-1">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome
                            do Objeto</label>
                        <input type="text" id="email"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Vibinho"
                               onChange={(e) => setNomeObjeto(e.target.value)} required/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Código
                            do Objeto</label>
                        <input type="text" id="email"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Código do Objeto"
                               onChange={(e) => setCodigoObjeto(e.target.value)} required/>
                    </div>
                    <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                    </button>
                </form>
                {/*Área para exibir as informações de rastreamento*/}
                <div id="trackingInfo" className="hidden">
                    {/*Aqui serão inseridas as informações de rastreamento*/}
                    <h2 className="text-lg font-semibold mb-2">Informações de Rastreamento:</h2>
                    <div id="report" className="border p-4 rounded-md">
                        {/*As informações de rastreamento serão inseridas aqui*/}
                    </div>
                </div>
            </main>
        </div>

        <div className="container mx-auto my-8 flex-1 overflow-scroll ">
            <table id="envios-table" className="table-auto w-full border-collapse border">
                <thead>
                <tr>
                    <th className="border p-4 text-center text-cyan-300 align-middle">Nome do Objeto</th>
                    <th className="border p-4 text-center text-cyan-300 align-middle">Código do Objeto</th>
                    <th className="border p-4 text-center text-cyan-300 align-middle">Data Prevista de Entrega</th>
                    <th className="border p-4 text-center text-cyan-300 align-middle">Status do Objeto</th>
                    <th className="border p-4 text-center text-cyan-300 align-middle">Localização</th>
                </tr>
                </thead>
                <tbody className="bg-gray-100">
                {repositories?.map((repo) => (
                    <tr key={repo.ID}>
                        <td className="px-6 py-4">{repo.codigoObjeto}</td>
                        <td className="px-6 py-4">{repo.nomeObjeto}</td>
                        <td className="px-6 py-4">{repo.dataPrevistaDeEntrega}</td>
                        <td className="px-6 py-4">{repo.statusObjeto}</td>
                        <td className="px-6 py-4">{repo.localizacao}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </div>
    );
    // {!isFetching && repositories?.length === 0 && <p>No data available</p>}
};

export default Home;


// {isFetching && <p>Carregando...</p>}
// <div
//     className="container flex justify-center mt-80 m-20"> {/* Adicionado o elemento de contêiner com classe flex para centralizar */}
//     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//         <tr>
//             <th scope="col" className="px-6 py-3">Código do Objeto</th>
//             <th scope="col" className="px-6 py-3">Nome do Objeto</th>
//             <th scope="col" className="px-6 py-3">Data Prevista de Entrega</th>
//             <th scope="col" className="px-6 py-3">Status do Objeto</th>
//             <th scope="col" className="px-6 py-3">Localização</th>
//         </tr>
//         </thead>
//         <tbody>
//         {repositories?.map((repo) => (
//             <tr key={repo.ID} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                 <td className="px-6 py-4">{repo.codigoObjeto}</td>
//                 <td className="px-6 py-4">{repo.nomeObjeto}</td>
//                 <td className="px-6 py-4">{repo.dataPrevistaDeEntrega}</td>
//                 <td className="px-6 py-4">{repo.statusObjeto}</td>
//                 <td className="px-6 py-4">{repo.localizacao}</td>
//             </tr>
//         ))}
//         </tbody>
//     </table>
// </div>
// {!isFetching && repositories?.length === 0 && <p>No data available</p>}

// <div className="relative overflow-auto">

// </div>

// <form id="trackingForm" className="mb-4 flex items-center">
//     <input type="text" id="trackingCode" name="trackingCode" placeholder="Insira o código de rastreio"
//            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
//            required/>
//     <button type="submit"
//             className="ml-2 custom-button bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600 transition duration-300">Buscar
//     </button>
//     <a className="ml-2 custom-button bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600 transition duration-300">Cadastrar
//         Objeto</a>
// </form>