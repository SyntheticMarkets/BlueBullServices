export default "import React from \"react\";\nimport NumberFormat from \"react-number-format\";\nimport styles from './OtherNumberFormat.module.scss'\n\nconst NumberFormatExample = (props) => {\n  return (\n    <div>\n      <div className={styles.title}>Format Number Input</div>\n      <NumberFormat\n        {...props} />\n    </div>\n  );\n};\nexport default NumberFormatExample;\n";