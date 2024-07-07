function Card({ character, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="content">
        <img
          src={character.imageUrl}
          alt="loading image..."
          width="200px"
          style={{ pointerEvents: "none", aspectRatio: "1 / 1" }}
        />
        <p style={{ pointerEvents: "none" }}>{character.name}</p>
      </div>
    </div>
  );
}

export default Card;
