import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import { Flowbite } from 'flowbite-react';
import daisyui from 'daisyui';



/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        'node_modules/flowbite-react/lib/esm/**/*.js'
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            
            'gray': '#7F9F80',
            'midnight': '#000000',
            'metal': '#565584',
            'tahiti': '#3ab7bf',
            'silver': '#ecebff',
            'sea': '#419197',
            'bermuda': '#F5FCCD',
            'navy': '#124076',
            'red': '#FF1818',
            'blue': '#2E99B0',
            'green': '#3CB29A',
          },
    },

    plugins: [forms, Flowbite, daisyui],
};
