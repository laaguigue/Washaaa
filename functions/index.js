import React,{ useState } from "react";
import { View,Text, TouchableOpacity, Touchable } from "react-native";

const FlipCardWidget = ({ frontText, backText, frontBgColor, frontTextColor, backBgColor, backBgColor, buttonText, buttonLink, includFlipAnimation }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
};

return (
    <View style={{ backgroundColor: isFlipped ? backBgColor : frontBgColor }}>
     <TouchableOpacity onPress={flipCard}>
        <Text style={{ Color: isFlipped ? backTextColor : frontTextColor }}>
            {isFlipped ? backText : frontText}
        </Text>
     </TouchableOpacity>
     {includeFlipAnimation &&(
        <TouchableOpacity onPress={flipCard}>
         <Text>{buttonText}</Text>
        </TouchableOpacity> 
     )}
    </View> 
);
     };

     export default FlipCardWidget;