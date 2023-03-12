<script>
import { useEsignPdfStore } from '../../stores/esignPdf'
import { ref } from 'vue'

export default {
    setup() {
        const store = useEsignPdfStore()

        return { store }
    },
    mounted() {
        console.log("this ref is ", this.$ref)
        this.store.onFileSelected( this.store.esignPdf.pdfOriginal, this.$refs)
    },
    methods: {
 

    }
}

</script>

<template>
   <div>
      <canvas ref="pdfCanvas"></canvas>
      <div>Pages count: {{ store.esignPdf.pdfPagesCount }}</div>
    </div>
</template>