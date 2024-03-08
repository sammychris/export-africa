const path = require('path');
const fs = require('fs');

async function saveFile(uploadedFile) {
  try {
    const timestamp = Date.now();
    const dateFolder = new Date(timestamp).toISOString().slice(0, 10);
    const uniqueFilename = `${timestamp}-${uploadedFile.name}`; // Use uploadedFile.name
    const targetPath = `/uploads/${dateFolder}/${uniqueFilename}`; // Adjust base path as needed

    console.log('Target path:', targetPath); // Inspect the constructed path

    await fs.promises.mkdir(path.dirname('./public'+targetPath), { recursive: true });

    const buffer = Buffer.from(await uploadedFile.arrayBuffer());

    await fs.promises.writeFile('./public'+targetPath, buffer);

    return {
      path: targetPath,
      message: 'Image file saved successfully',
    };
  } catch (error) {
    console.error('Error saving image file:', error);
    throw error; // Re-throw the error for API route handling
  }
}

export default saveFile;
