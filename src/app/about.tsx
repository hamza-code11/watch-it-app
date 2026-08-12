import { Link } from "expo-router";
import { Text, View } from "react-native";


const About = () =>{
    return(
         <View style={{backgroundColor: "red", flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 40, color: "white", fontWeight: 700}}>This is About Page</Text>

            <Link href={"/"}>Go to Home</Link>
        </View>
    );
};


export default About;