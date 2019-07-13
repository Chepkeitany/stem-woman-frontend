import React from "react";
import { connect } from "react-redux";
import { ActivityIndicator, Text } from "react-native";
import { Card } from 'react-native-material-ui';

import Container from "../Container";
import Toolbar from "../Toolbar";
import colors from "../../constants/colors";
import { fetchScholarships } from "../../actions/scholarships";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";

class ScholarshipScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Scholarships'
  };

  componentDidMount() {
    const { dispatchFetchScholarshipsRequest } = this.props;
    dispatchFetchScholarshipsRequest();
  }

  render() {
    const { navigation, scholarships } = this.props;

    return (
      <Container>
        <Toolbar title="Scholarships" navigation={navigation} />
        {(!scholarships) ? (<ActivityIndicator size="large" color={colors.primaryColor} />) :
          (<ScrollView>
            {scholarships.map(scholarship => (
              <Card key={scholarship.id}>
                <Text style={styles.name}>{scholarship.name} </Text>
                <Text><Text style={styles.bold}>Target:</Text>{scholarship.target_group} </Text>
                <Text><Text style={styles.bold}>Deadline:</Text> {scholarship.deadline} </Text>
                <Text><Text style={styles.bold}>Read more: </Text> {scholarship.link} </Text>
              </Card>)
            )}
          </ScrollView>
          )}

      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  scholarships: state.scholarships.scholarships
});

const mapDispatchToProps = {
  dispatchFetchScholarshipsRequest: fetchScholarships,
}

export default connect(mapStateToProps, mapDispatchToProps)(ScholarshipScreen);
