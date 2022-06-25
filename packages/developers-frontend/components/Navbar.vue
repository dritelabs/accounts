<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <NuxtLink to="/applications" class="navbar-item">
          <!-- <a class="navbar-item" href="https://bulma.io"> -->
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
          <!-- </a> -->
        </NuxtLink>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"> </span>
          <span aria-hidden="true"> </span>
          <span aria-hidden="true"> </span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <!-- <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-link">
                <strong> Sign up </strong>
              </a>
              <a class="button is-light is-link">
                Log in
              </a>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </nav>
</template>