<template>
  <q-page>
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="form.name"
          label="Nome do curso"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="number"
          v-model="form.id"
          label="ID do curso"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="number"
          v-model="form.code"
          label="Código do curso"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />

          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { api } from "../boot/axios";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "CreateCourse",
  setup() {
    const router = useRouter();

    const form = ref({
      name: "",
      id: "",
      code: "",
    });

    const onSubmit = async () => {
      try {
        const res = await api.post("http://localhost:3004/courses", form.value);
        router.push({ name: "IndexPage" });
      } catch (error) {
        console.log(error);
      }
    };

    return {
      form,
      onSubmit,
    };
  },
});
</script>
