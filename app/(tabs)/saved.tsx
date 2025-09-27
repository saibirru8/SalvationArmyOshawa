import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import react, { useEffect } from "react";
import { getAppointment } from "@/services/amelia";

const Saved = () => {

  useEffect(() => {
    const fetchAppointment = async () => {
      const appointment = await getAppointment(8983); 
      console.log("User Appointment: ", JSON.stringify(appointment, null, 2)); 
    } 
    fetchAppointment(); 
  }, []); 

  return (
      <View>
        <Text className="justify-center align-items-center font-bold text-2xl">
          Saved
        </Text>
      </View>
  );
};

export default Saved;
