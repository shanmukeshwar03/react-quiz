import { ReactDOM, Provider, createStore, reducer, App } from 'Imports';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
