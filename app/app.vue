<template>
    <div class="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
        <Header />
        <main class="flex-1">
            <Hero />
            <div v-if="loggedIn" class="gallery p-8">
                This is my Gallery!
            </div>
            <div v-else class="p-8">
                <LoginForm />
            </div>
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
const { loggedIn } = useUserSession();
</script>
