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
                'sans': ['"Barlow Semi Condensed"', ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            
            'gray': '#03254c',
            'midnight': '#000000',
            'metal': '#565584',
            'tahiti': '#3ab7bf',
            'sea': '#419197',
            'white': '#fff',
            'navy': '#1167b1',
            'red': '#FF1818',
            'blue': '#2E99B0',
            'green': '#3CB29A',
            'grey': '#CCD3CA',
            'orange': '#F97300',
            'yellow': '#FFC100',
            'transparent': '#C7B7A3',
          },
          
    },

    plugins: [forms, Flowbite, daisyui],
};
