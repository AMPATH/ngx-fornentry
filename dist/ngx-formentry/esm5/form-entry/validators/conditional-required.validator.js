var ConditionalRequiredValidator = /** @class */ (function () {
    function ConditionalRequiredValidator() {
    }
    ConditionalRequiredValidator.prototype.validate = function (model) {
        // convert helper functions to string
        return function (control) {
            var value = control.value;
            var relationValue = null;
            var referenceQuestionId = model.referenceQuestionId;
            var referenceQuestionAnswers = model.referenceQuestionAnswers;
            var isRequired;
            if (control && control.controlRelations && control.controlRelations.relations) {
                control.controlRelations.relations.forEach(function (relation) {
                    var relatedAsControl = relation.relatedTo;
                    if (relatedAsControl.uuid === referenceQuestionId) {
                        if (relatedAsControl && Array.isArray(relatedAsControl.value)) {
                            relationValue = relation.relatedTo.value;
                        }
                        else {
                            relationValue = relation.relatedTo.value && relation.relatedTo.value.value ?
                                relation.relatedTo.value.value : relation.relatedTo.value;
                        }
                    }
                });
            }
            if (typeof referenceQuestionAnswers === 'object' && referenceQuestionAnswers.indexOf(relationValue) !== -1) {
                isRequired = true;
            }
            if (isRequired && !value) {
                return { 'conditional_required': { message: model.message } };
            }
            return null;
        };
    };
    return ConditionalRequiredValidator;
}());
export { ConditionalRequiredValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZGl0aW9uYWwtcmVxdWlyZWQudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5tcnMtZm9ybWVudHJ5LyIsInNvdXJjZXMiOlsiZm9ybS1lbnRyeS92YWxpZGF0b3JzL2NvbmRpdGlvbmFsLXJlcXVpcmVkLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtJQUVFO0lBQWUsQ0FBQztJQUVoQiwrQ0FBUSxHQUFSLFVBQVMsS0FBaUM7UUFFeEMscUNBQXFDO1FBQ3JDLE9BQU8sVUFBQyxPQUF1QjtZQUU3QixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQzVCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFNLG1CQUFtQixHQUFXLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztZQUM5RCxJQUFNLHdCQUF3QixHQUFRLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztZQUNyRSxJQUFJLFVBQW1CLENBQUM7WUFFeEIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLGdCQUFnQixJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7Z0JBQzNFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUTtvQkFFakQsSUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsU0FBZ0IsQ0FBQztvQkFDbkQsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLEtBQUssbUJBQW1CLEVBQUU7d0JBQ2pELElBQUksZ0JBQWdCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRTs0QkFDM0QsYUFBYSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO3lCQUM1Qzs2QkFBTTs0QkFDSCxhQUFhLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0NBQ3hFLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7eUJBQ2pFO3FCQUNGO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ047WUFFRCxJQUFJLE9BQU8sd0JBQXdCLEtBQUssUUFBUSxJQUFJLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDMUcsVUFBVSxHQUFHLElBQUksQ0FBQzthQUNuQjtZQUVELElBQUksVUFBVSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUN4QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsRUFBRSxPQUFPLEVBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRyxFQUFFLENBQUM7YUFDakU7WUFFRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDSCxtQ0FBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZmVGb3JtQ29udHJvbCB9IGZyb20gJy4uLy4uL2Fic3RyYWN0LWNvbnRyb2xzLWV4dGVuc2lvbi9hZmUtZm9ybS1jb250cm9sJztcbmltcG9ydCB7IENvbmRpdGlvbmFsVmFsaWRhdGlvbk1vZGVsIH0gZnJvbSAnLi4vcXVlc3Rpb24tbW9kZWxzL2NvbmRpdGlvbmFsLXZhbGlkYXRpb24ubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uYWxSZXF1aXJlZFZhbGlkYXRvciB7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHZhbGlkYXRlKG1vZGVsOiBDb25kaXRpb25hbFZhbGlkYXRpb25Nb2RlbCkge1xuXG4gICAgLy8gY29udmVydCBoZWxwZXIgZnVuY3Rpb25zIHRvIHN0cmluZ1xuICAgIHJldHVybiAoY29udHJvbDogQWZlRm9ybUNvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+IHtcblxuICAgICAgY29uc3QgdmFsdWUgPSBjb250cm9sLnZhbHVlO1xuICAgICAgbGV0IHJlbGF0aW9uVmFsdWUgPSBudWxsO1xuICAgICAgY29uc3QgcmVmZXJlbmNlUXVlc3Rpb25JZDogc3RyaW5nID0gbW9kZWwucmVmZXJlbmNlUXVlc3Rpb25JZDtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZVF1ZXN0aW9uQW5zd2VyczogYW55ID0gbW9kZWwucmVmZXJlbmNlUXVlc3Rpb25BbnN3ZXJzO1xuICAgICAgbGV0IGlzUmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgICAgIGlmIChjb250cm9sICYmIGNvbnRyb2wuY29udHJvbFJlbGF0aW9ucyAmJiBjb250cm9sLmNvbnRyb2xSZWxhdGlvbnMucmVsYXRpb25zKSB7XG4gICAgICAgICAgY29udHJvbC5jb250cm9sUmVsYXRpb25zLnJlbGF0aW9ucy5mb3JFYWNoKHJlbGF0aW9uID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcmVsYXRlZEFzQ29udHJvbCA9IHJlbGF0aW9uLnJlbGF0ZWRUbyBhcyBhbnk7XG4gICAgICAgICAgICBpZiAocmVsYXRlZEFzQ29udHJvbC51dWlkID09PSByZWZlcmVuY2VRdWVzdGlvbklkKSB7XG4gICAgICAgICAgICAgIGlmIChyZWxhdGVkQXNDb250cm9sICYmIEFycmF5LmlzQXJyYXkocmVsYXRlZEFzQ29udHJvbC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgIHJlbGF0aW9uVmFsdWUgPSByZWxhdGlvbi5yZWxhdGVkVG8udmFsdWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZWxhdGlvblZhbHVlID0gcmVsYXRpb24ucmVsYXRlZFRvLnZhbHVlICYmIHJlbGF0aW9uLnJlbGF0ZWRUby52YWx1ZS52YWx1ZSA/XG4gICAgICAgICAgICAgICAgICAgICAgcmVsYXRpb24ucmVsYXRlZFRvLnZhbHVlLnZhbHVlIDogcmVsYXRpb24ucmVsYXRlZFRvLnZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgcmVmZXJlbmNlUXVlc3Rpb25BbnN3ZXJzID09PSAnb2JqZWN0JyAmJiByZWZlcmVuY2VRdWVzdGlvbkFuc3dlcnMuaW5kZXhPZihyZWxhdGlvblZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgaXNSZXF1aXJlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1JlcXVpcmVkICYmICF2YWx1ZSkge1xuICAgICAgICByZXR1cm4geyAnY29uZGl0aW9uYWxfcmVxdWlyZWQnOiB7IG1lc3NhZ2U6ICBtb2RlbC5tZXNzYWdlICB9IH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gIH1cbn1cbiJdfQ==