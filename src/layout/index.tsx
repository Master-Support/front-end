import { Outlet } from "react-router-dom"
import Header from "./Header"
import SideBar from "./SideBar"

function index() {
  return (
    <div className="bg-dark d-flex flex-column vh-100">
      <Header />
      <div className="container p-0 d-flex flex-row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default index