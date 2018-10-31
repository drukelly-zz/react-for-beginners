import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === 'available';
    // make sure the fish is loaded before we continue
    if (!fish) return null;

    if (!isAvailable) {
      return (
        <li key={key}>
          <span>
            Sorry {fish ? fish.name : 'fish'} is no longer available
          </span>
        </li>
      );
    }
    return ( 
      <li key="{key}">
        <span>
          {count} lbs {fish.name}&nbsp;&nbsp;
          <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
        </span>
        <span> {formatPrice(count * fish.price)} </span>
      </li>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if(isAvailable) {
        return prevTotal + (count * fish.price);
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          <p>Total: <strong>{formatPrice(total)}</strong></p>
        </div>
      </div>
    )
  }
}

export default Order;