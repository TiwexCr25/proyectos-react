export function CardContainer ({ card, onSelectedCard }) {
  const checkCardStatus = () => {
    if (card.wrong === true) return 'card wrong'
    if (card.matched === true) return 'card correct'
    return 'card'
  }

  return (
    <button onClick={() => onSelectedCard(card)} className={checkCardStatus()}>
      <span>
        {card.hidden ? card.symbol : card.emoji}
      </span>
    </button>
  )
}
