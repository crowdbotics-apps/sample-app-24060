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
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_23_7} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d94e/caa5/f5550398a3b6549d6deaf91758e4b86d"
        }}
        style={styles.ImageBackground_23_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15d3/9045/8a62cabcf82ba1d953585afb39a84d7b"
        }}
        style={styles.ImageBackground_23_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1181/54d3/1262e58c0cb69355749ebb57c4c51143"
        }}
        style={styles.ImageBackground_23_10}
      />
      <View style={styles.View_23_18}>
        <View style={styles.View_23_11}>
          <Text style={styles.Text_23_11}>lens</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5249/0fa4/8e183dcd163fbce14ebb4005d720e30f"
          }}
          style={styles.ImageBackground_23_12}
        />
        <View style={styles.View_23_13}>
          <Text style={styles.Text_23_13}>Heron in the reeds</Text>
        </View>
        <View style={styles.View_23_14}>
          <Text style={styles.Text_23_14}>7/24/2020</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6177/dee0/55b7ca395a2a27b3b146384b4a8c46a5"
          }}
          style={styles.ImageBackground_23_15}
        />
        <View style={styles.View_23_16} />
        <View style={styles.View_23_17}>
          <Text style={styles.Text_23_17}>Add a comment</Text>
        </View>
      </View>
      <View style={styles.View_23_19} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60b9/b39c/07b4c9517fa1687782793431886fec0d"
        }}
        style={styles.ImageBackground_23_20}
      />
      <View style={styles.View_23_21} />
      <View style={styles.View_23_22}>
        <Text style={styles.Text_23_22}>Search</Text>
      </View>
      <View style={styles.View_23_23} />
      <View style={styles.View_23_24} />
      <View style={styles.View_23_25} />
      <View style={styles.View_23_26} />
      <View style={styles.View_23_27}>
        <Text style={styles.Text_23_27}>My account</Text>
      </View>
      <View style={styles.View_24_0}>
        <Text style={styles.Text_24_0}>Invite friends</Text>
      </View>
      <View style={styles.View_24_1}>
        <Text style={styles.Text_24_1}>Who to follow</Text>
      </View>
      <View style={styles.View_24_2}>
        <Text style={styles.Text_24_2}>Help Center</Text>
      </View>
      <View style={styles.View_24_3}>
        <Text style={styles.Text_24_3}>Log out</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_23_7: {
    width: 375,
    minWidth: 375,
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 603,
    backgroundColor: "rgba(2, 131, 172, 1)"
  },
  ImageBackground_23_8: {
    width: 40,
    minWidth: 40,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47,
    top: 615
  },
  ImageBackground_23_9: {
    width: 40,
    minWidth: 40,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 168,
    top: 615
  },
  ImageBackground_23_10: {
    width: 45.128204345703125,
    minWidth: 45.128204345703125,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 284,
    top: 619
  },
  View_23_18: {
    width: 343,
    minWidth: 343,
    height: 547,
    minHeight: 547,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -283,
    top: 30
  },
  View_23_11: {
    width: 31,
    minWidth: 31,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 0
  },
  Text_23_11: {
    color: "rgba(2, 131, 172, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_12: {
    width: 343,
    minWidth: 343,
    height: 343,
    minHeight: 343,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 54,
    resizeMode: "cover"
  },
  View_23_13: {
    width: 228,
    minWidth: 228,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 413
  },
  Text_23_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_14: {
    width: 103,
    minWidth: 103,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 446
  },
  Text_23_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_15: {
    width: 44,
    minWidth: 44,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 417
  },
  View_23_16: {
    width: 343,
    minWidth: 343,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 487,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_23_17: {
    width: 164,
    minWidth: 164,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 493
  },
  Text_23_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_19: {
    width: 315,
    minWidth: 315,
    height: 603,
    minHeight: 603,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 0,
    backgroundColor: "rgba(2, 131, 172, 1)"
  },
  ImageBackground_23_20: {
    width: 163,
    minWidth: 163,
    height: 163,
    minHeight: 163,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 136,
    top: 64
  },
  View_23_21: {
    width: 283,
    minWidth: 283,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 296,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_23_22: {
    width: 67,
    minWidth: 67,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87,
    top: 304
  },
  Text_23_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_23: {
    width: 315,
    minWidth: 315,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 371,
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_23_24: {
    width: 315,
    minWidth: 315,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 418,
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_23_25: {
    width: 315,
    minWidth: 315,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 465,
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_23_26: {
    width: 315,
    minWidth: 315,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 511,
    backgroundColor: "rgba(196, 196, 196, 1)",
    opacity: 0,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_23_27: {
    width: 157,
    minWidth: 157,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 380
  },
  Text_23_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_0: {
    width: 157,
    minWidth: 157,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 427
  },
  Text_24_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_1: {
    width: 157,
    minWidth: 157,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 474
  },
  Text_24_1: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_2: {
    width: 157,
    minWidth: 157,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 520
  },
  Text_24_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_3: {
    width: 157,
    minWidth: 157,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 72,
    top: 567
  },
  Text_24_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 667 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
