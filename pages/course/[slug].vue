<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import courses, { type Course } from '@/data/courses';
const route = useRoute()
const course = ref<Course | undefined>(courses.find(course => course.slug === route.params.slug))

</script>
<template>
    <div class="flex flex-col h-full py-4 gap-y-8">
        <img src="/assets/images/placeholder.svg" alt="Placeholder" class="w-full h-80 object-cover rounded-lg" />
        <div class="flex flex-col flex-1">
            <div class="flex justify-between items-center">
                <h1 class="text-4xl font-semibold tracking-tight">{{ course?.name }}</h1>
                <AlertDialog>
                    <DropdownMenu>
                        <DropdownMenuTrigger as-child>
                            <Button variant="outline" size="icon">
                                <Icon name="uil:setting" class="h-4 w-4 text-gray-500" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent class="w-48" align="end">
                            <DropdownMenuItem>
                                <Icon name="akar-icons:edit" class="h-4 w-4 mr-2 text-gray-500" />
                                <span>Edit</span>
                            </DropdownMenuItem>
                            <AlertDialogTrigger as-child>
                                <DropdownMenuItem>
                                    <Icon name="uil:trash-alt" class="h-4 w-4 mr-2 text-gray-500" />
                                    <span>Delete</span>
                                </DropdownMenuItem>
                            </AlertDialogTrigger>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your
                                course and remove your course from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction class="bg-red-600 hover:bg-red-700">Delete</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
            <div class="flex items-center space-x-2 mt-2">
                <p class="text-gray-500">{{ course?.category }}</p>
                <Separator orientation="vertical" />
                <div class="flex items-center space-x-1">
                    <Icon name="lucide:calendar-days" class="h-4 w-4 text-gray-500 mr-2" />
                    <p class="text-gray-500">Created at: 1 January 1900</p>
                </div>
            </div>
            <div class="mt-4">
                <Tabs default-value="content" class="w-full">
                    <TabsList>
                        <TabsTrigger value="content">
                            Content
                        </TabsTrigger>
                        <TabsTrigger value="tasks">
                            Tasks
                        </TabsTrigger>
                        <TabsTrigger value="grades">
                            Grades
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="content">
                        <SharedContentView />
                    </TabsContent>
                    <TabsContent value="tasks">
                        Tasks
                    </TabsContent>
                    <TabsContent value="grades">
                        Grades
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </div>
</template>