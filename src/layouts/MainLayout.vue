<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-black" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="../assets/pata.png">
          </q-avatar>
          Adote Um Pet
        </q-toolbar-title>
      </q-toolbar>


    </q-header>

    <q-page-container class="bg-dark">
      <router-view />
       <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="primary" />
          </q-page-scroller>
    </q-page-container>
<q-footer elevated class="bg-primary text-black" height-hint="98">
    <q-tabs align="center">
        <q-route-tab to="/" label="Pets" />
        <q-route-tab to="/contato" label="Contato" />
        <q-route-tab to="/info" label="Informações" />

      </q-tabs>
</q-footer>
  </q-layout>
</template>
