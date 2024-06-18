import Menu from './pages/menu'
import ChoosePlayer from './pages/choosePlayer'
import JoinGame from './pages/joinGame'
import BoardWithPlayers from './pages/boardWithPlayers'
import Waiting from './pages/waiting'
import WaitingJoin from './pages/waitingJoin'
import Setting from './pages/setting'
import Welcome from './pages/welcome'
import { Route, Routes } from 'react-router'
import socket from './socket'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='menu' element={<Menu/>}/>
      <Route path='setting' element={<Setting/>}/>
      <Route path='joinGame' element={<JoinGame/>}/>
      <Route path='waiting' element={<Waiting/>}/>
      <Route path='waitingJoin' element={<WaitingJoin/>}/>
      <Route path='choosePlayer' element={<ChoosePlayer/>}/>
      <Route path='board' element={<BoardWithPlayers/>}/>
      <Route path='*' element={<h1>not found</h1>}/>
    </Routes>
    </>
  )
}

export default App
