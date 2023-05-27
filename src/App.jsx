import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttton from './components/Button/Button'

function App() {
  const [show, setShow] = useState(false)

  const onShow = () => setShow(true)
  const onHide = () => setShow(false)

  return (
    <>
      <Buttton onClick={show ? onHide : onShow}
        children={<span>{show ? 'Ocultar' : 'Mostrar'}</span>} />

      <Buttton variant="outline"
        children={<span>Outline</span>} />

      <Buttton variant="ghost"
        children={<span>Ghost</span>} />

      <Buttton href="#" variant="link"
        children={<span>Link</span>} />

    </>
  )


}

export default App
