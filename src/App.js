import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';


export default class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#FEFBBD'}}>
        <Router>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/entertainment' element={<News  category="entertainment" />} />
            <Route path='/health' element={<News  category="health" />} />
            <Route path='/science' element={<News  category="science" />} />
            <Route path='/sports' element={<News  category="sports" />} />
            <Route path='/technology' element={<News  category="technology" />} />
          </Routes>
          <Footer />
        </Router>



      </div>
    )
  }
}
