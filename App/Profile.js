import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class Profile extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    Hi There
                </Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'pink',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:30,
        color:"black",
    }
})

export default Profile;