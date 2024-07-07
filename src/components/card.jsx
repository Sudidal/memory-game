function Card({ character, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="content">
        <img
          src={character.imageUrl}
          alt=""
          style={{ pointerEvents: "none" }}
        />
        <p style={{ pointerEvents: "none" }}>{character.name}</p>
      </div>
    </div>
  );
}

export default Card;
