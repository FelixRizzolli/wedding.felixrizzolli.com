<template>
  <div class="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded shadow p-6 space-y-4">
    <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Login</h2>
    <form @submit.prevent="submitLogin" class="space-y-3">
      <div>
        <label class="block text-sm font-medium mb-1" for="username">Username</label>
        <input id="username" v-model="username" type="text" required class="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700" />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1" for="password">Password</label>
        <input id="password" v-model="password" type="password" required class="w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700" />
      </div>
      <div class="flex items-center gap-2">
        <button type="submit" class="btn btn-primary px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50" :disabled="loading">Login</button>
        <button type="button" @click="submitRegister" class="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded" :disabled="loading">Register</button>
      </div>
      <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
    </form>
  </div>
</template>
<script setup lang="ts">
const username = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');
const { fetch, loggedIn } = useUserSession();

async function submitLogin() {
  loading.value = true; error.value='';
  try {
    await $fetch('/api/auth/login', { method: 'POST', body: { username: username.value, password: password.value } });
    await fetch();
  } catch (e: any) {
    error.value = e?.data?.statusMessage || 'Login failed';
  } finally {
    loading.value = false;
  }
}

async function submitRegister() {
  loading.value = true; error.value='';
  try {
    await $fetch('/api/auth/register', { method: 'POST', body: { username: username.value, password: password.value } });
    await submitLogin();
  } catch (e: any) {
    error.value = e?.data?.statusMessage || 'Registration failed';
  } finally {
    loading.value = false;
  }
}
</script>
