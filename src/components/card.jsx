function Card({ character, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={character.imageUrl} alt="" style={{pointerEvents: "none"}} />
      <p style={{pointerEvents: "none"}}>{character.name}</p>
    </div>
  );
}

export default Card;
