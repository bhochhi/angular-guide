Binding primitives when using ng-repeat
---
Just trying to put my thoughts what happened today. So, I was trying to create a reusable component, a directive that can be used for various input types like range, dropdown and radio. Check the following js, you simply need to pass __options__ as an array, __type__ as an string and __value__ to to store the selected value. 

```javascript

function buildComponent(type){
  var template;
    switch (displayType) {
      case 'dropdown':
        template = 'dropdown partial';
        break;
      case 'radio':
        template = 'radio partial';
        break;
      case 'range':
      default:
        template = 'range partial';
        break;
    }
    return template;
}

function linker(scope,element,attrs){
  element.html(buildComponent(scope.type)); //returns various html partial based on type.
    $compile(element.contents())(scope);
}

app.directive('selectComponent',function(){

return {
  restrict:'E',
  link: linker,
  scope: {
    type: '@',
    options: "=?",
    value: "=?",
    name: '@'
  }
}
});

```




ng-options
---
Its important to use ng-options instead of ng-repeat when working with select/option component. The native select/option is only good for array of string values. However, if you have array of objects as select options, it will return the selected value as string, which means you might have to manually convert the object. Therefore, instead of doing following:

```html
  <select ng-model="selectedOption">
        <option value="{{option}}" ng-repeat="option in selectOptions">{{option.name}}</option>
    </select>
```
Do
```html
<select ng-model="selectedOption" ng-options="option.name for option in selectOptions"></select>
```
__ng-options__ is provides various forms of making selections. please checkout the [documentation](https://docs.angularjs.org/api/ng/directive/select) of details.

Directive life Cycle
---
http://filimanjaro.com/blog/2014/angular-directive-lifecycle-vs-link-compile-controller/

How Scope works within Custom Directive
---
http://www.undefinednull.com/2014/02/11/mastering-the-scope-of-a-directive-in-angularjs/
