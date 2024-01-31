import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
	useFonts,
	Archivo_100Thin,
	Archivo_200ExtraLight,
	Archivo_300Light,
	Archivo_400Regular,
	Archivo_500Medium,
	Archivo_600SemiBold,
	Archivo_700Bold,
	Archivo_800ExtraBold,
	Archivo_900Black,
	Archivo_100Thin_Italic,
	Archivo_200ExtraLight_Italic,
	Archivo_300Light_Italic,
	Archivo_400Regular_Italic,
	Archivo_500Medium_Italic,
	Archivo_600SemiBold_Italic,
	Archivo_700Bold_Italic,
	Archivo_800ExtraBold_Italic,
	Archivo_900Black_Italic,
} from '@expo-google-fonts/archivo';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
