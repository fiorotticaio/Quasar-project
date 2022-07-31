<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-y-md column" style="max-width: 300px">
        <q-input
          color="purple-12"
          v-model="text"
          label="ID do curso que deseja editar"
        >
          <template v-slot:prepend>
            <q-icon name="none" />
          </template>
        </q-input>

        <q-input
          color="grey-3"
          label-color="blue"
          outlined
          v-model="text"
          label="Nome do curso"
        >
          <template v-slot:append>
            <q-icon name="edit" color="blue" />
          </template>
        </q-input>

        <q-input
          color="lime-11"
          bg-color="blue"
          filled
          v-model="text"
          label="Código do curso"
        >
          <template v-slot:prepend>
            <q-icon name="edit" />
          </template>
        </q-input>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { api } from "../boot/axios";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "EditCourse",
  setup() {
    const router = useRouter();
  },
});
</script>
