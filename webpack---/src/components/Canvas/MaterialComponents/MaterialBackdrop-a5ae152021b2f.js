export default "import React, { useState, useEffect } from 'react'\nimport Button from '@material-ui/core/Button';\nimport Backdrop from '@material-ui/core/Backdrop';\nimport CircularProgress from '@material-ui/core/CircularProgress';\n\nexport default (props) => {\n    const [open, setOpen] = useState(true)\n\n    useEffect(() => {\n      if (open !== props.open) {\n        setOpen(props.open);\n      }\n      // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [props.open]);\n\n    const handleOpen = () => {\n        setOpen(!open)\n    }\n\n    return (\n        <div>\n            <Button variant=\"outlined\" color=\"primary\" onClick={handleOpen}>\n                Show backdrop\n            </Button>\n            <Backdrop\n                style={{ zIndex: 10000000000, background: 'rgba(0,0,0,.8)' }}\n                {...props} \n                open={open} \n                onClick={handleOpen}>\n                <CircularProgress variant=\"indeterminate\" style={{ color: '#1976d2' }} />\n            </Backdrop>\n        </div>\n    )\n}";