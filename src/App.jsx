import { useState } from 'react'
import './App.css'
import getRandomFromArray from './utils/getRandomFromArray'
import phareses from './utils/pharases.json'
import PharaseCard from './components/PharaseCard'
import BtnPhrase from './components/BtnPhrase'
import arrImages from './utils/arrImages.json'

function App() {

  const initialValue = getRandomFromArray(phareses)
  const[pharasesRandom, setPhareseRandom] = useState(initialValue)

  const initialImages = getRandomFromArray(arrImages)
  const [imageSelect, setImageSelected] = useState(initialImages)

  const objStyle = {
   backgroundImage: `url("/fondo${imageSelect}.jpg")`
  }

  return (
    <div className='app' style={objStyle}>
      <h1 className='app_tittle'>Galleta de la fortuna</h1>
      <article className='app_card'>
      <PharaseCard phraseRandom={pharasesRandom}/>
      <BtnPhrase 
      setPhareseRandom={setPhareseRandom}
      setImageSelected={setImageSelected}
      />
      </article>
    </div>
  )
}

export default App
