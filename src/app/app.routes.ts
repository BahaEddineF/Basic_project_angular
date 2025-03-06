import { Routes } from '@angular/router';
import { AdminComponent } from './Components/admin/admin.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { NgClassComponent } from './Components/ng-class/ng-class.component';
import { TemplateFromComponent } from './Components/form/template-from/template-from.component';
import { ReactiveFormComponent } from './Components/form/reactive-from/reactive-from.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'dataBinding',
        pathMatch:'full'
    },
    {
        path:'admin',
        component:AdminComponent
    },
    {
        path:'data-binding',
        component:DataBindingComponent  
    },
    {
        path:'ng-class',
        component:NgClassComponent
    },
    {
        path:'template',
        component:TemplateFromComponent
    },
    {
        path:'reactive',
        component:ReactiveFormComponent
    }
];
