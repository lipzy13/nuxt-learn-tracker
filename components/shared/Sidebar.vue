<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { cn } from "@/lib/utils";

import { Separator } from "@/components/ui/separator";

import { personal, library, actions } from "@/data/navigation";

const route = useRoute();
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
            <Button
              v-for="person in personal"
              :variant="route.path === person.url ? 'default' : 'ghost'"
              class="w-full justify-start"
              as-child
            >
              <NuxtLink :to="person.url">
                <Icon :icon="person.icon" class="mr-2 h-4 w-4" />
                {{ person.name }}
              </NuxtLink>
            </Button>
        </div>
      </div>
      <Separator />
      <div class="px-3 py-2">
        <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">Library</h2>
        <div class="space-y-1">
          <Button
              v-for="lib in library"
              :variant="route.path === lib.url ? 'default' : 'ghost'"
              class="w-full justify-start"
              as-child
          >
            <NuxtLink :to="lib.url">
              <Icon :icon="lib.icon" class="mr-2 h-4 w-4" />
              {{ lib.name }}
            </NuxtLink>
          </Button>
        </div>
      </div>
    </div>

    <div class="px-3 py-1">
      <div class="space-y-1">
        <Button
            v-for="act in actions"
            :variant="route.path === act.url ? 'default' : 'ghost'"
            class="w-full justify-start"
            as-child
        >
          <NuxtLink :to="act.url">
            <Icon :icon="act.icon" class="mr-2 h-4 w-4" />
            {{ act.name }}
          </NuxtLink>
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
