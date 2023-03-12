import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import router from '../router/index'
import * as pdfjs from 'pdfjs-dist';
// @ts-ignore
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



export const useEsignPdfStore = defineStore('esignpdf', () => {
    const esignPdf = ref({pdfDocument: null, pdfPage: null, pdfPagesCount: 0, isActivePdf: false, pdfOriginal: null})

    const handleFileSelect = event => {
        esignPdf.value.pdfOriginal = event.target.files[0]
        router.push(`pdf/${
            esignPdf.value.pdfOriginal?.name
        }`)
        console.log(("handle file seledt " , esignPdf.value.pdfOriginal ))

        return
    }

    const onFileSelected = async(event, canvasRef) => {
        console.log("e is ", event, " canvas is ", canvasRef)
       //  const selectedFile = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload = async () => {
            const data = new Uint8Array(fileReader.result);
            esignPdf.value.pdfDocument = await pdfjs.getDocument({data});
            esignPdf.value.pdfPagesCount = esignPdf.value.pdfDocument.numPages;
            esignPdf.value.pdfPage = await esignPdf.value.pdfDocument.getPage(1)
            renderPdfPage(canvasRef);
        };
        fileReader.readAsArrayBuffer(event);
        return
    }

    const renderPdfPage = async (canvasRef) => {
        const canvas = canvasRef.pdfCanvas;
        const context = canvas.getContext('2d');
        const viewport = esignPdf.value.pdfPage.getViewport({scale: 1.5});
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        await esignPdf.value.pdfPage.render({canvasContext: context, viewport});
    }

    const handleClick = (clickRef) => {
        clickRef.inputRef.click()
    }

    return {esignPdf, onFileSelected,handleFileSelect, handleClick}
})
