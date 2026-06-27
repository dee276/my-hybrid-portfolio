import { Routes } from '@angular/router';

import { AboutComponent } from './features/about/about.component';
import { HomeComponent } from './features/home/home.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { SkillsMatrixComponent } from './features/skills-matrix/skills-matrix.component';




export const routes: Routes = [
    { 
        path: '',
        component: HomeComponent,
        title: 'Dudley Orestil | Portfolio',
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About | Dudley Orestil',
    },
    {
        path: 'skills',
        component: SkillsMatrixComponent,
        title: 'Skills | Dudley Orestil',
    },
    {
        path: 'portfolio',
        component: PortfolioComponent,
        title: 'Portfolio | Dudley Orestil',
    },
    {
        path: '**',
        redirectTo: '',
    },
];
