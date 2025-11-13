import { Component ,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-file-tool-grid',
  imports: [CommonModule , RouterLink],
  templateUrl: './file-tool-grid.component.html',
  styleUrl: './file-tool-grid.component.css'
})
export class FileToolGridComponent {

  
cards = [
  
{
    icon: '/lockpdf.png',
    title: 'Lock PDF File',
    description: 'Secure your PDF files with password protection for enhanced privacy.',
    isPresent: true,
    route:'lock-pdf'
},
{
    icon: '/unlockpdf.png',
    title: 'Unlock PDF File',
    description: 'Remove password restrictions from your PDF files quickly and easily.',
    isPresent: true,
    route:'unlock-pdf'
},
{
    icon: '/lockword.png',
    title: 'Lock Word File',
    description: 'Protect your Word documents by adding password security.',
    isPresent: true,
    route:'lock-word'
},
{
    icon: '/unlockword.png',
    title: 'Unlock Word File',
    description: 'Access your Word files by removing password protection effortlessly.',
    isPresent: true,
    route:'unlock-word'
},
{
    icon: '/lockppt.png',
    title: 'Lock PPT File',
    description: 'Add password protection to your PowerPoint presentations for secure sharing.',
    isPresent: true,
    route:'lock-ppt'
},
{
    icon: '/unlockppt.png',
    title: 'Unlock PPT File',
    description: 'Remove password restrictions from your PowerPoint presentations with ease.',
    isPresent: true,
    route:'unlock-ppt'
},
   {
    icon: '/mergpdf.png', // Replace with your icon path
    title: 'Merge PDF',
    description: 'Combine PDFs in the order you want with the easiest PDF merger available.',
     isPresent:false,
     route:'lock-pdf'
  },
  {
    icon: '/splitpdf.png',
    title: 'Split PDF',
    description: 'Separate one page or a whole set for easy conversion into independent PDF files.',
     isPresent:false,
     route:'lock-pdf'
  },
  {
    icon: '/compress.png',
    title: 'Compress PDF',
    description: 'Reduce file size while optimizing for maximal PDF quality.',
    isPresent:false,
    route:'lock-pdf'
  }
];

}
