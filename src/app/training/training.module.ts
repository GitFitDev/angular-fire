import { NgModule } from '@angular/core';
import { TrainingComponent } from './training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StopTrainingComponent } from './current-training/stop-training.component';
import { SharedModule } from '../shared/shared.module';
import { TrainingRoutingModule } from './training-routing.module';
import { StoreModule } from '@ngrx/store';
import { trainingReducer } from './training.reducer';

@NgModule({
  declarations: [
    TrainingComponent,
    NewTrainingComponent,
    CurrentTrainingComponent,
    PastTrainingComponent,
    StopTrainingComponent
  ],
  imports: [SharedModule, ReactiveFormsModule, TrainingRoutingModule, StoreModule.forFeature('training', trainingReducer)],
  exports: [],
  entryComponents: [StopTrainingComponent],
})
export class TrainingModule {}
