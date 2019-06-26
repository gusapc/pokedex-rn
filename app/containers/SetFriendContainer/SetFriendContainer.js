import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

import { connect } from "react-redux";
import { setFriend } from 'pokedex-rn/app/actions/PokeTeamsActions';

class SetFriendContainer extends Component {	

	render() {
		return (
			<React.Fragment>
			{
				this.props.children(this.props.setFriend)
			}
			</React.Fragment>
		);
	}
}

mapStateToProps = state => ({})

export default connect(mapStateToProps, { setFriend })(SetFriendContainer);
