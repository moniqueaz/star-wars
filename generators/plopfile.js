/* eslint-disable max-lines-per-function */
module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'list',
        name: 'path',
        message: 'Path name',
        choices: ['components/atoms', 'components/molecules', 'components/organisms', 'components/templates', 'styles', 'route/pages'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'File name',
      },
    ],
    actions: function (data) {
      if (data.path === 'route/pages') {
        return [
          {
            type: 'add',
            path: '../src/pages/{{dashCase name}}.tsx',
            templateFile: 'templates/pages.tsx.hbs',
          },
        ];
      }

      if (data.path === 'styles') {
        return [
          {
            type: 'add',
            path: '../src/components/atoms/{{pascalCase name}}/index.ts',
            templateFile: 'templates/componentStyles.ts.hbs',
          },
          {
            type: 'add',
            path: '../src/components/atoms/{{pascalCase name}}/test.tsx',
            templateFile: 'templates/testStyles.ts.hbs',
          },
        ];
      }

      if (data.path === 'components/templates') {
        return [
          {
            type: 'add',
            path: '../src/{{path}}/{{pascalCase name}}/index.tsx',
            templateFile: 'templates/index.tsx.hbs',
          },
          {
            type: 'add',
            path: '../src/{{path}}/{{pascalCase name}}/styles.ts',
            templateFile: 'templates/styles.ts.hbs',
          },
          {
            type: 'add',
            path: '../src/{{path}}/{{pascalCase name}}/test.tsx',
            templateFile: 'templates/test.tsx.hbs',
          },
        ];
      }
      return [
        {
          type: 'add',
          path: '../src/{{path}}/{{pascalCase name}}/index.tsx',
          templateFile: 'templates/index.tsx.hbs',
        },
        {
          type: 'add',
          path: '../src/{{path}}/{{pascalCase name}}/stories.tsx',
          templateFile: 'templates/stories.tsx.hbs',
        },
        {
          type: 'add',
          path: '../src/{{path}}/{{pascalCase name}}/styles.ts',
          templateFile: 'templates/styles.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/{{path}}/{{pascalCase name}}/test.tsx',
          templateFile: 'templates/test.tsx.hbs',
        },
      ];
    },
  } );
};
