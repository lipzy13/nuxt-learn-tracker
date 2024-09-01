<script setup lang="ts">
import type { SubCourse } from '@/data/subcourses';

interface SubcourseProps {
    subcourse: SubCourse | undefined
}

defineProps<SubcourseProps>()

</script>

<template>
    <h1 class="text-4xl font-semibold tracking-tight">{{ subcourse.name }}</h1>
    <p class="text-gray-500 mt-2">
        {{ subcourse.description }}
    </p>
</template>