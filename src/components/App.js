import React, {Component} from 'react';
import Filter from './filter';
import List from './list';
import './App.scss';

 export default class App extends Component {

  state ={ 
    data: [],
    nameFilter: '',
    lastNameFilter: '',
    ageFilter: '',
    genders: {
      m: false,
      f: false
    }
  };


  componentDidMount() {
    fetch('https://venbest-test.herokuapp.com/')
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(`Error while fetching ${response.statusText}`);
    })
    .then(data => this.setState({data}))
    .catch(err => console.error(err));
  };

  componentDidUpdate() {
    console.log(this.state);
  }
    
  
  handleFilterChange = (filter, filterValue) => {
    this.setState({[filter]: filterValue})
  };

  handleGenderChange = (value) => {
    this.setState({
      genders: {
        ...this.state.genders,
        [value]: !this.state.genders[value]
      }
    })
  };

  getFilteredData = (data, nameFilter, lastNameFilter, ageFilter, m , f ) => {
    if (  !(  !!nameFilter || !!lastNameFilter || !!ageFilter || m || f )  ) {
      return data;
    }  

    if( nameFilter  ) return data.filter((item) => item.name.toLowerCase().indexOf(this.state.nameFilter.toLowerCase()) > -1);

    if( lastNameFilter ) return data.filter((item) => item.lastname.toLowerCase().indexOf(this.state.lastNameFilter.toLowerCase()) > -1 );

    if( ageFilter ) return data.filter((item) => item.age === +ageFilter);

    if( m || f ) return data.filter((item) => this.state.genders[item.sex]);
  };
  




  render() {

    const {nameFilter, lastNameFilter, ageFilter, data, genders: {m, f}, } = this.state;
    const filteredData = this.getFilteredData(data, nameFilter, lastNameFilter, ageFilter, m, f);
    return (
      <div className="app">
        <Filter 
          name={nameFilter}
          lastName={lastNameFilter}
          age={ageFilter}
          male={m}
          female={f}
          handleGenderFilterChange={this.handleGenderChange}
          handleFilterChange={this.handleFilterChange}
        />
        <List filteredData={filteredData} />
      </div>
    );
  }
  
};

