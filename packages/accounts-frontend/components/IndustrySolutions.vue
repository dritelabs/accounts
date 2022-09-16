<script setup lang="ts">
const data = useState(() => ({
  current: 'apps',
  industries: [
    {
      key: 'apps',
      name: 'Apps',
      apps: [
        {
          name: 'Sites',
          description: 'Create modern landing pages for your businesses'
        },
        {
          name: 'Store front',
          description: 'Allow customers to buy things from your store"'
        }
      ]
    },
    {
      key: 'developerTools',
      name: 'Developer tools',
      apps: [
        {
          name: 'Accounts',
          description:
            'Sign in to your Drite Account and get the most out of all the Drite services you use.'
        },
        {
          name: 'Identity and Access Management',
          description:
            'Fine-grained access control and visibility for centrally managing resources.'
        },
        {
          name: 'Content Management System',
          description:
            'Manage content no matter what data structure you have and consume it in your apps and services'
        },
        {
          name: 'E-Commerce',
          description:
            'Build multi-channel commerce experiences for B2B and B2C customers on a single platform.'
        }
      ]
    },
    {
      key: 'integrations',
      name: 'Integrations',
      apps: []
    }
  ]
}));

const currentIndustry = computed(() =>
  data.value.industries.find((industry) => industry.key === data.value.current)
);
</script>

<template>
  <section class="section is-medium">
    <div class="container">
      <header class="mb-6">
        <strong
          class="has-text-weight-bold is-uppercase has-text-primary is-block"
          >Run your business</strong
        >
        <p class="title is-1 has-text-weight-bolder">
          Solve your business challenges
          <br />
          with our industry solutions
        </p>
        <p class="subtitle is-5">
          Aim for growth with advanced tools and get even closer to your goals.
        </p>
      </header>
      <div class="columns">
        <div class="column is-3">
          <aside class="menu">
            <ul class="menu-list">
              <li
                v-for="industry in data.industries"
                @click="data.current = industry.key"
              >
                <a :class="{ 'is-active': data.current === industry.key }">{{
                  industry.name
                }}</a>
              </li>
            </ul>
          </aside>
        </div>
        <div class="column">
          <div class="columns is-multiline">
            <div class="column is-4" v-for="item in currentIndustry.apps">
              <article
                class="box is-bordered is-shadowless is-100h is-disabled"
              >
                <span class="tag is-primary is-light mb-1 has-text-weight-bold"
                  >COMING SOON</span
                >
                <p class="title is-5 pb-2">{{ item.name }}</p>
                <p class="subtitle is-6">{{ item.description }}</p>
              </article>
            </div>
            <div class="column is-4">
              <article
                class="box is-shadowless has-background-primary-light is-100h"
              >
                <p class="title is-5 pb-2">Suggest a new App</p>
                <p class="subtitle is-6">
                  We’re always adding new Apps! If you’d like to suggest a new
                  App, <a href="">follow this link to submit a request.</a>
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
