import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import UnCheckBox from "../assets/uncheckbox.svg";
import CheckBox from "../assets/checkbox.svg";
import DeleteIcon from "../assets/delete.svg";

const TodoItem = () => {
  return (
    <View style={styles.itemContainer}>
      <Pressable style={styles.itemCheckbox} hitSlop={10}>
        <CheckBox style={styles.itemCheckboxCheckedIcon} />
        <UnCheckBox />
      </Pressable>
      <Text style={[styles.itemText, styles.itemTextChecked]}>Todo</Text>
      <Pressable
        style={[styles.deleteButton, styles.deleteButtonDone]}
        hitSlop={10}
      >
        <DeleteIcon />
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#f7f8fa",
  },
  itemCheckbox: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
  },
  itemCheckboxCheckedIcon: {
    shadowColor: "#000000",
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  itemText: {
    marginRight: "auto",
    fontSize: 15,
    paddingRight: 25,
    lineHeight: 20,
    color: "#737373",
  },
  itemTextChecked: {
    opacity: 0.3,
    textDecorationLine: "line-through",
  },
  deleteButton: {
    opacity: 0.8,
  },
  deleteButtonDone: {
    opacity: 0.3,
  },
});
