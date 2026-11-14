export function CardContainer ({ card, onSelectedCard }) {
  return (
    <button onClick={() => onSelectedCard(card)}>
      <p>{card.hidden ? card.symbol : card.emoji}</p>
    </button>
  )
}
