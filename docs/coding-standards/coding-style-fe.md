# Coding Style Guidelines - Front End (HTML, CSS, JavaScript/TypeScript)

### Indentation

All code should be indented with 2 spaces.
Why: It's the standard for most languages and it's the default in most IDEs.

Elements or components split on multiple lines should be indented with 2 spaces. The closing tag should be in line with the starting tag.
Why: It's easier to read and it's the standard for most languages.

For example:
```
<div>
  <MyComponent
    v-if="someCondition"
    id="my-component"
    class="my-class"
  />
</div>
```

Here's an example of indentation in script:
```
showLoadingContainer (): boolean {
  return (
    !this.dataLoaded &&
    !this.dashboardUnavailableDialog &&
    !this.businessAuthErrorDialog &&
    !this.nameRequestAuthErrorDialog &&
    !this.nameRequestInvalidDialog
  )
},
```

What about indenting long method signatures?
```
doSomething (
  param1: string,
  param2: number, // can add a comment here
  param3 = false
): void {
  // do something
}
```

### Component IDs

IDs should be named in kebab-case.
For example:
```
<MyComponent id="my-component" />
```

### Class Names
Classes should be named "mostly" in kebab-case.
For example:
```
<MyComponent class="my-class" />
```

Exception: some "deep" elements may use double-underscores.
For example:
```
<div class="v-input v-text-field">
  <div class="v-input__control">
    <div class="v-input__slot">
      <div class="v-text-field__slot">
      </div>
    </div>
    <div class="v-text-field__details">
      <div class="v-messages">
        <div class="v-messages__wrapper">
          <div class="v-messages__message">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Variables/Properties

Variables/properties should be named in camelCase.
Why: It's the standard for most languages and it's the default in most IDEs.
For example:
```
const myVariable = 'my value'
```

Enums, interfaces, types (and some constants) should be named in PascalCase.
Why: It's the standard for most languages and it's the default in most IDEs.
For example:
```
export const EmptyOfficer: OfficerIF = {
  firstName: '',
  lastName: '',
  middleInitial: ''
}
```

### Functions (Methods)

_FUTURE: add something here_

### Components

Components in the template should use PascalCase. Why: It helps differentiate custom Vue components from native Vuetify or HTML components in the template. Also, some IDEs allow you to F12 on the component name to jump to the component definition.

For example:
```
<MyComponent />
```

### Code Comments

Where it makes sense, use JSDoc to say what the function does / is for, as well as to document the formal parameters. For example:
```
/**
  * Removes the specified properties from nested objects.
  * @param baseObj the base object
  * @param keys the nested object keys which to omit properties from
  * @param prop the properties to be removed
  */
omitProps (baseObj: any, keys: Array<string>, prop: Array<string>): any {
  const parsedObj: any = {}
  Object.keys(baseObj).forEach(key => {
    parsedObj[key] = omit(baseObj[key], prop)
  })
  return parsedObj
}
```

### Whitespace

Where it makes sense (eg, to separate logical blocks of code), use whitespace to make the code easier to read. You should also use whitespace between CSS blocks.

There should be whitespace between the template, script and style blocks in a Vue file, but no extra blank lines within the blocks.
For example:
```
<template>
</template>

<script lang="ts">
</script>

<style lang="scss">
</style>
```

(In some cases, the script block may come before the template block.)

### Consistency

Being consistent with surrounding code _may_ override the above guidelines!

--end of document--
