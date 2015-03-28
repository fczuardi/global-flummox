import React from 'react';
export default (p) =>
<html lang={p.lang}>
    <head>
        <meta charSet={p.charSet} />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{p.title}</title>
    </head>
    <body>
        {p.children}
        {p.scripts.map(
            (src, key) => <script src={src} key={key}></script>
        )}
    </body>
</html>;
