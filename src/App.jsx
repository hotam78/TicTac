import Button from './components/button'
import Board from './components/board'
import X from './components/x'
import O from './components/o'
import Back from './components/back'
import Player from './components/player'
import PlayerBoard from './components/playerBoard'
import Title from './components/title'
import Card from './components/card'
import Menu from './pages/menu'

function App() {

  return (
    <>
      {/* <img src={'LogoSmall.png'} /> */}
      <PlayerBoard />
      <Player />

      {/* <Button text={'play solo'} width={'150px'}/> */}
      {/* <Board/> */}
      {/* <X/> */}
      {/* <O/> */}
      {/* <Back /> */}
      {/* <Board title={'yore code'} /> */}
    </>
  )
}

export default App
