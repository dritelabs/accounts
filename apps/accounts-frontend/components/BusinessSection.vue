<script setup lang="ts">
const apps = [
  // {
  //   name: 'Education',
  //   description: 'Reach the customers that matters for business with targeted ads'
  // },
  {
    name: 'Sites',
    description: 'Create modern landing pages for your businesses.'
  },
  {
    name: 'Storefront',
    description: 'Create modern landing pages for your businesses.'
  }
  // {
  //   name: 'Restaurants',
  //   description: 'Reach the customers that matters for business with targeted ads'
  // },
  // {
  //   name: 'E-commerce',
  //   description: 'Reach the customers that matters for business with targeted ads'
  // },
];
</script>

<template>
  <section class="section is-medium has-background-white-bis has-text-centered">
    <div class="container">
      <strong class="is-uppercase has-text-primary">FOR BUSINESSES</strong>

      <p class="title is-2">Powerful productivity applications to solve your business problems.</p>
      <p class="subtitle is-5">
        Whatever your industry's challenge or use case, explore how Drite solutions can help in your business
        models
      </p>
      <div class="columns is-multiline has-text-left">
        <article class="column is-4" v-for="app in apps">
          <div class="box p-6 is-shadowless is-disabled">
            <span class="tag is-primary is-light mb-1">COMING SOON</span>
            <p class="title is-4 pb-2">{{ app.name }}</p>
            <p class="subtitle is-6">{{ app.description }}</p>
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
