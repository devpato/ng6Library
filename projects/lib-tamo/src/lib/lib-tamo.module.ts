import { NgModule } from '@angular/core';
import { LibTamoComponent } from './lib-tamo.component';
import { FooComponent } from './foo/foo.component';

@NgModule({
  imports: [
  ],
  declarations: [LibTamoComponent, FooComponent],
  exports: [LibTamoComponent, FooComponent]
})
export class LibTamoModule { }
