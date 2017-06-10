import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import {Header} from '../components'

export default class WalletScreen extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <Header title="Wallet" />
            </View>
        )
    }
}  