import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ConsentScreen from "./src/screens/ConsentScreen";
import PrepareDeviceScreen from "./src/screens/PrepareDeviceScreen";
import SurveyScreen from "./src/screens/SurveyScreen";
import WellnessScoreScreen from "./src/screens/WellnessScoreScreen";
import ImageScreen from "./src/screens/ImageScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Consent: ConsentScreen,
    PrepareDevice: PrepareDeviceScreen,
    Survey: SurveyScreen,
    WellnessScore: WellnessScoreScreen,
    Images: ImageScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
