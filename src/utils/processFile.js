import saveFile from '@/utils/saveFile';

export default async function processFile(file) {
    if (!file || file === 'undefined') return;

    file = typeof(file) === 'string'? JSON.parse(file) : file;

    if (file.changed) return file; // Do not save fake files.

    const uploadedFile = await saveFile(file);

    return {
        name: file.name,
        type: file.type,
        size: file.size,
        path: uploadedFile.path,
        changed: true,
    };
}