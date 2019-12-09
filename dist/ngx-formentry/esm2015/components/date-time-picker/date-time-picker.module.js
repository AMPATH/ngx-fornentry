/**
 * date-time-picker.module
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { ModalComponent } from './picker-modal/modal.component';
import { MomentPipe } from './pipes/moment.pipe';
import { DateTimePickerComponent } from './date-time-picker.component';
let DateTimePickerModule = class DateTimePickerModule {
};
DateTimePickerModule = tslib_1.__decorate([
    NgModule({
        imports: [CommonModule, FormsModule],
        declarations: [
            DatePickerComponent,
            TimePickerComponent,
            ModalComponent,
            MomentPipe,
            DateTimePickerComponent
        ],
        exports: [
            DatePickerComponent,
            TimePickerComponent,
            ModalComponent,
            MomentPipe,
            DateTimePickerComponent
        ],
        providers: []
    })
], DateTimePickerModule);
export { DateTimePickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3Blbm1ycy1mb3JtZW50cnkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2RhdGUtdGltZS1waWNrZXIvZGF0ZS10aW1lLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFvQnZFLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0NBQ2hDLENBQUE7QUFEWSxvQkFBb0I7SUFsQmhDLFFBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7UUFDcEMsWUFBWSxFQUFFO1lBQ1YsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixjQUFjO1lBQ2QsVUFBVTtZQUNWLHVCQUF1QjtTQUMxQjtRQUNELE9BQU8sRUFBRTtZQUNMLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsY0FBYztZQUNkLFVBQVU7WUFDVix1QkFBdUI7U0FDMUI7UUFDRCxTQUFTLEVBQUUsRUFBRTtLQUNoQixDQUFDO0dBQ1csb0JBQW9CLENBQ2hDO1NBRFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBkYXRlLXRpbWUtcGlja2VyLm1vZHVsZVxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vdGltZS1waWNrZXIvdGltZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9waWNrZXItbW9kYWwvbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE1vbWVudFBpcGUgfSBmcm9tICcuL3BpcGVzL21vbWVudC5waXBlJztcbmltcG9ydCB7IERhdGVUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBEYXRlUGlja2VyQ29tcG9uZW50LFxuICAgICAgICBUaW1lUGlja2VyQ29tcG9uZW50LFxuICAgICAgICBNb2RhbENvbXBvbmVudCxcbiAgICAgICAgTW9tZW50UGlwZSxcbiAgICAgICAgRGF0ZVRpbWVQaWNrZXJDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgRGF0ZVBpY2tlckNvbXBvbmVudCxcbiAgICAgICAgVGltZVBpY2tlckNvbXBvbmVudCxcbiAgICAgICAgTW9kYWxDb21wb25lbnQsXG4gICAgICAgIE1vbWVudFBpcGUsXG4gICAgICAgIERhdGVUaW1lUGlja2VyQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUaW1lUGlja2VyTW9kdWxlIHtcbn1cbiJdfQ==