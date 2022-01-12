<template>
  <q-page padding>
    <q-card class="my-card">
      <q-card-section>
      Envie os dados do bichinho que quer doar por
        <a href="mailto:luizzeduardp@gmail.com">email</a>

        <form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
