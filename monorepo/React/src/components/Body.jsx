function Body({ selectedOption, setSelectedOption }) {
    const options = [
        'pabau',
        'kodelabs',
        'celonis',
        'frakton',
        'starlabs'
    ]
    return (
        <>
            {!!selectedOption ? (
                <>
                    <h3 className="chosedOne"> You chosed {selectedOption} </h3>
                </>
            ) : (
                <ul className="list">
                    {options.map((option, index) => (
                        <li key={option + index} onClick={() => setSelectedOption(option)}>{option}</li>
                    ))}
                </ul>
            )}

        </>
    )
}

export default Body