#ember-is-equal
 Test values is equals in ember

 ```hbs
 {{is-equal 1 '1'}} => false
 {{is-equal 1 2}} => false
 {{is-equal 'a' 'a'}} => true


 {{#if (is-equal a b)}}
  ...
 {{/if}}
 ```

 Add in your package.json

 ```javascript
  "ember-is-equal": "clairton/ember-is-equal#v0.2.1"

  or
  "ember-is-equal": "clairton/ember-is-equal#v0.2.1"
 ```
