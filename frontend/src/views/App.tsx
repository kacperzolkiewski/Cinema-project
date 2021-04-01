import { BrowserRouter as Router } from "react-router-dom"
import Content from "../components/Content/Content"
import Footer from "../components/Footer"
import Header from "../components/Header/Header"

const App = (): JSX.Element => {
  return (
    <Router>
      <Header />
      <Content />
      <Footer />
    </Router>
  )
}

export default App
