import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TextsmsIcon from "@mui/icons-material/Textsms";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import AVimage from "../assets/images/1.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Logo from "../assets/images/mainicon.svg";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import TodayIcon from "@mui/icons-material/Today";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import MuiDrawer from "@mui/material/Drawer";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const DrawerHeader1 = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar1 = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer1 = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const iconArray = [
  <DashboardIcon key="dashboard" />,
  <PersonAddAltIcon key="person" />,
  <TodayIcon key="today" />,
  <GroupsIcon key="groups" />,
  <GroupWorkIcon key="groupWork" />,
];
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [toglewidth, setTogleWidth] = React.useState("92%");
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  if (screenWidth < 480) {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} >
          <Toolbar style={{ backgroundColor: "#fff" }}>
            <div
              style={{
                display: "flex",
                flexGrow: "1",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{ mr: 2, ...(open && { display: "none" }) }}
                  >
                    <MenuIcon style={{ backgroundColor: "#B2B2B2" }} />
                  </IconButton>
                </div>
                <div>
                  <SearchIcon style={{ color: "#B2B2B2" }} />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ padding: "0rem 0.5rem" }}>
                  <NotificationsIcon style={{ color: "#B2B2B2" }} />
                </div>
                <div style={{ padding: "0rem 0.5rem" }}>
                  <TextsmsIcon style={{ color: "#B2B2B2" }} />
                </div>
                <div style={{ padding: "0rem 0rem", paddingLeft: "0.25rem" }}>
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      alt="Remy Sharp"
                      src={AVimage}
                      sx={{ width: 24, height: 24 }}
                    />
                  </Stack>
                </div>
                <div style={{ padding: "0rem 0.12rem" }}>
                  <ArrowDropDownIcon style={{ color: "#B2B2B2" }} />
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ padding: "0rem 0.5rem" }}>
                    <img src={Logo} alt="logo" style={{ width: "8rem" }} />
                  </div>
                  <div style={{ padding: "0rem 0.5rem" }}>
                    <ChevronLeftIcon />
                  </div>
                </div>
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          {/* i want to give name main menu */}

          <List>
            <div
              style={{
                fontFamily: "Roboto",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "18px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#686868",
                opacity: "50%",
                padding: "10px 0 10px 30px",
              }}
            >
              Main Menu
            </div>
            {[
              "Dashboard",
              "Recruitment",
              "Schedule",
              "Employee",
              "Department",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{iconArray[index]}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {/* <Divider /> */}
          <List>
            <div
              style={{
                fontFamily: "Roboto",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "18px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#686868",
                opacity: "50%",
                padding: "10px 0 10px 30px",
              }}
            >
              OTHER
            </div>
            {["Support", "Setting"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <SupportAgentIcon /> : <SettingsIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Main open={open} style={{ padding: "0" }}>
          <DrawerHeader />
        </Main>
      </Box>
    );
  } else if (screenWidth > 600 && screenWidth < 1024) {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar1 position="fixed" open={open} style={{width:toglewidth}}>
          <Toolbar style={{ backgroundColor: "#fff" }}>
            <div
              style={{
                display: "flex",
                flexGrow: "1",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                      marginRight: 5,
                      ...(open && { display: "none" }),
                    }}
                  >
                    <MenuIcon style={{ backgroundColor: "#B2B2B2" }}
                    onClick={()=>setTogleWidth("70%")}
                    />
                  </IconButton>
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Search"
                    style={{
                      border: "none",
                      outline: "none",
                      padding: "0.5rem",
                      borderRadius: "5px",
                    }}
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon style={{ color: "#B2B2B2" }} />
                      </InputAdornment>
                    }
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ padding: "0rem 0.5rem" }}>
                  <NotificationsIcon style={{ color: "#B2B2B2" }} />
                </div>
                <div style={{ padding: "0rem 0.5rem" }}>
                  <TextsmsIcon style={{ color: "#B2B2B2" }} />
                </div>
                <div style={{ padding: "0rem 0rem", paddingLeft: "0.25rem" }}>
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      alt="Remy Sharp"
                      src={AVimage}
                      sx={{ width: 24, height: 24 }}
                    />
                  </Stack>
                </div>
                <div style={{ padding: "0rem 0.12rem" }}>
                  <ArrowDropDownIcon style={{ color: "#B2B2B2" }} />
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar1>
        <Drawer1 variant="permanent" open={open}>
          <DrawerHeader1>
            <IconButton onClick={() => { handleDrawerClose(); setScreenWidth("92%"); }}>
              {theme.direction === "ltl" ? (<>
                
                <ChevronRightIcon 
                  />
                  </>
              ) : (
                <><img src={Logo} alt="logo" style={{ width: "3rem",height:"5rem" }} />
                {/* <ChevronLeftIcon /> */}
                </>
                
              )}
            </IconButton>
          </DrawerHeader1>
          <List>
          <div
              style={{
                fontFamily: "Roboto",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "18px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#686868",
                opacity: "50%",
                padding: "10px 0 10px 5px",
              }}
            >
              Main Menu
            </div>
            {[
              "Dashboard",
              "Recruitment",
              "Schedule",
              "Employee",
              "Department",
            ].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {iconArray[index]}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List>
          <div
              style={{
                fontFamily: "Roboto",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "18px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#686868",
                opacity: "50%",
                padding: "10px 0 10px 5px",
              }}
            >
              OTHER
            </div>
            {["Support", "Setting"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? <SupportAgentIcon /> : <SettingsIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer1>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader1 />
        </Box>
      </Box>
    );
  }
}
