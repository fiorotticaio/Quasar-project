<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        class="my-sticky-header-column-table"
        title="Cursos"
        :rows="rows"
        :columns="columns"
        row-key="name"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { api } from "../boot/axios";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const columns = [
      {
        name: "name",
        align: "center",
        label: "Curso",
        field: "name",
        sortable: true,
      },
      {
        name: "id",
        align: "center",
        label: "ID",
        field: "id",
        sortable: true,
      },
      {
        name: "code",
        align: "center",
        label: "Código",
        field: "code",
        sortable: true,
      },
    ];

    const rows = ref([]);

    onMounted(() => {
      getCourse();
    });

    const getCourse = async () => {
      try {
        const { data } = await api.get("http://localhost:3004/courses");
        console.log(data);
        rows.value = data;
      } catch (error) {
        console.log(error);
      }
    };

    return {
      columns,
      rows,
    };
  },
});
</script>
