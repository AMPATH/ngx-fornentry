import { ValidationModel } from './validation.model';
export class JsExpressionValidationModel extends ValidationModel {
    constructor(validations) {
        super(validations);
        this.failsWhenExpression = validations.failsWhenExpression;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMtZXhwcmVzc2lvbi12YWxpZGF0aW9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LyIsInNvdXJjZXMiOlsiZm9ybS1lbnRyeS9xdWVzdGlvbi1tb2RlbHMvanMtZXhwcmVzc2lvbi12YWxpZGF0aW9uLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsZUFBZTtJQUk5RCxZQUFZLFdBQWdCO1FBQzFCLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsV0FBVyxDQUFDLG1CQUFtQixDQUFDO0lBQzdELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgVmFsaWRhdGlvbk1vZGVsIH0gZnJvbSAnLi92YWxpZGF0aW9uLm1vZGVsJztcblxuZXhwb3J0IGNsYXNzIEpzRXhwcmVzc2lvblZhbGlkYXRpb25Nb2RlbCBleHRlbmRzIFZhbGlkYXRpb25Nb2RlbCB7XG5cbiAgZmFpbHNXaGVuRXhwcmVzc2lvbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHZhbGlkYXRpb25zOiBhbnkpIHtcbiAgICBzdXBlcih2YWxpZGF0aW9ucyk7XG4gICAgdGhpcy5mYWlsc1doZW5FeHByZXNzaW9uID0gdmFsaWRhdGlvbnMuZmFpbHNXaGVuRXhwcmVzc2lvbjtcbiAgfVxufVxuIl19