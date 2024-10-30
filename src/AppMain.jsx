import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/allPosts/navBar'
import SideInfo from './components/allPosts/sideInfo/sideInfo'

function App() {
  return (
    <div >
      <NavBar />
      <div className='grid-container-double'>
        <div className='pages'>
          <Outlet />
        </div>
        <SideInfo />
      </div>
    </div>
  )
}

export default App