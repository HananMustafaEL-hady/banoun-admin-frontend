
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";


function SidebarItem({ depthStep = 10, depth = 0, expanded, item, ...rest }) {
    const [collapsed, setCollapsed] = React.useState(true);
    const { name, sub_category, Icon, onClick: onClickProp } = item;
  //toggle
  console.log(sub_category);
    function toggleCollapse() {
      setCollapsed(prevValue => !prevValue);
    }
  
    function onClick(e) {
      if (Array.isArray(sub_category)) {
        toggleCollapse();
      }
      if (onClickProp) {
        onClickProp(e, item);
      }
    }
  
    let expandIcon;
  
    if (Array.isArray(sub_category) && sub_category.length) {
      expandIcon = !collapsed ? (
        <ExpandLessIcon
          className={
            "sidebar-item-expand-arrow" + " sidebar-item-expand-arrow-expanded"
          }
        />
      ) : (
        <ExpandMoreIcon className="sidebar-item-expand-arrow" />
      );
    }
  
    return (
      <>
        <ListItem
          className="sidebar-item"
          onClick={onClick}
          button
          dense
          {...rest}
        >
          <div
            style={{ paddingLeft: depth * depthStep }}
            className="sidebar-item-content"
          >
            {Icon && <Icon className="sidebar-item-icon" fontSize="small" />}
            <div className="sidebar-item-text">{name}</div>
          </div>
          {expandIcon}
        </ListItem>
        <Collapse in={!collapsed} timeout="auto" unmountOnExit>
          {Array.isArray(sub_category) ? (
            <List disablePadding dense>
              {sub_category.map((subItem, index) => (
                <React.Fragment key={`${subItem.name}${index}`}>
                  {subItem === "divider" ? (
                    <Divider style={{ margin: "6px 0" }} />
                  ) : (
                    <SidebarItem
                      depth={depth + 1}
                      depthStep={depthStep}
                      item={subItem}
                    />
                  )}
                </React.Fragment>
              ))}
            </List>
          ) : null}
        </Collapse>
      </>
    );
  }

  export default  SidebarItem;
