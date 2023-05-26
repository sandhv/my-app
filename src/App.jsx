import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttton from './components/Button'

function App() {
  const [show, setShow] = useState(false)

  const onShow = () => setShow(true)
  const onHide = () => setShow(false)

  if(show){
    return (
      <>
        <Buttton onClick={onShow} children={<span>Comprar</span>}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, praesentium? Obcaecati, amet dolorum atque doloremque quam neque laudantium autem mollitia aperiam ab impedit voluptas voluptatem at perspiciatis, hic magnam. Quos?</p>
      </>
    )
  } 
  return (
    <>
      <Buttton onClick={onShow} children={<span>Comprar</span>}/>
    </>
  )

 
}

export default App
