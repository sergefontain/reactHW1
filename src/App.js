import React from "react"
import logo from "./logo.svg"
import "./App.css"
import List from "./components/List"
const INITIAL_NUM_ARR = [1, 2, 3, 4, 5]

function App() {
    const [NUM_ARR, setNumArr] = React.useState(INITIAL_NUM_ARR)
    const [IS_SHOW_LIST, setIsShowList] = React.useState(false)
    const [SEARCH_VALUE, setSearchValue] = React.useState('')
    return (
        <div className="App">
            <button
                onClick={() => {
                    setIsShowList(!IS_SHOW_LIST)
                }}
            >
                IS_SHOW_LIST: {IS_SHOW_LIST ? "true" : "false"}
            </button>
            <input
            value={SEARCH_VALUE}
            onChange={
              (event) => {
                setSearchValue(event.target.value)
              }
            }
            />
            {IS_SHOW_LIST && <List arr={NUM_ARR} />}
        </div>
    )
}

export default App
