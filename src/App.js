import React from "react"
// import logo from "./logo.svg"
import "./App.css"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Header from "./components/Header"


function App() {
    // const [NUM_ARR, setNumArr] = React.useState(INITIAL_NUM_ARR)
    // const [IS_SHOW_LIST, setIsShowList] = React.useState(false)
    // const [SEARCH_VALUE, setSearchValue] = React.useState('')
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App
