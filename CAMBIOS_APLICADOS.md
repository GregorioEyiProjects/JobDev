# Cambios aplicados

Este archivo resume los cambios que hice en el proyecto para que tengas claro qué se tocó y por qué.

## 1) `src/hooks/useJobs.js`

- Bloqueé la paginación cuando existe un error para evitar que `loadMore()` siga disparando llamadas después de un `429`.
- Aseguré que `isFetching` se libere también cuando la respuesta viene desde caché.
- Marcé `hasMore = false` cuando la API falla, para cortar el ciclo de reintentos.

## 2) `src/components/home/ListHeaderComponent.jsx`

- Moví `FILTERS` dentro del componente.
- Reemplacé los textos fijos por traducciones usando `useTranslation()`.

## 3) `app/(tabs)/_layout.jsx`

- Ajusté el `tabBarStyle` para darle mejor separación visual en Android.
- Mantengo `paddingBottom` con `insets.bottom` para respetar el área del sistema.
- Dejé la barra con sombra y fondo propio para que no se mezcle con el contenido.
- Añadí `expo-navigation-bar` para controlar el estilo de los botones nativos en Android.

## 4) `app/_layout.jsx`

- Aplicación del estilo del sistema Android con `NavigationBar.setStyle("light")`.
- Esto solo afecta a Android y se ejecuta al arrancar la app.

## 5) `app.json`

- Lo modifiqué para mover la configuración nativa a `app.config.js`.
- Lo hice porque Expo maneja mejor los plugins personalizados desde un archivo de config dinámico.

## 6) `app.config.js`

- Archivo nuevo.
- Carga la config base de `app.json` y registra los plugins de Expo desde un solo lugar.

## 7) `plugins/withAndroidNavigationBar.js`

- Archivo nuevo.
- Configura el color nativo de la navigation bar en Android.
- También desactiva el contraste forzado para que el sistema no intente mezclar colores.

## Importante

- Los cambios del nav bar nativo en Android requieren rebuild de la app o un dev build.
- Si pruebas en Expo Go, parte de esta configuración no se va a reflejar igual.
- Si el color sigue viéndose similar, es porque el color del nav bar nativo y el del tab bar estaban demasiado cerca; por eso separé más el color del sistema.
