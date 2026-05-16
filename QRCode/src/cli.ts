import { Command } from 'commander';
import { generateQRCode } from './qr.js';

const program = new Command();

program
    .command('generate <text>')
    .option('-s, --size <number>', 'Размер QR-кода', '4')
    .action(async (text: string, options: { size: string }) => {
        try {
            if (!text || text.trim() === '') {
                console.error('Ошибка: Укажите текст или ссылку.');
                process.exit(1);
            }
            
            const size = parseInt(options.size, 10);
            
            if (isNaN(size) || size < 1 || size > 10) {
                console.error('Ошибка: Размер должен быть числом от 1 до 10.');
                process.exit(1);
            }
            
            const qrCode = await generateQRCode(text, size);
            console.log(qrCode);
        } catch (error) {
            console.error('Ошибка:', error instanceof Error ? error.message : 'Неизвестная ошибка');
            process.exit(1);
        }
    });

program.parse(process.argv);