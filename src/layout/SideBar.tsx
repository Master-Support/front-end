import { Link, useLocation } from "react-router-dom"

function SideBar() {

  const { pathname } = useLocation()

  return (
    <div className="border-end border-secondary w-100 h-100 p-3">
      <ul className="mx-1 list-unstyled">
        <Link className="text-decoration-none text-white" to={'/'} >
          <li className={`w-100 text-start mb-1 p-2 ${pathname === '/' ? ' btn btn-secondary' : ''}`}>
            Dashboard
          </li>
        </Link>
        <Link className="text-decoration-none text-white" to={'/novo'} >
          <li className={`w-100 text-start mb-1 p-2 ${pathname === '/novo' ? ' btn btn-secondary' : ''}`}>
            Novo
          </li>
        </Link>
        <Link className="text-decoration-none text-white" to={'/lista'} >
          <li className={`w-100 text-start mb-1 p-2 ${pathname === '/lista' ? ' btn btn-secondary' : ''}`}>
            Lista
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default SideBar