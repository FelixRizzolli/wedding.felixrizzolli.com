// @ts-ignore: nuxt auto-import
export function useLoginModal() {
    // @ts-ignore: nuxt auto-import
    const showLogin = useState<boolean>('login-modal', () => false);

    function openLoginModal() {
        showLogin.value = true;
    }
    function closeLoginModal() {
        showLogin.value = false;
    }
    function toggleLoginModal() {
        showLogin.value = !showLogin.value;
    }

    return { showLogin, openLoginModal, closeLoginModal, toggleLoginModal };
}
