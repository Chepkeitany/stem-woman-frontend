import React from "react";
import { View, Text } from "react-native";
import { Dialog, DialogDefaultActions } from 'react-native-material-ui';

import styles from "./styles";


const description = {
  pioneers: "Blazing tech trails like the cowgirls they are, \
    these women demolish status quo: inventors, engineers, scientists \
    game creators, coders and innovators. They live  beyond labels or career - in history  and present.",
  modern_women: "Tackling cyber bullying, creating startups, engineering infrastucture, educating and mentoring-\
    these women go by a playbook, they  write the playbook. Unique and diverse, these  women are a force \
    of strength and intelligence. They lay the groundwork for future women in tech. \
    Because of their creative ingenuity and boundary-breaking talent, ",
  untold_stories: "These are women that dreamed the impossible and made it happen. \
    They often led lives of obscurity, but their relevance rings true. Their stories were not told in our history books, but"
}
const phrases = {
  pioneers: "we honor them",
  modern_women: "we are here and here to stay",
  untold_stories: "we have not forgotten."
}
const titles = {
  pioneers: "PIONEERS",
  modern_women: "MODERN WOMEN IN TECH",
  untold_stories: "UNTOLD STORIES"
}

const titleStyles = {
  "pioneers": styles.pioneersTitle,
  "modern_women": styles.modernWomenTitle,
  "untold_stories": styles.untoldStoriesTitle
}

const phraseStyles = {
  "pioneers": styles.pioneersPhrase,
  "modern_women": styles.modernWomenPhrase,
  "untold_stories": styles.untoldStoriesPhrase
}

const CustomDialog = ({ category }) => (
  <View style={styles.container}>
    <Dialog>
      <Dialog.Title>
        <Text style={titleStyles[category]}>{titles[category]}</Text>
      </Dialog.Title>

      <Dialog.Content>
        <Text style={styles.description}>{description[category]}</Text>
        <Text style={phraseStyles[category]}>{phrases[category]} </Text>
      </Dialog.Content>
      <Dialog.Actions>
        <DialogDefaultActions
          actions={['dismiss']}
          onActionPress={() => { }}
        />
      </Dialog.Actions>
    </Dialog >
  </View>
);

export default CustomDialog;