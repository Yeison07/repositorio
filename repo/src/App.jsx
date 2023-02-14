import AboutMe from './components/About_me'
import Header from './components/Header'
import "@fontsource/roboto"
import "@fontsource/oswald"
import "./App.css"
import "./components/Project/"
import ProjectsList from './components/Project/'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <Header/>
    <AboutMe/>
    <ProjectsList/>
    <Footer/>
    </>
  )
}

export default App
