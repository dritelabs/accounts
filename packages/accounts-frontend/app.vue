<!-- <script setup lang="ts">
onMounted(() => {
  import('bulma-calendar/dist/js/bulma-calendar.min.js').then(({ default: bulmaCalendar }) => {

    const calendars = bulmaCalendar.attach('[type="date"]', {
      color: 'link'
    });

    // Loop on each calendar initialized
    calendars.forEach(calendar => {
      // Add listener to select event
      calendar.on('select', date => {
        console.log(date);
      });
    });

    // To access to bulmaCalendar instance of an element
    const element = document.querySelector('#my-element');

    if (element) {
      // bulmaCalendar instance is available as element.bulmaCalendar
      // @ts-ignore
      element.bulmaCalendar.on('select', datepicker => {
        console.log(datepicker.data.value());
      });
    }
  })
})


</script> -->

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
