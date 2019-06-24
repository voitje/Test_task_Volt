import React, {Component} from 'react';
import { Table } from 'semantic-ui-react'
import CustomersModal from "./CustomersModal";

class Customers extends Component {
  state = {
    array : [],
    id: 0,
    isOpen: false,
  };

  generateID = () => {
    let index = 1;
    if (this.state.array.length === 0)
    {
      return 1;
    }
    for (let i = 0; i < this.state.array.length; i++) {
      console.log('I', this.state.array[i].id, 'INDEX', index);
      if (index !== this.state.array[i].id)
      {
        console.log('ZASHLO');
        return index;
      }
      index++;
      console.log('FOR');
    }
    console.log('NEZASHLO2', this.state.array.length, 'INDEX', index);
    if (this.state.array.length === index - 1)
    {
      console.log('ZASHLO2');
      return index ;
    }
  };

  handleChangeModal = () => {
    this.setState(prevState => ({
      ...prevState,
      isOpen: !prevState.isOpen,
    }));
  };

  addItem = (name, price, number) => {
    let id = this.generateID();
    console.log('IDIDID', id);

    this.setState(prevState => ({
      ...prevState,
      array: [...prevState.array, {name, price, number, id}]
    }), () => console.log(this.state.array));
    console.log('NAME_PRICE_NUMBER_ID', name, price, number, id);
    console.log('ARRAY', this.state.array);
  };

  render() {
    const { array } = this.state;
    return (
        <div>
          <button onClick={this.handleChangeModal}>Create</button>
          <CustomersModal
              isOpen={this.state.isOpen}
              addItem={this.addItem}
              handleChangeModal={this.handleChangeModal}
          />
          <Table basic='very'>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
              </Table.Row>
              </Table.Header>
              {array.map((item) => {
                return (
                <Table.Body>
                  <Table.Row key={item.id}>
                    <Table.Cell>{item.id}</Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.price}</Table.Cell>
                    <Table.Cell>{item.number}</Table.Cell>
                  </Table.Row>
                </Table.Body>
                )})}
              </Table>
        </div>
    );
  }
}

export default Customers;