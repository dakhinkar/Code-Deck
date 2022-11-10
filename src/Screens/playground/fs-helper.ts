
// import functionality
// Read the file
export const readFileContent = (file: any) => {
    const reader = new FileReader();

    
    return new Promise((resolve, reject) => {
      reader.onload = (event) => resolve(event!.target!.result);
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  }

// Export functionality

  // get New File Window
  export const getNewFileHandle = async() => {
    const options = {
      startIn: 'desktop',
      types: [
        {
          description: 'Text Files',
          accept: {
            'text/plain': ['.txt'],
          },
        },
      ],
    };
    const handle = await window.showSaveFilePicker(options);
    return handle;
  }
// Written to file 
  export  const  writeFile = async(fileHandle :any, contents: string) =>{
    // Create a FileSystemWritableFileStream to write to.
    const writable = await fileHandle.createWritable();
    // Write the contents of the file to the stream.
    await writable.write(contents);
    // Close the file and write the contents to disk.
    await writable.close();
  }