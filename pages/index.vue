<script setup lang="ts">
import CourseCard from "@/components/shared/CourseCard.vue";
import ProjectCard from "@/components/shared/ProjectCard.vue";
import { Calendar } from "@/components/ui/v-calendar";

import { ref } from "vue";

import courses from "@/data/courses";

const date = ref(new Date());
</script>

<template>
  <div class="grid grid-cols-5">
    <div class="col-span-3">
      <div class="px-4 py-8 lg:px-8">
        <div class="mb-8">
          <h1 class="text-2xl font-semibold tracking-tight">
            Welcome Back User!
          </h1>
          <p class="text-gray-500">
            Here are some of the things you can do today.
          </p>
        </div>
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-2xl font-semibold tracking-tight">My Courses</h1>
          </div>
          <div>
            <a href="#" class="text-primary-500 flex items-center space-x-1">
              More
              <Icon name="mingcute:right-fill" class="h-4 w-4" />
            </a>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 my-4">
          <CourseCard v-for="course in courses.slice(0, 2)" :key="course.id" :course="course" />
        </div>

        <div class="flex justify-between items-center mt-10">
          <div>
            <h1 class="text-2xl font-semibold tracking-tight">My Projects</h1>
          </div>
          <div>
            <a href="#" class="text-primary-500 flex items-center space-x-1">
              More
              <Icon name="mingcute:right-fill" class="h-4 w-4" />
            </a>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 my-4">
          <ProjectCard v-for="index in 2" :key="index" />
        </div>
      </div>
    </div>
    <div class="col-span-2">
      <div class="px-4 py-8 lg:px-8">
        <div>
          <h1 class="text-2xl font-semibold tracking-tight">Calendar</h1>
          <div class="mt-4">
            <Calendar v-model="date" class="rounded-md border" />
          </div>
          <div class="mt-8">
            <h1 class="text-2xl font-semibold tracking-tight">To-Do's</h1>
            <div class="mt-4 space-y-2">
              <Card>
                <CardHeader>
                  <div class="flex justify-between items-center">
                    <div>
                      <CardTitle>Task 1</CardTitle>
                      <CardDescription>Task Description</CardDescription>
                    </div>
                    <div>
                      <Icon name="ic:sharp-chevron-right" class="h-8 w-8" />
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
