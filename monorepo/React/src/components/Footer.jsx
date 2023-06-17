function Footer({ currentStep, goBack }) {
    return (
        <>
            {currentStep > 1 && (
                <>
                    <br></br>
                    <button onClick={() => goBack()} type="button">Go Back</button>
                </>
            )}
        </>
    )
}

export default Footer