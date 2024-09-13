import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity ,Alert} from 'react-native'
import React, { useState } from 'react'
import styles from './components/style'
const App = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.container}>
        <View style={styles.header} >
          <Image
            source={{ uri: 'https://media.licdn.com/dms/image/v2/C560BAQEw4uZDvzCH7w/company-logo_200_200/company-logo_200_200/0/1679916086272?e=1733961600&v=beta&t=oG2G53pEtowLVTd_OJcqIpEMqk8hNXaaYaYy9nx1zWA' }}
            style={styles.headerImg}
          />

          <Text style={styles.title}>Sign In To MTECHUB</Text>
          <Text style={styles.subtitle}>
            Get Access To Your PortFolio and More
          </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              keyboardAppearance='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              style={styles.inputControl}
              placeholder='test@gmail.com'
              placeholderTextColor={"grey"}
              value={form.email}
              onChangeText={email => setForm({ ...form, email })}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              secureTextEntry
              style={styles.inputControl}
              placeholder='*********'
              placeholderTextColor={"grey"}
              value={form.password }
              onChangeText={password => setForm({ ...form, password })}
            />
          </View>
          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert("Successfully Logged IN!")
              }}>
              <View styles={styles.btn}>
                <Text style={styles.btnText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => { }}
            style={{ marginBottom: "auto" }}
          >
            <Text style={styles.formFooter}>
              Don't Have Account?<Text style={{ textDecorationLine: 'underline' }}> Sign Up</Text></Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default App
