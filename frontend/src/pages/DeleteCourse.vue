<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-y-md column" style="max-width: 300px">
        <q-input
          color="purple-12"
          v-model="id"
          label="ID do curso que deseja deletar"
        >
          <template v-slot:prepend>
            <q-icon name="none" />
          </template>
        </q-input>

        <q-btn
          @click="onSubmit(id)"
          label="Deletar"
          type="submit"
          color="red"
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
      id: "",
      name: "",
      code: "",
    });

    const onSubmit = async (id) => {
      try {
        const { data } = await api.get(`http://localhost:3004/courses/${id}`);
        form.value = data;

        $q.dialog({
          title: "Confirmação",
          message: `Deseja deletar o curso ${data.name}?`,
          cancel: true,
          persistent: true,
        }).onOk(() => {
          api.delete(`http://localhost:3004/courses/${id}`);
          router.push({ name: "IndexPage" });
          $q.notify({
            message: "Curso deletado com sucesso",
            color: "positive",
            icon: "check",
          });
        });
      } catch (error) {
        console.log(error);
        $q.notify({
          message: "ID não encontrado",
          color: "negative",
          icon: "close",
        });
      }

      //   router.push({ name: "DeleteSpecificCourse", params: { id } });
    };

    return {
      form,
      id,
      onSubmit,
    };
  },
});
</script>
