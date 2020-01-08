import React from 'react';

import boardShape from '../../../helpers/propz/boardShape';

import './Board.scss';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
  }

  render() {
    const { board } = this.props;

    return (
      <div className="Board">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{board.name}</h5>
              <p className="card-text">{board.description}</p>
              <form className="form-inline justify-content-between">
                {/* <a href="#" className="btn btn-primary show-board" id="${board.id}">Show Board</a> */}
                {/* <a href="#" className="btn btn-danger delete-board" id="delete-${board.id}">Delete Board</a> */}
              </form>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Board;
