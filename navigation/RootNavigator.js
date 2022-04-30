import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}