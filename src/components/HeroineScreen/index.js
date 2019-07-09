import React from "react";
import { connect } from "react-redux";
import { setActiveHeroines } from "../../actions/heroines";
import { BottomNavigation } from 'react-native-material-ui';

import Container from '../Container';
import Toolbar from '../Toolbar';

class HeroineScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Heroines'
  };

  render() {
    const { heroines, navigation, updateActiveHeroines } = this.props;
    return (
      <Container>
        <Toolbar title="Heroines" navigation={navigation} />
        <BottomNavigation active={heroines.active} hidden={false} >
          <BottomNavigation.Action
            key="pioneers"
            icon="people"
            label="Pioneers"
            onPress={() => updateActiveHeroines({ heroines: { active: 'pioneers' }})}
          />
          <BottomNavigation.Action
            key="untold_stories"
            icon="people"
            label="Untold Stories"
            onPress={() => updateActiveHeroines({ heroines: { active: 'untold_stories' }})}
          />
          <BottomNavigation.Action
            key="modern_women"
            icon="people"
            label="Modern Women"
            onPress={() => updateActiveHeroines({ heroines: { active: 'modern_women' }})}
          />
        </BottomNavigation>
      </Container >
    );
  }
}

const mapStateToProps = (state) => ({
  heroines: state.heroines
});

const mapDispatchToProps = {
  updateActiveHeroines: setActiveHeroines,
}
export default connect(mapStateToProps, mapDispatchToProps)(HeroineScreen);
