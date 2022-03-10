<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <NuxtLink class="navbar-item" to="/">
          <img src="/new-isologo.svg" height="28" class="mr-2" />
          <p class="is-size-4 has-text-weight-bold">Driten</p>
          <!-- <span class="">/ Accounts</span> -->
        </NuxtLink>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <NuxtLink to="/signup" class="button is-light">
                <strong>Create an account</strong>
              </NuxtLink>
              <NuxtLink to="/signin" class="button is-dark">
                <strong>Go to Driten Account</strong>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>