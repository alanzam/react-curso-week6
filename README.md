# frontend-week6
Contenido para la sexta semana del curso de Frontend


# cheatSheet React
## Nuevo Componente
```
import React from 'react';
class _componentName_ extends React.Component {
  render() {
    return null;
  }
}
export default _componentName_;
```
## Metodos Componente / LifeCycle
```
constructor()

  //render()
componentDidMount() {}

componentShouldUpdate(nextProps, nextState) { return bool; }
  //render()
componentDidUpdate() {}
componentWillUnmount() {}
```

## PropTypes
```
_componentName_.propTypes = {
  function: PropTypes.func, //.isRequired
  bool: PropTypes.bool,
  string: PropTypes.string,
  number: PropTypes.number,
  array: PropTypes.array,
  object: PropTypes.object,
}
```

## Dispatcher
```
import { Dispatcher } from 'flux';
export default new Dispatcher();
```

## Store
```
import dispatcher from '../Dispatcher';
import { EventEmitter } from 'events';
import * as Actions from 'actions';
class Store extends EventEmitter {
    constructor() {
      super();
      this.x = '';
    }
    handleActions(action) {
      switch (action.type) {
        case Actions.ACTIONS_TYPE.Y: {
          this.x = action.x;
          this.emit("storeUpdated");
          break;
        }
          default: {
        }
      }
    }
    getX() {
      return this.x;
    }
}
const store = new Store();
dispatcher.register(store.handleActions.bind(store));
export default store;
```

## Actions
```
import * as Actions from '../actions/actions';
export const ACTIONS_TYPE = {
    Y: 'actions.y'
};
export function func(x) {
    dispatcher.dispatch({
        type: ACTIONS_TYPE.Y,
        x
    })
}
```
## Emitter
```
import * as Actions from '../actions/actions';
Actions.func(x);
```
## Listener
```
import Store from "../stores/Store";
ChatStore.on("storeUpdated", this.setState({}));
```
