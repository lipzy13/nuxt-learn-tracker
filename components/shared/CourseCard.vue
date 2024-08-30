<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Course Name</CardTitle>
      <CardDescription>Course Type</CardDescription>
    </CardHeader>
    <CardContent> Card Content </CardContent>
    <CardFooter>
      <div class="w-full flex justify-end">
        <Button variant="outline">
          More <Icon icon="ic:sharp-chevron-right" class="h-4 w-4 ml-2" />
        </Button>
      </div>
    </CardFooter>
  </Card>
</template>

<style scoped></style>
