import { Routes, Route } from 'react-router-dom'

import Layout from '../layout'

import ObjetosLista from '../pages/Objetos/ObjetosLista'
import Dashboard from '../pages/Dashboard'

function index() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/lista' element={<ObjetosLista />} />
      </Route>
    </Routes>
  )
}

export default index