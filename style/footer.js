import { StyleSheet } from 'react-native';

const footerStyle = StyleSheet.create({
    footer: {
        backgroundColor: '#ccc', // Warna latar belakang footer
        padding: 10, // Padding di dalam footer
        alignItems: 'center', // Pusatkan elemen secara horizontal
        position: 'absolute', // Footer akan tetap berada di bawah layar
        bottom: 0, // Tempatkan footer di bagian bawah layar
        left: 0, // Tempatkan footer di sisi kiri layar
        right: 0, // Tempatkan footer di sisi kanan layar
    },
    footerText: {
        color: '#fff', // Warna teks di dalam footer
    },
});

export default footerStyle
