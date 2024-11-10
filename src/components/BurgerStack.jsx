const BurgerStack = (props) => {
  return (
    <ul>
      {props.ingredients.length > 0 ? (
        props.ingredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => props.removeFromBurger(index)}>X</button>
          </li>
        ))
      ) : (
        <p>No Ingredients</p>
      )}
    </ul>
  );
};

export default BurgerStack;
