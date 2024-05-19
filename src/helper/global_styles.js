import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BackgroundColor, COLORS} from './colors';

export const globalStyles = StyleSheet.create({
  SafeAreaViewStyle: {
    flex: 1,
    backgroundColor: BackgroundColor,
    // width: wp('100%'),
    // height: height
  },

  imageBackgroundSquare: {
    flexGrow: 1,
  },
  WhiteRoundedLargeView: {
    borderTopLeftRadius: wp('7%'),
    borderTopRightRadius: wp('7%'),
    bottom: 0,
    flex: 1,
    paddingHorizontal: wp(4),
    backgroundColor: COLORS.WHITE.screenBg,
  },
  LogoStyle: {
    width: wp('20%'),
    height: hp('20%'),
  },
  GetStartedText: {
    fontSize: hp('3%'),
    color: COLORS.GREY.silver,
  },
  BackText: {
    marginLeft: 5,
    fontSize: hp('2.4%'),
    color: COLORS.WHITE.screenBg,
  },
  simpleGreyText: {
    color: COLORS.TEXTCOLOR.text,
    fontSize: hp(2),
  },
  textInputView: {
    width: width - 70,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: wp(2),
    marginVertical: hp(0.5),
    color: COLORS.TEXTCOLOR.text,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('6%'),
    borderColor: COLORS.GREY.textInputBorder,
    backgroundColor: COLORS.WHITE.screenBg,
  },
  textInputRow: {
    flex: 1,
    marginVertical: hp(0),

    color: COLORS.TEXTCOLOR.text,
    marginHorizontal: wp(1),
  },
  LargeDropDownStyle: {
    backgroundColor: COLORS.WHITE.screenBg,
    borderColor: COLORS.GREY.lightgrey,
    borderRadius: 10,
  },
  DropDownContainerStyle: {
    backgroundColor: '#131313',
    borderColor: 'red',
    borderRadius: 20,
  },
  LargeDropDownContainer: {
    width: '100%',
    marginBottom: hp('0.5%'),
  },
  AlreadyhaveAccountView: {
    marginHorizontal: wp('5%'),
    flexDirection: 'row',
  },
  smallGreenCircle: {
    height: 30,
    width: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.GREEN.EditBtnGreen,
    position: 'absolute',
    right: 0,
  },
  Title: {
    color: COLORS.GREEN.DarkGreen,
    fontSize: hp('2%'),
  },
  TitleAnswer: {
    color: COLORS.GREY.silver,
    fontSize: hp('1.8%'),
  },
  DrawerNotifView: {
    flexDirection: 'row',
    marginHorizontal: wp('2%'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  DrawerNotBtn: {
    margin: hp(2),
    paddingVertical: hp(1.5),
    alignItems: 'center',
  },
  AppointmentDetailsView: {
    width: wp('90%'),
    alignSelf: 'center',
    backgroundColor: COLORS.WHITE.screenBg,
    borderWidth: 1,
    //  backgroundColor: COLORS.WHITE.background,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    marginHorizontal: wp(1),
    shadowRadius: wp(1),
    elevation: 8,
    borderColor: COLORS.WHITE.screenBg,
    borderRadius: 10,
    // borderRadius: 10,
    marginVertical: hp('2%'),
    // borderColor: COLORS.WHITE.screenBg,
    // shadowColor: "#004080",
    // shadowOffset: {
    //     width: 0,
    //     height: 1,
    // },
    // shadowOpacity: 1,
    // marginHorizontal: wp(1),
    // shadowRadius: 10,
    // elevation: 5,
  },
  StatusView: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingHorizontal: wp('1.5%'),
    width: wp('10%'),
    alignItems: 'center',
    backgroundColor: COLORS.YELLOW.dark,
    borderColor: COLORS.YELLOW.dark,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,

    paddingVertical: hp('0.2%'),
  },

  LargeGreenBtn: {
    width: width,
    // flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // alignContent: 'center',
    paddingVertical: hp('1.5%'),
    backgroundColor: COLORS.GREEN.DarkGreen,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  LargeGreenBtnText: {
    color: COLORS.WHITE.screenBg,
    fontSize: hp('2%'),
  },
  activeDot: {
    borderWidth: 1,
    borderRadius: 10,
    width: width / 10,
    marginHorizontal: wp(1),
    height: height / 45,
    backgroundColor: COLORS.GREEN.DarkGreen,
    borderColor: COLORS.GREEN.DarkGreen,
  },
  InActiveDot: {
    width: wp(3),
    height: hp(1.5),
    borderRadius: 10,
    marginHorizontal: wp(0.5),
    backgroundColor: COLORS.GREY.cream,
    borderColor: COLORS.GREY.cream,
  },
  CircleImg: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width / 6.5,
    height: Dimensions.get('window').width / 6.5,
    borderWidth: 1,
    borderColor: COLORS.GREEN.DarkGreen,
  },
  modalDropDown: {
    margin: 0,
  },
  mainviewDropDown: {
    // height: height / 1.8,
    width: wp('95%'),
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: hp(4),
    paddingHorizontal: wp('4%'),
    backgroundColor: COLORS.WHITE.light,
    position: 'absolute',
    borderRadius: 15,
  },
  LargeDropDown: {
    flexDirection: 'row',
    borderWidth: 1,
    width: width / 2.4,
    alignItems: 'center',
    paddingHorizontal: wp(3),
    height: hp(6),
    borderRadius: wp(3),
    borderColor: COLORS.GREY.textInputBorder,
  },
  dropDownText: {
    fontSize: hp('1.4%'),
    color: COLORS.TEXTCOLOR.text,
    flex: 1,
  },
});
