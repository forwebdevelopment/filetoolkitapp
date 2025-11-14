import { Injectable } from "@angular/core";
import { ApiServices } from "./apiServices.service";


@Injectable({
    providedIn:"root"
})

export class Helper{

  constructor( private api:ApiServices){

  }
isProcessing = false
    lockUnlockFileHelper(selectedFile:File , password:string , fileType:string , operations:string , fileName:string|undefined):any{
     this.api.lockUnlockFile(selectedFile, password, fileType, operations).subscribe({
  next: (data:any) => {
 
    debugger;
    var blob = data.body!;

    // Use the returned blob directly, without wrapping it in a new array or creating a new Blob from the array.
    const downloadUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    // Ensure the filename has the correct extension for the browser to handle it properly
    a.download = fileName ? fileName : 'lockfile.pdf';
    
    // Append the link to the body, click it, and then remove it.
    document.body.appendChild(a);
    a.click();
    
    // For Firefox, a slight delay might be necessary before revoking the URL
    setTimeout(() => {
      window.URL.revokeObjectURL(downloadUrl);
      document.body.removeChild(a); // Clean up the element
    }, 100);
  this.isProcessing = false;
    return true
  },
  error: (err: any) => {

        console.log(err);
    return false;


  }

});
    }


 
}