/* eslint-disable react/no-danger */

import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const MgidWidget = ({ id, src }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [src]);

  useEffect(() => {
    if (containerRef.current) {
      window._mgq = window._mgq || [];
      window._mgq.push(["_mgc.load"]);
    }
  }, []);

  return <div ref={containerRef} data-type="_mgwidget" data-widget-id={id} />;
};

MgidWidget.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export { MgidWidget };
