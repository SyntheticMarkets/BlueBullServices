import React, {
    useContext
} from "react";
import {
    observer
} from "mobx-react-lite";
import InspectStore from "../../stores/InspectStore";
import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
    faTimes
} from "@fortawesome/pro-light-svg-icons";
import styles from './Inspect.module.scss'

export const Inspect = observer((props) => {
            const styleData = useContext(InspectStore);

            const toggleInspect = (e) => {
                // const elm = e && e.target ? e.target : false;
                if ( /*$("#fixMe123123132").find(elm).length &&*/ !styleData.isDetectMode) {
                    styleData.toggleDetect(true);
                } else {
                    styleData.toggleDetect(false);
                }
            }

            const close = () => {
                styleData.closeInspect()
            }

            if (!styleData.inspectVisible || styleData.isDetectMode || true) {
                return ( < span > < /span>)
                }

                return ( <
                    div className = {
                        `${styles.Inspect} ${styles.Inspect_horizontal} ${styleData.isDetectMode ? styles.Inspect_open : ''}`
                    } >
                    <
                    div className = {
                        styles.Inspect_background
                    }
                    onClick = {
                        toggleInspect
                    } >
                    <
                    svg aria - hidden = "true"
                    focusable = "false"
                    data - prefix = "fal"
                    data - icon = "crosshairs"
                    role = "img"
                    xmlns = "http://www.w3.org/2000/svg"
                    viewBox = "0 0 512 512"
                    className = "Inspect_icon svg-inline--fa fa-crosshairs fa-w-16 fa-3x" > < path fill = "currentColor"
                    d = "M506 240h-34.591C463.608 133.462 378.538 48.392 272 40.591V6a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v34.591C133.462 48.392 48.392 133.462 40.591 240H6a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h34.591C48.392 378.538 133.462 463.608 240 471.409V506a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6v-34.591C378.538 463.608 463.608 378.538 471.409 272H506a6 6 0 0 0 6-6v-20a6 6 0 0 0-6-6zM272 439.305V374a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v65.305C151.282 431.711 80.315 361.031 72.695 272H138a6 6 0 0 0 6-6v-20a6 6 0 0 0-6-6H72.695C80.289 151.282 150.969 80.316 240 72.695V138a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V72.695C360.718 80.289 431.685 150.969 439.305 240H374a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h65.305C431.711 360.718 361.031 431.684 272 439.305zM280 256c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"
                    className = "" > < /path></svg > {
                        /* <FontAwesomeIcon
                                            icon={faTimes}
                                            className='Inspect_close'
                                            onClick={() => {
                                            close(false);
                                            }}
                                        /> */
                    } <
                    /div> <
                    div className = {
                        styles.Inspect_closeWrapper
                    }
                    onClick = {
                        close
                    } >
                    <
                    FontAwesomeIcon icon = {
                        faTimes
                    }
                    className = {
                        styles.Inspect_close
                    }
                    onClick = {
                        () => {
                            close(false);
                        }
                    }
                    /> <
                    /div> <
                    /div>
                );
            });