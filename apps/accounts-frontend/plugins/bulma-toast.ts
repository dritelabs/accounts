import * as bulmaToast from 'bulma-toast';

export default defineNuxtPlugin((nuxtApp) => {
  bulmaToast.setDefaults({
    position: 'bottom-center',
    dismissible: true,
    duration: 5000
  });

  return {
    provide: {
      bulmaToast: bulmaToast.toast
    }
  };
});
