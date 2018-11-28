import Home from '../screens/Home';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import {createDrawerNavigator, createMaterialTopTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

const StackNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    Login: {
        screen: Login
    },
    Dashboard: {
        screen: Dashboard
    }

},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 })

const TabNavigator = createMaterialTopTabNavigator({
    Home: StackNavigator,
    Login: Login,
  });

  const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: TabNavigator
    },
    Login: {
        screen: Login
    },
    Dashboard: {
        screen: Dashboard
    }

  });
  
const Navigator = createAppContainer(MyDrawerNavigator);

export default Navigator;