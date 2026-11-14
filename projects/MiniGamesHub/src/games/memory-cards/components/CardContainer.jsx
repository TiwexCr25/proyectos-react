export function CardContainer ({ card, onSelectedCard }) {
  const checkCardStatus = () => {
    if (card.wrong === true) return 'wrong'
    if (card.matched === true) return 'correct'
    return ''
  }

  return (
    <button onClick={() => onSelectedCard(card)} className={checkCardStatus()}>
      <p>{card.hidden ? card.symbol : card.emoji}</p>
    </button>
  )
}
