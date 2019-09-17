import React, {Component} from 'react';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import Output from './components/output/output.component';
import architecture from '../src/architecture.jpg';
import Searchbox from './components/searchbox/searchbox.component';
import Section from './components/section/section.component';

// const API_KEY = '155789547c677eeabf2690f539468ce0';

class App extends Component {
  constructor() {
    super();
    this.state={
      input: '',
      city: '',
      searchField: '',
      temperature: '',
      humidity: '',
      description: '',
      icon:'',
    }
  }

    onInputChange = (event) => {
      this.setState({input: event.target.value});
    }

    onButtonSubmit = () => {
      this.setState({city: this.state.input})
    }


componentDidMount() {
  fetch('http://api.openweathermap.org/data/2.5/weather?q=Lagos&APPID=155789547c677eeabf2690f539468ce0')
  .then(res => res.json())
  .then(data =>
     this.setState({
         temperature: data.main.temp,
         humidity: data.main.humidity,
         description: data.weather[0].main,
         icon: data.weather[0].icon,
         city: data.name,
     })
  )
}


  render(){
    const {temperature,humidity,description,iconUrl,searchField,city} = this.state;
    
    return(
          <div className="app">
              <Navigation />
                  <div className="container" style={{backgroundImage: `url(${architecture})`, paddingTop: 120}}>
                      <h1 className="tc f2 calisto">What Is The Weather Like<span> ?</span></h1>
                        <p className="">Get accurate weather information of any city by filling the form below.</p>
                          <Searchbox onSubmit={this.onButtonSubmit} inputChange={this.onInputChange} />
                            <Output 
                              temp={temperature} 
                              humidity={humidity} 
                              description={description} 
                              icon={iconUrl}
                              searchInput={searchField}  
                              city={city}
                            />
                  </div>
              <Section />
          </div>
    )
  }
}


export default App;


