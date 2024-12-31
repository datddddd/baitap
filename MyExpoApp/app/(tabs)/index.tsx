import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

const PhoneInputScreen = () => {
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    Alert.alert('Thông báo', `Số điện thoại bạn nhập là: ${phone}`);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.header}>
        <Text style={styles.title}>Đăng nhập</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Nhập số điện thoại</Text>
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing
          Pro
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
        <TouchableOpacity
          style={[styles.button, !phone && styles.buttonDisabled]}
          onPress={handleSubmit}
          disabled={!phone}
        >
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', // Align title to the left
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 2, // Viền dưới
    borderBottomColor: '#EBEBEB', // Màu viền dưới

    justifyContent: 'flex-start',
    
    paddingBottom: 10, // Chỉ giữ khoảng cách phía dưới
    marginTop: 0, // Đảm bảo không có margin trên
    paddingTop: 0, // Đảm bảo sát trên cùng
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 50,
  },
  
  subtitle: {
    fontSize: 18,
    textAlign: 'left',
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'left',
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    marginBottom: 20,
    color: '#010101',
  },
  button: {
    marginTop:100,
    backgroundColor: '#F2F3F5',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#aeafb3',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PhoneInputScreen;
