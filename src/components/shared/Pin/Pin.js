import React from 'react';
import pinData from '../../../helpers/data/pinData';

class Pin extends React.Component {
  render() {
    const { pin } = this.props;
    return (
      <div className="Pin col-3">
        <div className="card">
          <img src={pin.imgUrl} className="card-img-top" alt={pin.title} />
          <div className="card-body">
            <h5 className="card-title">{pin.title}</h5>
            <p className="card-text">{pin.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Pin;
