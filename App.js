import React,{Component} from 'react';
import {createStackNavigator}from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './App/Login';
import Profile from './App/Profile';

const RootStack =createStackNavigator({
  Login:Login,
  Profile:Profile
});

const AppContainer=createAppContainer(RootStack);

class App extends Component{

  render(){
    return(
      <AppContainer />
    )
  }
}

export default App;