import { Dropdown } from "react-native-element-dropdown";
import { StyleSheet } from "react-native";


export function DropDownMenu({ data, value, setValue, placeholder }) {
    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder="Pesquisar"
        value={value}
        onChange={(item) => {
          setValue(item.value);
        }}

      />
    );
  }

const styles = StyleSheet.create({
    dropdown: {
      marginTop: 10,
      height: 40,
      borderBottomColor: "gray",
      borderBottomWidth: 0.5,
      backgroundColor: "#fff",
      borderRadius: 8,
      width: 360,
      paddingLeft:10
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 14,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });