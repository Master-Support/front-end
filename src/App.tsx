import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="none:container">
        <Outlet />
      </div>
    </div>
  )
}
export default App
