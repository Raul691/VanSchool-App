import React from "react";
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView,}
from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Chat3 = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.header}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/3.jpg" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Oscar Davis </Text>
        <Text style={styles.activeStatus}>Active 20m ago</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="call-outline" size={24} color="black" style={styles.icon} />
          <Ionicons name="videocam-outline" size={24} color="black" />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.chatContainer}>
        <View style={[styles.chatBubble, styles.userBubble]}>
          <Text style={styles.chatText}>This is the main chat template</Text>
        </View>

        <Text style={styles.timestamp}>Nov 30, 2023, 9:41 AM</Text>

        <View style={[styles.chatBubble, styles.otherBubble]}>
          <Text style={styles.chatText}>Oh?</Text>
        </View>
        <View style={[styles.chatBubble, styles.otherBubble]}>
          <Text style={styles.chatText}>Cool</Text>
        </View>
        <View style={[styles.chatBubble, styles.otherBubble]}>
          <Text style={styles.chatText}>How does it work?</Text>
        </View>

        <View style={[styles.chatBubble, styles.userBubble]}>
          <Text style={styles.chatText}>
            You just edit any text to type in the conversation you want to show, and delete any bubbles you don’t want to use
          </Text>
        </View>

        <View style={[styles.chatBubble, styles.otherBubble]}>
          <Text style={styles.chatText}>Hmmm</Text>
        </View>
        <View style={[styles.chatBubble, styles.otherBubble]}>
          <Text style={styles.chatText}>I think I get it</Text>
        </View>
        <View style={[styles.chatBubble, styles.otherBubble]}>
          <Text style={styles.chatText}>Trueeeeee</Text>
        </View>
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Message..." />
        <Ionicons name="send-outline" size={24} color="black" style={styles.sendIcon} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginTop: 33,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  activeStatus: {
    color: "#888",
    marginLeft: 10,
  },
  headerIcons: {
    flexDirection: "row",
    marginLeft: "auto",
  },
  icon: {
    marginRight: 15,
  },
  chatContainer: {
    padding: 10,
  },
  chatBubble: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 18,
    marginVertical: 5,
  },
  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#FFC700",
  },
  otherBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#000",
  },
  chatText: {
    color: "#fff",
  },
  timestamp: {
    alignSelf: "center",
    color: "#888",
    fontSize: 12,
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ddd",
    padding: 22,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
    backgroundColor: "#f9f9f9",
  },
  sendIcon: {
    marginLeft: 10,
  },
});

export default Chat3;
