<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
</script>

<template>
  <div
    :class="
      cn(
        'pb-12',
        'flex flex-col justify-between min-h-screen',
        $attrs.class ?? '',
      )
    "
  >
    <div class="space-y-4 py-4">
      <div class="px-3 py-2">
        <h2 class="mb-4 px-4 text-2xl font-semibold tracking-tight">
          Learning
        </h2>
        <div class="space-y-1">
          <Button variant="secondary" class="w-full justify-start">
            <Icon icon="ant-design:home-filled" class="mr-2 h-4 w-4" />
            Home
          </Button>
          <Button variant="ghost" class="w-full justify-start">
            <Icon icon="ph:squares-four-bold" class="mr-2 h-4 w-4" />
            My Courses
          </Button>
          <Button variant="ghost" class="w-full justify-start">
            <Icon icon="ic:outline-task" class="mr-2 h-4 w-4" />
            Tasks
          </Button>
          <Button variant="ghost" class="w-full justify-start">
            <Icon icon="icon-park:ranking" class="mr-2 h-4 w-4" />
            Grades
          </Button>
        </div>
      </div>
      <Separator />
      <div class="px-3 py-2">
        <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">Library</h2>
        <div class="space-y-1">
          <Button variant="ghost" class="w-full justify-start">
            <Icon icon="bx:bx-book-open" class="mr-2 h-4 w-4" />
            Courses
          </Button>
          <Button variant="ghost" class="w-full justify-start">
            <Icon icon="ant-design:project" class="mr-2 h-4 w-4" />
            Projects
          </Button>
        </div>
      </div>
    </div>

    <div class="px-3 py-1">
      <div class="space-y-1">
        <Button variant="ghost" class="w-full justify-start">
          <Icon icon="bx:bx-user" class="mr-2 h-4 w-4" />
          Account
        </Button>
        <Button variant="ghost" class="w-full justify-start">
          <Icon icon="mdi:settings" class="mr-2 h-4 w-4" />
          Settings
        </Button>
        <Button variant="ghost" class="w-full justify-start">
          <Icon icon="ic:round-logout" class="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
