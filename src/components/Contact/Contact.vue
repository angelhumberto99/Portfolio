<script lang='ts'>
  import { mapMutations } from 'vuex';
  import { SnapObservable } from '../Containers';

  interface RequestStatus {
    status: boolean;
    message: string;
  }

  export default {
    name: 'Contact',
    data() {
      return { 
        show: false as boolean,
        reqStatus: {} as RequestStatus,
        loading: false as boolean
      }      
    },
    methods: {
      ...mapMutations(['setCurrentPage']),
      observe(value: boolean): void { 
        this.show = value;
        if (value) this.setCurrentPage('Contact');
      },
      handleSubmit(evt: any): void{
        this.loading = true;
        const URL = 'https://formsubmit.co/ajax/bcd2dffb96f55003bb407b9f616cb575'
        const data = new FormData(evt.target)
        const dataJSON = Object.fromEntries(data.entries());
        evt.target.reset();

        globalThis.fetch(URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataJSON)
        })
        .then(() => {
          this.reqStatus = {
            status: true,
            message: 'Your message has been submitted successfully'
          }
        })
        .catch(() => {
          this.reqStatus = {
            status: false,
            message: 'Something went wrong, please try again'
          }
        })
        .finally(() => setTimeout(() => this.loading = false, 1500))
      }
    },
    computed: {
      status(): string {
        if (Object.keys(this.reqStatus).length === 0 || !this.loading) return '';
        return this.reqStatus.status ? 'unanimate success' : 'unanimate failure';
      }
    },
    components: {
      SnapObservable
    }
  }
</script>

<template>
  <SnapObservable @observable="observe">
    <section class="content">
      <div class="contact-wrapper">
        <header class="contact-header">
          <h2>Are you interested?</h2>
          <h4>Send me a message</h4>
        </header>
        <form :class="['form-wrapper', {show}, status]" @submit.prevent="handleSubmit">
          <header>
            <h2>Get in touch</h2>
            <h4>{{ reqStatus?.message }}</h4>
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
      </div>
    </section>
  </SnapObservable>
</template>

<style scoped>
  @import './styles.module.scss';
</style>