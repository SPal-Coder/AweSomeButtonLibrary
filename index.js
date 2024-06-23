import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const AwesomeButton = ({width,onClick,height,backgroundColor,title,titleColor,borderRadius,titleSize}) => {
  return (
    <TouchableOpacity
     onPress={onClick}
    style={{width:width,height:height,backgroundColor:backgroundColor,
        borderRadius:borderRadius,alignItems:'center',justifyContent:'center',alignSelf:'center'
    }}>
      <Text style={{color:titleColor,fontSize:titleSize,fontWeight:'bold'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AwesomeButton