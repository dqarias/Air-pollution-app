import './App.css';
import fetchCountries from './Services/restCountriesAPI';

function App() {
  const america = 'Europe';

  const getCountry = async () => {
    const getRegion = await fetchCountries(america);
    console.log(getRegion);
  };

  getCountry();
  return (
    <div className="App">
      Hello React
    </div>
  );
}

export default App;
