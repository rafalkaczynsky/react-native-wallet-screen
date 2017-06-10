import React from 'react'
import {View, Text} from 'react-native'

import StyleSheet from '../styles'
import {Header, BankInfoCard, Title} from '../components'

export default class WalletScreen extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
         <View style={{flex: 1}}>
            <Header title="Wallet" />
            <View style={StyleSheet.padding}>
                <View style={{ alignItems: "center"}}>
                {/* values to be replaced with real ones*/}
                    <BankInfoCard
                        name="Rafal"
                        surname="Kaczynski"
                        bankName="Loyds"
                        accountNumber="00012345"
                        sortCode="20-55-34"
                        balance={99.75}
                    />
                </View>
            </View>
            <View style={{flex:1}}>
                <Title text={'RECENT TRANSACTIONS'}/>
            </View>
        </View>

        )
    }
}  