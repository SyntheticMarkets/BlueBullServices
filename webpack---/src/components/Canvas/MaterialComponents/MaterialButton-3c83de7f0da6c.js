export default "import React from 'react'\nimport Button from '@material-ui/core/Button';\n\nexport default (props)=>{\n    let style = props.variant === 'contained' ? { background: props.background, color:props.color } : null\n\n    return (\n        <Button \n            {...props} \n            style={style}>\n                {props.text}\n            </Button>\n    )\n}";