/*
=== normal add usecase ===
1. User presses and holds down an element from the toolbox.
2. User moves their mouse while holding down the new element.
continous check, for what action it would do.
display that action in a readable way.
eg:
  (add <h1> above <p>)
3. User stops holding down the mouse
run the action

=== adding container usecase ===
1. User presses and holds down a container element from the toolbox.
2. User moves their mouse while holding down the contaienr element.
continous check, for what actions it would do.
display all actions in a readable way.
eg:
  (add <div> above <h1>)
  (move [<h1>, <p>, <p>] inside <div>)
3. User stops holding down the mouse
run the action
*/
enum ActionType {
  ADD,
  MOVE,
  STYLE,
  REMOVE
}

enum Direction {
  ABOVE,
  BELOW,
  INSIDE,
}

interface Position {
  targetElement: HTMLElement;
  direction: Direction;
}

interface BaseAction {
  type: ActionType;
}

interface AddAction extends BaseAction {
  type: ActionType.ADD;
  newElement: HTMLElement;
  position: Position;  
}

interface MoveAction extends BaseAction {
  type: ActionType.MOVE;
  targetElements: HTMLElement[];
  newPosition: Position;
}

interface StyleAction extends BaseAction {
  type: ActionType.STYLE;
  targetElement: HTMLElement;
  payload: string; //have to think about it
}

interface RemoveAction extends BaseAction {
  type: ActionType.REMOVE;
  targetElement: HTMLElement;
}

type Action = AddAction | MoveAction | StyleAction | RemoveAction;