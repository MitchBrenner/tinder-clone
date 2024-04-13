import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext } from 'react'


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    return (
      <AuthContext.Provider 
        value={
          {
              user: "mitch"
          }
        } 
        style={styles.container}
      >
        {children}
      </AuthContext.Provider>
    );
};


export default useAuth = () => {
    return useContext(AuthContext);
}
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', // Example background color
    },
});
