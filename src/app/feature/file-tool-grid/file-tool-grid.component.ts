import { Component ,  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-tool-grid',
  imports: [CommonModule],
  templateUrl: './file-tool-grid.component.html',
  styleUrl: './file-tool-grid.component.css'
})
export class FileToolGridComponent {
cards = [
  {
    icon: '/mergpdf.png', // Replace with your icon path
    title: 'Merge PDF',
    description: 'Combine PDFs in the order you want with the easiest PDF merger available.'
  },
  {
    icon: '/splitpdf.png',
    title: 'Split PDF',
    description: 'Separate one page or a whole set for easy conversion into independent PDF files.'
  },
  {
    icon: '/compress.png',
    title: 'Compress PDF',
    description: 'Reduce file size while optimizing for maximal PDF quality.'
  },
   {
    icon: '/mergpdf.png', // Replace with your icon path
    title: 'Merge PDF',
    description: 'Combine PDFs in the order you want with the easiest PDF merger available.'
  },
  {
    icon: '/splitpdf.png',
    title: 'Split PDF',
    description: 'Separate one page or a whole set for easy conversion into independent PDF files.'
  },
  {
    icon: '/compress.png',
    title: 'Compress PDF',
    description: 'Reduce file size while optimizing for maximal PDF quality.'
  }
];

}
