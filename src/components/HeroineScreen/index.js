import React from "react";
import { connect } from "react-redux";
import { Image, ScrollView, Text, View } from "react-native";
import { BottomNavigation, Card } from 'react-native-material-ui';

import Container from '../Container';
import Toolbar from '../Toolbar';
import { setActiveHeroines, fetchHeroines } from "../../actions/heroines";
import colors from "../../constants/colors";

class HeroineScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Heroines'
  };

  componentDidMount() {
    const { dispatchFetchHeroinesRequest } = this.props;
    dispatchFetchHeroinesRequest();
  }

  render() {
    const { heroines, navigation, updateActiveHeroines } = this.props;
    const data = heroines[heroines.active];
    return (
      <Container>
        <Toolbar title="Heroines" navigation={navigation} />
        <ScrollView>
          {(data) ? data.map(heroine => (
              <Card key={heroine} style={{
                container: {
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start'
                }
              }}>
                <View style={{ width: '50%' }}>
                  <Text style={{ backgroundColor: colors.primaryColor, color: colors.white }}>{heroine.name} </Text>
                  <Text>{heroine.description} </Text>
                </View>
                <View style={{ width: '50%' }}>
                  <Image source={{ uri: heroine.photo_url }} style={{ width: 200, height: 200, marginLeft: 10 }} />
                  {(heroine.period_alive)? (<Text style={{ backgroundColor: colors.primaryColor, color: colors.white }}>{heroine.period_alive} </Text>): null}
                </View>
              </Card>
          )) : (<Text> No data </Text>)}
        </ScrollView>
        <BottomNavigation active={heroines.active} hidden={false} >
          <BottomNavigation.Action
            key="pioneers"
            icon="people"
            label="Pioneers"
            onPress={() => updateActiveHeroines({ active: 'pioneers' })}
          />
          <BottomNavigation.Action
            key="untold_stories"
            icon="people"
            label="Untold Stories"
            onPress={() => updateActiveHeroines({ active: 'untold_stories' })}
          />
          <BottomNavigation.Action
            key="modern_women"
            icon="people"
            label="Modern Women"
            onPress={() => updateActiveHeroines({ active: 'modern_women' })}
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
  dispatchFetchHeroinesRequest: fetchHeroines,
}
export default connect(mapStateToProps, mapDispatchToProps)(HeroineScreen);
