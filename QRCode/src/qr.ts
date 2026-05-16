import * as qrcode from 'qrcode';

export async function generateQRCode(text: string, size?: number): Promise<string> {
    try {
        const qrCodeString = await qrcode.toString(text, {
            type: 'utf8',
            errorCorrectionLevel: 'H'
        });
        
        return qrCodeString;
    } catch (error) {
        throw new Error('Ошибка генерации QR-кода');
    }
}