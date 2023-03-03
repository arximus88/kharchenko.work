const fs = require('fs');
const path = require('path');
const SVGO = require('svgo');

const sourceDir = path.join(__dirname, '../images/icons-raw');
const outputDir = path.join(__dirname, '../images/icons');

const { optimize } = require('svgo');

async function optimizeSVG() {
  // Get list of SVG files in source directory
  const files = await fs.promises.readdir(sourceDir);

  // Iterate over each SVG file
  for (const file of files) {
    // Check if optimized file already exists in output directory
    const optimizedFilePath = path.join(outputDir, file);
    if (fs.existsSync(optimizedFilePath)) {
      console.log(`${file} already optimized`);
      continue;
    }

    // Read SVG file content
    const filePath = path.join(sourceDir, file);
    const data = await fs.promises.readFile(filePath, 'utf8');

    // Optimize SVG file using SVGO
    const result = await optimize(data);

    // Write optimized SVG file to output directory
    await fs.promises.writeFile(optimizedFilePath, result.data);
    console.log(`${file} optimized and saved`);
  }
}

optimizeSVG().catch(console.error);
