import React, {Component} from 'react';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import Output from './components/output/output.component';
import architecture from '../src/architecture.jpg';
import Searchbox from './components/searchbox/searchbox.component';
import Section from './components/section/section.component';


const api_key = '155789547c677eeabf2690f539468ce0';

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


  calCelsius(temp){
    let cel = Math.floor(temp);
    return cel;
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value.toUpperCase()});
  }

  onButtonSubmit = () => {
    this.getWeather(this.state.input)
  }

  onKeyPress = (event) => {
		if(event.keyCode === 13 || event.charCode ===13) {
      this.getWeather(this.state.input)
		}
	}   


  //Fetch Data From The API



  getWeather = async () => {
    const city = this.state.input;
    try{
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api_key}&units=metric`, {method: 'GET'});
      const data = await response.json();
      console.log(`api call`);	
      
        this.setState({
            temperature: this.calCelsius(data.main.temp),
            humidity: data.main.humidity,
            condition: data.weather[0].main,
            icon: data.weather[0].icon,
            city: data.name,
            description: data.weather[0].description,
        })
    }
      catch(error){
       console.log(error + ' .Check your internet connection');
      }
  }


  componentDidMount() {
    this.getWeather();
    console.log('componentMount')
  }

  render(){ 
    const {temperature, humidity, condition, name, icon} = this.state;

    let page;
    (this.state.input.length === 0) ?
    page = <p></p>:
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
                      onInputChange={this.onInputChange}
                      onButtonSubmit={this.onButtonSubmit} 
                      />

                        {page}
  
              </div>
            <Section />
          </div>
    )
  }
}


export default App;


