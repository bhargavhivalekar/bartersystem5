import * as React from "react"
import {View,Text,StyleSheet,TextInput} from "react-native"
import {Card} from "react-native-elements"

export default class ExchangeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            GiftName:"",
            Message:"",

        }
    }
    render(){
        return(
            <View >
                <Card ><Text sstyle={styles.messagebox} >
                    Exhcange screen
                </Text></Card>
                <TextInput
                style={styles.TextBox}
                   multiline={12}
                   placeholder={"OBject Name"}
                >

                </TextInput>
                <TextInput
                style={styles.messagebox}
                   multiline={25}
                   placeholder={"reason to trade"}
                >

                </TextInput>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"red",
    },
    title:{
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",
    },
    TextBox:{
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",
        borderWidth:4,
        width:200,
    },
     messagebox:{
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",
        borderWidth:2,
        width:300
        
    }
})


