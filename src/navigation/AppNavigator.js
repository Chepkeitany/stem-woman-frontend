import { createDrawerNavigator, createSwitchNavigator, createAppContainer } from "react-navigation";
import HeroineScreen from '../components/HeroineScreen';
import HomeScreen from '../components/HomeScreen';
import MentorScreen from '../components/MentorScreen';
import ScholarshipScreen from '../components/ScholarshipScreen';
import ConferenceScreen from '../components/ConferenceScreen';
import LoginScreen from '../components/LoginScreen';



const MainStack = createDrawerNavigator(
    {
        home: { screen: HomeScreen },
        mentors: { screen: MentorScreen },
        heroines: { screen: HeroineScreen },
        scholarships: { screen: ScholarshipScreen},
        conference: { screen: ConferenceScreen},
    },
    {
        headerMode: 'none'
    }
)

const RootStack = createSwitchNavigator(
    {
        main: MainStack,
        login: LoginScreen,
    }
)

export default createAppContainer(RootStack);
