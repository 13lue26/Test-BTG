import React from 'react';
import { View, Button, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

const FacialAuth = () => {
    const authenticateBiometric = async () => {
        const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

        if (isBiometricAvailable) {
            const result = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Otentikasi diperlukan',
            });

            if (result.success) {
                Alert.alert('Berhasil', 'Otentikasi biometrik berhasil.');
            } else {
                Alert.alert('Gagal', 'Otentikasi biometrik gagal atau pengguna membatalkan.');
            }
        } else {
            Alert.alert('Tidak Mendukung', 'Perangkat Anda tidak mendukung otentikasi biometrik.');
        }
    };

    return (
        <View>
            <Button
                title="Gunakan Autentikasi Biometrik"
                onPress={authenticateBiometric}
            />
        </View>
    );
};

export default FacialAuth;
