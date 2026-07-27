import sharp from 'sharp';
import fs from 'fs';

async function processSkyPatch() {
  const bgPath = 'public/assets/accueil-1-bg.jpg';
  if (!fs.existsSync(bgPath)) {
    console.error('File not found:', bgPath);
    return;
  }

  // Read buffer to avoid file lock
  const inputBuffer = fs.readFileSync(bgPath);
  const meta = await sharp(inputBuffer).metadata();
  console.log('Metadata:', meta.width, 'x', meta.height);

  const patchWidth = 750;
  const patchHeight = 310;

  const svgPatch = `
    <svg width="${patchWidth}" height="${patchHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#185ea9" />
          <stop offset="35%" stop-color="#236cc0" />
          <stop offset="70%" stop-color="#2b78c7" />
          <stop offset="100%" stop-color="#3181cf" />
        </linearGradient>
      </defs>
      <rect width="${patchWidth}" height="${patchHeight}" fill="url(#skyGrad)" />
    </svg>
  `;

  const patchBuffer = await sharp(Buffer.from(svgPatch))
    .blur(10)
    .png()
    .toBuffer();

  const finalImg = await sharp(inputBuffer)
    .composite([{
      input: patchBuffer,
      top: 30,
      left: 45
    }])
    .jpeg({ quality: 96, chromaSubsampling: '4:4:4' })
    .toBuffer();

  fs.writeFileSync(bgPath, finalImg);
  fs.writeFileSync('public/assets/accueil-1.jpg', finalImg);
  console.log('Successfully patched sky background in accueil-1-bg.jpg & accueil-1.jpg');
}

processSkyPatch().catch(console.error);
