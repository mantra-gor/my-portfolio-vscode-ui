import * as React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView, TreeItem } from "@mui/x-tree-view";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { VscMarkdown } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

export default function AppTree({
  pages,
  selectedIndex,
  setSelectedIndex,
  currentComponent,
  setCurrentComponent,
  visiblePageIndexs,
  setVisiblePageIndexs,
}) {
  const navigate = useNavigate();
  const theme = useTheme();
  // const [selectedIndex, setSelectedIndex] = useState(-1);
  let { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  const page = pages.find((x) => x.route === pathname);

  useEffect(() => {
    if (page) {
      setSelectedIndex(page.index);
    }
  }, [page, setSelectedIndex]);

  function renderTreeItemBgColor(index) {
    if (theme.palette.mode === "dark") {
      return selectedIndex === index ? "rgba(144,202,249,0.16)" : "#252527";
    } else {
      return selectedIndex === index ? "#295fbf" : "#f3f3f3";
    }
  }

  function renderTreeItemColor(index) {
    if (theme.palette.mode === "dark") {
      return selectedIndex === index && currentComponent === "tree"
        ? "white"
        : "#bdc3cf";
    } else {
      return selectedIndex === index ? "#e2ffff" : "#69665f";
    }
  }

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ minWidth: 220, flexGrow: 1, overflowY: "auto", maxWidth: 400 }}
      // sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
      defaultExpanded={["node-1n"]}
    >
      <TreeItem
        nodeId="node-1n"
        label={
          <span style={{ fontSize: "14px", fontWeight: 600 }}>
            {t("OPEN EDITORS")}
          </span>
        }
        color="#bdc3cf"
        onClick={() => {
          // navigate("/");
          setSelectedIndex(-1);
        }}
      >
        {pages.map(({ index, nameEN, nameDE, route }) => (
          <TreeItem
            key={index} // Use a unique key for each TreeItem
            nodeId={`node-${index}`} // Use a unique nodeId for each TreeItem
            itemId={index}
            label={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <VscMarkdown color="#6997d5" size={18} />
                <div>
                  {i18n.language === "en"
                    ? nameEN.length > 15
                      ? nameEN.substring(0, 14) + "..."
                      : nameEN
                    : nameDE.length > 15
                    ? nameDE.substring(0, 14) + "..."
                    : nameDE}
                </div>
              </div>
            }
            sx={{
              color: renderTreeItemColor(index),
              backgroundColor: renderTreeItemBgColor(index),
              "&& .Mui-selected": {
                backgroundColor: renderTreeItemBgColor(index),
              },
            }}
            icon={<VscMarkdown color="#6997d5" />}
            onClick={() => {
              if (!visiblePageIndexs.includes(index)) {
                const newIndexs = [...visiblePageIndexs, index];
                setVisiblePageIndexs(newIndexs);
              }
              navigate(route);
              setSelectedIndex(index);
              setCurrentComponent("tree");
            }}
          />
        ))}
      </TreeItem>
    </TreeView>
  );
}
