import React from 'react';

import Landing from './components/landing/landing';
import About from './components/about/about';
import Porfolio from './components/portfolio/portfolio';
import Footer from './components/footer/footer';
import Loader from './components/loader/loader';

import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      loading: true
    }
  }
  componentDidMount(){
    this.setState({loading: false})
  }
  render (){
    const { loading } = this.state

    return (
      <div className="appWrapper">
        {
          loading ?
          <div className="loadingWrapper">
            <Loader isLoading={loading}/>
            <h1 className="name">DUMA</h1>
          </div>
          : 
          <div className="app">
            <Landing/>
            <About/>
            <Porfolio/>
            <Footer/>
          </div>
        }
      </div>
    );
  }
}

export default App;
