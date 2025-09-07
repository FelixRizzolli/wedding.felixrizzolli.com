<template>
    <div class="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
        <Header />
        <main class="flex-1">
            <Hero />
            <div v-if="loggedIn" class="gallery p-8">
                This is my Gallery!
            </div>
            <div v-else class="p-8">
                <button @click="showLogin = true" class="rounded bg-indigo-600 px-4 py-2 text-white">Log in</button>
            </div>
        </main>
        <Modal :show="showLogin" @update:show="(v)=>showLogin=v">
            <LoginForm isModal @success="showLogin=false" />
        </Modal>
        <Footer />
    </div>
</template>

<script setup lang="ts">
const { loggedIn } = useUserSession();
const showLogin = ref(false);
</script>
