import React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import Container from "../Container";
import Toolbar from "../Toolbar";


class ResourceScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'STEM Resources'
    };

    render() {
        const { navigation } =  this.props;
        return (
            <Container>
            <Toolbar title="STEM Resources" navigation={navigation} />
            <View>
                <Text>
                    STEM Resources
                </Text>
            </View>
            </Container>
        )
    }

}


export default connect(null, null)(ResourceScreen);
