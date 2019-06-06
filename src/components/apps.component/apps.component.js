import React from 'react';


export class AppsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CountriesArr: [],userBooks:[]
    }
    this.handleInputChange = this.handleInputChange.bind(this);



  }
  componentDidMount() {

 this.getCountry();
    
 this.handleInputChange();
  }



  // handleInputChange(event) {
  //   this.setState({
  //     ifchecked: event.target.checked
  //   });
  // }

  getCountry = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/`)
      .then(response => {
        return response.json()
      })
      .then(json => {

        this.Countries = json;
        this.setState({ CountriesArr: this.Countries });

      })
      .catch((e) => {
        console.log("eror is coming...");
      })
  }

  handleInputChange = () => {
   
    let id = document.getElementById("mySelect").value||1;
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
      .then(response => {
        return response.json()
      })
      .then(json => {

        this.userBooks = json;
        console.log( this.userBooks)
        this.setState({ userBooks: this.userBooks });

      })
      .catch((e) => {
        console.log("eror is coming...");
      })
  }


  render() {
    return (
      <div className="container">
        <div className="row panel">
          <div className="col-12 col-lg-12">
            <select id="mySelect" onChange={this.handleInputChange}>
              {(this.state.CountriesArr == undefined) ? (
                <option>אין </option>
              ) : (
                  this.state.CountriesArr.map((cnt) => {
                    return <option key={cnt.name} value={cnt.id}>{cnt.name}</option>
                  })
                )
              }

            </select>

          </div>

        </div>
        <div className="row panel">

          <div className="col-1 col-lg-1">
            <h4>
              userId
                </h4>
          </div>
          <div className="col-2 col-lg-2">
            <h4>
              id
                </h4>
          </div>
          <div className="col-2 col-lg-6">
            <h4>
              title
                </h4>
          </div>
          <div className="col-2 col-lg-3">
            <h4>
              completed
                </h4>
          </div>
        </div>

        <div className="row">
          {(this.state.CountriesArr == undefined) ? (
                <div>אין </div>
              ) : (
            this.state.userBooks.map((user,indx) => {
              return <div  key= {user.userId+indx} className="row panel">
                <div className="col-1 col-lg-1">
                  <h4>
                    {user.userId}
                  </h4>
                </div>
                <div className="col-2 col-lg-2">
                  <h4>
                    {user.id}
                  </h4>
                </div>
                <div className="col-2 col-lg-6">
                  <h4>
                    {user.title}
                  </h4>
                </div>
                <div className="col-2 col-lg-3">
                  <h4>
                    {user.completed+""}
                  </h4>
                </div>



              </div>
            }))

          }
        </div>

      </div>

    )

  }
}


export default AppsComponent;