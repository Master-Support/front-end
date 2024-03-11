import { Routes, Route } from 'react-router-dom'

import Layout from '../layout'

import Novo from '../pages/Novo'
import ObjetosLista from '../pages/ObjetosLista'
import Dashboard from '../pages/Dashboard'

function index() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Novo' element={<Novo />} />
        <Route path='/lista' element={<ObjetosLista />} />
      </Route>
    </Routes>
  )
}

export default index