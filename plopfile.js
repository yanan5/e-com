module.exports = (plop) => {
  plop.setGenerator("base-ui-component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        // Plop will create directories for us if they do not exist
        // so it's okay to add files in nested locations.
        path: "src/base-ui-comp/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/ui-comp/Comp.js.hbs",
      },
      {
        type: "add",
        path: "src/base-ui-comp/{{pascalCase name}}/{{pascalCase name}}.test.js",
        templateFile: "plop-templates/ui-comp/Comp.test.js.hbs",
      },
      {
        type: "add",
        path: "src/base-ui-comp/{{pascalCase name}}/{{pascalCase name}}.scss",
        templateFile: "plop-templates/ui-comp/Comp.scss.hbs",
      },
      {
        type: "add",
        path: "src/base-ui-comp/{{pascalCase name}}/{{pascalCase name}}.stories.js",
        templateFile: "plop-templates/ui-comp/Comp.stories.js.hbs",
      },
      {
        // Adds an index.js file if it does not already exist
        type: "add",
        path: "src/base-ui-comp/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/ui-comp/index.js.hbs",
      }
    ],
  });
  plop.setGenerator("app-ui-component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        // Plop will create directories for us if they do not exist
        // so it's okay to add files in nested locations.
        path: "src/app-ui-comp/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/ui-comp/Comp.js.hbs",
      },
      {
        type: "add",
        path: "src/app-ui-comp/{{pascalCase name}}/{{pascalCase name}}.test.js",
        templateFile: "plop-templates/ui-comp/Comp.test.js.hbs",
      },
      {
        type: "add",
        path: "src/app-ui-comp/{{pascalCase name}}/{{pascalCase name}}.scss",
        templateFile: "plop-templates/ui-comp/Comp.scss.hbs",
      },
      {
        type: "add",
        path: "src/app-ui-comp/{{pascalCase name}}/{{pascalCase name}}.stories.js",
        templateFile: "plop-templates/ui-comp/Comp.stories.js.hbs",
      },
      {
        // Adds an index.js file if it does not already exist
        type: "add",
        path: "src/app-ui-comp/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/ui-comp/index.js.hbs",
      }
    ],
  });
};


// todo try to get the destination path from user
// append the index.js with the newly created file