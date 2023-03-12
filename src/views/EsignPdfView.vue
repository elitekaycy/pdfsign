<script>
import EsignPdfViewer from '../components/esign/EsignPdfViewer.vue';
import Navigation from '../components/Navigation.vue'
export default {
    components: {
    Navigation: Navigation,
    EsignPdfViewer
}
}
</script>

<template>
    <main class="bg-gray-100 w-screen min-h-screen">
        <Navigation />
        <EsignPdfViewer />
    </main>
</template>