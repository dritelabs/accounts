<script setup lang="ts">
definePageMeta({
  layout: 'unauthenticated'
});
</script>

<template>
  <main class="is-flex is-flex-grow-1 is-flex-direction-column">
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-justify-content-center is-align-items-center">
            <div class="column is-10 has-text-centered">
              <h1 class="title is-1 has-text-weight-bold mb-6" :style="{ fontSize: '6rem', lineHeight: 1 }">
                All of Drite,
                <br />
                <span> working for you </span>
              </h1>
              <p class="subtitle is-3">
                Sign in to your Drite Account, and get the most out of all the Drite services you use. Your
                account helps you do more by personalizing your Drite experience and offering easy access to
                your most important information from anywhere.
              </p>
              <div class="buttons is-justify-content-center">
                <button type="button" class="button is-dark is-medium">
                  <strong> Go to Drite Account </strong>
                </button>
                <button type="button" class="button is-light is-medium">
                  <strong> Create an account </strong>
                </button>
              </div>
            </div>
            <!-- <div class="column">
              <img
                src="https://getbootstrap.com/docs/5.1/examples/heroes/bootstrap-themes.png"
                alt="hero-image"
              />
            </div>-->
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p class="title">Helps you</p>
            <p class="subtitle">
              When you’re signed in, all of the Drite services you use work together seamlessly to offer help
              with everyday tasks.
            </p>
          </div>
          <div class="column">
            <p class="title">Built for you</p>
            <p class="subtitle">
              No matter which device or Drite service you’re using, your account gives you a consistent
              experience you can customize and manage at any time.
            </p>
          </div>
          <div class="column">
            <p class="title">Protects you</p>
            <p class="subtitle">
              Your Drite Account is protected by industry-leading security that automatically helps detect and
              block threats before they ever reach you.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.title span {
  background: linear-gradient(90deg, #338cf5, #4fd1c5);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.reinforcement {
  background-color: rgba(51, 140, 245, 0.05);
}
</style>
