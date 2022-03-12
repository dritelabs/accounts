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
            <div class="dropdown is-right is-hoverable">
              <div class="dropdown-trigger">
                <figure class="image">
                  <img
                    aria-haspopup="true"
                    aria-controls="dropdown-menu6"
                    class="is-rounded"
                    src="https://bulma.io/images/placeholders/128x128.png"
                  />
                </figure>

                <!-- <button class="button" aria-haspopup="true" aria-controls="dropdown-menu6">
                  <span>Right aligned</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>-->
              </div>
              <div class="dropdown-menu" id="dropdown-menu6" role="menu">
                <div class="dropdown-content">
                  <a href="/api/logout" class="dropdown-item">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>