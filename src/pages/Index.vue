<template>
<q-page padding>
    <!-- <div class="block">
      <input type="text" v-model="search" id="searchInput" class="input-res" />

      <label for="searchInput">Pesquise aqui por Espécie</label>
    </div> -->
    <div class="block"><input type="text" v-model="search" id="searchInput" class="input-res"><br>

        <label for="searchInput">Pesquise aqui pela Espécie que quer adotar</label>
    </div>
    <q-card class="my-card" v-for="(pet, i) in filteredItems" :key="i" style="border-radius: 25px">
        <q-card-section class="bg-primary text-white">
            <q-img :src="pet.img" style="border-radius: 25px;">
                <div class="absolute-bottom text-subtitle2 text-center">
                    {{ pet.nome }} <br />
                    Sexo: {{ pet.sexo }}<br />
                    Espécie: {{ pet.especie }}<br />
                    Idade: {{ pet.idade }}<br />
                    Localização: {{ pet.local }}
                </div>
            </q-img>
            <q-card-actions align="center" style="border-radius: 25px">
                <q-btn flat class="bg-positive" style="font-size: 15px" :href="pet.contato">Adotar</q-btn>

                <q-btn flat class="bg-info" style="font-size: 15px">Compartilhar</q-btn>
            </q-card-actions>
        </q-card-section>
    </q-card>
</q-page>
</template>

<script>
export default {
    data() {
        return {
            pets: [],
            search: "",
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
};
</script>

<style lang="css" scoped>
.my-card {
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    margin-bottom: 25px;
    margin-top: 25px;
    border-radius: 25px;
}

.block {
    margin: 0 auto;
    max-width: 900px;
    padding: 50px 30px;
}

.input-res {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font: 15px/1 "Open Sans", sans-serif;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    max-width: 500px;
    background-color: #a6bf02;
    border: none;
    padding: 10px 11px 11px 11px;
    border-radius: 3px;
    box-shadow: none;
    outline: none;
    margin: 0;
    box-sizing: border-box;

}
</style>
