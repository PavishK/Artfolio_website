export const convertToBase64 = ( file ) => {

    return new Promise(( resolve, reject ) => {

        const reader = new FileReader();
        reader.readAsDataURL( file );

        reader.onload = () => resolve( reader.result );
        reader.onerror = () => reject("Error converting to base64");
    });
}