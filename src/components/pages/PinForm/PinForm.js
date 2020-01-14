import React from 'react';

import './PinForm.scss';

import authData from '../../../helpers/data/authData';
import pinData from '../../../helpers/data/pinData';

class PinForm extends React.Component {
  state = {
    pinName: '',
    pinDescription: '',
    pinImageUrl: '',
  }

  componentDidMount() {
    const { pinId } = this.props.match.params;
    if (pinId) {
      pinData.getSinglePin(pinId)
        .then((request) => {
          const pin = request.data;
          this.setState({ pinName: pin.name, pinDescription: pin.description, pinImageUrl: pin.imgUrl });
        })
        .catch((err) => console.error('error with get single pin', err));
    }
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ pinName: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ pinDescription: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ pinImageUrl: e.target.value });
  }

  editPinEvent = (e) => {
    e.preventDefault();
    const { boardId, pinId } = this.props.match.params;
    const editPin = {
      boardId,
      name: this.state.pinName,
      description: this.state.pinDescription,
      imgUrl: this.state.pinImageUrl,
      uid: authData.getUid(),
    };
    pinData.editPin(pinId, editPin)
      .then(() => this.props.history.push(`/board/${boardId}`))
      .catch((err) => console.error('error from edit pin', err));
  }

  savePinEvent = (e) => {
    e.preventDefault();
    const { boardId } = this.props.match.params;
    const newPin = {
      boardId,
      name: this.state.pinName,
      description: this.state.pinDescription,
      imgUrl: this.state.pinImageUrl,
      uid: authData.getUid(),
    };
    pinData.savePin(newPin)
      .then(() => this.props.history.push(`/board/${boardId}`))
      .catch((err) => console.error('error from save pin', err));
  }

  render() {
    const { pinName, pinDescription, pinImageUrl } = this.state;
    const { pinId } = this.props.match.params;
    return (
      <form className='PinForm container'>
        <div className='form-group'>
          <label htmlFor='pin-name'>Pin Name</label>
          <input
            type='text'
            className='form-control'
            id='pin-name'
            placeholder='Enter pin name'
            value={pinName}
            onChange={this.nameChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='pin-description'>Pin Description</label>
          <input
            type='text'
            className='form-control'
            id='pin-description'
            placeholder='Enter pin description'
            value={pinDescription}
            onChange={this.descriptionChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='pin-image'>Pin image url</label>
          <input
            type='text'
            className='form-control'
            id='pin-image'
            placeholder='Enter pin image url'
            value={pinImageUrl}
            onChange={this.imageChange}
          />
        </div>
        { pinId
          ? <button className='btn btn-outline-secondary' onClick={this.editPinEvent}>Edit Pin</button>
          : <button className='btn btn-outline-secondary' onClick={this.savePinEvent}>Save Pin</button>
        }
      </form>
    );
  }
}

export default PinForm;
