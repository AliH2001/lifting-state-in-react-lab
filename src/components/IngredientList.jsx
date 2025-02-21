const IngredientList = (props) => {
    return (
        <ul>
            {props.availableIngredients.map((ingredient) => (
                <li
                    style={{ backgroundColor: ingredient.color }}

                >
                    {ingredient.name}
                    <button onClick={() => { props.handleAddToStack(ingredient) }} >★</button>
                </li>
            ))}
        </ul>
    )
}

export default IngredientList
