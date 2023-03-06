<script setup>
import { ref } from 'vue'
import { useEsignPdfStore } from '../../stores/esignPdf'

const esign = useEsignPdfStore()
</script>

<template>
    <div @click="esign.handleClick(this.$refs)" class="p-4 h-96 w-full max-w-sm bg-blue-600 rounded-lg cursor-pointer">
        <div
            class="w-full h-full border-2 border-dashed border-white rounded-lg flex flex-col items-center space-y-1 justify-center">
            <input type="file" class="hidden" ref="inputRef" v-on:change="e => esign.onFileSelected(e)" />
            <button
                class="p-3 space-x-4 hover:opacity-95 rounded-lg bg-white text-black font-black">
                <span>
                    <font-awesome-icon icon="fa-solid fa-file" size="xl" />
                </span>
                <span class="font-bold text-sm">CHOOSE FILE</span>
            </button>
            <span class="font-bold text-white text-xs">drag n drop</span>
        </div>
    </div>
</template>