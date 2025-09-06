<template>
    <header class="absolute inset-x-0 top-0 z-50">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="#" class="-m-1.5">
                    <span class="sr-only" v-html="title"></span>
                    <i-logo class="h-12 w-12" />
                </a>
            </div>
            <div class="flex lg:hidden">
                <button
                    type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                    @click="mobileMenuOpen = true"
                >
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="size-6" aria-hidden="true" />
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
                <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    class="text-sm/6 font-semibold text-gray-900 dark:text-white"
                    >{{ item.name }}</a
                >
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" class="text-sm/6 font-semibold text-gray-900 dark:text-white"
                    >Log in <span aria-hidden="true">&rarr;</span></a
                >
            </div>
        </nav>
        <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-50" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10"
            >
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only" v-html="title"></span>
                        <i-logo class="h-12 w-12" />
                    </a>
                    <button
                        type="button"
                        class="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                        @click="mobileMenuOpen = false"
                    >
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="size-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
                        <div class="space-y-2 py-6">
                            <a
                                v-for="item in navigation"
                                :key="item.name"
                                :href="item.href"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                                >{{ item.name }}</a
                            >
                        </div>
                        <div class="py-6">
                            <a
                                href="#"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                                >Log in</a
                            >
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>

<script setup>
    import { ref } from 'vue';
    import { Dialog, DialogPanel } from '@headlessui/vue';
    import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

    const title = ref('Elisabeth & Felix');

    const navigation = [
        { name: 'Preparation', href: '#' },
        { name: 'Church', href: '#' },
        { name: 'Aperitif', href: '#' },
        { name: 'Patscheider Hof', href: '#' },
        { name: 'Party', href: '#' },
    ];

    const mobileMenuOpen = ref(false);
</script>

<style scoped>
    /* ensure the icon web component/svg fills the Tailwind height utility on the host */
    :deep(i-logo) {
        display: block;
        height: 100%;
        width: auto;
    }

    /* target inner svg rendered by the component */
    :deep(i-logo) :deep(svg) {
        display: block;
        height: 100% !important;
        width: auto !important;
    }
</style>
