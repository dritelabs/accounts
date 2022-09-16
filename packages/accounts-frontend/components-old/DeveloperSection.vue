<script setup lang="ts">
const apps = [
  {
    name: 'Accounts',
    description: 'Sign in to your Drite Account and get the most out of all the Drite services you use.'
  },
  {
    name: 'Identity and Access Management',
    description: 'Fine-grained access control and visibility for centrally managing resources.'
  },
  {
    name: 'Content Management System',
    description:
      'Manage content no matter what data structure you have and consume it in your apps and services'
  },
  {
    name: 'E-Commerce',
    description: 'Build multi-channel commerce experiences for B2B and B2C customers on a single platform.'
  }
];
</script>

<template>
  <section class="section is-medium has-background-white-bis has-text-centered">
    <div class="container">
      <strong class="is-uppercase has-text-primary">FOR DEVELOPERS</strong>
      <p class="title is-2">Build amazing products faster with our headless services and APIs</p>
      <p class="subtitle is-5">
        Build apps faster, make smarter business decisions, and connect people anywhere.
      </p>

      <div class="columns is-multiline has-text-left">
        <article class="column is-4" v-for="app in apps">
          <div class="box p-6 is-shadowless is-disabled">
            <span class="tag is-primary is-light mb-1">COMING SOON</span>
            <p class="title is-4 pb-2">{{ app.name }}</p>
            <p class="subtitle is-6">{{ app.description }}</p>
          </div>
        </article>
        <article class="column is-4">
          <div class="box p-6 is-shadowless is-disabled">
            <p class="title is-4 pb-2">Integrate with Drite</p>
            <p class="subtitle is-6">
              Connect Drite with your apps and services. Integrations help you to move information back and
              forth between Drite and your apps.
            </p>
          </div>
        </article>
      </div>
      <div class="buttons is-justify-content-center">
        <a class="button is-primary is-light">
          <strong>Get started</strong>
        </a>
        <a class="button is-ghost">
          <strong>See all products</strong>
        </a>
      </div>
    </div>
  </section>
</template>
