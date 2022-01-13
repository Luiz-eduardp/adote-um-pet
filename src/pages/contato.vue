<template>
<q-page padding>
    <q-card class="my-card">
        <q-card-section>
            Envie os dados do bichinho que quer doar por
            <a href="mailto:luizzeduardp@gmail.com">email</a>

        </q-card-section>


    </q-card>
   <!-- <form  @submit.prevent="addItem">

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

             <q-btn label="Submit" type="submit" color="primary" @click="addItem()"/>
        </form> -->

</q-page>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
    data() {
        return {
            Whatsapp: '',
            Espécie: '',
            Localização: '',
            Sexo: '',
            Idade: '',
            nome: '',
            pet:[]
        }
    },
    methods: {
      addItem: function() {
                this.pet.push({
                    nome: this.nome,
                    especie: this.Espécie,
                    sexo: this.Sexo,
                    contato: this.Whatsapp,
                    local: this.Localização,
                    idade: this.Idade,
                    img: 'xx',

                });
                 emailjs.sendForm('service_yabz53u', 'template_86sglws', this.pet, 'user_Ic0hk388EATI8gtjEDtLZ')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
            },

    }
}
</script>
