
const extractVideoId = (url) => {
    const urlPatterns = [
        /^(https?:\/\/)?(www\.)?youtube\.com\/embed\/([a-zA-Z0-9\-_]+)$/, // Embed format
        /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9\-_]+)$/, // Standard watch format
    ];
  
    for (const pattern of urlPatterns) {
        const match = url?.match(pattern);
        if (match) return match[3]; // Return the video ID if a match is found
    }
  
    return null; // No video ID found
};
  
export default function constructEmbedUrl (videoUrl) {
    const videoId = extractVideoId(videoUrl);
    if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
    } else {
        return null;
    }
};