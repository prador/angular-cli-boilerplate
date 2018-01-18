import { AdminComponent } from './components/admin/admin.component';
import { PublicComponent } from './components/public/public.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './components/header/header.component';
import { MainLeftNavComponent } from './components/mainleftnav/main-left-nav.component';


/***************************************************************
* Lazy Loading to Eager Loading
*
* 1. Remove the module and NgModule imports in `app.module.ts`
*
* 2. Remove the lazy load route from `app.routing.ts`
*
* 3. Change the module's default route path from '' to 'pathname'
*****************************************************************/
const routes: Routes = [
    { path: '', component: PublicComponent},
    { path: 'public', component: PublicComponent},
    { path: 'admin', component: AdminComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
          {
            preloadingStrategy: PreloadAllModules,
          }
        )
      ],
      exports: [
        RouterModule
      ],
      providers: [
      ],
    })
export class AppRoutingModule { }

export const routedComponents = [PublicComponent, AdminComponent, MainLeftNavComponent, AdminHeaderComponent];
