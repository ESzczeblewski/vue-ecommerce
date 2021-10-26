<template>
  <div class="footer">
    <p>
      Powered by <a href="https://wordpress.org/">WordPress.</a> Theme:
      Shophistic Lite by <a href="https://quemalabs.com/">Quema Labs</a>.
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import '../design/';

.footer {
  @include content-width;

  background-color: rgb(56, 56, 56);
  padding: 2em;
  color: #919191;

  a {
    color: rgb(255, 255, 255);
  }
}
</style>
