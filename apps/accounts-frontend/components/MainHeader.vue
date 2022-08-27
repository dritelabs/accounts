<template>
  <nav class="navbar py-1" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <NuxtLink class="navbar-item" to="/profile">
          <img src="/logo-black.svg" width="110" />
        </NuxtLink>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-ghost" href="/api/logout">
                <strong>Log out</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
