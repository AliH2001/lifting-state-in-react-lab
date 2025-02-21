const BurgerStack = (props) => {
    return (
        <>
            <ul>
                {props.stack.map((ingredient) => (
                    <li
                        style={{ backgroundColor: ingredient.color }}

                    >
                        {ingredient.name}
                        <button onClick={() => { props.handleRemoveFromStack(ingredient) }} >✖</button>
                    </li>
                ))}
            </ul>
        </>
    )

};

export default BurgerStack;