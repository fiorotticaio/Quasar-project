<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-y-md column" style="max-width: 300px">
        <q-input
          color="grey-3"
          label-color="blue"
          outlined
          v-model="form.name"
          label="Nome do curso"
        >
          <template v-slot:append>
            <q-icon name="edit" color="blue" />
          </template>
        </q-input>

        <q-input
          color="grey-3"
          label-color="blue"
          outlined
          v-model="form.id"
          label="ID do curso"
        >
          <template v-slot:append>
            <q-icon name="edit" color="blue" />
          </template>
        </q-input>

        <q-input
          color="lime-11"
          bg-color="blue"
          filled
          v-model="form.code"
          label="Código do curso"
        >
          <template v-slot:prepend>
            <q-icon name="edit" />
          </template>
        </q-input>

        <q-btn
          @click="onSubmit(form)"
          label="Editar"
          type="submit"
          color="primary"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { api } from "../boot/axios";
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "EditSpecificCourse",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const $q = useQuasar();

    const form = ref({
      id: "",
      name: "",
      code: "",
    });

    onMounted(async () => {
      if (route.params.id) {
        // atualizando
        try {
          const { data } = await api.get(
            `http://localhost:3004/courses/${route.params.id}`
          );
          form.value = data;
        } catch (error) {
          console.log(error);
        }
      }
    });

    const onSubmit = async () => {
      try {
        const { data } = await api.put(
          `http://localhost:3004/courses/${form.value.id}`,
          form.value
        );
        $q.notify({
          message: "Curso editado com sucesso",
          color: "positive",
          icon: "check",
        });
        router.push({ name: "IndexPage" });
      } catch (error) {
        console.log(error);
        $q.notify({
          message: "Falha ao editar curso!",
          color: "negative",
          icon: "close",
        });
      }
    };

    return {
      form,
      onSubmit,
    };
  },
});
</script>
