import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { todoReducer } from './store/reducers/todo-reducer';
import { userReducer } from './store/reducers/user-reducer';
import { ListaTodosFunciones } from './components/molecules/ListaTodosFunciones';

//VERSION VIEJA
const storeViejo = createStore(combineReducers({ todoReducer, userReducer }), applyMiddleware(thunk));


//VERSION NUEVA STORE

//const storeNuevo = configureStore({
//  reducer: {
//    todoReducer,
//  },
//})

const state = {
  todoReducer: {
    todos: [],
  },
  userReducer: {
    user: {},
  }
}


function App() {
  return (
    <Provider store={storeViejo}>
      <div >
        <ListaTodosFunciones />
      </div>
    </Provider>
  );
}

export default App;
