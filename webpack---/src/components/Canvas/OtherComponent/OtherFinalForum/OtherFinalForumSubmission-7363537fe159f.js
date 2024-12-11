export default "import React from \"react\";\nimport styles from \"./OtherFinalForumField.module.scss\";\nimport { Form, Field } from \"react-final-form\";\nimport { FORM_ERROR } from \"final-form\";\n\nconst sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));\n\nconst onSubmit = async (values) => {\n  await sleep(300);\n  if (values.username !== \"erikras\") {\n    return { username: \"Unknown username\" };\n  }\n  if (values.password !== \"finalformrocks\") {\n    return { [FORM_ERROR]: \"Login Failed\" };\n  }\n  window.alert(\"LOGIN SUCCESS!\");\n};\n\nexport default (props) => {\n  let formData = {\n    ...props\n  };\n  delete formData.height;\n  return (\n    <div className={styles.wrapper}>\n      <div className={styles.title}>React Final Form Example</div>\n      <div className={styles.subTitle}>Submission Errors</div>\n      <a\n        href=\"https://final-form.org/react\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n      >\n        Read Docs\n      </a>\n      <div>\n        Only successful credentials are <code>erikras</code> and{\" \"}\n        <code>finalformrocks</code>.\n      </div>\n      <Form\n        onSubmit={onSubmit}\n        initialValues={\n            formData\n        }\n        validate={(values) => {\n          const errors = {};\n          if (!values.username) {\n            errors.username = \"Required\";\n          }\n          if (!values.password) {\n            errors.password = \"Required\";\n          }\n          return errors;\n        }}\n        render={({\n          submitError,\n          handleSubmit,\n          form,\n          submitting,\n          pristine,\n          values,\n        }) => (\n          <form onSubmit={handleSubmit}>\n            <Field name=\"username\">\n              {({ input, meta }) => (\n                <div>\n                  <label>Username</label>\n                  <input {...input} type=\"text\" placeholder=\"Username\" />\n                  {(meta.error || meta.submitError) && meta.touched && (\n                    <span>{meta.error || meta.submitError}</span>\n                  )}\n                </div>\n              )}\n            </Field>\n            <Field name=\"password\">\n              {({ input, meta }) => (\n                <div>\n                  <label>Password</label>\n                  <input {...input} type=\"password\" placeholder=\"Password\" />\n                  {meta.error && meta.touched && <span>{meta.error}</span>}\n                </div>\n              )}\n            </Field>\n            {submitError && <div className=\"error\">{submitError}</div>}\n            <div className={styles.buttons}>\n              <button type=\"submit\" disabled={submitting}>\n                Log In\n              </button>\n              <button\n                type=\"button\"\n                onClick={form.reset}\n                disabled={submitting || pristine}\n              >\n                Reset\n              </button>\n            </div>\n            <pre>{JSON.stringify(values, 0, 2)}</pre>\n          </form>\n        )}\n      />\n    </div>\n  );\n};\n";