export default "import React from 'react';\nimport DeleteIcon from '@material-ui/icons/Delete';\nimport IconButton from '@material-ui/core/IconButton';\nimport Tooltip from '@material-ui/core/Tooltip';\n\nexport default function SimpleTooltips(props) {\n  return (\n    <div>\n      <Tooltip \n        {...props} \n        classes={{popper:\"codeMe_maxIndex\"}}>\n        <IconButton aria-label=\"delete\">\n          <DeleteIcon />\n        </IconButton>\n      </Tooltip>\n    </div>\n  );\n}\n";