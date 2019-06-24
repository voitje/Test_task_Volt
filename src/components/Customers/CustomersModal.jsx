import React, {Component} from 'react';
import '../../styles/CustomersModal.css'

class CustomersModal extends Component {
  state = {
    item: {
      name: '',
      price: '',
      number: ''
    }
  };

  handleCloseModal = () => {
    this.props.handleChangeModal();
  };

  changeHandlerName = e => {
    if (e.target.value !== '') {
      this.setState({item: {...this.state.item, name: e.target.value}});
    }
  };

  changeHandlerPrice = e => {
    if (e.target.value !== '') {
      this.setState({item : {...this.state.item, price: e.target.value}});
    }
  };

  changeHandlerNumber = e => {
    if (e.target.value !== '') {
      this.setState({item: {...this.state.item, number: e.target.value}});
    }
  };

  addItem = () => {
    const { name, price, number } = this.state.item;
    this.props.addItem(name, price, number);
    console.log('ITEM_MODAL', this.state.item)
  };

  handleSubmit = () => {
    this.handleCloseModal();
  };

  render() {
    return (
        this.props.isOpen &&
        <div
        className='modal'
        style={{display: 'block'}}>
          <div
          className='modal-content'>
            <form onSubmit={this.handleSubmit}>
              <input
                  placeholder='Enter name...'
                  className='name'
                  onChange={this.changeHandlerName}/>
              <input
                  placeholder='Enter price...'
                  className='price'
                  onChange={this.changeHandlerPrice}/>
              <input
                  placeholder='Enter number...'
                  className='number'
                  onChange={this.changeHandlerNumber}/>
              <input
                  type='submit'
                  className='addButton'
                  onClick={this.addItem}/>
              <span className='close' onClick={this.handleCloseModal}>&times;</span>
            </form>

          </div>
        </div>
    );
  }
}

export default CustomersModal;