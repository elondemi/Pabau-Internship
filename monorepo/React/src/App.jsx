import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  const [selectedOption, setSelectedOption] = useState(null)

  return (
    <>
      <Header currentStep={selectedOption == null ? 1 : 2} maxSteps={2} />
      <Body selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      <Footer currentStep={selectedOption == null ? 1 : 2} goBack={() => setSelectedOption(null)} />
    </>
  )
}

export default App
