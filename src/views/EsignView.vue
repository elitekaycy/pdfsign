<script>
import Navigation from '../components/Navigation.vue'
import DragnDropView from '../components/esign/DragnDropView.vue'

export default {
    components: {
        Navigation: Navigation,
        DragnDropView: DragnDropView
    }
}

</script>

<template>
    <Navigation />
    <main class="p-4 flex flex-row items-center justify-center space-x-4 h-auto flex-wrap-reverse">
        <div class="p-2 space-y-8">
            <div class="space-y-3">
                <h1 class="font-bold text-5xl tracking-tighter">EsignPdf</h1>
                <p class="font-semibold tracking-wide text-xl">Mollit incididunt non laboris qui aute ut ullamco in amet.
                </p>
            </div>

            <div class="space-y-8">
                <div class="flex flex-row space-x-2 items-center">
                    <div class="p-4 rounded-md bg-blue-50">
                        <font-awesome-icon icon="fa-regular fa-heart" size="2xl" :style="{ color: 'blue' }" />
                    </div>
                    <div>
                        <h1 class="font-bold text-lg">Duis sint eiusmod commodo excepteur irure voluptate.</h1>
                        <p class="font-semibold text-md">Consequat aliquip irure labore ex labore enim et.</p>
                    </div>
                </div>

                <div class="flex flex-row space-x-2 items-center">
                    <div class="p-4 rounded-md bg-red-50 flex flex-row items-center justify-center">
                        <font-awesome-icon icon="fa-regular fa-file-pdf" size="2xl" :style="{ color: 'red' }" />
                    </div>
                    <div>
                        <h1 class="font-bold text-lg">Deserunt sit laborum excepteur aliqua quis est ad dolore.</h1>
                        <p class="font-semibold text-md">Consequat aliquip irure labore ex labore enim et.</p>
                    </div>
                </div>

                <div class="flex flex-row space-x-2 items-center">
                    <div class="p-4 rounded-md bg-yellow-50 flex flex-row items-center justify-center">
                        <font-awesome-icon icon="fa-solid fa-scissors" size="2xl" :style="{ color: 'yellow' }" />
                    </div>
                    <div>
                        <h1 class="font-bold text-lg">Deserunt sit laborum excepteur aliqua quis est ad dolore.</h1>
                        <p class="font-semibold text-md">Consequat aliquip irure labore ex labore enim et.</p>
                    </div>
                </div>
            </div>
        </div>


          <!--drag and drop view-->
          <DragnDropView />

    </main>
</template>
