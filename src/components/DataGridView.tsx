import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../styles/DataGridView.css';
import { Menu, MenuItem } from '@mui/material';

function DataGridView({
  dataRows = Rows,
  dataColumns = Columns,
  pageSize,
  rowsPerPageOptions = [5],
  checkboxSelection = false,
  height = 500,
  width = 800,
}) {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRow, setSelectedRow] = useState(null);

  // const handleContextMenu = (
  //   event: React.MouseEvent<HTMLElement>,
  //   row: any
  // ) => {
  //   event.preventDefault(); // prevent browser menu
  //   setAnchorEl(event.currentTarget); // anchor to clicked cell
  //   setSelectedRow(row);
  // };

  const handleContextMenu = () => {
    event.preventDefault();

    const rowId = event.currentTarget?.parentElement?.dataset?.id;
    const clickedRow = dataRows.find(r => r.id.toString() === rowId);

    setSelectedRow(clickedRow);
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
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

          //onCellClick - for left click
          // onCellClick={(params, event) => {
          //   //  if (event.button === 2) { // right-click - not recgnising right click
          //   handleContextMenu(event, params.row);
          //   console.log('✅ Left click on:', params.row);
          //   //  }
          // }}
          // //oncellcontextmenu - for right click
          // onCellContextMenu={(params, event) => {
          //   event.preventDefault();
          //   console.log('✅ Rightclick on:', params.row);
          //   handleContextMenu(event, params.row);
          // }}
          componentsProps={{
            cell: {
              onContextMenu: (event) => {
                event.preventDefault();

                const rowId = event.currentTarget?.parentElement?.dataset?.id;
                const clickedRow = dataRows.find(r => r.id.toString() === rowId);

                console.log("✅ Right click on row:", clickedRow);

                // You can now trigger your custom context menu logic here:
                handleContextMenu(event, clickedRow);
              },
            }
          }}
        />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={() => { console.log('Edit', selectedRow); }}>Edit</MenuItem>
          <MenuItem onClick={() => { console.log('Delete', selectedRow); }}>Delete</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default DataGridView;
