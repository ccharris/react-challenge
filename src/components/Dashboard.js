import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      this.setState({users: users})
    })
    .catch((err)=> console.log(err))
  }

  showData = () => {
    return this.state.users.map((user, i) => {
      return(
        <div key={i}>
          <h3>{user.name}</h3>
          Email: {user.email}
        </div>
      )
    })
  }
 
  render() {
    return (
      <div>
      {this.showData()}
      </div>
    )
  }
}

export default Dashboard;
