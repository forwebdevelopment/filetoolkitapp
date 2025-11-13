import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiServices } from '../../../core/apiServices.service';
@Component({
  selector: 'app-lock-pdf',
  imports: [CommonModule , FormsModule],
  templateUrl: './lock-pdf.component.html',
  styleUrl: './lock-pdf.component.css'
})
export class LockPdfComponent {
 selectedFile: File | null = null;
  password: string = '';
  isProcessing = false;
  lockedFileUrl: string | null = null;

  constructor(private title: Title, private meta: Meta , private api:ApiServices) {}

  ngOnInit(): void {
    this.title.setTitle('Lock PDF Online - Secure PDF with Password | Quick File Tools');
    this.meta.updateTag({
      name: 'description',
      content:
        'Protect your PDF files with password encryption using our free online Lock PDF tool. Secure, fast, and easy to use.'
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.selectedFile = file;
      this.lockedFileUrl = null;
    } else {
      alert('Please upload a valid PDF file.');
    }
  }

  onLockPdf(): void {
    if (!this.selectedFile) {
      alert('Please select a PDF file first.');
      return;
    }
    if (!this.password) {
      alert('Please enter a password.');
      return;
    }

    // Simulate processing (replace with backend API call later)
    this.isProcessing = true;
    setTimeout(() => {
    
      if(this.selectedFile){
         this.api.lockUnlockPdf(this.selectedFile,this.password,'pdf' , 'lock').subscribe({next:(value:any)=>{
             
            console.log(value)
            this.isProcessing = false;
         } , error:(err:any)=>{
             console.log(err)
         }})
      }
    }, 2000);
  }
}
