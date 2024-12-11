export default "import React, { useState, useEffect } from \"react\";\nimport { CopyToClipboard } from \"react-copy-to-clipboard\";\nimport styles from \"./OtherCopyToClipBoard.module.scss\";\n\nexport default (props) => {\n  const [value, setValue] = useState(props.text);\n  const [copied, setCopied] = useState(false);\n  /*remove*/ useEffect(() => {\n    if (props.text !== value) {\n      setValue(props.text);\n    }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, [props.text]); /*remove*/\n\n  return (\n    <div>\n      <textarea\n        value={value}\n        onChange={(e) => {\n          setValue(e.target.value);\n          setCopied(false);\n        }}\n      />\n\n      <div className={styles.title}>1. Button</div>\n      <CopyToClipboard\n        options={{ debug: props.debug, message: props.message }}\n        text={value}\n        onCopy={() => setCopied(true)}\n      >\n        <span>Copy to clipboard with span</span>\n      </CopyToClipboard>\n\n      <div className={styles.title}>2. Span</div>\n      <CopyToClipboard\n        options={{ debug: props.debug, message: props.message }}\n        text={value}\n        onCopy={() => setCopied(true)}\n      >\n        <button>Copy to clipboard with button</button>\n      </CopyToClipboard>\n\n      <div className={styles.title}>2. Width onClick</div>\n      <section className=\"section\">\n        <CopyToClipboard\n          options={{ debug: props.debug, message: props.message }}\n          onCopy={() => setCopied(true)}\n          text={value}\n        >\n          <button onClick={() => setCopied(true)}>\n            Copy to clipboard with onClick prop\n          </button>\n        </CopyToClipboard>\n      </section>\n\n      {copied ? <span className={styles.copyText}>Copied.</span> : null}\n    </div>\n  );\n};;\n";