import juice from "juice";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet, ThemeProvider } from "styled-components";

import { WelcomeNewsletter } from "./newsletters/WelcomeNewsletter";
import { theme } from "./theme";

const HtmlTemplate = ({ body, styles, title }) => `
<!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
</html>
`;

const withInlineStyles = (Component, title) => {
  const sheet = new ServerStyleSheet();
  const ComponentWithTheme = () => (
    <ThemeProvider theme={theme.bnnvara}>
      <Component />
    </ThemeProvider>
  );
  const body = renderToString(sheet.collectStyles(<ComponentWithTheme />));
  const styles = sheet.getStyleTags();
  const emailWithInlineStyle = juice(HtmlTemplate({ body, styles, title }));
  return emailWithInlineStyle;
};

function App() {
  console.log(
    withInlineStyles(WelcomeNewsletter, "BNNVARA email van redactie")
  );
  return (
    <ThemeProvider theme={theme.bnnvara}>
      <WelcomeNewsletter />
    </ThemeProvider>
  );
}

export default App;
