// // 1. Create a theme context (theme.js)
// import React from 'react';

// export const ThemeContext = React.createContext({
//   themeColor: '#007AFF', // default color
//   secondary: '#FF9500'
// });

// // 2. Wrap your app with the provider (in _layout.jsx)
// import { ThemeContext } from './theme';

// export default function RootLayout() {
//   return (
//     <ThemeContext.Provider value={{
//       themeColor: '#007AFF',
//       secondary: '#FF9500'
//     }}>
//       {/* Your app content */}
//     </ThemeContext.Provider>
//   );
// }

// // 3. Access theme properly in components
// import { useContext } from 'react';

// function MyComponent() {
//   const { themeColor, secondary } = useContext(ThemeContext);
//   // Now you can safely use themeColor and secondary
// }