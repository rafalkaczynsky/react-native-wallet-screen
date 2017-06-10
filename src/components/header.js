import React from 'react'
import {View, Image, Text} from 'react-native'


import StyleSheet from '../styles'
import {Button, HighlightText} from './'

export default class Header extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            mode: 'Bank'    //options: Bank/User
        }
    }

    getMode() {
        if (this.state.mode === 'Buyer') {
            return {
                'modeText': 'Seller Mode',
                'modeTextHighlight': 'Buyer',
        }
        } else {
        return {
            'modeText': 'Buyer Mode',
            'modeTextHighlight': 'Seller',
        }
        }
    }

  render() {
    const {modeText, modeTextHighlight} = this.getMode()
    
    return (
      <View style={StyleSheet.window.titleBarStyle}>
        {!this.props.simple && (
          <View style={StyleSheet.window.logoBarStyle}>
           <Image source={StyleSheet.images.logo} style={StyleSheet.window.logoStyle} /> 
            <Button
              onPress={() => 
                  this.state.mode === 'Seller' ? this.setState({mode: 'Buyer'}) : 
                  this.setState({mode: 'Seller'} 
                  )}
              type="modeSwitch"
              text={
                <HighlightText
                  style={[StyleSheet.text, StyleSheet.window.modeTextStyle]}
                  highlightStyle={[StyleSheet.text, StyleSheet.window.modeTextStyle, StyleSheet.window.modeHighlightTextStyle]}
                  highlight={modeTextHighlight}
                  text={modeText} />}
            />
          </View>
        )}

        {this.props.title && (
          <View style={StyleSheet.window.crumbBar}>
            {this.props.simple &&  (
              <View style={[StyleSheet.window.accessoryBarStyle, {width: 32}]}>
                <Button type="title" icon="back" onPress={this.props.onBack} />
              </View>
            )}
            <Text style={[StyleSheet.text, StyleSheet.window.crumbTextStyle]}>
              {this.props.title.toUpperCase()}
            </Text>
            {/*Spacer to match the back button*/}
            {this.props.simple &&  (
              <View style={[StyleSheet.window.accessoryBarStyle, {width: 32}]} />
            )}
          </View>
        )}
      </View>
    )
  }
}

Header.propTypes = {
  'title': React.PropTypes.string,
  'simple': React.PropTypes.bool,
}


