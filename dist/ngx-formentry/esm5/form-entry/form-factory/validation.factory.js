import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import * as _ from 'lodash';
import { ConditionalRequiredValidator } from '../validators/conditional-required.validator';
import { ConditionalAnsweredValidator } from '../validators/conditional-answered.validator';
import { RequiredValidator } from '../validators/required.validator';
import { DateValidator } from '../validators/date.validator';
import { MinValidator } from '../validators/min.validator';
import { MaxValidator } from '../validators/max.validator';
import { MinDateValidator } from '../validators/min-date.validator';
import { MaxDateValidator } from '../validators/max-date.validator';
import { FutureDateRestrictionValidator } from '../validators/future-date-restriction.validator';
import { JsExpressionValidator } from '../validators/js-expression.validator';
import { Messages } from '../utils/messages';
var ValidationFactory = /** @class */ (function () {
    function ValidationFactory() {
    }
    ValidationFactory.prototype.getValidators = function (question, form) {
        var _this = this;
        var list = [];
        if (question.validators) {
            _.forEach(question.validators, function (validator) {
                switch (validator.type) {
                    case 'date':
                        list.push(_this.dateValidator);
                        var allowFutureDates = validator.allowFutureDates;
                        if (!allowFutureDates) {
                            list.push(_this.futureDateRestrictionValidator);
                        }
                        break;
                    case 'js_expression':
                        list.push(_this.jsExpressionValidator.validate(validator, form));
                        break;
                    case 'max':
                        list.push(_this.getMaxValueValidator(validator.max));
                        break;
                    case 'min':
                        list.push(_this.getMinValueValidator(validator.min));
                        break;
                    case 'conditionalRequired':
                        list.push(_this.conditionalRequiredValidator.validate(validator));
                        break;
                    case 'conditionalAnswered':
                        list.push(_this.conditionalAnsweredValidator.validate(validator));
                        break;
                }
            });
        }
        if (question.required && typeof (question.required) === 'string' && question.required === 'true') {
            list.push(this.requiredValidator);
        }
        else {
            // TODO - handle custom required validator
        }
        return list;
    };
    Object.defineProperty(ValidationFactory.prototype, "conditionalRequiredValidator", {
        get: function () {
            return new ConditionalRequiredValidator();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationFactory.prototype, "conditionalAnsweredValidator", {
        get: function () {
            return new ConditionalAnsweredValidator();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationFactory.prototype, "requiredValidator", {
        get: function () {
            return new RequiredValidator().validate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationFactory.prototype, "dateValidator", {
        get: function () {
            return new DateValidator().validate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationFactory.prototype, "futureDateRestrictionValidator", {
        get: function () {
            return new FutureDateRestrictionValidator().validate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationFactory.prototype, "maxDateValidator", {
        get: function () {
            return new MaxDateValidator().validate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationFactory.prototype, "minDateValidator", {
        get: function () {
            return new MinDateValidator().validate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationFactory.prototype, "minLengthValidator", {
        get: function () {
            return Validators.minLength;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationFactory.prototype, "maxLengthValidator", {
        get: function () {
            return Validators.maxLength;
        },
        enumerable: true,
        configurable: true
    });
    ValidationFactory.prototype.getMinValueValidator = function (min) {
        return new MinValidator().validate(min);
    };
    ValidationFactory.prototype.getMaxValueValidator = function (max) {
        return new MaxValidator().validate(max);
    };
    Object.defineProperty(ValidationFactory.prototype, "jsExpressionValidator", {
        get: function () {
            return new JsExpressionValidator();
        },
        enumerable: true,
        configurable: true
    });
    ValidationFactory.prototype.errors = function (errors, question) {
        var messages = [];
        for (var property in errors) {
            if (errors.hasOwnProperty(property)) {
                switch (property) {
                    case 'required':
                        messages.push(Messages.REQUIRED_FIELD_MSG);
                        break;
                    case 'date':
                        messages.push(Messages.INVALID_DATE_MSG);
                        break;
                    case 'futureDateRestriction':
                        messages.push(Messages.FUTURE_DATE_RESTRICTION_MSG);
                        break;
                    case 'minlength':
                        messages.push(Messages.MIN_LENGTH_MSG.replace('{minLength}', errors.minlength.requiredLength));
                        break;
                    case 'maxlength':
                        messages.push(Messages.MIN_LENGTH_MSG.replace('{maxLength}', errors.maxlength.requiredLength));
                        break;
                    case 'maxdate':
                        messages.push(Messages.MAX_DATE_MSG.replace('{maxDate}', errors.maxdate.requiredDate));
                        break;
                    case 'mindate':
                        messages.push(Messages.MIN_DATE_MSG.replace('{minDate}', errors.mindate.requiredDate));
                        break;
                    case 'max':
                        messages.push(Messages.MAX_MSG.replace('{max}', errors.max.requiredValue));
                        break;
                    case 'min':
                        messages.push(Messages.MIN_MSG.replace('{min}', errors.min.requiredValue));
                        break;
                    case 'js_expression':
                        messages.push(errors['js_expression'].message);
                        break;
                    case 'conditional_required':
                        messages.push(errors['conditional_required'].message);
                        break;
                    case 'conditional_answered':
                        messages.push(errors['conditional_answered'].message);
                        break;
                }
            }
        }
        return messages;
    };
    ValidationFactory = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], ValidationFactory);
    return ValidationFactory;
}());
export { ValidationFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LyIsInNvdXJjZXMiOlsiZm9ybS1lbnRyeS9mb3JtLWZhY3RvcnkvdmFsaWRhdGlvbi5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM1RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM1RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFTN0M7SUFFRTtJQUFlLENBQUM7SUFFaEIseUNBQWEsR0FBYixVQUFjLFFBQXNCLEVBQUUsSUFBVTtRQUFoRCxpQkE0Q0M7UUExQ0MsSUFBTSxJQUFJLEdBQWUsRUFBRSxDQUFDO1FBRTVCLElBQUksUUFBUSxDQUFD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dEQsTUFBTTtpQkFDVDthQUNKO1NBQ0o7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBckpVLGlCQUFpQjtRQUQ3QixVQUFVLEVBQUU7O09BQ0EsaUJBQWlCLENBc0o3QjtJQUFELHdCQUFDO0NBQUEsQUF0SkQsSUFzSkM7U0F0SlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IENvbmRpdGlvbmFsUmVxdWlyZWRWYWxpZGF0b3IgfSBmcm9tICcuLi92YWxpZGF0b3JzL2NvbmRpdGlvbmFsLXJlcXVpcmVkLnZhbGlkYXRvcic7XG5pbXBvcnQgeyBDb25kaXRpb25hbEFuc3dlcmVkVmFsaWRhdG9yIH0gZnJvbSAnLi4vdmFsaWRhdG9ycy9jb25kaXRpb25hbC1hbnN3ZXJlZC52YWxpZGF0b3InO1xuaW1wb3J0IHsgUmVxdWlyZWRWYWxpZGF0b3IgfSBmcm9tICcuLi92YWxpZGF0b3JzL3JlcXVpcmVkLnZhbGlkYXRvcic7XG5pbXBvcnQgeyBEYXRlVmFsaWRhdG9yIH0gZnJvbSAnLi4vdmFsaWRhdG9ycy9kYXRlLnZhbGlkYXRvcic7XG5pbXBvcnQgeyBNaW5WYWxpZGF0b3IgfSBmcm9tICcuLi92YWxpZGF0b3JzL21pbi52YWxpZGF0b3InO1xuaW1wb3J0IHsgTWF4VmFsaWRhdG9yIH0gZnJvbSAnLi4vdmFsaWRhdG9ycy9tYXgudmFsaWRhdG9yJztcbmltcG9ydCB7IE1pbkRhdGVWYWxpZGF0b3IgfSBmcm9tICcuLi92YWxpZGF0b3JzL21pbi1kYXRlLnZhbGlkYXRvcic7XG5pbXBvcnQgeyBNYXhEYXRlVmFsaWRhdG9yIH0gZnJvbSAnLi4vdmFsaWRhdG9ycy9tYXgtZGF0ZS52YWxpZGF0b3InO1xuaW1wb3J0IHsgRnV0dXJlRGF0ZVJlc3RyaWN0aW9uVmFsaWRhdG9yIH0gZnJvbSAnLi4vdmFsaWRhdG9ycy9mdXR1cmUtZGF0ZS1yZXN0cmljdGlvbi52YWxpZGF0b3InO1xuaW1wb3J0IHsgSnNFeHByZXNzaW9uVmFsaWRhdG9yIH0gZnJvbSAnLi4vdmFsaWRhdG9ycy9qcy1leHByZXNzaW9uLnZhbGlkYXRvcic7XG5pbXBvcnQgeyBRdWVzdGlvbkJhc2UgfSBmcm9tICcuLi9xdWVzdGlvbi1tb2RlbHMvcXVlc3Rpb24tYmFzZSc7XG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gJy4uL3V0aWxzL21lc3NhZ2VzJztcbmltcG9ydCB7IFZhbGlkYXRpb25Nb2RlbCB9IGZyb20gJy4uL3F1ZXN0aW9uLW1vZGVscy92YWxpZGF0aW9uLm1vZGVsJztcbmltcG9ydCB7IERhdGVWYWxpZGF0aW9uTW9kZWwgfSBmcm9tICcuLi9xdWVzdGlvbi1tb2RlbHMvZGF0ZS12YWxpZGF0aW9uLm1vZGVsJztcbmltcG9ydCB7IE1heFZhbGlkYXRpb25Nb2RlbH0gZnJvbSAnLi4vcXVlc3Rpb24tbW9kZWxzL21heC12YWxpZGF0aW9uLm1vZGVsJztcbmltcG9ydCB7IE1pblZhbGlkYXRpb25Nb2RlbH0gZnJvbSAnLi4vcXVlc3Rpb24tbW9kZWxzL21pbi12YWxpZGF0aW9uLm1vZGVsJztcbmltcG9ydCB7IEpzRXhwcmVzc2lvblZhbGlkYXRpb25Nb2RlbCB9IGZyb20gJy4uL3F1ZXN0aW9uLW1vZGVscy9qcy1leHByZXNzaW9uLXZhbGlkYXRpb24ubW9kZWwnO1xuaW1wb3J0IHsgQ29uZGl0aW9uYWxWYWxpZGF0aW9uTW9kZWwgfSBmcm9tICcuLi9xdWVzdGlvbi1tb2RlbHMvY29uZGl0aW9uYWwtdmFsaWRhdGlvbi5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uRmFjdG9yeSB7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGdldFZhbGlkYXRvcnMocXVlc3Rpb246IFF1ZXN0aW9uQmFzZSwgZm9ybT86IGFueSkge1xuXG4gICAgY29uc3QgbGlzdDogQXJyYXk8YW55PiA9IFtdO1xuXG4gICAgaWYgKHF1ZXN0aW9uLnZhbGlkYXRvcnMpIHtcblxuICAgICAgXy5mb3JFYWNoKHF1ZXN0aW9uLnZhbGlkYXRvcnMsICh2YWxpZGF0b3I6IFZhbGlkYXRpb25Nb2RlbCkgPT4ge1xuXG4gICAgICAgIHN3aXRjaCAodmFsaWRhdG9yLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICAgIGxpc3QucHVzaCh0aGlzLmRhdGVWYWxpZGF0b3IpO1xuICAgICAgICAgICAgY29uc3QgYWxsb3dGdXR1cmVEYXRlczogYm9vbGVhbiA9ICggPERhdGVWYWxpZGF0aW9uTW9kZWw+dmFsaWRhdG9yICkuYWxsb3dGdXR1cmVEYXRlcztcblxuICAgICAgICAgICAgaWYgKCFhbGxvd0Z1dHVyZURhdGVzKSB7XG4gICAgICAgICAgICAgIGxpc3QucHVzaCh0aGlzLmZ1dHVyZURhdGVSZXN0cmljdGlvblZhbGlkYXRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdqc19leHByZXNzaW9uJzpcbiAgICAgICAgICAgIGxpc3QucHVzaCh0aGlzLmpzRXhwcmVzc2lvblZhbGlkYXRvci52YWxpZGF0ZSg8SnNFeHByZXNzaW9uVmFsaWRhdGlvbk1vZGVsPnZhbGlkYXRvciwgZm9ybSkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbWF4JzpcbiAgICAgICAgICAgIGxpc3QucHVzaCh0aGlzLmdldE1heFZhbHVlVmFsaWRhdG9yKCg8TWF4VmFsaWRhdGlvbk1vZGVsPnZhbGlkYXRvcikubWF4KSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdtaW4nOlxuICAgICAgICAgICAgbGlzdC5wdXNoKHRoaXMuZ2V0TWluVmFsdWVWYWxpZGF0b3IoKDxNaW5WYWxpZGF0aW9uTW9kZWw+dmFsaWRhdG9yKS5taW4pKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NvbmRpdGlvbmFsUmVxdWlyZWQnOlxuICAgICAgICAgICAgbGlzdC5wdXNoKHRoaXMuY29uZGl0aW9uYWxSZXF1aXJlZFZhbGlkYXRvci52YWxpZGF0ZSg8Q29uZGl0aW9uYWxWYWxpZGF0aW9uTW9kZWw+dmFsaWRhdG9yKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjb25kaXRpb25hbEFuc3dlcmVkJzpcbiAgICAgICAgICAgIGxpc3QucHVzaCh0aGlzLmNvbmRpdGlvbmFsQW5zd2VyZWRWYWxpZGF0b3IudmFsaWRhdGUoPENvbmRpdGlvbmFsVmFsaWRhdGlvbk1vZGVsPnZhbGlkYXRvcikpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChxdWVzdGlvbi5yZXF1aXJlZCAmJiB0eXBlb2YocXVlc3Rpb24ucmVxdWlyZWQpID09PSAnc3RyaW5nJyAmJiBxdWVzdGlvbi5yZXF1aXJlZCA9PT0gJ3RydWUnKSB7XG4gICAgICBsaXN0LnB1c2godGhpcy5yZXF1aXJlZFZhbGlkYXRvcik7XG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gVE9ETyAtIGhhbmRsZSBjdXN0b20gcmVxdWlyZWQgdmFsaWRhdG9yXG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICBnZXQgY29uZGl0aW9uYWxSZXF1aXJlZFZhbGlkYXRvcigpOiBDb25kaXRpb25hbFJlcXVpcmVkVmFsaWRhdG9yIHtcbiAgICByZXR1cm4gbmV3IENvbmRpdGlvbmFsUmVxdWlyZWRWYWxpZGF0b3IoKTtcbiAgfVxuXG4gIGdldCBjb25kaXRpb25hbEFuc3dlcmVkVmFsaWRhdG9yKCk6IENvbmRpdGlvbmFsQW5zd2VyZWRWYWxpZGF0b3Ige1xuICAgIHJldHVybiBuZXcgQ29uZGl0aW9uYWxBbnN3ZXJlZFZhbGlkYXRvcigpO1xuICB9XG5cbiAgZ2V0IHJlcXVpcmVkVmFsaWRhdG9yKCk6IGFueSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1aXJlZFZhbGlkYXRvcigpLnZhbGlkYXRlO1xuICB9XG5cbiAgZ2V0IGRhdGVWYWxpZGF0b3IoKTogYW55IHtcbiAgICByZXR1cm4gbmV3IERhdGVWYWxpZGF0b3IoKS52YWxpZGF0ZTtcbiAgfVxuXG4gIGdldCBmdXR1cmVEYXRlUmVzdHJpY3Rpb25WYWxpZGF0b3IoKTogYW55IHtcbiAgICByZXR1cm4gbmV3IEZ1dHVyZURhdGVSZXN0cmljdGlvblZhbGlkYXRvcigpLnZhbGlkYXRlO1xuICB9XG5cbiAgZ2V0IG1heERhdGVWYWxpZGF0b3IoKTogYW55IHtcbiAgICByZXR1cm4gbmV3IE1heERhdGVWYWxpZGF0b3IoKS52YWxpZGF0ZTtcbiAgfVxuXG4gIGdldCBtaW5EYXRlVmFsaWRhdG9yKCk6IGFueSB7XG4gICAgcmV0dXJuIG5ldyBNaW5EYXRlVmFsaWRhdG9yKCkudmFsaWRhdGU7XG4gIH1cblxuICBnZXQgbWluTGVuZ3RoVmFsaWRhdG9yKCk6IGFueSB7XG4gICAgcmV0dXJuIFZhbGlkYXRvcnMubWluTGVuZ3RoO1xuICB9XG5cbiAgZ2V0IG1heExlbmd0aFZhbGlkYXRvcigpIHtcbiAgICByZXR1cm4gVmFsaWRhdG9ycy5tYXhMZW5ndGg7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWluVmFsdWVWYWxpZGF0b3IobWluOiBudW1iZXIpOiBhbnkge1xuICAgIHJldHVybiBuZXcgTWluVmFsaWRhdG9yKCkudmFsaWRhdGUobWluKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNYXhWYWx1ZVZhbGlkYXRvcihtYXg6IG51bWJlcik6IGFueSB7XG5cbiAgICByZXR1cm4gbmV3IE1heFZhbGlkYXRvcigpLnZhbGlkYXRlKG1heCk7XG4gIH1cblxuICBnZXQganNFeHByZXNzaW9uVmFsaWRhdG9yKCkge1xuXG4gICAgcmV0dXJuIG5ldyBKc0V4cHJlc3Npb25WYWxpZGF0b3IoKTtcbiAgfVxuXG4gIHB1YmxpYyBlcnJvcnMoZXJyb3JzOiBhbnksIHF1ZXN0aW9uOiBRdWVzdGlvbkJhc2UpOiBBcnJheTxzdHJpbmc+IHtcblxuICAgIGNvbnN0IG1lc3NhZ2VzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGVycm9ycykge1xuICAgICAgICBpZiAoZXJyb3JzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgIGNhc2UgJ3JlcXVpcmVkJzpcbiAgICAgICAgICAgICAgICBtZXNzYWdlcy5wdXNoKE1lc3NhZ2VzLlJFUVVJUkVEX0ZJRUxEX01TRyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goTWVzc2FnZXMuSU5WQUxJRF9EQVRFX01TRyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2Z1dHVyZURhdGVSZXN0cmljdGlvbic6XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMucHVzaChNZXNzYWdlcy5GVVRVUkVfREFURV9SRVNUUklDVElPTl9NU0cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdtaW5sZW5ndGgnOlxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goTWVzc2FnZXMuTUlOX0xFTkdUSF9NU0cucmVwbGFjZSgne21pbkxlbmd0aH0nLCBlcnJvcnMubWlubGVuZ3RoLnJlcXVpcmVkTGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ21heGxlbmd0aCc6XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMucHVzaChNZXNzYWdlcy5NSU5fTEVOR1RIX01TRy5yZXBsYWNlKCd7bWF4TGVuZ3RofScsIGVycm9ycy5tYXhsZW5ndGgucmVxdWlyZWRMZW5ndGgpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnbWF4ZGF0ZSc6XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMucHVzaChNZXNzYWdlcy5NQVhfREFURV9NU0cucmVwbGFjZSgne21heERhdGV9JywgZXJyb3JzLm1heGRhdGUucmVxdWlyZWREYXRlKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ21pbmRhdGUnOlxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goTWVzc2FnZXMuTUlOX0RBVEVfTVNHLnJlcGxhY2UoJ3ttaW5EYXRlfScsIGVycm9ycy5taW5kYXRlLnJlcXVpcmVkRGF0ZSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdtYXgnOlxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goTWVzc2FnZXMuTUFYX01TRy5yZXBsYWNlKCd7bWF4fScsIGVycm9ycy5tYXgucmVxdWlyZWRWYWx1ZSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdtaW4nOlxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goTWVzc2FnZXMuTUlOX01TRy5yZXBsYWNlKCd7bWlufScsIGVycm9ycy5taW4ucmVxdWlyZWRWYWx1ZSkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdqc19leHByZXNzaW9uJzpcbiAgICAgICAgICAgICAgICBtZXNzYWdlcy5wdXNoKGVycm9yc1snanNfZXhwcmVzc2lvbiddLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdjb25kaXRpb25hbF9yZXF1aXJlZCc6XG4gICAgICAgICAgICAgICAgbWVzc2FnZXMucHVzaChlcnJvcnNbJ2NvbmRpdGlvbmFsX3JlcXVpcmVkJ10ubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2NvbmRpdGlvbmFsX2Fuc3dlcmVkJzpcbiAgICAgICAgICAgICAgICBtZXNzYWdlcy5wdXNoKGVycm9yc1snY29uZGl0aW9uYWxfYW5zd2VyZWQnXS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlcztcbiAgfVxufVxuIl19