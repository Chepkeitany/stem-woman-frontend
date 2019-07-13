import React from "react";
import { connect } from "react-redux";
import { ActivityIndicator, Image, View, Text } from "react-native";
import { Card } from "react-native-material-ui";

import Container from "../Container";
import Toolbar from "../Toolbar";

import { fetchMentors } from "../../actions/mentors";
import commonStyles from "../../constants/styles";
import colors from "../../constants/colors";

class MentorScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Mentors'
  };

  componentDidMount() {
    const { dispatchFetchMentorsRequest } = this.props;
    dispatchFetchMentorsRequest();
  }

  render() {
    const { mentors, navigation } = this.props;

    return (
      <Container>
        <Toolbar title="Mentors" navigation={navigation} />
        {(mentors) ? mentors.map(mentor => (
          <Card key={mentor.id} style={{ container: commonStyles.cardContainer }}>
            <View style={commonStyles.twoColumnWidth}>
              <Text style={{ backgroundColor: colors.secondaryColor, color: colors.white }}> {mentor.name} </Text>
              <Text> {mentor.description} </Text>
            </View>
            <View style={commonStyles.twoColumnWidth}>
              <Image source={{ uri: mentor.photo_url }} style={{ width: 100, height: 100, marginLeft: 10 }} />
              {
                mentor.skills.map(skill => (<Text key={skill}>{skill}</Text> ))
              }
              <Text> {mentor.available_timings} {mentor.timezone}</Text>
              <Text> {mentor.location}</Text>
            </View>
          </Card>
        )) : <ActivityIndicator size="large" color={colors.secondaryColor}/>}

      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  mentors: state.mentors.mentors
});

const mapDispatchToProps = {
  dispatchFetchMentorsRequest: fetchMentors,
}

export default connect(mapStateToProps, mapDispatchToProps)(MentorScreen);
