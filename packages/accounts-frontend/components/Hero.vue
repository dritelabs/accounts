<template>
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container has-hero-illustration-background">
        <div class="columns is-align-items-center">
          <div class="column is-6">
            <p class="title is-display-1 has-text-weight-bold">
              All of Drite,
              <br />
              <span> working for you</span>
            </p>
            <p class="subtitle is-4">
              Drite Account enables people to have private and secure experiences across all Drite services
              and provides a seamless experience across all platforms, devices and operating systems.

              <!-- Sign in to your Drite Account, and get the most out of all the Drite services you use. Your
              account helps you do more by personalizing your Drite experience and offering easy access to
              your most important information from anywhere. -->
            </p>
            <div class="buttons">
              <NuxtLink class="button is-medium is-primary" to="/signin">
                <strong>Go to Drite Account</strong>
              </NuxtLink>
              <NuxtLink class="button is-medium is-ghost" to="/signup">
                <strong>Create an account</strong>
              </NuxtLink>
            </div>
          </div>
          <div class="column is-flex is-align-items-center is-justify-content-center">
            <img class="" src="/accounts.svg" alt="" width="500" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
