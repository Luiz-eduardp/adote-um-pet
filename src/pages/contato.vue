<template>
<q-page padding>
    <q-card class="my-card">
        <q-card-section>

            <!-- <form @submit.prevent="addItem">

                <q-input filled v-model="nome" label="Nome *" hint="Nome do Pet, caso não tenha escreva ´sem nome´" lazy-rules :rules="[ val => val && val.length > 0 || 'Digite algo']" />

                <q-input filled type="number" v-model="Idade" label="Idade*" lazy-rules :rules="[
          val => val !== null && val !== '' || 'Idade do Pet',
          val => val > 0 && val < 100 || 'Digite uma idade real'
        ]" />

                <q-input filled v-model="Sexo" label="Sexo *" hint="Macho ou Fêmea" lazy-rules :rules="[ val => val && val.length > 0 || 'Digite algo']" />
                <q-input filled v-model="Localização" label="Localização *" hint="Sua cidade e bairro" lazy-rules :rules="[ val => val && val.length > 0 || 'Digite algo']" />
                <q-input filled v-model="Espécie" label="Espécie *" hint="Cachorro, Gato, Etc" lazy-rules :rules="[ val => val && val.length > 0 || 'Digite algo']" />
                <q-input filled type="number" v-model="Whatsapp" label="Whatsapp para Contato*" lazy-rules :rules="[
          val => val !== null && val !== '' || 'Digite um Número de contato'
        ]" />

                <q-btn label="Submit" type="submit" color="primary" @click="addItem()" />
            </form> -->


<ul>
<li>
  Nome: Se houver
</li>
<li>
  Idade: Se Souber
</li>
<li>
  Sexo: Macho ou Fêmea
</li>
<li>
  Espécie: Cachorro, Gato etc.
</li>
<li>
  Localizção: Cidade e Bairro
</li>
<li>
  Imagem: Apenas uma imagem
</li>

</ul>
          <q-btn class="bg-primary "  href="https://chat.whatsapp.com/KMOKkpSwwj0JojLytrgVJD">   Envie os dados do bichinho que quer doar no nosso Grupo de Whatsapp</q-btn>

        </q-card-section>

    </q-card>

</q-page>
</template>

<script>
export default {
    data() {
        return {
            Whatsapp: '',
            Espécie: '',
            Localização: '',
            Sexo: '',
            Idade: '',
            nome: '',
            enviar: []
        }
    },
    methods: {
        addItem() {
            this.enviar.push({
                nome: this.nome,
                especie: this.Espécie,
                sexo: this.Sexo,
                contato: this.Whatsapp,
                local: this.Localização,
                idade: this.Idade,
                img: 'xx',

            });
            this.$api.post('http://localhost:3000/pets', this.enviar)

        },

    }
}
</script>
