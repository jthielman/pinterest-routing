import React from 'react';
import PropTypes from 'prop-types';
import pinData from '../../../helpers/data/pinData';
import pinShape from '../../../helpers/propz/pinShape';

class Pin extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
    deletePin: PropTypes.func,
  }

  deletePinEvent = (e) => {
    e.preventDefault();
    const { deletePin, pin } = this.props;
    deletePin(pin.id);
  }

  render() {
    const { pin } = this.props;
    return (
      <div className="Pin col-3">
        <div className="card">
          <img src={pin.imgUrl} className="card-img-top" alt={pin.title} />
          <div className="card-body">
            <h5 className="card-title">{pin.title}</h5>
            <p className="card-text">{pin.description}</p>
            <button className='btn btn-danger' onClick={this.deletePinEvent}>x</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Pin;
