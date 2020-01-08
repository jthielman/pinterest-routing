import React from 'react';
import { Link } from 'react-router-dom';

import boardShape from '../../../helpers/propz/boardShape';

import './Board.scss';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
  }

  render() {
    const { board } = this.props;

    return (
      <div className="Board col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{board.name}</h5>
              <p className="card-text">{board.description}</p>
              <form className="form-inline justify-content-between">
                <Link className="btn btn-primary" to={`/board/${board.id}`}>Show Board</Link>
                {/* <a href="#" className="btn btn-danger delete-board" id="delete-${board.id}">Delete Board</a> */}
              </form>
            </div>
          </div>
    </div>
    );
  }
}

export default Board;
