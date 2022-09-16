<template>
  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <NuxtLink class="navbar-item" to="/profile">
          <img src="/logo-black.svg" width="110" />
        </NuxtLink>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-end">
        <NuxtLink class="navbar-item" to="/">
          <strong> Sign in </strong>
        </NuxtLink>
        <NuxtLink class="button is-primary" to="/">
          <strong> Get started </strong>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
