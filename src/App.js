import React from 'react';
import { Admin, Resource } from 'react-admin';
import programProvider from './api/programProvider';
import mockProvider from './api/mockProvider';

import { postsList } from './views/program';
import auth from "./auth";
import { print } from 'util';

import jsonServerProvider from 'ra-data-json-server';


const dataProvider = programProvider.query("t@cunt.com", "test");
//dataProvider.then(d=> console.log(d));
const App = () => (
  <Admin dataProvider={() => {return dataProvider}} authProvider={auth}>
    <Resource name="program" list={postsList} />
  </Admin>
);

export default App;