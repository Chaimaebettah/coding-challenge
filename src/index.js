
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import TransactionsContainer from './containers/TransactionsContainer';
import TransactionDetails from './components/TransactionDetails'
import { Provider } from 'react-redux'
import { store } from '../src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={TransactionsContainer} />
        <Route exact path="/:iban" component={TransactionDetails} />
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));