<template>
  <div class="view-default">
    <app-category class="category" :category="loginState ? 'Login' : 'Sign up'">
      <h2 class="category__info">{{ loginState }}</h2>
    </app-category>
    <PasswordReset
      v-if="showPasswordReset"
      @close="togglePasswordReset()"
    ></PasswordReset>
    <form class="form" v-if="showLoginForm" @submit.prevent>
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
      <button class="submit" @click="login()">Log In</button>
      <div class="extras">
        <a @click="togglePasswordReset()">Forgot Password</a>
        <a @click="toggleForm()">Create an Account</a>
      </div>
    </form>
    <form class="form" v-else @submit.prevent>
      <div class="inputs">
        <div class="inputs__name">
          <label for="name">Name</label>
          <input
            v-model.trim="signupForm.name"
            type="text"
            placeholder="Your name"
            id="name"
          />
        </div>
        <div class="inputs__email">
          <label for="email2">Email</label>
          <input
            v-model.trim="signupForm.email"
            type="text"
            placeholder="you@email.com"
            id="email2"
          />
        </div>
        <div class="inputs__password">
          <label for="password2">Password</label>
          <input
            v-model.trim="signupForm.password"
            type="password"
            placeholder="min. 6 characters"
            id="password2"
          />
        </div>
      </div>
      <button @click="signup()" class="submit">Sign Up</button>
      <div class="extras">
        <a @click="toggleForm()">Back to Log In</a>
      </div>
    </form>
  </div>
</template>

<script>
import PasswordReset from '../components/PasswordReset.vue';
import Category from '../components/Category.vue';

export default {
  data() {
    return {
      loginState: true,
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
      showPasswordReset: false,
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
      this.loginState = !this.loginState;
      this.showLoginForm = !this.showLoginForm;
    },

    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset;
    },
  },

  components: {
    PasswordReset,
    appCategory: Category,
  },
};
</script>

<style lang="scss" scoped>
@import '../design';

.category {
  margin-bottom: 1em;
}

.form {
  @include content-width;
  margin-top: 2em;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 1em;
  padding-bottom: 1em;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.4em;
  font-weight: $primary-bold;

  > * {
    margin-bottom: 1em;
  }

  &__heading {
    margin-bottom: 2em;
  }

  .inputs {
    display: flex;
    flex-wrap: wrap;
  }

  .inputs div {
    display: flex;
    flex-direction: column;
    padding: 1em;
  }

  .inputs label {
    margin-bottom: 1em;
  }

  .inputs input {
    margin-bottom: 0.5em;
    padding: 1em;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.2em;
    @media (min-width: 450px) {
      min-width: 25em;
    }
  }

  .submit {
    margin-left: 1.2em;
    font-weight: $primary-bold;
    background-color: rgba(0, 0, 0, 0.1);
    border: 2px solid rgba(0, 0, 0, 0.1);
    padding: 0.5em 1em;
    cursor: pointer;
    max-width: 7em;
  }

  .extras {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1em;
    margin-left: 1em;

    a {
      margin-right: 1em;
      margin-bottom: 1em;
    }

    a:hover {
      color: #a08240;
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
