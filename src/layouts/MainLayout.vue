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

      <q-tabs align="left">
        <q-route-tab to="/" label="Pets" />
        <q-route-tab to="/contato" label="Contato" />

      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
