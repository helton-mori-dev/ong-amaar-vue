import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          dark: {
            primary: '#503683',
            accent: '#FF4081',
            secondary: '#63DED1',
            success: '#4CAF50',
            info: '#2196F3',
            warning: '#FB8C00',
            error: '#FF5252',
            lightbackground: '#eee9f3'
          },
          light: {
            primary: '#503683',
            accent: '#FF4081',
            secondary: '#63DED1',
            success: '#4CAF50',
            info: '#2196F3',
            warning: '#FB8C00',
            error: '#FF5252',
            lightbackground: '#eee9f3'
          }
        }
      }
});
