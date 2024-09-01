<script setup lang="ts">

import subcourses, { type SubCourse } from '@/data/subcourses';

import { cn } from "@/lib/utils"

const selectedSubcourse = ref<SubCourse>(subcourses[0])

</script>

<template>
    <div class="grid grid-cols-5 gap-x-2">
        <div class=" col-span-1">
            <ul>
                <button :class="cn('px-4 py-4 border-l text-left',
                    selectedSubcourse.id === subcourse.id ? 'border-green-400' : 'border-gray-200',)
                    " v-for="subcourse in subcourses" :key="subcourse.id" @click="selectedSubcourse = subcourse">
                    <h1 class="text-xl font-semibold">{{ subcourse.name }}</h1>
                    <p class="text-gray-500 text-sm">Created at: 1 January 1900</p>
                </button>
            </ul>
        </div>
        <div class="col-span-4 border-l p-4 h-full">
            <SharedSubcourseContent :subcourse="selectedSubcourse" />
        </div>
    </div>
</template>