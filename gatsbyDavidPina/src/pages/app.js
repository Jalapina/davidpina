import React from "react"
import {Router , Route} from "@reach/router"
import IndexPage from "./index"

const App = () => (
    
    <Router>
        <IndexPage exact path="/" />
    </Router>
  
)

export default App