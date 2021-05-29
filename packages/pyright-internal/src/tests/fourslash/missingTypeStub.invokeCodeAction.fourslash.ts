/// <reference path="fourslash.ts" />

// @filename: mspythonconfig.json
//// {
////   "reportMissingTypeStubs": "warning"
//// }

// @filename: testLib/__init__.py
// @library: true
//// # This is a library file
//// class MyLibrary:
////     def DoEveryThing(self, code: str):
////         pass

// @filename: test.py
//// import [|/*marker*/testLi|]b

// @ts-ignore
await helper.verifyInvokeCodeAction({
    marker: {
        title: `Create Type Stub For "testLib"`,
        files: {
            ['/typings/testLib/__init__.pyi']: `"""
This type stub file was generated by pyright.
"""

class MyLibrary:
    def DoEveryThing(self, code: str): # -> None:
        ...
    


`,
        },
    },
});
