<script setup lang="ts">
import Benefits from '~~/old/Benefits.vue';
const data = {
  startSections: [
    {
      title: 'Branded website',
      subtitle:
        'Select from any of our industry-leading templates, pick the color palettes that best fit your business, and upload your logo',
      image: 'fa-solid fa-window-maximize'
    },
    {
      title: 'Industry solution apps',
      subtitle:
        'When you chose your industry, you can install the apps that are powered by Drite.',
      image: 'fa-solid fa-code'
    },
    {
      title: 'Free Bank account',
      subtitle:
        'FDIC-insured bank accounts to protect funds, Free ACH, mailed checks and incoming wire transfers, Issue cards with spending controls in seconds and no hidden fees',
      image: 'fa-solid fa-building-columns'
    },
    {
      title: 'Resources to enhance your business knowledge',
      subtitle:
        'Enhance your knowledge related to your business industry with courses, tutorials and videos',
      image: 'fa-solid fa-folder'
    },
    {
      title: 'Professional services from industry experts',
      subtitle:
        'Enhance your knowledge related to your business industry with courses, tutorials and videos',
      image: 'fa-solid fa-chalkboard-user'
    },
    {
      title: 'And more...',
      subtitle:
        'Enhance your knowledge related to your business industry with courses, tutorials and videos',
      image: 'fa-solid fa-lines-leaning'
    }
  ]
};
</script>

<template>
  <section class="section is-medium">
    <div class="container">
      <header class="mb-6">
        <strong
          class="has-text-weight-bold is-uppercase has-text-primary is-block"
          >Start your business</strong
        >
        <p class="title is-1 has-text-weight-bolder">
          Everything you get to start your business
        </p>
        <p class="subtitle is-5">Start with the basics that just work</p>
      </header>
      <div
        class="columns is-multiline is-align-items-stretch is-justify-content-stretch is-align-content-stretch"
      >
        <div class="column is-6" v-for="item in data.startSections">
          <div class="card is-shadowless is-100h is-bordered">
            <div class="card-content">
              <div class="columns">
                <div class="column is-narrow">
                  <div
                    class="p-3 has-background-primary-light has-border-rounded is-flex is-align-items-center is-justify-content-center"
                  >
                    <font-awesome-icon
                      class="has-text-primary"
                      :icon="item.image"
                      size="lg"
                    />
                  </div>
                </div>
                <div class="column">
                  <p class="title is-4">{{ item.title }}</p>
                  <p class="subtitle is-6">{{ item.subtitle }}</p>
                  <a href="">Get started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div
            class="card is-shadowless is-100h has-background-primary-light is-hoverable is-clickable is-bordered"
          >
            <div class="card-content">
              <div class="columns">
                <div class="column is-narrow">
                  <div
                    class="p-3 has-background-primary-light has-border-rounded is-flex is-align-items-center is-justify-content-center"
                  >
                    <font-awesome-icon
                      class="has-text-primary"
                      icon="fa-solid fa-play"
                      size="lg"
                    />
                  </div>
                </div>
                <div class="column">
                  <p class="title is-4">Start your business</p>
                  <p class="subtitle is-6">
                    Start with the basics that just work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
