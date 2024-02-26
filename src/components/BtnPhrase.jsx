import getRandomFromArray from "../utils/getRandomFromArray"
import phrases from '../utils/pharases.json'
import arrImages from '../utils/arrImages.json'
import './styles/BtnPhrase.css'

const BtnPhrase = ({setPhareseRandom, setImageSelected}) => {
    
    const handleClick = () => {
      const phrase = getRandomFromArray(phrases)
      setPhareseRandom(phrase)

      const background = getRandomFromArray(arrImages)
      setImageSelected(background)
    }
    
  return (
    <button className="card_btn" onClick={handleClick}>BtnPhrase</button>
  )
}

export default BtnPhrase


