# frontend-week5
Contenido para la quinta semana del curso de Frontend

Chat
userList: [], addUser(newUsername)
currentChat: null, selectChat(selecteUsername)
chats: [], addMessage(newMessage)
appTitle: 'React Chat'

chats : {
  userName: {
    userName,
    messageList
  }
}

addUser(newUsername)

addMessage(newMessage)

selectChat(selecteUsername)





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
componentWillMount() {}
  //render()
componentDidMount() {}

componentWillReceiveProps(nextProps, nextState) {}
componentShouldUpdate(nextProps, nextState) { return bool; }
componentWillUpdate() {}
  //render()
componentDidUpdate() {}
componentWillUnmount() {}
```

## PropTypes
```
_componentName_.propTypes = {
  function: React.PropTypes.func, //.isRequired
  bool: React.PropTypes.bool,
  string: React.PropTypes.string,
  number: React.PropTypes.number,
  array: React.PropTypes.array,
  object: React.PropTypes.object,
}
```

## Immutable
> ### fromJS
> Objeto javascript nativo transformarlo a Immutable
> ### get(string)
> Obtener la propiedad que se le pasa como string
> ### getIn([string])
> Obtener la propiedad que se le pasa en el arreglo de string en orden
> ### set(string, val)
> Insertar la propiedad que se le pasa como string
> ### setIn([string], val)
> Insertar la propiedad que se le pasa en el arreglo de string en orden
> ### update(string, val)
> Actualizar la propiedad que se le pasa como string
> ### updateIn([string], val)
> Actualizar la propiedad que se le pasa en el arreglo de string en orden
> ### remove(string)
> Eliminar la propiedad que se le pasa como string
> ### removeIn([string])
> Eliminar la propiedad que se le pasa en el arreglo de string en orden

## Redux
> ### connect(mapStateToProps, actionCreator) (Component)
> Conectar el componente al store (appState) de redux,
> mapStateToProps es la funcion que describe que datos del store se le pasaran al componente
> actionCreator un objeto con varios metodos/acciones que deben regresar un Action de Redux ({type: string, payload})

> ### createStore(reducers, initialState)
> Crear el store/state de la aplicacion que se le pasara al Provider
> reducers, es un objeto con todos los reducers para el appState
> initialState, objeto que define el estado inicial de la aplicacion

> ### reducers
> Son funciones con un switch del tipo de action de redux, su funcion es alterar el state de la aplicacion utilizando metodos de immutable de preferencia
