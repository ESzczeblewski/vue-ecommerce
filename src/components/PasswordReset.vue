<template>
  <div class="modal">
    <div class="modal__content">
      <button @click="$emit('close')" class="submit">Close</button>
      <h3>Reset Password</h3>
      <div class="form-wraper" v-if="!showSuccess">
        <p>Enter your email to reset your password</p>
        <form @submit.prevent>
          <input
            v-model.trim="email"
            type="email"
            placeholder="you@email.com"
          />
        </form>
        <p v-if="errorMsg !== ''" class="error">{{ errorMsg }}</p>
        <button @click="resetPassword()" class="submit">Reset</button>
      </div>
      <p v-if="showSuccess">Success! Check your email for a reset link.</p>
    </div>
  </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      showSuccess: false,
      errorMsg: '',
    };
  },
  methods: {
    async resetPassword() {
      this.errorMsg = '';

      try {
        const auth = getAuth();
        await sendPasswordResetEmail(auth, this.email);
        this.showSuccess = true;
      } catch (err) {
        this.errorMsg = err.message;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../design';

.modal {
  @include content-width;
  margin-top: 1em;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.4em;
  font-weight: $primary-bold;
  padding-top: 1em;
  padding-bottom: 1em;

  &__content {
    padding: 1em;

    > * {
      margin-bottom: 1em;
    }

    p,
    form {
      margin-bottom: 1em;

      input {
        padding: 1em;
        border: 2px solid rgba(0, 0, 0, 0.1);
        border-radius: 0.2em;
        @media (min-width: 450px) {
          min-width: 25em;
        }
      }
    }

    .submit {
      font-weight: $primary-bold;
      background-color: rgba(0, 0, 0, 0.1);
      border: 2px solid rgba(0, 0, 0, 0.1);
      padding: 0.5em 1em;
      cursor: pointer;
      max-width: 7em;
      font-family: $primary-font;
    }
  }
}
</style>
