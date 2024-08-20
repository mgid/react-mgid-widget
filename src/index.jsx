/* eslint-disable react/no-danger */

import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const MgidWidget = ({ id, src }) => (
  <div>
    <div data-type="_mgwidget" data-widget-id={id} />
    <script
      dangerouslySetInnerHTML={{
        __html:
          '(function(w,q){w[q]=w[q]||[];w[q].push(["_mgc.load"]);})(window,"_mgq");',
      }}
    />

    <Helmet>
      <script src={src} async />
    </Helmet>
  </div>
);

MgidWidget.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export { MgidWidget };
