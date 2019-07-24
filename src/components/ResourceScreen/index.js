import React from "react";
import { connect } from "react-redux";
import { ActivityIndicator, Text } from "react-native";
import { Card } from "react-native-material-ui";
import Container from "../Container";
import Toolbar from "../Toolbar";
import colors from "../../constants/colors";
import styles from  "../../constants/styles";
import { fetchResources } from "../../actions/resources";

import { ScrollView } from "react-native-gesture-handler";

class ResourceScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'STEM Resources'
    };

    componentDidMount() {
        const { dispatchFetchResourcesRequest } = this.props;
        dispatchFetchResourcesRequest();
    }
    render() {
        const { resources, navigation } =  this.props;
        return (
            <Container>
            <Toolbar title="STEM Resources" navigation={navigation} />
            {(!resources) ? <ActivityIndicator size="large" color={colors.secondaryColor}/>: (
            <ScrollView>
            {resources.map(resource => (
                <Card key={resource.id}>
                <Text style={styles.name}>{resource.name} </Text>
                <Text><Text style={styles.bold}>Topics:</Text>{resource.topics.map(topic =>(<Text > { topic } </Text>))} </Text>
                <Text><Text style={styles.bold}>Link: </Text> {resource.link} </Text>
                <Text><Text style={styles.bold}>Category:</Text> <Text style={styles.category}>{resource.category}</Text></Text>
                </Card>
                )
            )}
            </ScrollView>
            )}
            </Container>
        )
    }

}


const mapStateToProps = (state) => ({
    resources: state.resources.resources
  });
  
  const mapDispatchToProps = {
    dispatchFetchResourcesRequest: fetchResources,
  }

export default connect(mapStateToProps, mapDispatchToProps)(ResourceScreen);
