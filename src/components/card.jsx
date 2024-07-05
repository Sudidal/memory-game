function Card({ character }) {
  return (
    <div className="card">
      <img src={character.imageUrl} alt="" />
      <p>{character.name}</p>
    </div>
  );
}

export default Card;
