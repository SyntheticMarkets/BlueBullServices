export default "import React from \"react\";\nimport { Collapse } from \"react-collapse\";\n\nexport default (props) => {\n\n  return (\n    <Collapse\n      {...props}\n      initialStyle={{ height: 50, overflow: 'hidden' }}\n    >\n      <div>Random content</div>\n    </Collapse>\n  );\n};\n";