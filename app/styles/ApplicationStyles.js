import Fonts from './Fonts'
import Colors from './Colors'
import Metrics from './Metrics'

import { Platform, StatusBar } from 'react-native'

const ApplicationStyles = {
	screen: {
		container: {
			flex: 1,
			backgroundColor: Colors.bgColor
		},
		imageFill: {
			position:'absolute', 
			top: 0, 
			bottom: 0, 
			right: 0, 
			left: 0, 
			width:null, 
			height:null			
		},
		headerSpace: {
			paddingTop: Metrics.navBarHeight
		},
		card: {
			marginBottom: Metrics.smallMargin,
			backgroundColor: Colors.white,
			shadowColor: '#000',
			shadowRadius: 4,
			shadowOpacity: 0.2,
			shadowOffset: { width: 0, height: 3 },
			padding: Metrics.responsiveSpace,
			borderRadius: 5,
			elevation: 1
		},
		imageViewContainer: {
			height: Metrics.imageViewHeight
		},
		mainTitle: {
			backgroundColor: Colors.white,
			marginTop: 24,
			marginBottom: 10,
			paddingLeft: Metrics.baseMargin,
			paddingTop: 10,
			paddingBottom: 12
		},
		KeyboardAvoidingViewStyle: {
			flex: 1,
			height: '100%',
			justifyContent: 'space-around',
			position: 'absolute',
			top: 0, width: '100%'
		},
		sizeImage: {
			width: 48, 
			height: 48,
			borderRadius: 5
		},
		listSpace: {
			height: Metrics.screenHeight*0.8
		},
	},
	margins: {
		marginHorizontal: {
			marginHorizontal: Metrics.baseMargin
		},
		doubleMarginHorizontal: {
			marginHorizontal: Metrics.doubleBaseMargin
		},
		smallMarginVertical: {
			marginVertical: Metrics.smallMargin
		},
		smallestMarginVertical: {
			marginVertical: Metrics.smallestMargin
		},
		smallMarginHorizontal: {
			marginHorizontal: Metrics.smallMargin
		},
		smallestMarginHorizontal: {
			marginHorizontal: Metrics.smallestMargin
		},
		marginVertical: {
			marginVertical: Metrics.baseMargin
		},
		doubleMarginVertical: {
			marginVertical: Metrics.doubleBaseMargin,
		},
		noMarginHorizontal: {
			marginHorizontal: 0,
		},
		paddingHorizontal: {
			paddingHorizontal: Metrics.baseMargin
		},
		smallPaddingTop: {
			paddingTop: Metrics.smallMargin
		},
		basePaddingTop: {
			paddingTop: Metrics.baseMargin
		},
		smallPaddingBottom: {
			paddingBottom: Metrics.smallMargin
		},
		paddingAround: {
			padding: Metrics.baseMargin
		},
		verticalPadding: {
			paddingVertical: Metrics.baseMargin
		},
		smallMarginTop: {
			marginTop: Metrics.smallMargin
		},
		baseMarginTop: {
			marginTop: Metrics.baseMargin
		},
		baseMarginBottom: {
			marginBottom: Metrics.baseMargin
		},
		baseMarginLeft: {
			marginLeft: Metrics.baseMargin
		},
		baseMarginRight: {
			marginRight: Metrics.baseMargin
		},
		smallMarginLeft: {
			marginLeft: Metrics.smallMargin
		},
		statusBarSpace: {
			paddingTop: (Platform.OS != 'ios') ? StatusBar.currentHeight : 0
		},
		navBarHeight: {
			height: Metrics.navBarHeight,
		},
	},
	flexBox: {
		row: {
			flexDirection: 'row'
		},
		antiRow: {
			flexDirection: 'row-reverse'
		},
		flex1: {
			flex: 1
		},
		flex2: {
			flex:2
		},
		flexWrap: {
			flexWrap: 'wrap'
		},
		justifyFlexStart: {
			justifyContent: 'flex-start'
		},
		justifyContentCenter: {
			justifyContent: 'center'
		},
		justifyContentFlexEnd: {
			justifyContent: 'flex-end'
		},
		justifySpaceBetween: {
			justifyContent: 'space-between'
		},
		justifySpaceAround: {
			justifyContent: 'space-around'
		},
		justifySpaceEvenly: {
			justifyContent: 'space-evenly'
		},
		alignItemsFlexStart: {
			alignItems: 'flex-start'
		},
		alignCenter: {
			alignItems: 'center'
		},
		alignFlexEnd: {
			alignItems: 'flex-end'
		},
		alignSelfStart: {
			alignSelf: 'flex-start'
		},
		alignSelfEnd: {
			alignSelf: 'flex-end'
		},
		alignSelfCenter: {
			alignSelf: 'center'
		},
		fullWidth: {
			width: '100%'
		},
		fullHeight: {
			height: '100%'
		},	
	},
	bottomTabNavigatorOptions: {
		activeTintColor: Colors.white,
		labelStyle: {
			fontSize: 12,
		},
		style: {
			backgroundColor: Colors.darkest
		},
	},
	stackNavigatorOptions: {
		headerStyle: {
			backgroundColor: '#ffffff'
		}
	},
}

export default ApplicationStyles