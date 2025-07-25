import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"

function App() {
  return (
    <section>
      <header>
        <Header/>
      </header>
      <main>
        <Content/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </section>
  )
}

export default App
