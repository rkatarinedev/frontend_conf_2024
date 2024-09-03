import { Html, Main, NextScript } from "next/document";
import {DocumentHead} from "@/src/shared/DocumentHead";

export default function Document() {
  return (
    <Html lang="en">
      <DocumentHead/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
