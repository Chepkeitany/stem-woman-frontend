import { createDrawerNavigator, createSwitchNavigator, createAppContainer } from "react-navigation";
import HeroineScreen from '../components/HeroineScreen';
import HomeScreen from '../components/HomeScreen';
import MentorScreen from '../components/MentorScreen';
import ScholarshipScreen from '../components/ScholarshipScreen';
import ConferenceScreen from '../components/ConferenceScreen';
import ResourceScreen from '../components/ResourceScreen';
import LoginScreen from '../components/LoginScreen';



const MainStack = createDrawerNavigator(
    {
        Home: { screen: HomeScreen },
        Heroines: { screen: HeroineScreen },
        Mentors: { screen: MentorScreen },
        Scholarships: { screen: ScholarshipScreen},
        Conferences: { screen: ConferenceScreen},
        'STEM Resources': { screen: ResourceScreen },

    },
    {
        headerMode: 'none'
    }
)

const RootStack = createSwitchNavigator(
    {
        Login: LoginScreen,
        Main: MainStack
    }
)

export default createAppContainer(RootStack);
