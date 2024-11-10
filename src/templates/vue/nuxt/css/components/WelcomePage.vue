<template>
    <div class="welcome-page">
        
        <div class="flex flex-row gap-x-10">
            <img src="/nuxt.svg" alt="Nuxt Logo"
                class="logo size-32 hover:scale-105 transition-all ease-in-out duration-300" />
            <img src="/tailwindcss.svg" alt="Nuxt Logo"
                class="logo size-32 hover:scale-105 transition-all ease-in-out duration-300" />
        </div>

        <h1 class="title font-bold">Nuxt + Tailwind</h1>
        <p class="description">Explore the possibilities of a modern frontend framework</p>
        <div class="links">
            <a href="https://nuxt.com/docs" target="_blank" class="link">Documentation</a>
            <a href="https://nuxt.com/examples" target="_blank" class="link">Examples</a>
            <a href="https://nuxt.com/community" target="_blank" class="link">Community</a>
            <a href="https://nuxt.com/integrations" target="_blank" class="link">Integrations</a>
        </div>
    </div>
</template>

<style scoped>
.welcome-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    background-color: #121212;
    color: #e0e0e0;
    min-height: 100vh;
}

.title {
    font-size: 3em;
    color: #00DC82;
    margin-bottom: 0.5em;
}

.description {
    font-size: 1.2em;
    color: #bdbdbd;
    margin-bottom: 2em;
}

.links {
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
    justify-content: center;
}

.link {
    padding: 0.75em 1.5em;
    color: #121212;
    background-color: #00DC82;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.link:hover {
    background-color: #00DC82;
    color: #ffffff;
}
</style>
