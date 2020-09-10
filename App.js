import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';

import { Button, Text, StyleProvider } from 'native-base';

import { createStackNavigator } from '@react-navigation/stack';

import { SvgUri } from 'react-native-svg';

import { Formik } from 'formik';

import Input from './src/components/common/input/input';

import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

import Meme from './src/res/svg/meme.svg';
import Icons from './src/styles/icons';

const NavScreens = {
  Login: 'Login',
  Home: 'Home',
  From: 'From',
};

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const ScrollContent = styled(ScrollView)`
  flex: 1;
  margin: 0 5%;
`;

const Content = styled(View)`
  flex: 1;
  margin: 0 5%;
`;

const LoginScreen = ({ navigation: { push } }) => (
  <ScrollContent>
    <Text>Login Screen</Text>
    <Button onPress={() => push(NavScreens.Home)}>
      <Text>Click Me!</Text>
    </Button>
  </ScrollContent>
);

const HomeScreen = ({ navigation: { push } }) => (
  <Content>
    <Text>Home Screen</Text>
    <SvgUri
      width="30%"
      height="30%"
      uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
    />
    <Meme width="30%" height="30%" />
    <Button onPress={() => push(NavScreens.From)}>
      <Text>Click Me!</Text>
    </Button>
  </Content>
);

const FormScreen = () => (
  <Content>
    <Formik initialValues={{ usr: '', pwd: '' }} onSubmit={(values) => alert(JSON.stringify(values))}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <>
          <Input
            onChangeText={handleChange('usr')}
            onBlur={handleBlur('usr')}
            value={values.usr}
            placeholder="Enter your username"
            iconName={Icons.user}
          />
          <Input
            onChangeText={handleChange('pwd')}
            onBlur={handleBlur('pwd')}
            value={values.pwd}
            placeholder="Enter your password"
            secureTextEntry
            iconName={Icons.lock}
          />
          <Button onPress={handleSubmit}>
            <Text>Submit</Text>
          </Button>
        </>
      )}
    </Formik>
  </Content>
);

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeArea>
        <StyleProvider style={getTheme(material)}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name={NavScreens.Login} component={LoginScreen} />
              <Stack.Screen name={NavScreens.Home} component={HomeScreen} />
              <Stack.Screen name={NavScreens.From} component={FormScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </StyleProvider>
      </SafeArea>
    </>
  );
};

export default App;
