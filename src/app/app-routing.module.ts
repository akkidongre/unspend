import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadComponent: () => import('./auth/auth.component').then(comp => comp.AuthComponent) },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then( comp => comp.HomeComponent )},
  { path: 'records', loadComponent: () => import('./pages/records/records.component').then( comp => comp.RecordsComponent )},
  { path: 'analytics', loadComponent: () => import('./pages/analytics/analytics.component').then( comp => comp.AnalyticsComponent )},
  { path: 'budget', loadComponent: () => import('./pages/planning/budgets/budgets.component').then(comp => comp.BudgetsComponent) },
  { path: 'investments', loadComponent: () => import('./pages/planning/investments/investments.component').then(comp => comp.InvestmentsComponent) },
  { path: 'debts', loadComponent: () => import('./pages/planning/debts/debts.component').then(comp => comp.DebtsComponent) },
  { path: 'goals', loadComponent: () => import('./pages/planning/goals/goals.component').then(comp => comp.GoalsComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
