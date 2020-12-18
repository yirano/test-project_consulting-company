import React from "react"
import MainContent from "./MainContent/MainContent"
import Footer from "./Footer"
import Header from "./Header/Header"

const App = () => {
	return (
		<div className="app">
			<Header />
			<MainContent />
			<Footer />
		</div>
	)
}

export default App
