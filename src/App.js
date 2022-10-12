
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';
class App extends Component {
  constructor() {
    super()
    this.state = {
     monsters: [ ],
     searchField: ''
  };
  
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
     .then((users) => 
      this.setState(() => {
        return {monsters:users};
      },
      () =>  {
        console.log(this.state);
      }
      )
     );

  }
  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchString = event.target.value.toLocaleLowerCase()
   
    this.setState(() => {
      return {searchField:searchString};
    })
  }
  render() {
    const { monsters,searchField } = this.state;
    const {onSearchChange} = this
    const filterMonsters = monsters.filter((monster) => {
      return  monster.name.toLocaleLowerCase().includes(searchField);
     });
    return (
     
      <div className="App">
        <SearchBox 
        className = 'search-box'
         onChangeHandler={onSearchChange}
         searchPlacholder='Search-Monsters'
         />
        <CardList monsters={filterMonsters}/>
      </div>
    );
  }
}

export default App;
