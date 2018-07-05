import React, { Component } from 'react';
import styled from 'styled-components';

const UList = styled.ul`
  list-style-type: none;
`
const Input = styled.input`
  padding: 7px;
  border: 1px solid #F2F7F2;
  border-radius: 3px;
`
const Button = styled.button`
  padding: 7px;
  border: 1px solid #F2F7F2;
  border-radius: 3px;
`
const Container = styled.div`
  padding: 5px;
`

class List extends Component {
  constructor(){
    super()
    this.state = {
      items: []
    }
  }

  renderItems = () => {
    return this.state.items.map((item, i) => {
      return(
        <li key={i}>{item}</li>
      )
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let items = this.state.items
    items.push(e.target.grocery.value)
    this.setState({items})
    e.target.grocery.value = ''
  }

  render() {
    return (
      <Container>
        <h3>Grocery List</h3>
        <UList>
          {this.state.items.length > 0 ? this.renderItems(): <span></span>}
        </UList>
        <form onSubmit={this.handleSubmit}>
          <Input name="grocery"/>
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    )
  }
}

export default List;
