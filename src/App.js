import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import {HashRouter, Route, Switch} from 'react-router-dom';

//templates
import Login from './templates/login';
import Associados from './templates/associados';
import AddAssociados from './templates/associados/add';
import AddUsuarios from './templates/usuarios/add';

import EditAssociados from './templates/associados/edit';
import EditUsuarios from './templates/usuarios/edit';

import Usuario from './templates/usuarios';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/" component={Associados}></Route>
        <Route exact path="/associados" component={Associados}></Route>
        <Route exact path="/associados/add" component={AddAssociados}></Route>
        <Route exact path="/associados/edit" component={EditAssociados}></Route>
        <Route exact path="/usuarios/" component={Usuario}></Route>
        <Route exact path="/usuarios/edit" component={EditUsuarios}></Route>
        <Route exact path="/usuarios/add" component={AddUsuarios}></Route>
      </Switch>
      <GlobalStyles></GlobalStyles>
    </HashRouter>
  );
}

export default App;
