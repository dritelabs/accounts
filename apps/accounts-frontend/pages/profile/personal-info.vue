<script setup lang="ts">
definePageMeta({
  layout: 'main',
  middleware: ['auth']
});

const { data: user, error } = await useFetch('/api/userinfo', {
  headers: useRequestHeaders()
});
</script>

<template>
  <main>
    <p class="title is-3">Personal information</p>
    <p class="subtitle is-5">Info about you and your preferences across Drite services</p>

    <article class="card is-shadowless mb-6 is-bordered">
      <div class="card-content">
        <p class="title is-4">Basic information</p>
        <div class="columns is-align-items-center">
          <div class="column is-narrow">
            <figure class="image is-128x128 mb-3">
              <img class="is-rounded" :src="user?.picture" />
            </figure>
          </div>
          <div class="column">
            <div class="file is-light">
              <label class="file-label">
                <input class="file-input" type="file" name="resume" />
                <span class="file-cta">
                  <!-- <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span> -->
                  <span class="file-label"> Choose a file… </span>
                </span>
              </label>
            </div>
          </div>
        </div>
        <form method="post">
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">First name</label>
                <div class="control">
                  <input type="text" name="firstName" class="input is-medium" placeholder="First name:" />
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Last name</label>
                <div class="control">
                  <input type="text" name="lastName" class="input is-medium" placeholder="Last name:" />
                </div>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Phone number</label>
            <div class="control">
              <input
                type="tel"
                name="phoneNumber"
                class="input is-medium"
                placeholder="Phone number:"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Birthday</label>
            <div class="control">
              <input type="date" name="birthdate" class="input is-medium" placeholder="Email:" />
            </div>
          </div>

          <div class="field">
            <label class="label">Gender</label>
            <div class="control">
              <div class="select is-medium is-fullwidth">
                <select v-model="user.gender">
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="non-binary">Non-binary</option>
                </select>
              </div>
            </div>
          </div>
          <button class="button is-primary is-medium">
            <strong>Save</strong>
          </button>
        </form>
      </div>
    </article>
    <article class="card is-shadowless is-bordered mb-6">
      <div class="card-content">
        <p class="title is-4">Change password</p>
        <form method="post">
          <div class="field">
            <label class="label"> Password </label>
            <div class="control">
              <input type="password" name="password" class="input is-medium" placeholder="Password:" />
            </div>
          </div>
          <div class="field">
            <label class="label"> Confirm password </label>
            <div class="control">
              <input type="password" name="password" class="input is-medium" placeholder="Password:" />
            </div>
          </div>
          <button class="button is-primary is-medium">
            <strong>Save</strong>
          </button>
        </form>
      </div>
    </article>
  </main>
</template>
