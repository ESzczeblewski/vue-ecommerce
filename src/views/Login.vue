<template>
  <div>
    <form class="login" v-if="showLoginForm" @submit.prevent>
      <h2 class="login__heading">Login</h2>
      <div class="inputs">
        <div class="inputs__email">
          <label for="email1">Email</label>
          <input
            v-model.trim="loginForm.email"
            type="text"
            placeholder="you@email.com"
            id="email1"
          />
        </div>
        <div class="inputs__password">
          <label for="password1">Password</label>
          <input
            v-model.trim="loginForm.password"
            type="password"
            placeholder="******"
            id="password1"
          />
        </div>
      </div>
      <button class="button" @click="login()">Log In</button>
      <div class="extras">
        <a>Forgot Password</a>
        <a @click="toggleForm()">Create an Account</a>
      </div>
    </form>
    <form v-else @submit.prevent>
      <h1>Get Started</h1>
      <div>
        <label for="name">Name</label>
        <input
          v-model.trim="signupForm.name"
          type="text"
          placeholder="Savvy Apps"
          id="name"
        />
      </div>
      <div>
        <label for="title">Title</label>
        <input
          v-model.trim="signupForm.title"
          type="text"
          placeholder="Company"
          id="title"
        />
      </div>
      <div>
        <label for="email2">Email</label>
        <input
          v-model.trim="signupForm.email"
          type="text"
          placeholder="you@email.com"
          id="email2"
        />
      </div>
      <div>
        <label for="password2">Password</label>
        <input
          v-model.trim="signupForm.password"
          type="password"
          placeholder="min 6 characters"
          id="password2"
        />
      </div>
      <button @click="signup()" class="button">Sign Up</button>
      <div class="extras">
        <a @click="toggleForm()">Back to Log In</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
      },
      signupForm: {
        name: '',
        title: '',
        email: '',
        password: '',
      },
      showLoginForm: true,
    };
  },

  methods: {
    login() {
      this.$store.dispatch('LOGIN', {
        email: this.loginForm.email,
        password: this.loginForm.password,
      });
    },

    signup() {
      this.$store.dispatch('SIGNUP', {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        title: this.signupForm.title,
      });
    },

    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../design';

.login {
  @include content-width;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 3em;
  padding-bottom: 3em;

  > * {
    margin-bottom: 1em;
  }

  &__heading {
    margin-bottom: 2em;
  }

  .inputs div {
    display: flex;
    flex-direction: column;
  }

  .inputs {
    &__email > *,
    &__password > * {
      margin-bottom: 0.5em;
    }
  }
}
</style>
