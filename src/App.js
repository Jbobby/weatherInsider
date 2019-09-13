import React, {Component} from 'react';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import Output from './components/output/output.component';
import architecture from '../src/architecture.jpg';
import Searchbox from './components/searchbox/searchbox.component';
import HowTo from './components/howto/howto.component'


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
      iconUrl:'',
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
    return(
          <div className="app">
              <Navigation />

                  <div className="container" style={{backgroundImage: `url(${architecture})`, paddingTop: 120}}>

                      <h1 className="tc">WEATHER INSIDER</h1>
                        <p>Get accurate weather information of any city by filling the form below.</p>
                          <Searchbox onSubmit={this.onButtonSubmit} inputChange={this.onInputChange} />

                          <Output 
                            temp={this.state.temperature} 
                            humidity={this.state.humidity} 
                            description={this.state.description} 
                            icon={this.state.icon}
                            searchInput={this.state.searchField}  
                            city={this.state.city}
                          />
                        
                  </div>
                  <HowTo />
          
          </div>
    )
  }
}


export default App;


