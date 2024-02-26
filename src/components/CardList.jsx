import Card from './Card';

const CardList = ({ pokemonList, onCardClick }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {pokemonList.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} onCardClick={onCardClick} />
      ))}
    </div>
  );
};

export default CardList;