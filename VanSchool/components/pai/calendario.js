import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

function Calendario ({ navigation }) {
  const [selectedMonth, setSelectedMonth] = useState("Março");
  const [selectedDay, setSelectedDay] = useState(10);
  const [isRegistered, setIsRegistered] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const renderCalendar = () => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    return (
      <View style={styles.calendarContainer}>
        {days.map((day) => (
          <TouchableOpacity
            key={day}
            style={[
              styles.day,
              selectedDay === day && styles.selectedDay,
            ]}
            onPress={() => setSelectedDay(day)}
          >
            <Text
              style={[
                styles.dayText,
                selectedDay === day && styles.selectedDayText,
              ]}
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderFooter = () => {
    if (isRegistered) {
      return (
        <>
          <Text style={styles.footerText}>Falta registrada</Text>
          <Text style={styles.subText}>Você deseja cancelar a falta?</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setIsRegistered(false);
                setConfirmationMessage(`Falta cancelada para ${selectedDay} de ${selectedMonth}`)
              }}
            >
              <Text style={styles.buttonText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('HomepageMotorista', { message: '' })}>
              <Text style={styles.buttonText}>Não</Text>
            </TouchableOpacity>
          </View>
        </>
      );
    }
    return (
      <>
        <Text style={styles.footerText}>Registrar falta dia {selectedDay}</Text>
        <Text style={styles.subText}>Em qual período?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsRegistered(true)}
          >
            <Text style={styles.buttonText}>Ida</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsRegistered(true)}
          >
            <Text style={styles.buttonText}>Volta</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsRegistered(true)}
          >
            <Text style={styles.buttonText}>Ambos</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>VANSCHOOL</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.monthContainer}>
        {months.map((month) => (
          <TouchableOpacity
            key={month}
            onPress={() => setSelectedMonth(month)}
            style={styles.monthButton}
          >
            <Text style={selectedMonth === month ? styles.selectedMonth : styles.month}>
              {month}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.calendar}>{renderCalendar()}</View>
      <View style={styles.footer}>{renderFooter()}</View>
      {confirmationMessage ? (
        <Text style={styles.confirmationMessage}>{confirmationMessage}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginBottom: 20,
  },
  monthContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  monthButton: {
    marginHorizontal: 10,
  },
  month: {
    fontSize: 18,
    color: "#F4CA33",
  },
  selectedMonth: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  calendar: {
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
  },
  calendarContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  day: {
    width: "14.2%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 5,
  },
  selectedDay: {
    backgroundColor: "#F4CA33",
    borderRadius: 5,
  },
  dayText: {
    color: "#FFF",
    fontSize: 16,
  },
  selectedDayText: {
    color: "#000",
    fontWeight: "bold",
  },
  footer: {
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  footerText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subText: {
    color: "#FFF",
    fontSize: 16,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#F4CA33",
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 10,
    width: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
  confirmationMessage: {
    color: "#F4CA33",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
});

export default Calendario;
