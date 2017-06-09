import React from 'react'
import {View} from 'react-native'

import WalletScreen from '../windows/wallet-screen'

export default class Wallet extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <WalletScreen />
            </View>
        )
    }
}  