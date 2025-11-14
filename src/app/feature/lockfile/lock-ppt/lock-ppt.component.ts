import { Component } from '@angular/core';
import { Helper } from '../../../core/helper.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lock-ppt',
  imports: [FormsModule,CommonModule],
  templateUrl: './lock-ppt.component.html',
  styleUrl: './lock-ppt.component.css'
})
export class LockPptComponent {
  selectedFile: File | null = null;
  password: string = '';
  //isProcessing = false;
  lockedFileUrl: string | null = null;
fileName:string|undefined

constructor(public helper:Helper){
  
}

  onFileSelected(event: any): void {
    debugger
    const file = event.target.files[0];
    if (file && file.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
      this.selectedFile = file;
      this.fileName = file.name
      this.lockedFileUrl = null;
    } else {
      alert('Please upload a valid PPT file.');
    }
  }

  onUnlockppt(): void {
    if (!this.selectedFile) {
      alert('Please select a locked PPT file first.');
      return;
    }
    if (!this.password) {
      alert('Please enter the correct password to unlock this PPT.');
      return;
    }

    // Simulate unlocking (replace with backend API later)
    this.helper.isProcessing = true;
    setTimeout(() => {
      this.helper.isProcessing = false;
      if(this.selectedFile){
        this.helper.lockUnlockFileHelper(this.selectedFile,this.password, 'PPT', 'lock', this.fileName)
      }
    }, 2000);
  }
}
