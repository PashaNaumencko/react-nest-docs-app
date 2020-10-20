import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyDrive from '../../scenes/MyDrive';


const Routing: React.FC = () => {
  return (
    <Switch>
      <Route component={MyDrive} path="/" />
    </Switch>
  )
};

export default Routing;
