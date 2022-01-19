<template>
  <q-page padding>
       <q-card class="my-card">
        <q-card-section>

         <q-banner inline-actions class="text-black bg-primary" style="border-radius:25px">
       Quantidade de Pets adotados até o momento: {{adotados}}
    </q-banner>


        </q-card-section>
       </q-card>
  </q-page>
</template>

<script>
export default {
 created() {

              fetch("https://api.npoint.io/7ccbd653bd2156f81fe8/adotados")
            .then((response) => response.json())
            .then((data) => (this.adotados = data));
 },
 data() {
   return {
     adotados:0
   }
 },
}
</script>
