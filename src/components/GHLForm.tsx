"use client";

import { useState } from "react";
import { siteConfig } from "@/data/config";

export default function GHLForm() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ position: "relative", height: "1074px" }}>
      {!visible && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#ffffff",
            zIndex: 1,
            borderRadius: "8px",
          }}
        />
      )}
      <iframe
        src={siteConfig.ghlFormUrl}
        style={{
          width: "100%",
          height: "1074px",
          border: "none",
          borderRadius: "8px",
        }}
        id={`inline-${siteConfig.ghlFormId}`}
        data-layout="{&quot;id&quot;:&quot;INLINE&quot;}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Excavating Company Cleveland"
        data-height="1074"
        data-layout-iframe-id={`inline-${siteConfig.ghlFormId}`}
        data-form-id={siteConfig.ghlFormId}
        title="Excavating Company Cleveland"
        onLoad={() => setTimeout(() => setVisible(true), 800)}
      />
    </div>
  );
}
