import GlobalStyle from './components/GlobalStyle.js'
import Nav from './components/Nav'
import AboutUs from './pages/AboutUs.js'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path='/' exact>
          <AboutUs />
        </Route>
        <Route path='/work'>
          <OurWork />
        </Route>
        <Route path='/contact'>
          <ContactUs />
        </Route>
      </Switch>
    </div>
  )
}

export default App
