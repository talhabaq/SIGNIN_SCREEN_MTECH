import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:
    {
      padding: 24,
      flex: 1
    },
    header:
    {
      marginVertical: 36
    },
    headerImg:
    {
      height: 80,
      width: 80,
      alignSelf: "center",
      marginBottom: 36
    },
    title: {
      fontSize: 27,
      fontWeight: '700',
      color: 'black',
      marginBottom: 6,
      textAlign: "center"
    },
    subtitle: {
      fontSize: 15,
      fontWeight: '500',
      color: 'black',
      textAlign: 'center'
    },
    input: {
      marginBottom: 16
    },
    inputLabel: {
      fontSize: 17,
      fontWeight: '200',
      marginBottom: 8
    },
    inputControl: {
      height: 44,
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 12,
      fontSize: 15,
      fontWeight: "500",
      color: "#222"
    },
    btn: {
     
    },
    btnText: {
      fontSize: 18,
      fontWeight: '600',
      color: "#fff"
    },
    form: {
      marginBottom: 24,
      flex: 1
    },
    formAction: {
      marginVertical: 24,
      backgroundColor: '#1230AE',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#1230AE',
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20
    },
    formFooter: {
      fontSize: 17,
      fontWeight: '600',
      color: "#222",
      textAlign: "center",
      letterSpacing: 0.15
    }
  })
  
  export default styles
