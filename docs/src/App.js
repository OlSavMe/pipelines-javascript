import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { listPics: []};
  }

  componentDidMount() {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
    .then((response) => response.json()) 
    .then((responseData) => { 
       console.log(responseData);
        this.setState({ 
            listPics: responseData.photos}); 
    });
  }


  
  render() { 
      const picsRows = this.state.listPics.map(pics =>
      <tr key={pics.id}>
          <th scope="row">{pics.camera.full_name}</th>
          <td scope="row">{pics.earth_date}</td>
          <td scope="row"><img style={{width: '150px', height: '150px'}} src={pics.img_src}/></td>
          <td scope="row"><a href={pics.img_src}>click to open full-size photo</a></td>
          </tr>
      )
  
    return (
      <div>
      <h1>Photos of Mars</h1>
        <table className="table table-bordered">
        <thead>
        <tr className="table-active">
          <th scope="col">Camera Name</th>
          <th scope="col">Date</th>
<th scope="col">Photo</th>
<th scope="col">Link to Full-size Photo</th>
</tr>
        </thead>
      {picsRows}
</table>
      </div>
    );
  }
}



export default App;
