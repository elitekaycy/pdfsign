<script>

export default {
    data() {
        user: false
    }
}

</script>

<template>
    <div class="bg-white p-5 flex flex-row items-center justify-between border-b-2 border-gray-100 mb-10">
        <div class="p-2 flex flex-row items-center cursor-pointer">
            <font-awesome-icon icon="fa-solid fa-bars" size="xl" />
            <div class="font-black tracking-tighter text-2xl ml-2">SignPdf</div>
        </div>

        <button v-if="!user" class="p-3 w-24 rounded-full text-sm font-bold hover:bg-blue-500 text-white bg-blue-600">
            login
        </button>

        <div v-if="user" class="p-2 h-16 w-16 rounded-full bg-gray-200">

        </div>
    </div>
</template>