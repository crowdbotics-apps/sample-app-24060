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
      <View style={styles.View_1_501}>
        <Text style={styles.Text_1_501}>Welcome back, Afreen!</Text>
      </View>
      <View style={styles.View_1_502}>
        <Text style={styles.Text_1_502}>How are you feeling today ?</Text>
      </View>
      <View style={styles.View_1_503}>
        <View style={styles.View_1_504} />
        <View style={styles.View_1_505}>
          <View style={styles.View_1_506} />
          <View style={styles.View_1_507}>
            <Text style={styles.Text_1_507}>watch now</Text>
          </View>
          <View style={styles.View_1_508}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b391/3e86/b8d1cfb6d68a766f9c1e81762cc9143b"
              }}
              style={styles.ImageBackground_1_509}
            />
          </View>
        </View>
        <View style={styles.View_1_511}>
          <View style={styles.View_1_512} />
        </View>
        <View style={styles.View_1_513}>
          <Text style={styles.Text_1_513}>Meditation 101</Text>
        </View>
        <View style={styles.View_1_514}>
          <Text style={styles.Text_1_514}>
            Techniques, Benefits, and a Beginner’s How-To
          </Text>
        </View>
      </View>
      <View style={styles.View_1_515}>
        <View style={styles.View_1_516} />
        <View style={styles.View_1_517}>
          <Text style={styles.Text_1_517}>
            Basics of Yoga for Beginners or Experienced Professionals
          </Text>
        </View>
        <View style={styles.View_1_518}>
          <View style={styles.View_1_519} />
          <View style={styles.View_1_520}>
            <Text style={styles.Text_1_520}>watch now</Text>
          </View>
          <View style={styles.View_1_521}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b391/3e86/b8d1cfb6d68a766f9c1e81762cc9143b"
              }}
              style={styles.ImageBackground_1_522}
            />
          </View>
        </View>
        <View style={styles.View_1_524}>
          <Text style={styles.Text_1_524}>Cardio Meditation</Text>
        </View>
        <View style={styles.View_1_525} />
        <View style={styles.View_1_526} />
      </View>
      <View style={styles.View_1_527}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ca5/73c7/a5cbb4a95ebccd96caf0d405f56119d6"
          }}
          style={styles.ImageBackground_1_528}
        />
        <View style={styles.View_1_529}>
          <View style={styles.View_1_530}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9550/f23f/302a42f7fa7489071382c9fcf88b1ad1"
              }}
              style={styles.ImageBackground_1_531}
            />
          </View>
          <View style={styles.View_1_533}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/511e/c7d1/c4ab77777e5293e54064060ba7fb3b48"
              }}
              style={styles.ImageBackground_1_534}
            />
          </View>
          <View style={styles.View_1_536}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/511e/c7d1/c4ab77777e5293e54064060ba7fb3b48"
              }}
              style={styles.ImageBackground_1_537}
            />
          </View>
          <View style={styles.View_1_539}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c1a/8be3/d272fb2ac2c6af4351061c338ac4f744"
              }}
              style={styles.ImageBackground_1_540}
            />
          </View>
          <View style={styles.View_1_542}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c1a/8be3/d272fb2ac2c6af4351061c338ac4f744"
              }}
              style={styles.ImageBackground_1_543}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6595/b177/c79f26ae2ef1fe901f3b69ace52246e6"
          }}
          style={styles.ImageBackground_1_545}
        />
      </View>
      <View style={styles.View_1_548}>
        <View style={styles.View_1_549}>
          <View style={styles.View_1_550} />
          <View style={styles.View_1_551}>
            <Text style={styles.Text_1_551}>Calm</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6080/70d0/b5502d76f0328c6142198714e98e4fd1"
            }}
            style={styles.ImageBackground_1_552}
          />
        </View>
        <View style={styles.View_1_555}>
          <View style={styles.View_1_556} />
          <View style={styles.View_1_557}>
            <Text style={styles.Text_1_557}>Relax</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe73/825d/9f700cff4e1ad3af5348571b2f36fe49"
            }}
            style={styles.ImageBackground_1_558}
          />
        </View>
        <View style={styles.View_1_559}>
          <View style={styles.View_1_560} />
          <View style={styles.View_1_561}>
            <Text style={styles.Text_1_561}>Focus</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8427/52fd/82f2bfa7fdd4d2a816d58cd1c3fd1c35"
            }}
            style={styles.ImageBackground_1_562}
          />
        </View>
        <View style={styles.View_1_565}>
          <View style={styles.View_1_566} />
          <View style={styles.View_1_567}>
            <Text style={styles.Text_1_567}>Anxious</Text>
          </View>
          <View style={styles.View_1_568}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aed2/778a/cf5420d82c897e516bda805ad8585063"
              }}
              style={styles.ImageBackground_1_569}
            />
            <View style={styles.View_1_570} />
          </View>
        </View>
      </View>
      <View style={styles.View_1_571}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16df/3595/ade57bdbe5e93f5a91993fd4f874291c"
          }}
          style={styles.ImageBackground_1_572}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f008/2a24/a99c328a531108e7f59b65f72daa98a7"
          }}
          style={styles.ImageBackground_1_573}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1aa7/0795/205fc6cc5da990e82fbd9dc06557e007"
          }}
          style={styles.ImageBackground_1_577}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f48f/1bf1/dfff369d0afa3a5f0b7f61376d8cda5f"
        }}
        style={styles.ImageBackground_1_578}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75e6/23eb/9cfa3ed20abb96884aa804bcad315cb7"
        }}
        style={styles.ImageBackground_1_579}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_501: {
    width: 283,
    minWidth: 283,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 139
  },
  Text_1_501: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_502: {
    width: 232,
    minWidth: 232,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 182
  },
  Text_1_502: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_503: {
    width: 339,
    minWidth: 339,
    height: 170,
    minHeight: 170,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 342
  },
  View_1_504: {
    width: 339,
    minWidth: 339,
    height: 170,
    minHeight: 170,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(247, 243, 240, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_505: {
    width: 138,
    minWidth: 138,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 108
  },
  View_1_506: {
    width: 138,
    minWidth: 138,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(37, 51, 52, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_507: {
    width: 64,
    minWidth: 64,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 10
  },
  Text_1_507: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_508: {
    width: 13,
    height: 13,
    top: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 98
  },
  ImageBackground_1_509: {
    width: 13,
    height: 13,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_511: {
    width: 56,
    minWidth: 56,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 226,
    top: 134
  },
  View_1_512: {
    width: 56,
    minWidth: 56,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(247, 243, 240, 1)"
  },
  View_1_513: {
    width: 150,
    minWidth: 150,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 22
  },
  Text_1_513: {
    color: "rgba(37, 51, 52, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_514: {
    width: 156,
    minWidth: 156,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 56
  },
  Text_1_514: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_515: {
    width: 339,
    minWidth: 339,
    height: 170,
    minHeight: 170,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 538
  },
  View_1_516: {
    width: 339,
    minWidth: 339,
    height: 170,
    minHeight: 170,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(247, 243, 240, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_517: {
    width: 173,
    minWidth: 173,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 56
  },
  Text_1_517: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_518: {
    width: 138,
    minWidth: 138,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 108
  },
  View_1_519: {
    width: 138,
    minWidth: 138,
    height: 39,
    minHeight: 39,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(37, 51, 52, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_520: {
    width: 64,
    minWidth: 64,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 10
  },
  Text_1_520: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_521: {
    width: 13,
    height: 13,
    top: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 98
  },
  ImageBackground_1_522: {
    width: 13,
    height: 13,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_524: {
    width: 190,
    minWidth: 190,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 30,
    top: 22
  },
  Text_1_524: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_525: {
    width: 57,
    minWidth: 57,
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 235,
    top: 148
  },
  View_1_526: {
    width: 52,
    minWidth: 52,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 235,
    top: 146,
    backgroundColor: "rgba(247, 243, 240, 1)"
  },
  View_1_527: {
    width: 226.76162719726562,
    minWidth: 226.76162719726562,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 74,
    top: 750
  },
  ImageBackground_1_528: {
    width: 28.775510787963867,
    height: 30,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_529: {
    width: 21.54378318786621,
    minWidth: 21.54378318786621,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103,
    top: 6
  },
  View_1_530: {
    width: 13.8512601852417,
    height: 20,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.6925048828125
  },
  ImageBackground_1_531: {
    width: 13.8512601852417,
    height: 20,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_533: {
    width: 10.769230842590332,
    height: 1.538461446762085,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_534: {
    width: 10.769230842590332,
    height: 1.538461446762085,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_536: {
    width: 10.769230842590332,
    height: 1.5384612083435059,
    top: 4.61541748046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_537: {
    width: 10.769230842590332,
    height: 1.5384612083435059,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_539: {
    width: 6.15384578704834,
    height: 1.538461446762085,
    top: 9.2308349609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_540: {
    width: 6.15384578704834,
    height: 1.538461446762085,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_542: {
    width: 6.15384578704834,
    height: 1.538461446762085,
    top: 13.84625244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_543: {
    width: 6.15384578704834,
    height: 1.538461446762085,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_545: {
    width: 15.761624336242676,
    height: 20,
    top: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 211
  },
  View_1_548: {
    width: 325,
    minWidth: 325,
    height: 85,
    minHeight: 85,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 235
  },
  View_1_549: {
    width: 62,
    minWidth: 62,
    height: 84,
    minHeight: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1_550: {
    width: 62,
    minWidth: 62,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.8999999761581421,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_551: {
    width: 25,
    minWidth: 25,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 70
  },
  Text_1_551: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_552: {
    width: 35.03652572631836,
    height: 35,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13
  },
  View_1_555: {
    width: 62,
    minWidth: 62,
    height: 84,
    minHeight: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87,
    top: 0
  },
  View_1_556: {
    width: 62,
    minWidth: 62,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.8999999761581421,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_557: {
    width: 26,
    minWidth: 26,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 70
  },
  Text_1_557: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_558: {
    width: 35,
    height: 32.53033447265625,
    top: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13
  },
  View_1_559: {
    width: 62,
    minWidth: 62,
    height: 84,
    minHeight: 84,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175,
    top: 0
  },
  View_1_560: {
    width: 62,
    minWidth: 62,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.8999999761581421,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_561: {
    width: 26,
    minWidth: 26,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18,
    top: 70
  },
  Text_1_561: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_562: {
    width: 35,
    height: 35,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13
  },
  View_1_565: {
    width: 62,
    minWidth: 62,
    height: 85,
    minHeight: 85,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 263,
    top: 0
  },
  View_1_566: {
    width: 62,
    minWidth: 62,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.8999999761581421,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_567: {
    width: 38,
    minWidth: 38,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 70
  },
  Text_1_567: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_568: {
    width: 38,
    minWidth: 38,
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13,
    top: 13
  },
  ImageBackground_1_569: {
    width: 38,
    height: 72,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1_570: {
    width: 38,
    minWidth: 38,
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(37, 51, 52, 1)"
  },
  View_1_571: {
    width: 326,
    minWidth: 326,
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 59
  },
  ImageBackground_1_572: {
    width: 43.40999984741211,
    height: 49,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 139
  },
  ImageBackground_1_573: {
    width: 22,
    height: 18,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1_577: {
    width: 35,
    minWidth: 35,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 291,
    top: 7
  },
  ImageBackground_1_578: {
    width: 166,
    minWidth: 166,
    height: 111,
    minHeight: 111,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 186,
    top: 370,
    resizeMode: "cover"
  },
  ImageBackground_1_579: {
    width: 129,
    minWidth: 129,
    height: 129,
    minHeight: 129,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 559,
    resizeMode: "cover"
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
