import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export default api;

/*
 ** IOS COM EMULADOR: localhost;
 ** IOS com fisico: IP da maquina;
 ** ANDROID com emulador: localhost (adb reverse);
 ** ANDROID com emulador: 10.0.2.2 (Android Studio);
 ** ANDROID com emualdor: 10.0.3.2 (GenyMotion);
 ** ANDROID com dispositivo fisico: IP da maquina;
*/