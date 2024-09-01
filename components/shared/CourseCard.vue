<script setup lang="ts">

import type { Course } from "@/data/courses";

type PropTypes = {
  course: Course;
};

defineProps<PropTypes>();

</script>

<template>
  <Card :key="course.id" class="flex flex-col h-full">
    <CardHeader>
      <CardTitle>{{ course.name }}</CardTitle>
      <CardDescription>{{ course.category }}</CardDescription>
    </CardHeader>
    <CardContent> {{ course.description }} </CardContent>
    <CardFooter>
      <div class="w-full flex justify-end">
        <Button variant="outline" as-child>
          <NuxtLink :to="{ name: 'course-slug', params: { slug: course.slug } }">
            More
            <Icon name="ic:sharp-chevron-right" class="h-4 w-4 ml-2" />
          </NuxtLink>
        </Button>
      </div>
    </CardFooter>
  </Card>
</template>

<style scoped></style>
