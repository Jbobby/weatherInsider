import React, {Component} from 'react';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import Output from './components/output/output.component';
import architecture from '../src/architecture.jpg';
import Searchbox from './components/searchbox/searchbox.component';
import Section from './components/section/section.component';


const API_key = '155789547c677eeabf2690f539468ce0';

class App extends Component {
  constructor() {
    super();
    this.state={
      input: '',
      name: '',
      temperature: '',
      humidity: '',
      condition: '',
      icon:'',
    }
  }


  //Fetch Data From The API

  getWeather = async (city) => {
  
    try{
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
      const data = await response.json();
      console.log(data);
      
        this.setState({
            temperature: this.calCelsius(data.main.temp),
            humidity: data.main.humidity,
            condition: data.weather[0].main,
            icon: data.weather[0].icon,
            city: `${data.name}`,
            description: data.weather[0].description,
        })
    }
      catch(error){
        alert(error + 'Check your internet connection');
      }
  }

  calCelsius(temp){
    let cel = Math.floor(temp - 273.15);
    return cel;
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.getWeather(this.state.input)
  }

  onKeyPress = (event) => {
		if(event.keyCode === 13 || event.charCode ===13) {
      this.getWeather(this.state.input)
		}
	}   

  componentDidMount() {
    this.getWeather();
  }


  render(){ 
    const {temperature, humidity, condition, name, icon} = this.state;

    let page;
    (this.state.input.length === 0) ?
    page = <p>Enter the city name</p>:
    page = <Output
          temp={temperature}
          humidity={humidity}
          condition={condition}
          city={name}
          icon={icon}
          />

    return(
      
          <div className="app">
            <Navigation />
              <div className="container" style={{backgroundImage: `url(${architecture})`, paddingTop: 120}}>
                <h1 className="tc f2 calisto">What Is The Weather Like<span> ?</span></h1>
                  <p className="">Get accurate weather information of any city by filling the form below.</p>
                    <Searchbox 
                      onSubmit={this.onButtonSubmit} 
                      inputChange={this.onInputChange}
                      />

                        {page}
  
              </div>
            <Section />
          </div>
    )
  }
}


export default App;


