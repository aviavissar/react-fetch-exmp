import React from 'react';


export class HeaderComponent extends React.Component {
  
  setTextFilter = (txt) => {
    this.setState({
      filterTxt: txt
    })
    this.props.mytext(txt)
  }
  render() {
    return (
      <div className="header container">
        <div className=" row">
          <div className="col-12 col-lg-6  search">
            <input type="search" placeholder="search"
              onChange={(e) => {
                this.setTextFilter(e.target.value);
              }} />
          </div>
          <div className="logo col-12 col-lg-6">
            <h1>My Pics</h1>
          </div>
        </div>

      </div>
    )
  }
};

export default HeaderComponent;
