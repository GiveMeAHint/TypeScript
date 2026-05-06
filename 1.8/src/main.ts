import Cropper from 'cropperjs';

const uploadInput = document.getElementById('image-upload') as HTMLInputElement;
const uploadButton = document.getElementById('upload-button') as HTMLButtonElement;
const cropButton = document.getElementById('crop-button') as HTMLButtonElement;
const downloadButton = document.getElementById('download-button') as HTMLButtonElement;
const displayedImage = document.getElementById('displayed-image') as HTMLImageElement;
const imageCropped = document.getElementById('image-cropped') as HTMLImageElement;
const imageWrapper = document.querySelector('.image-wrapper') as HTMLDivElement;
const croppedContainer = document.querySelector('.cropped-container') as HTMLDivElement;

let cropper: Cropper | null = null;
let croppedImageData: string | null = null;

uploadButton.addEventListener('click', () => {
    uploadInput.click();
});

uploadInput.addEventListener('change', (e: Event) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    
    if (!file) return;
    
    if (file.size > 300 * 1024) {
        alert('File size should be less than 300 KB');
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = (event: ProgressEvent<FileReader>) => {
        const result = event.target?.result as string;
        displayedImage.src = result;
        imageWrapper.style.display = 'block';
        cropButton.style.display = 'inline-block';
        downloadButton.style.display = 'none';
        croppedContainer.style.display = 'none';
        
        if (cropper) {
            cropper.destroy();
        }
        
        cropper = new Cropper(displayedImage, {
            aspectRatio: NaN,
            viewMode: 1,
            autoCropArea: 0.5,
            responsive: true,
            background: false,
        });
    };
    
    reader.readAsDataURL(file);
});

cropButton.addEventListener('click', () => {
    if (!cropper) return;
    
    const canvas = cropper.getCroppedCanvas({
        maxWidth: 800,
        maxHeight: 800,
    });
    
    if (!canvas) return;
    
    imageCropped.src = canvas.toDataURL('image/jpeg', 0.9);
    croppedContainer.style.display = 'block';
    downloadButton.style.display = 'inline-block';
    
    croppedImageData = canvas.toDataURL('image/jpeg', 0.9);
});

downloadButton.addEventListener('click', () => {
    if (!croppedImageData) return;
    
    const link = document.createElement('a');
    link.download = 'cropped-image.jpg';
    link.href = croppedImageData;
    link.click();
});