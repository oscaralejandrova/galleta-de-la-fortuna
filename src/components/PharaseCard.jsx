import './styles/PhraseCard.css'

const PharaseCard = ({phraseRandom}) => {

    const {phrase} = phraseRandom
  return (
    <p className='card_phrase'>
      {phrase}
    </p>
  )
}

export default PharaseCard
