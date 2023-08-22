<script lang="ts">
  export default {
    name: 'WhoAmI'
  }
</script>

<template>
  <h2>Who am I?</h2>
  <hr class="top-hr"/>
  <section class="wrapper">
    <img class="profile" 
      src="@/assets/profile-second.png"
      alt="profile image"
    />
    <article class="description">
      <h4>Who Am I?</h4>
      <hr class="bottom-hr"/>
      <p>
        Computer engineer with great skills in frontend development, highly
        motivated to innovate and implement high quality pieces of software.
      </p>
      <p>
        Self-taught and passionate about improving and learning new skills 
        that help me be at the forefront of the software development industry.
      </p>
      <p>
        Prepared to add value to the projects presented to me, and willing
        to start working immediately.
      </p>
    </article>
  </section>
</template>

<style scoped>
  @import './styles.module.scss';
</style>