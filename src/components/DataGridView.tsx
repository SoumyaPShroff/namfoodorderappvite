import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../styles/DataGridView.css';

function DataGridView({ dataRows = Rows, dataColumns = Columns, pageSize, rowsPerPageOptions = [5], checkboxSelection = false, height = 500, width = 800, }) {
  const [contextMenu, setContextMenu] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleContextMenu = (event, row) => {
    event.preventDefault();
    console.log('Right-click triggered:', row);
    setSelectedRow(row);
    setContextMenu({
      mouseX: event.clientX + 2,
      mouseY: event.clientY - 6,
    });
  };

  const handleClose = () => {
    setContextMenu(null);
    setSelectedRow(null);
  };

  return (
    <div className="datagrid-wrapper" style={{ height, width, position: 'relative' }}>
      <div
        className="datagrid-custom"
        onContextMenu={(e) => e.preventDefault()} // this prevents the browser default menu
      >
        <DataGrid
          rows={dataRows}
          columns={dataColumns}

          // if pageSize = 10, it becomes: pageSize={10}
          {...(pageSize !== undefined && { pageSize })}

          // use of ... if rowsPerPageOptions = [5, 10], it becomes: rowsPerPageOptions={[5, 10]}
          // if rowsPerPageOptions = undefined, nothing is added
          {...(rowsPerPageOptions !== undefined && { rowsPerPageOptions })}
          {...(checkboxSelection !== undefined && { checkboxSelection })}
          {...(height !== undefined && { height })}
          {...(width !== undefined && { width })}
          onCellContextMenu={(params, event) => handleContextMenu(event, params.row)}
        />
        {/* {contextMenu !== null && (
          <ul
            className="custom-context-menu"
            style={{
              top: contextMenu.mouseY,
              left: contextMenu.mouseX,
              position: 'absolute',
              backgroundColor: '#fff',
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
              padding: '0.5rem',
              margin: 0,
              listStyle: 'none',
              zIndex: 9999,
            }}
            onMouseLeave={handleClose}
          >
            <li onClick={() => { alert('Edit ' + selectedRow?.id); handleClose(); }}>Edit</li>
            <li onClick={() => { alert('Delete ' + selectedRow?.id); handleClose(); }}>Delete</li>
          </ul>
        )} */}
        <ul
  className="custom-context-menu"
  style={{
    position: 'absolute',
    top: '100px',
    left: '200px',
    zIndex: 9999,
    backgroundColor: 'white',
    border: '1px solid #ccc',
    padding: '10px',
  }}
>
  <li>Edit</li>
  <li>Delete</li>
</ul>
      </div>
    </div>
  );
}

export default DataGridView;
