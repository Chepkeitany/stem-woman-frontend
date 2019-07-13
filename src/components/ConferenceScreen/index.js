import React from  "react";
import { connect } from "react-redux";
import { ActivityIndicator, Text } from "react-native";
import { Card } from 'react-native-material-ui';
import { ScrollView } from "react-native-gesture-handler";

import Container from "../Container";
import Toolbar from "../Toolbar";
import styles from "../../constants/styles";
import colors from "../../constants/colors";

import { fetchConferences } from "../../actions/conferences";

class ConferenceScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Conferences'
    };
    componentDidMount() {
      const { dispatchFetchConferencesRequest } = this.props;
      dispatchFetchConferencesRequest();
    }
  
    render() {
      const { conferences, navigation } = this.props;

      return (
        <Container>
          <Toolbar title="Conferences" navigation={navigation} />
          {(!conferences) ? (<ActivityIndicator size="large" color={colors.primaryColor} />) :
          (<ScrollView>
            {conferences.map(conference => (
              <Card key={conference.id}>
                <Text style={styles.name}>{conference.name} </Text>
                <Text><Text style={styles.bold}>Location:</Text> {conference.location} </Text>
                <Text><Text style={styles.bold}>Read more: </Text> {conference.link} </Text>
              </Card>)
            )}
          </ScrollView>
          )}
        </Container>
      );
    }
  }

  const mapStateToProps = (state) => ({
    conferences: state.conferences.conferences
  });

  const mapDispatchToProps = {
    dispatchFetchConferencesRequest: fetchConferences,
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ConferenceScreen);
