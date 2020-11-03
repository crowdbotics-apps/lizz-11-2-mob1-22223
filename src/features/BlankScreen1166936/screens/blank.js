import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_5: "", Switch_41: true }

  render = () => (
    <View>
      <Text>
        This is blank screen 1. Below is a text input that should navigate to
        blank screen 0 onChange
      </Text>
      <TextInput
        placeholder="Change me to navigate"
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <Text>
        Below is a toggle that should navigate to blank screen 0 onValueChange
      </Text>
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        value={this.state.Switch_41}
        onValueChange={nextChecked => this.setState({ Switch_41: nextChecked })}
      />
      <Text>This is some text that does nothing</Text>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen0166830")}
      >
        <Text>This is some text that navigates to blank screen 0 onpress</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_3: {},
  TextInput_5: {},
  View_1: {},
  Text_3: {},
  TextInput_5: {},
  Text_7: {},
  Switch_41: {},
  Text_43: {},
  Text_44: {}
})
