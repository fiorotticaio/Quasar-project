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
import { api } from "../boot/axios";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "EditCourse",
  setup() {
    const router = useRouter();

    const id = ref();

    const form = ref({
      id: id,
      name: "",
      code: "",
    });

    const onSubmit = (id) => {
      router.push({ name: "EditSpecificCourse", params: { id } });
    };

    return {
      form,
      id,
      onSubmit,
    };
  },
});
</script>
