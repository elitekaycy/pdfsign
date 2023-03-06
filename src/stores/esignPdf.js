import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import router from '../router/index'

export const useEsignPdfStore = defineStore('esignpdf', () => {
    const esignPdf = ref({isActivePdf: false, pdf: null})

    const onFileSelected = (event) => {
        console.log("event is ", event)
        const selectedFile = event.target.files[0];
        if (selectedFile !== null || selectedFile !== undefined) {
            esignPdf.value.isActivePdf = true
            esignPdf.value.pdf = selectedFile
            console.log("esignpdf value set to ", esignPdf.value.isActivePdf)

            router.push(`pdf/${selectedFile?.name}`)
            return
        }
    }

    const handleClick = (clickRef) => {
        clickRef.inputRef.click()
        console.log("new ref is ", clickRef)
    }

    return {esignPdf, onFileSelected, handleClick}
})
