# Sity App

Aplicación para el manejo de incidencias dentro de una ciudad inteligente. Está construída bajo el framework *React Native*, con paquetes importantes como: *NativeBase UI Components*, *Styled Components*, *Storybook*, *Formik*, *Jest / Enzyme*, *Eslint/Prettier/EslintAirbnb*, *Husky*, entre otros. 

### Instalación

  - Tener configurado el ambiente de desarrollo para *React Native*, 
  - Luego clonar el repositorio,
  - A seguir ejecutar `yarn install`,
  - Finalmente iniciar el proyecto con `yarn android` o `yarn ios`, según la plataforma.

### Comandos importantes

  - `yarn start`: Arranca el metro builder de *React Native* reseteando su caché, 
  - `yarn test`: Ejecuta los tests, 
  - `yarn storybook`: Arranca el servidor de Storybook, 
  - `yarn android:storybook-reverse`: Arranca el proyecto en Android para la utilización de Storybook; para esto es importante descomentar la sección en el archivo `index.js`. 

### Configuraciones

En esta sección se pretende presentar las configuraciones relevantes para llegar a la estructura base del proyecto.

##### Native Base

Instalación mediante el comando:
```sh
$ yarn add native-base
```
Para configurar un tema personalizado con su aplicación, primero debe expulsar el tema NativeBase, que crea una copia del tema NativeBase en la raíz de su proyecto. Para eso ejecutar el comando:
```sh
$ node node_modules/native-base/ejectTheme.js
```
Cuando ejecuta el comando anterior, una carpeta llamada `native-base-theme` se copia en la raíz de su proyecto. Dentro del directorio hay dos carpetas llamadas components y variables. 
Para finalizar se debe envolver el código en `ThemeProvider` y pasar el archivo de configuración de estilos, como se muestra a continuación:
```js
import React, { Component } from 'react';
import { Container, Content, Text, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import themeColors from './native-base-theme/variables/commonColor';

export default class ThemeExample extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(themeColors)}>
        <Container>
          <Content>
            <Text>
              I have changed the text color.
            </Text>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
```

Más información: [NativeBase customization](https://docs.nativebase.io/Customize.html#Customize)

##### Storybook

Instalación mediante el comando:
```sh
$ npx -p @storybook/cli sb init --type react_native
```
Durante el proceso de instalación de Storybook, se le pedirá que instale `react-native-server`, hágalo.
También es necesario agregar otro paquete y hacer un cambio para `storybook/rn-addons.js` para permitir que las acciones se registren correctamente en la interfaz de usuario de Storybook. Para eso ejecutar el comando:
```sh
$ yarn add -D @storybook/addon-ondevice-actions
```
Cambie `storybook/rn-addons.js` a lo siguiente:
```js
import '@storybook/addon-ondevice-actions/register';
```
Existe un inconveniente al correr el proyecto con el comando `yarn storybook` en conjunto con 'yarn android' debido a que no se encuentran comunicados por le mismo puerto; para eso añada y modifique las líneas en `package.json` en la sección **scripts**, como se muestra a continuación; haciendo la transmisión y escucha por el puerto **7007**.
```
"android:storybook-reverse": "adb reverse tcp:7007 tcp:7007",
"storybook": "yarn run android:storybook-reverse; start-storybook -p 7007",
```
Finalmente, agregue una configuración similar en ìndex.js`
```js
import StorybookUI from './storybook';
// other code
AppRegistry.registerComponent(appName, () => StorybookUI);
```

Más información: [Storybook official site](https://storybook.js.org/)

##### ESLint, Prettier y ESLint/Airbnb
Afortunadamente, ESLint y Prettier viene configurados al momento de crear el proyecto, lo único que modificaremos son los atributos del archivo `.prettierrc.js`:
```js
module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
};
```
Ahora, agregaremos `eslint-config-airbnb`, una extensión de Eslint muy famosa para enriquecer nuestra configuración actual de Eslint.
```sh
$ yarn add --dev eslint-config-airbnb
```
Arora debemos conocer cuales son las últimas dependecias de la configuración de ESLint y ESlint/Airbnb, para eso debemos correr:
```sh
$ npm info "eslint-config-airbnb@latest" peerDependencies
```
Obtenemos una salida similar a:
```sh
{eslint: '^5.16.0 || ^6.8.0 ', 
  ' eslint-plugin-import ':' ^2.21.2 ', 
  ' eslint-plugin-jsx-a11y ':' ^6.3.0 ', 
  ' eslint-plugin-react ':' ^7.19.0 ', 
  ' eslint-plugin-react-hooks ':' ^2.5.0 || ^1.7.0 '}
```
Al conocer las versiones de los paquetes necesarios, vamos a agregarlos en nuestro `package.json` en la sección de dependencias de desarrollo obteniendo una configuración similar a:
```
"eslint-plugin-import": "^2.21.2",
"eslint-plugin-jsx-a11y": "^6.3.0",
"eslint-plugin-react": "^7.19.0",
"eslint-plugin-react-hooks": "^1.7.0",
```
Ahora debemos instalar estos paquetes, para eso ejecutamos:
```sh
$ yarn install
```
Finalizada la instalación, abrimos `.eslintrc.js` y cambiaremos la línea
```js
extends: '@react-native-community',
```
por
```js
extends: ['@react-native-community', 'airbnb', 'airbnb/hooks'],
```
Eslint y Prettier a veces pueden entrar en conflicto entre sí. Para resolver ese problema, instalaremos `eslint-config-prettier`.
```sh
$ yarn add --dev eslint-config-prettier eslint-plugin-prettier
```
Ahora abrimos `.eslintrc.js` y cambiaremos la línea
```js
extends: ['@react-native-community', 'airbnb', 'airbnb/hooks'],
```
por
```js
extends: ['@react-native-community', 'airbnb', 'airbnb/hooks', 'prettier'],
```
Una extensión que le sugiero que agregue es `no-null`, [El porqué está aquí](https://medium.com/@hbarcelos/why-i-banned-null-from-my-js-code-and-why-you-should-too-13df90323cfa). Para eso ejecutamos:
```sh
$ yarn add --dev eslint-plugin-no-null
```
Abrimos `.eslintrc.js` y agregamos la sección:
```js
plugins: ['no-null'],
```
Finalmente se suguiete tener una configuración básica como:
```js
module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['no-null'],
  rules: {
    'no-null/no-null': ['error'],
    'quotes': 'error',
    'max-len': [
      'error', {
        'code': 120
      }
    ],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }]
  },
};
```

##### Enzyme
Para agregar *Enzyme* a nuestro proyecto ejecutaremos:
```sh
$ yarn add -D enzyme enzyme-adapter-react-16
```
Ahora generaremos el archivo `setup-tests.js` en la raíz del proyecto, para configuración global de Jest, Enzyme and JSDOM.
```js
/* eslint-disable no-undef */
import 'react-native';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
});
const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({ adapter: new Adapter() });

jest.useFakeTimers();
jest.mock('stealthy-require', () => (_, m) => m());
```
Finalmente agreagaremos la configuración de *Jest* y *Enzyme* en `package.json`.

```
"jest": {
    "preset": "react-native",
    "transformIgnorePatterns": [
      "node_modules/(?!(jest-)?react-native|@codler/react-native-keyboard-aware-scroll-view|@react-native-community/.*|react-navigation|@react-navigation/.*|native-base)"
    ],
    "setupFilesAfterEnv": [
      "<rootDir>setup-tests.js",
      "./node_modules/jest-enzyme/lib/index.js"
    ],
    "setupFiles": [
      "./node_modules/react-native-gesture-handler/jestSetup.js"
    ]
  },
```

Más información: [Enzyme React Native configuration](https://enzymejs.github.io/enzyme/docs/guides/react-native.html)

##### Husky
Es una librería que nos evita generar mal nuestros git commits, git push, entre otros; mediante el uso de Git hooks. Para esto instalaremos con el comando:
```sh
$ yarn add --dev husky
```
Luego en nuestro archivo `package.json` añadiremos nuestra configuración. Por ejemplo correremos las pruebas antes de un push, agregando lo siguiente:
```js
"husky": {
    "hooks": {
      "pre-push": "yarn test"
    }
  }
```