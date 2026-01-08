/* eslint-disable react/no-danger */

import React, { useEffect } from "react";
import PropTypes from "prop-types";

const MgidWidget = ({ id, src }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.head.appendChild(script);

    window._mgq = window._mgq || [];
    window._mgq.push(["_mgc.load"]);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [src]);

  return <div data-type="_mgwidget" data-widget-id={id} />;
};

MgidWidget.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export { MgidWidget };
