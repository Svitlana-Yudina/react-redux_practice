enum Actions {
  MOVE_LEFT = 'position/MOVE_LEFT',
  MOVE_RIGHT = 'position/MOVE_RIGHT',
  MOVE_UP = 'position/MOVE_UP',
  MOVE_DOWN = 'position/MOVE_DOWN',
}

type positionAction = {type: Actions};

const moveLeft = () => ({ type: Actions.MOVE_LEFT});
const moveRight = () => ({ type: Actions.MOVE_RIGHT});
const moveUp = () => ({ type: Actions.MOVE_UP});
const moveDown = () => ({ type: Actions.MOVE_DOWN});

export const positionActions = {moveLeft, moveRight, moveUp, moveDown};

type Position = {
  x: number,
  y: number,
};

const startPosition: Position = { x: 0, y: 0 };

const positionReducer = (
  position: Position = startPosition, 
  action: positionAction
): Position => {
  switch (action.type) {
    case Actions.MOVE_LEFT: {
      if (position.x === 0) {
        return position;
      }
      return {...position, x: position.x - 1};
    }

    case Actions.MOVE_RIGHT: {
      if (position.x === 20) {
        return position;
      }
      return {...position, x: position.x + 1};
    }

    case Actions.MOVE_UP: {
      if (position.y === 0) {
        return position;
      }
      return {...position, y: position.y - 1};
    }

    case Actions.MOVE_DOWN: {
      if (position.y === 4) {
        return position;
      }
      return {...position, y: position.y + 1};
    }

    default:
      return position;
  }
};

export default positionReducer;
