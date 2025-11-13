import { Routes } from '@angular/router';
import { LockPdfComponent } from './feature/lockfile/lock-pdf/lock-pdf.component';
import { UnlockWordComponent } from './feature/unlock/unlock-word/unlock-word.component';
import { UnlockPdfComponent } from './feature/unlock/unlock-pdf/unlock-pdf.component';
import { LockWordComponent } from './feature/lockfile/lock-word/lock-word.component';
import { LockPptComponent } from './feature/lockfile/lock-ppt/lock-ppt.component';
import { UnlockPptComponent } from './feature/unlock/unlock-ppt/unlock-ppt.component';
import { FileToolGridComponent } from './feature/file-tool-grid/file-tool-grid.component';

export const routes: Routes = [

    {path:'' , component:FileToolGridComponent},
    {path:'filetools' , component:FileToolGridComponent},
    {path:'lock-pdf' , component:LockPdfComponent},
    {path:'unlock-pdf' , component:UnlockPdfComponent},
    {path:'lock-word' , component:LockWordComponent},
    {path:'unlock-word' , component:UnlockWordComponent},
    {path:'lock-ppt' , component:LockPptComponent},
    {path:'unlock-ppt' , component:UnlockPptComponent},
   


];
