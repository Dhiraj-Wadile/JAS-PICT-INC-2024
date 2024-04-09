import DataTable, { createTheme } from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

const theme = createTheme('inc_table_dark', {
  text: {
    primary: 'rgba(37, 99, 235, 0.9)',
    secondary: 'rgba(37, 99, 235, 0.6)',
  },
  background: {
    default: 'transparent',
  },
  context: {
    text: 'rgb(209, 213, 219)',
  },
  button: {
    color: 'rgb(209, 213, 219)',
    fill: 'rgb(209, 213, 219)',
    '&:focus': {
      backgroundColor: 'rgba(37, 99, 235, 0.9)'
    }
  },
  highlightOnHover: {
    default: 'rgba(7, 89, 133, 0.4)',
    text: 'rgb(209, 213, 219)',
  },
  striped: {
    default: 'rgba(7, 89, 133, .4)',
    text: 'rgb(209, 213, 219)',
  },
}, 'dark')

const customStyles = {
  table: {
    style: {
      border: '1px solid rgba(7, 89, 133, .9)',
      borderRadius: '0.75rem 0.75rem 0 0',
      color: theme.text.primary,
      backgroundColor: theme.background.default
    },
  },
  tableWrapper: {
    style: {
      borderRadius: '0.75rem',
      display: 'table',
    },
  },
  headRow: {
    style: {
      backgroundColor: 'rgba(7, 89, 133, 0.3)',
      fontSize: '1.05rem',
      minHeight: '52px',
      borderRadius: '0.75rem 0.75rem 0 0',
      marginBottom: '4px',
      borderBottom: '1px solid rgba(7, 89, 133, 0.9)',
    },
    denseStyle: {
      minHeight: '32px',
    },
  },
  headCells: {
    style: {
      paddingLeft: '16px',
      paddingRight: '16px',
      color: 'rgba(200, 162, 13, 0.9)',
      whiteSpace: 'normal',
    },
    draggingStyle: {
      cursor: 'move',
    },
  },
  contextMenu: {
    style: {
      backgroundColor: theme.context.background,
      fontSize: '18px',
      fontWeight: 400,
      color: theme.context.text,
      paddingLeft: '16px',
      paddingRight: '8px',
      transform: 'translate3d(0, -100%, 0)',
      transitionDuration: '125ms',
      transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
      willChange: 'transform',
    },
    activeStyle: {
      transform: 'translate3d(0, 0, 0)',
    },
  },
  cells: {
    style: {
      paddingLeft: '16px',
      paddingRight: '16px',
      wordBreak: 'break-word',
    },
  },
  rows: {
    style: {
      fontSize: '1rem',
      fontWeight: 400,
      letterSpacing: '0.8px',
      backgroundColor: 'rgba(7, 89, 133, .15)',
      minHeight: '1.75rem',
      borderBottom: '2px solid black',
      '&:last-of-type': {
        borderBottom: '2px solid  black'
      },
      '&:not(:last-of-type)': {
        borderBottom: '2px solid black '
      },
    },

    denseStyle: {
      minHeight: '1.75rem',
    },
    selectedHighlightStyle: {
      // use nth-of-type(n) to override other nth selectors
      '&:nth-of-type(n)': {
        color: theme.selected.text,
        backgroundColor: theme.selected.default,
        borderBottomColor: theme.background.default,
      },
    },
    highlightOnHoverStyle: {
      color: theme.highlightOnHover.text,
      backgroundColor: theme.highlightOnHover.default,
      transitionDuration: '0.15s',
      transitionProperty: 'background-color',
      borderBottomColor: theme.background.default,
      outlineStyle: 'solid',
      outlineWidth: '1px',
      outlineColor: theme.background.default,
      borderBottom: '2px solid  #00008B', // Add this line
    },
    stripedStyle: {
      color: theme.striped.text,
      backgroundColor: theme.striped.default,
    },
  },
  expanderRow: {
    style: {
      color: theme.text.primary,
      backgroundColor: theme.background.default,
    },
  },
  expanderCell: {
    style: {
      flex: '0 0 48px',
    },
  },
  expanderButton: {
    style: {
      color: theme.button.default,
      fill: theme.button.default,
      backgroundColor: 'transparent',
      borderRadius: '2px',
      transition: '0.25s',
      height: '100%',
      width: '100%',
      '&:hover:enabled': {
        cursor: 'pointer',
      },
      '&:disabled': {
        color: theme.button.disabled,
      },
      '&:hover:not(:disabled)': {
        cursor: 'pointer',
        backgroundColor: theme.button.hover,
      },
      '&:focus': {
        outline: 'none',
        backgroundColor: theme.button.focus,
      },
      svg: {
        margin: 'auto',
      },
    },
  },
  pagination: {
    style: {
      color: theme.text.secondary,
      fontSize: '0.9rem',
      minHeight: '2rem',
      backgroundColor: 'rgba(7, 89, 133, 0.25)',
      border: '1px solid rgba(7, 89, 133, 0.9)',
      borderTop: 'none',
      borderRadius: '0 0 0.75rem 0.75rem',
    },
    pageButtonsStyle: {
      borderRadius: '50%',
      height: '40px',
      width: '40px',
      padding: '8px',
      margin: 'px',
      cursor: 'pointer',
      transition: '0.4s',
      color: theme.button.default,
      fill: theme.button.default,
      backgroundColor: 'transparent',
      '&:disabled': {
        cursor: 'unset',
        color: theme.button.disabled,
        fill: theme.button.disabled,
      },
      '&:hover:not(:disabled)': {
        backgroundColor: theme.button.hover,
      },
      '&:focus': {
        outline: 'none',
        backgroundColor: theme.button.focus,
      },
    },
  },
  noData: {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.text.primary,
      backgroundColor: theme.background.default,
    },
  },
  progress: {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.text.primary,
      backgroundColor: theme.background.default,
    },
  },
}

function Table(props) {

  return (
    <div className={props.outerClassName}>
      <DataTableExtensions {...props} fileName={props.title} exportHeaders>
        <DataTable
          {...props}
          pagination={props.pagination === false ? false : true}
          fixedHeader
          fixedHeaderScrollHeight='400px'
          highlightOnHover
          theme='inc_table_dark'
          progressPending={props.loading}
          customStyles={customStyles}
        />

      </DataTableExtensions>
    </div>
  );
}

export default Table;