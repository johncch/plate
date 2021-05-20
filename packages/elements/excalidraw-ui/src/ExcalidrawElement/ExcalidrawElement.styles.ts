import { ClassName } from '@udecode/slate-plugins-ui-fluent';
import { ExcalidrawElementStyleSet } from './ExcalidrawElement.types';

export const getExcalidrawElementStyles = ({
  className,
}: ClassName): ExcalidrawElementStyleSet => {
  return {
    root: [
      {
        // Insert css properties
        position: 'relative',
      },
      className,
    ],
    excalidrawWrapper: {
      padding: '75% 0 0 0',
      position: 'relative',
    },
    iframe: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
    },
    input: {
      fontSize: '0.85em',
      width: '100%',
      padding: '0.5em',
      border: '2px solid #ddd',
      background: '#fafafa',
      marginTop: '5px',
    },
  };
};
