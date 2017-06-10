# react-native-wallet-screen
Wallet Screen component  build with React-Native

![alt text](https://github.com/rafalkaczynsky/react-native-wallet-screen/blob/master/src/styles/resources/images/screenshot.png)

(It's just an example what you can achieve with react-native)

This reusable react-native component could be used in any App with payment options.

How to run it locally from command line

- Clone this repo git clone https://github.com/rafalkaczynsky/react-native-wallet-screen.git
- cd WalletScreen
- run npm install
- react-native start   // in some cases you need npm react-native start  --port=8088
- react-native run-android / react-native run-ios


Use as follows:

 <WalletScreen users={this.props.user}/>
 
Example of User prop:  {...}
 
        id: 1,                        // integer
        name: 'John',                 // string
        secondName: 'Johnson',        // string
        activity: 'Swimming Lesson',  // Reference of Payment - string
        price: 12,                    // any price - float number
        overlay:  null,               // 'pending' or 'cancelled' - string
        imageSrc: 'https://facebook.github.io/react/img/logo_og.png', // or any other path to image - string
        date: 'June 12, 2017'         // Date in any format - Date()

