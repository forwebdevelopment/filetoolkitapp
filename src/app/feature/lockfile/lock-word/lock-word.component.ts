import { Component } from '@angular/core';
import { Helper } from '../../../core/helper.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lock-word',
  imports: [FormsModule,CommonModule],
  templateUrl: './lock-word.component.html',
  styleUrl: './lock-word.component.css'
})
export class LockWordComponent {
selectedFile: File | null = null;
  password: string = '';
  //isProcessing = false;
  unlockedFileUrl: string | null = null;
fileName:string|undefined

constructor(public helper:Helper){
  
}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file && file.type === 'application/WORD') {
      this.selectedFile = file;
      this.fileName = file.name
      this.unlockedFileUrl = null;
    } else {
      alert('Please upload a valid WORD file.');
    }
  }

  onUnlockword(): void {
    if (!this.selectedFile) {
      alert('Please select a locked WORD file first.');
      return;
    }
    if (!this.password) {
      alert('Please enter the correct password to unlock this WORD.');
      return;
    }

    // Simulate unlocking (replace with backend API later)
    this.helper.isProcessing = true;
    setTimeout(() => {
      this.helper.isProcessing = false;
      if(this.selectedFile){
        this.helper.lockUnlockFileHelper(this.selectedFile,this.password, 'WORD', 'lock', this.fileName)
      }
    }, 2000);
  }
}
