<template>
<q-page padding>
    <!-- <div class="block">
      <input type="text" v-model="search" id="searchInput" class="input-res" />

      <label for="searchInput">Pesquise aqui por Espécie</label>
    </div> -->
    <div class="block"><input type="text" v-model="search" id="searchInput" class="input-res"><br>

        <label for="searchInput">Pesquise aqui pela Espécie que quer adotar</label>
              <!-- <q-select rounded outlined v-model="model" :options="options" label="Filtrar" /> -->

    </div>
    <q-banner inline-actions class="text-black bg-primary" style="border-radius:25px">
        Atualmente temos {{ pets.length }} animais cadastrados, ajude a diminuir esse número escolhendo uma das fofuras abaixo!!!
    </q-banner>
    <q-card  class="my-card" v-for="(pet, i) in filteredItems" :key="i" style="border-radius: 25px">
        <q-card-section class="bg-primary text-white">
            <q-img :src="pet.img" style="border-radius: 25px;">
                <q-badge color="primary">
                    {{ pets.length - i }}
                </q-badge>
                <div class="absolute-bottom text-subtitle2 text-center">
                    {{ pet.nome }} <br />
                    {{ pet.sexo }} <br />
                    Espécie: {{ pet.especie }}<br />
                    Idade: {{ pet.idade }}<br />
                    Localização: {{ pet.local }}
                </div>
            </q-img>
            <q-card-section style="text-align:center"  v-show="maisinfo">
              Vermifugado(a): {{ pet.vermifugado }}<br />
              Vacinado(a): {{ pet.vacinado }} <br />
              Castrado(a): {{ pet.castrado }} <br />
            </q-card-section>
            <q-card-actions align="center" style="border-radius: 25px">
                <q-btn flat class="bg-secondary" style="font-size: 15px" :href="pet.contato">Adotar</q-btn>

                <q-btn flat class="bg-info" style="font-size: 15px" @click="this.maisinfo = !this.maisinfo">Mais Informações</q-btn>

            </q-card-actions>
        </q-card-section>
    </q-card>

</q-page>
</template>

<script>
import {
    exportFile
} from 'quasar'
import {
    copyToClipboard
} from 'quasar'
import { ref } from 'vue'

export default {
   setup () {
    return {
      model: ref(null),
      options: [
        'Filhotes', 'Todos', 'Castrados'
      ]
    }
  },
    data() {
        return {
            pets: [],
            search: "",
            copiado: false,
            maisinfo: false,
        };
    },
    computed: {
        filteredItems() {
            return this.pets.filter((pet) => {
                return (
                    pet.especie.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                );
            });
        },
    },
    created() {
        // Simple GET request using fetch
        fetch("https://api.npoint.io/78fb19b494249ab9973c")
            .then((response) => response.json())
            .then((data) => (this.pets = data));
    },
    methods: {
        shareDown(pet) {
            const status = exportFile('important.txt', pet)

            if (status === true) {
                // browser allowed it
            } else {
                // browser denied it
                console.log('Error: ' + status)
            }
        },
        copy2(pet, pet1, pet2, pet3) {

            copyToClipboard(pet, pet1, pet2, pet3)
                .then(() => {
                    this.copiado = true
                    // success!
                })
                .catch(() => {
                    // fail
                })
        }
    },
};
</script>
