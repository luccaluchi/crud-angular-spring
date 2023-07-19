import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipePipe } from './pipes/category-pipe.pipe';




@NgModule({
  declarations: [ErrorDialogComponent, CategoryPipePipe],

  imports: [CommonModule, AppMaterialModule],

  exports: [
    ErrorDialogComponent,
    CategoryPipePipe
  ],
})
export class SharedModule {}
