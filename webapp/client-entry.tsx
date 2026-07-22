import { bootGrarfMobileWebClient } from "../../grarf/desktop/src/lib/platform/bootGrarfMobileWebClient";
import { shouldRenderGrarfMobileWebClient } from "../../grarf/desktop/src/lib/platform/shouldRenderGrarfMobileWebClient";

const autoRoot = document.getElementById("grarf-web-root");

if (autoRoot) {
  void (async () => {
    if (shouldRenderGrarfMobileWebClient()) {
      await bootGrarfMobileWebClient(autoRoot);
      return;
    }

    const { bootDesktopWebClient } = await import("./desktop-bootstrap");
    await bootDesktopWebClient(autoRoot);
  })();
}
