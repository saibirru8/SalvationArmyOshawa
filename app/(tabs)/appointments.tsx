import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Calendar} from "react-native-calendars";

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
                        selectedColor: "light-blue",
                    },
                }}
            />
        </SafeAreaView>
    );
};

export default Appointments;
