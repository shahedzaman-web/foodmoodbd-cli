import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  HeaderBackButton,
} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Welcome from '../screens/Welcome/Welcome';
import Search from '../screens/Search/Search';
import Details from '../screens/Details/Details';
import Checkout from '../screens/Checkout/Checkout';
import Info from '../screens/Info/Info';
import Login from '../screens/Login/Login';
import Cart from '../screens/Cart/Cart';
import Register from '../screens/Register/Register';
import Thanks from '../screens/Thanks/Thanks';
import Order from '../screens/Order/Order';
import OrderView from '../screens/OrderView/OrderView';
import Settings from '../screens/Settings/Settings';
import Home from '../screens/Home/Home';
import {useSelector} from 'react-redux';
import OtpScreen from '../screens/OtpScreen.js/OtpScreen';
import ForgetPassword from '../screens/ForgetPassword/ForgetPassword';
import EnterNewPassword from '../screens/ForgetPassword/EnterNewPassword';
import VerifyOtpRestPassword from '../screens/ForgetPassword/VerifyOtpRestPassword';
import BrowseByCategory from '../screens/BrowseByCategory/BrowseByCategory';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContain from './Drawer/DrawerContain';
import HelpCenter from '../screens/HelpCenter/HelpCenter';
import ChangeLanguage from '../screens/ChangeLanguage/ChangeLanguage';
import PrivacyPolicy from '../screens/PrivacyPolicy/PrivacyPolicy';
import TermsAndCondition from '../screens/TermsAndCondition/TermsAndCondition';
import RefundAndReturnPolicy from '../screens/RefundAndReturnPolicy/RefundAndReturnPolicy';
import Favorite from '../screens/Favorite/Favorite';

const Stack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const AppDrawer = createDrawerNavigator();
import {Host} from 'react-native-portalize';
import AppSearch from '../screens/AppSearch/AppSearch';
import PaymentScreen from '../screens/PaymentScreen/PaymentScreen';
import PaymentCancel from '../screens/PaymentScreen/PaymentCancel';
import Notification from '../screens/Notification/Notification';
import cartTotalQuantity from '../utils/cartTotalQuantity';
import AppTermsAndCondition from '../screens/AppTermsAndCondition/AppTermsAndCondition';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};
const HomeTabScreen = () => {
  const cart = useSelector(state => state.cart.cart);
  const totalProducts = cartTotalQuantity(cart);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      barStyle={{backgroundColor: '#fff'}}
      activeColor="#C01C27"
      inactiveColor="#333">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarBadge: totalProducts,
          tabBarIcon: ({color}) => (
            <AntDesign name="shoppingcart" size={24} color={color} />
          ),
        }}
      />
      {isAuthenticated && (
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarLabel: 'Favorite',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="favorite" size={24} color={color} />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerType: 'slide',
        drawerStyle: {
          backgroundColor: '#fff',
        },
      }}
      headerMode="none"
      drawerContent={props => <DrawerContain {...props} />}
      initialRouteName="HomeTab">
      <AppDrawer.Screen name="HomeTab" component={HomeTabScreen} />
      <AppDrawer.Screen name="BrowseByCategory" component={BrowseByCategory} />
      <AppDrawer.Screen name="Details" component={Details} />
      <AppDrawer.Screen name="Info" component={Info} />
      <AppDrawer.Screen name="OrderView" component={OrderView} />
      <AppDrawer.Screen name="Order" component={Order} />
      <AppDrawer.Screen name="Thanks" component={Thanks} />
      <AppDrawer.Screen name="Checkout" component={Checkout} />
      <AppDrawer.Screen name="Settings" component={Settings} />
      <AppDrawer.Screen
        name="TermsAndCondition"
        component={TermsAndCondition}
      />
      <AppDrawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <AppDrawer.Screen name="ChangeLanguage" component={ChangeLanguage} />
      <AppDrawer.Screen name="AppSearch" component={AppSearch} />
      <AppDrawer.Screen name="PaymentScreen" component={PaymentScreen} />
      <AppDrawer.Screen name="PaymentCancel" component={PaymentCancel} />
      <AppDrawer.Screen name="Notification" component={Notification} />
      <AppDrawer.Screen
        name="AppTermsAndCondition"
        component={AppTermsAndCondition}
      />

      <AppDrawer.Screen
        options={{
          headerLeft: props => (
            <HeaderBackButton
              {...props}
              style={styles.custom}
              onPress={() => {
                // Do something
              }}
            />
          ),
        }}
        name="HelpCenter"
        component={HelpCenter}
      />
      <AppDrawer.Screen
        name="RefundAndReturnPolicy"
        component={RefundAndReturnPolicy}
      />
    </AppDrawer.Navigator>
  );
};

const Root = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="App">
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="Register" component={Register} />
      <RootStack.Screen name="OtpScreen" component={OtpScreen} />
      <RootStack.Screen name="ForgetPassword" component={ForgetPassword} />
      <RootStack.Screen name="EnterNewPassword" component={EnterNewPassword} />
      <RootStack.Screen
        name="VerifyOtpRestPassword"
        component={VerifyOtpRestPassword}
      />
      <RootStack.Screen name="App" component={AppNavigator} />
    </RootStack.Navigator>
  );
};

export default function RootNavigator() {
  const screenViewed = useSelector(state => state.welcome.screenViewed);

  return (
    <NavigationContainer theme={navTheme}>
      <Host>
        <Stack.Navigator
          initialRouteName={screenViewed ? 'Root' : 'Welcome'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Root" component={Root} />
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
}
