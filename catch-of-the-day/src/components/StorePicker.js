import React from 'react';
import { getFunName } from '../helpers';
import { format } from 'path';

class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = (event) => {
    // 1. stop form from submitting
    event.preventDefault();
    // 2. get the text from input
    console.log(this.myInput.value.value);
    // 3. change the page to /store/whatever-they-entered
  }
  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text" 
          ref={this.myInput}
          required 
          placeholder="Store Name" 
          defaultValue={getFunName()} />
        <button type="submit">Visit Store <span role="img" aria-label="store">🏪</span></button>
      </form>
    );
  }
}

export default StorePicker;