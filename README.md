# README para Plantilla React Native

# Plantilla React Native Avanzada

Plantilla base para proyectos React Native con configuración inicial lista para producción, incluyendo navegación, estado global y persistencia.

## 📦 Características Principales

- ⚛️ React Native 0.79 + React 19
- 🧭 React Navigation (Native Stack)
- 🏪 Redux Toolkit + Redux Persist
- 🔐 Async Storage para persistencia
- 🛡️ Safe Area Context integrado
- ✅ TypeScript preconfigurado
- 🧹 ESLint + Prettier
- 🧪 Jest para testing

## 🚀 Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/rnTemplateApp.git
   ```
2. Instalar dependencias:
   ```bash
   cd rnTemplateApp && npm install
   ```
3. Para iOS (opcional):
   ```bash
   cd ios && pod install && cd ..
   ```

## 🏗️ Estructura del Proyecto

```
/src
  ├── Config
  │   ├── AppConfig.ts      # Configuración global de la app
  │   ├── ReduxStorage.ts   # Configuración de persistencia
  │   └── Theme.ts          # Configuración de estilos/theme
  │
  ├── Navigation
  │   ├── AppNavigator.tsx  # Navegador principal
  │   ├── types.ts          # Tipos para navegación
  │   └── params.ts         # Parámetros de rutas
  │
  ├── Presentation
  │   ├── Components        # Componentes UI reutilizables
  │   │   ├── Button
  │   │   │   ├── Button.tsx
  │   │   │   ├── Button.styles.ts
  │   │   │   └── Button.types.ts
  │   │   ├── Input         # Ejemplo de otro componente
  │   │   └── index.ts      # Barrel file para exports
  │   │
  │   └── Screens           # Pantallas de la aplicación
  │       ├── Home
  │       │   ├── HomeScreen.tsx
  │       │   ├── Home.styles.ts
  │       │   ├── Home.hooks.ts
  │       │   └── Home.types.ts
  │       ├── Details
  │       │   ├── DetailsScreen.tsx
  │       │   └── ...
  │       └── index.ts       # Barrel file para exports
  │
  ├── Store
  │   ├── slice             # Slices de Redux Toolkit
  │   │   ├── authSlice.ts  # Ejemplo: autenticación
  │   │   ├── appSlice.ts   # Estado general de la app
  │   │   └── ...
  │   ├── store.ts          # Configuración del store
  │   └── hooks.ts          # Hooks de Redux (useAppDispatch, etc.)
  │
  ├── assets                # Recursos estáticos
  │   ├── fonts
  │   ├── images
  │   └── animations
  │
  ├── hooks                 # Custom hooks globales
  │   ├── useFetch.ts       # Hook para llamadas API
  │   └── useTheme.ts       # Hook para manejo de tema
  │
  ├── services              # Lógica de API/services
  │   ├── api.ts            # Configuración de axios/fetch
  │   ├── authService.ts    # Servicio de autenticación
  │   └── ...
  │
  ├── types                 # Tipos globales
  │   ├── app.d.ts          # Tipos de la aplicación
  │   └── navigation.d.ts   # Tipos de navegación extendidos
  │
  └── utils                 # Utilidades/helpers
      ├── formatters.ts     # Funciones de formato
      ├── validators.ts     # Funciones de validación
      └── ...
```

## 🛠 Comandos Útiles

| Comando         | Descripción                          |
|-----------------|--------------------------------------|
| `npm start`     | Inicia el servidor Metro             |
| `npm run android` | Ejecuta la app en Android           |
| `npm run ios`   | Ejecuta la app en iOS (requiere Mac) |
| `npm run lint`  | Ejecuta ESLint                       |
| `npm run test`  | Ejecuta pruebas con Jest             |

## 🔍 Qué le falta a la plantilla

Basado en tu `package.json`, aquí hay algunas mejoras recomendadas:

### 1. Internacionalización (i18n)
```bash
yarn add react-native-location
```

### 2. Manejo de errores globales
- Considera añadir un Error Boundary
- Integrar un servicio como Sentry:
  ```bash
  npm install @sentry/react-native
  ```

### 5. Componentes UI comunes
```bash
npm install react-native-vector-icons
npm install react-native-svg
```

### 7. Variables de entorno
```bash
npm install react-native-config
```

### 8. Animaciones
```bash
npm install lottie-react-native
```

### 9. Documentación adicional recomendada
- Añadir un `CHANGELOG.md`
- Crear un archivo `CONTRIBUTING.md`
- Configurar GitHub Actions para CI/CD
- Agregar un `.env.example`

## 📝 Configuración Recomendada


## 🤝 Contribución

Si deseas contribuir a mejorar esta plantilla:
1. Haz fork del proyecto
2. Crea tu branch (`git checkout -b feature/nueva-caracteristica`)
3. Haz commit de tus cambios (`git commit -m 'Añadir nueva característica'`)
4. Haz push al branch (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

MIT
```

## Pasos siguientes recomendados

3. **Configurar CI/CD** básico con GitHub Actions
4. **Crear documentación adicional** sobre:
   - Cómo añadir nuevas pantallas
   - Cómo crear nuevos reducers
   - Convenciones de código

