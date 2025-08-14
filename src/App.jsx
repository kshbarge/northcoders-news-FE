import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"

function App() {
  return (
    <section class="d-flex flex-column min-vh-100">
      <header>
        <Header/>
      </header>
      <main>
        <Content/>
      </main>
      <footer class="mt-auto">
        <Footer/>
      </footer>
    </section>
  )
}

export default App
