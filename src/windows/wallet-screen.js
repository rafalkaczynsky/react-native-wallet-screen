import React from 'react'
import {View, Text, ScrollView} from 'react-native'

import StyleSheet from '../styles'
import {calculateDisplayData} from '../utils'
import {Header, BankInfoCard, Title, UserListInWallet, Button} from '../components'

export default class WalletScreen extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const users = this.props.users // to be replaced

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
                <Title text={'YOUR RECENT TRANSACTIONS'}/>
                <ScrollView>
                    {users.map((user, i) => {
                        let displayData = calculateDisplayData(user, i)

                        return (
                            <UserListInWallet
                                key={i}
                                user={user}
                                displayDate={displayData.displayDate}
                                display={displayData.display}
                                displayStyle={displayData.displayStyle}
                            />
                        )
                    })}
                </ScrollView>
                <View style={StyleSheet.walletScreen.button}>
                    <Button
                        type="roundedDefault"
                        text="ALL TRANSACTIONS"
                        style={[StyleSheet.singleMargin]}
                    />
                </View>
            </View>
        </View>
    )}
}  