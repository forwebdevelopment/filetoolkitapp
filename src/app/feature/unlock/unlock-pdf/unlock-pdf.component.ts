
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Helper } from '../../../core/helper.service';
@Component({
  selector: 'app-unlock-pdf',
  imports: [CommonModule , FormsModule],
  templateUrl: './unlock-pdf.component.html',
  styleUrl: './unlock-pdf.component.css'
})
export class UnlockPdfComponent {
 selectedFile: File | null = null;
  password: string = '';
  //isProcessing = false;
  unlockedFileUrl: string | null = null;
fileName:string|undefined
  constructor(private title: Title, private meta: Meta ,public helper:Helper) {}

  ngOnInit(): void {
    this.title.setTitle('Unlock PDF Online - Remove Password Protection | Quick File Tools');
    this.meta.updateTag({
      name: 'description',
      content:
        'Unlock PDF files online by removing password protection easily. Free, secure, and fast. Try our Unlock PDF tool now!'
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.selectedFile = file;
      this.fileName = file.name
      this.unlockedFileUrl = null;
    } else {
      alert('Please upload a valid PDF file.');
    }
  }

  onUnlockPdf(): void {
    if (!this.selectedFile) {
      alert('Please select a locked PDF file first.');
      return;
    }
    if (!this.password) {
      alert('Please enter the correct password to unlock this PDF.');
      return;
    }

    // Simulate unlocking (replace with backend API later)
    this.helper.isProcessing = true;
    setTimeout(() => {
      this.helper.isProcessing = false;
      if(this.selectedFile){
        this.helper.lockUnlockFileHelper(this.selectedFile,this.password, 'pdf', 'unlock', this.fileName)
      }
    }, 2000);
  }
}
