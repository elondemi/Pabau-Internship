const Header = ({ currentStep, maxSteps }) => {
    return (
        <>
            <h1 className="page-info">Page {currentStep} / {maxSteps}</h1>
        </>
    )
}

export default Header