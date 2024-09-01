<script setup lang="ts">


</script>

<template>
  <div class="block">
    <div class="bg-background">
      <div class="grid lg:grid-cols-6">
        <SharedSidebar />
        <ScrollArea class="col-span-5 container border-l h-screen">
          <slot />
        </ScrollArea>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
