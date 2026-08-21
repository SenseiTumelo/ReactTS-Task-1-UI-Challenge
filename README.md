  ----------------------------------------------------------------------------------------------
#                               PROJECT OBJECTIVES
  ----------------------------------------------------------------------------------------------
The objective of this task is to assess MY understanding of ReactTS concepts and my
ability to design and implement user interfaces (UI) using ReactTS components. In this
challenge, I will be creating my own UI component from scratch, demonstrating my
knowledge of React best practices, component structure, and reusability.
This is the official first task of the curriculum, based on React Lesson 2, focusing mainly on
design implementation, styling and screen responsE

  -----------------------------------------------------------------------------------------------
#                               PROJECT INSTALLATION & SETUP
  -----------------------------------------------------------------------------------------------

Clone the project to your desired directories:
  
      git clone https://github.com/SenseiTumelo/ReactTS-Task-1-UI-Challenge.git      

After cloning the project, run:
            
            npm install 

 To run the project:

         npm run dev
         
inside your terminal.



-------------------------------------------------------------------------------------------------
#                                 PROJECT USER INTERFACE
-------------------------------------------------------------------------------------------------

![Alt text](/public/User%20interfaces/UI-Challenge8.jpg "Project User Interface")




-------------------------------------------------------------------------------------------------
#                                   React + TypeScript + Vite
-------------------------------------------------------------------------------------------------
This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
