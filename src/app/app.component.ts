import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileToolGridComponent } from "./feature/file-tool-grid/file-tool-grid.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FileToolGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fileToolKitsApp';
}
