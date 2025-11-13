import { Component } from '@angular/core';
import { RouterOutlet  , RouterLink} from '@angular/router';
import { FileToolGridComponent } from "./feature/file-tool-grid/file-tool-grid.component";
import { DragDropComponent } from "./feature/drag-drop/drag-drop.component";
import { LockPdfComponent } from "./feature/lockfile/lock-pdf/lock-pdf.component";
import { UnlockPdfComponent } from "./feature/unlock/unlock-pdf/unlock-pdf.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fileToolKitsApp';
  currentYear = new Date().getFullYear();
}
