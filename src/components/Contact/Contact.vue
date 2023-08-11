<script lang='ts'>
  import { mapMutations } from 'vuex';
  import { SnapObservable } from '../Containers';
  export default {
    name: 'Contact',
    data() {
      return { show: false as boolean }      
    },
    methods: {
      ...mapMutations(['setCurrentPage']),
      observe(value: boolean): void { 
        this.show = value;
        if (value) this.setCurrentPage('Contact');
      },
      handleSubmit(evt: any): void{
        const data = new FormData(evt.target)
        const dataJSON = Object.fromEntries(data.entries());
        evt.target.reset();
        // TODO: Send Email
        console.log(dataJSON);
      }
    },
    components: {
      SnapObservable
    }
  }
</script>

<template>
  <SnapObservable @observable="observe" class="background">
    <section class="content">
      <header class="contact-header">
        <h2>Are you interested?</h2>
        <h4>Send me a message</h4>
      </header>
      <form :class="['form-wrapper', {show}]" @submit.prevent="handleSubmit($event)">
        <header>
          <h2>Get in touch</h2>
        </header>
        <input required
          autocomplete="off"
          class="form-input"
          type="text"
          name="Subject"
          placeholder="Subject"
        />
        <input required
          autocomplete="off"
          class="form-input"
          type="text"
          name="Full Name"
          placeholder="Full Name"
        />
        <input required
          autocomplete="off"
          class="form-input"
          type="email"
          name="Email"
          placeholder="Email"
        />
        <textarea required
          autocomplete="off"
          class="form-input"
          name="Message"
          placeholder="Message"
        />
        <button class="form-submit" type="submit">Send</button>
      </form>
    </section>
  </SnapObservable>
</template>

<style scoped>
  @import './styles.module.scss';
</style>