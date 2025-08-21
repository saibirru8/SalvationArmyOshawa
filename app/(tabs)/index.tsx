import React, { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { Calendar } from "react-native-calendars";

const Appointments = () => {
  const [selected, setSelected] = useState("");
  return (
    <SafeAreaView>
      <Calendar
        className="rounded-md bg-white p-5 w-full"
        onDayPress={(day) => {
          setSelected(day.dateString);
          console.log(day);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
      />
    </SafeAreaView>
  );
};

export default Appointments;
