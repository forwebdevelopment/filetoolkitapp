import { Component } from '@angular/core';
import { Helper } from '../../../core/helper.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-unlock-ppt',
  imports: [FormsModule ,CommonModule],
  templateUrl: './unlock-ppt.component.html',
  styleUrl: './unlock-ppt.component.css'
})
export class UnlockPptComponent {
   selectedFile: File | null = null;
  password: string = '';
  //isProcessing = false;
  unlockedFileUrl: string | null = null;
fileName:string|undefined

constructor(public helper:Helper){
  
}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file && file.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
      this.selectedFile = file;
      this.fileName = file.name
      this.unlockedFileUrl = null;
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
        this.helper.lockUnlockFileHelper(this.selectedFile,this.password, 'PPT', 'unlock', this.fileName)
      }
    }, 2000);
  }
}
