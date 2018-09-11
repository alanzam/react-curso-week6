# frontend-week5
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

## EventEmitter
```
global.eventHub = new EventEmitter();
global.eventHub.emit('x', x);
global.eventHub.addListener('x', (x) => {
  this.setState({
    x
  });
});
```
