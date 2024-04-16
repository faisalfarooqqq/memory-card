const Card = ({ pokemon, onCardClick }) => {
  return (
    <div
      className="border border-gray-300 rounded-md p-4 flex flex-col items-center cursor-pointer hover:shadow-1g hover:border-orange-300 transform hover:scale-105 transition duration-300"
      onClick={() => onCardClick(pokemon.id)}
    >
      <img
        className="w-24 h-24 object-contain mb-2"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <span className="text-sm font-semibold">{pokemon.name}</span>
    </div>
  );
};

export default Card;
