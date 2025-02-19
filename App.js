import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./src/screens/Onboarding";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import ListingPage from "./src/screens/ListingPage";
import DetailsPage from "./src/screens/DetailsPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./src/firebaseConfig";

const Stack = createStackNavigator();
const auth = getAuth(app);

export default function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="ListingPage" component={ListingPage} />
            <Stack.Screen name="DetailsPage" component={DetailsPage} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
