<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-y-md column" style="max-width: 300px">
        <q-input
          color="purple-12"
          v-model="id"
          label="ID do curso que deseja editar"
        >
          <template v-slot:prepend>
            <q-icon name="none" />
          </template>
        </q-input>

        <q-btn
          @click="onSubmit(id)"
          label="Procurar"
          type="submit"
          color="primary"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { api } from "../boot/axios";

export default defineComponent({
  name: "EditCourse",
  setup() {
    const router = useRouter();
    const id = ref();
    const $q = useQuasar();

    const form = ref({
      id: id,
      name: "",
      code: "",
    });

    const onSubmit = async (id) => {
      try {
        const { data } = await api.get(`http://localhost:3004/courses/${id}`);
        router.push({ name: "EditSpecificCourse", params: { id } });
      } catch (error) {
        console.log(error);
        $q.notify({
          message: "ID não encontrado",
          color: "negative",
          icon: "close",
        });
      }
    };

    return {
      form,
      id,
      onSubmit,
    };
  },
});
</script>
