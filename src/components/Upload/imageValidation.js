export const acceptedFileTypes = ["image/jpeg", "image/png"];

export const handleFileUploadError = fileName => {
  console.log(`ERROR: There was a problem with "${fileName}", as it is not supported. Please upload JPEG and PNG files only.`)
};

export const handleFileUploadSuccess = fileName => {
  console.log(`Success! The image "${fileName}" is a valid image.`);
};

export const validateFileType = (file, typesList) => typesList.includes(file.type);

export const validateFiles = (files, typesList) => files.map(file => {
  return {
    name: file.name,
    hasPassedValidation: validateFileType(file, typesList)
  };
});

export const handleValidation = imageFiles => validateFiles(imageFiles, acceptedFileTypes);