// Modules

declare module 'citation-js' {
  export = Cite;
}

declare module 'react-html-parser' {
  import {ReactElement} from 'react';

  export default function ReactHtmlParser(
    html: string,
    options?: {
      decodeEntities?: boolean;
      transform?: (
        node: {
          type: string;
          name: string;
          children: any[];
          next: any;
          prev: any;
          parent: any;
          data: string;
        },
        index: number,
      ) => ReactElement<any> | undefined | null;
      preprocessNodes?: (nodes: any) => any;
    },
  ): ReactElement<any>;
}

declare module '*.bib' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.webm' {
  const value: string;
  export default value;
}

declare module '*.mp4' {
  const value: string;
  export default value;
}
