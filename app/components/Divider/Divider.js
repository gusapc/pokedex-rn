import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './DividerStyle';

export default function Divider (props) {
    return (
      <View style={[styles.divider, (props.addVerticalMargin && styles.smallMarginVertical)]} />
    );
}

Divider.propTypes = {
	addVerticalMargin: PropTypes.bool,
}

Divider.defaultProps = {
	addVerticalMargin: false,
}
