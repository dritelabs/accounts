<template>
  <nav class="navbar py-1" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <NuxtLink class="navbar-item" to="/">
          <img src="/logo-black.svg" width="110" />
        </NuxtLink>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <NuxtLink to="/signup" class="button is-ghost has-text-primary">
              <strong>Create an account</strong>
            </NuxtLink>
            <NuxtLink to="/signin" class="button is-primary">
              <strong>Go to Drite Account</strong>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
