import React from "react";
import {
  fade,
  makeStyles,
  withStyles,
  useTheme
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import RedeemIcon from "@material-ui/icons/Redeem";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Slider from "@material-ui/core/Slider";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import Divider from "@material-ui/core/Divider";
import ReplyIcon from "@material-ui/icons/Reply";
import SyncIcon from "@material-ui/icons/Sync";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Hidden from "@material-ui/core/Hidden";
import Portal from "@material-ui/core/Portal";
import SvgIcon from "@material-ui/core/SvgIcon";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import MuiPickersUtilsProvider from "@material-ui/pickers/MuiPickersUtilsProvider";
import DatePicker from "@material-ui/pickers/DatePicker";
import DateFnsUtils from "@date-io/date-fns";
import background from "./picture/gameBackground.png";

const useStyles = makeStyles(theme => ({
  grow: {
    overflow: "hidden",
    flexGrow: 1,
    backgroundColor: "#010440"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    color: theme.palette.common.white,
    textShadow: "2px 2px #000000",
    paddingLeft: "50px",
    backgroundImage:
      "linear-gradient(to right, rgba(3, 236, 252,.4), rgba(2, 6, 89,.0))",
    borderLeft: "5px solid #03ecfc"
  },
  titleBox: {
    paddingTop: "100px",
    marginBottom: "50px",
    backgroundImage: `url(${background})`
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginBottom: theme.spacing(1),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 300,
      "&:focus": {
        width: 400
      }
    },
    [theme.breakpoints.down("md")]: {
      width: 200,
      "&:focus": {
        width: 300
      }
    }
  },
  sectionDesktop: {
    width: "100%",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    width: "100%",
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  root: {
    flexGrow: 1
  },
  mainContainer: {
    backgroundColor: "#010326"
  },
  gridTile: {
    height: 450,
    margin: "10px",
    "&:hover": {
      transform: "scale(1.03)"
    }
  },
  listItem: {
    color: theme.palette.common.white,
    backgroundImage:
      "linear-gradient(to right, rgba(3, 236, 252,.1), rgba(2, 6, 89,0))",
    "&:hover": {
      backgroundColor: "rgba(3, 236, 252,.2)"
    }
  },
  listItemActive: {
    borderLeft: "2px solid #03ecfc",
    color: theme.palette.common.white,
    backgroundImage:
      "linear-gradient(to right, rgba(3, 236, 252,.3), rgba(2, 6, 89,0))",
    "&:hover": {
      backgroundColor: "rgba(3, 236, 252,.3)"
    }
  },
  filterContainer: {
    width: "90%",
    margin: "auto",
    color: theme.palette.common.white,
    backgroundImage:
      "linear-gradient(to left, rgba(255, 0, 132,.2), rgba(2, 6, 89,0))",
    padding: "10px"
  },

  filterContainerM: {
    width: "100%",
    color: theme.palette.common.white,
    padding: "10px"
  },
  buyBtn: {
    backgroundImage:
      "linear-gradient(to right, rgba(3, 11, 166,1), rgba(2, 6, 89,1))"
  },
  preorderBtn: {
    backgroundImage:
      "linear-gradient(to right, rgba(214, 153, 39,1), rgba(2, 6, 89,0.1))"
  },
  orderByBtn: {
    color: theme.palette.common.white,
    backgroundImage:
      "linear-gradient(to right, rgba(3, 236, 252,7), rgba(2, 6, 89,0))",
    "&:hover": {
      backgroundColor: "rgba(3, 236, 252,.5)"
    }
  },
  appbar1: {
    backgroundColor: "#010326",
    color: theme.palette.common.white
  },
  appbar2: {
    backgroundColor: "#010326",
    color: theme.palette.common.white,
    zIndex: 1099
  },
  giveawayBtn: {
    color: "#03ecfc",
    "&:hover": {
      backgroundColor: "rgba(3, 236, 252,.3)"
    }
  },
  pageBtn: {
    color: theme.palette.common.white,
    backgroundImage:
      "linear-gradient(to top, rgba(3, 236, 252,.1), rgba(2, 6, 89,0))",
    borderBottom: "2px solid #03ecfc",
    "&:hover": {
      backgroundColor: "rgba(3, 236, 252,.25)"
    }
  },
  appbar2Btn: {
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: "rgba(3, 236, 252,.25)"
    }
  },
  inputMainRoot: {
    color: "inherit",
    width: "100%"
  },
  inputMainInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",

    [theme.breakpoints.up("md")]: {
      width: "auto",

      "&:focus": {
        width: "auto"
      }
    }
  },
  mainSearch: {
    position: "relative",
    display: "flex",
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    width: "100%",
    height: "60%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  footer: {
    paddingLeft: "50px",
    marginTop: "100px",
    backgroundColor: "#010326",
    color: theme.palette.common.white
  },
  footerContent: {
    marginTop: "20px",
    marginBottom: "20px"
  },
  iconBtn: {
    color: "#ff0084"
  },
  supportBtn: {
    color: theme.palette.common.white,
    backgroundImage:
      "linear-gradient(to right, rgba(255, 0, 132,1), rgba(2, 6, 89,1))"
  },
  text: {
    color: "#ffffff",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "rgba(255, 0, 132,.5)"
    }
  },
  tweetBox: {
    width: "100%",
    minHeight: "250px",
    color: theme.palette.common.white,
    backgroundImage:
      "linear-gradient(135deg, rgba(255, 0, 132,0.5), rgba(2, 6, 89,0.5))",
    paddingBottom: "10px"
  },
  tweetContainer: {
    width: "80%",
    minHeight: "70%",
    backgroundColor: "rgba(0, 0, 0,0.2)"
  },
  tweetTitle: {
    paddingTop: "10px",
    paddingLeft: "50px"
  },
  tweetContent: {
    paddingTop: "15px",
    paddingBottom: "5px"
  },
  tweetStep: {
    backgroundColor: "rgba(255,255,255,0)",

    "& .MuiMobileStepper-dotActive": {
      backgroundColor: "#ff0084"
    }
  },
  tweetStepBtn: {
    "&:hover": {
      color: "#e3e3e3",
      transform: "scale(1.2)"
    }
  },
  xboxIcon: {
    backgroundColor: "#0c7a00",
    padding: "5px",
    borderRadius: "50%"
  },
  playstationIcon: {
    backgroundColor: "#2a71db",
    padding: "5px",
    borderRadius: "50%"
  },
  windowIcon: {
    backgroundColor: "#35b9de",
    padding: "5px",
    borderRadius: "50%"
  },
  calendar: {
    "& .MuiTextField-root, & .MuiInputBase-root": {
      color: "#ffffff"
    },
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid #ff0084"
    }
  },
  gridList: {
    height: "calc(100% + 100px)"
  }
}));

const StyledBadge = withStyles(theme => ({
  badge: {
    backgroundColor: "#ff0084",
    color: "#ff0084",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""'
    }
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0
    }
  }
}))(Badge);

const StyledMenu = withStyles(theme => ({
  paper: {
    border: "1px solid #d3d4d5",
    width: "20%",
    [theme.breakpoints.down("md")]: {
      width: "40%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%"
    }
    // backgroundImage:
    //   "linear-gradient(to right, rgba(3, 236, 252,.1), rgba(2, 6, 89,0))"
  }
}))(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,

      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

const CustomSlider = withStyles({
  root: {
    color: "#ff0084",
    height: 3,
    padding: "13px 0",
    width: "80%"
  },
  thumb: {
    backgroundColor: "#fff",
    border: "1px solid currentColor",

    boxShadow: "#ebebeb 0px 2px 2px",
    "&:focus,&:hover,&$active": {
      boxShadow: "#ccc 0px 2px 3px 1px"
    },
    "& .bar": {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 3
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: 3
  }
})(Slider);

const CustomCheckbox = withStyles({
  root: {
    color: "#ff0084",
    "&$checked": {
      color: "#ff0084"
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const games = [
  {
    t: "Max Payne",
    a: 1,
    code: "ABC01"
  },
  {
    t: "Call of Duty",
    a: 2,
    code: "ABC02"
  },
  {
    t: "Tomb Raider",
    a: 3,
    code: "ABC03"
  },
  {
    t: "Need for Speed",
    a: 1,
    code: "ABC04"
  },
  {
    t: "Assasin Creed",
    a: 2,
    code: "ABC05"
  },
  {
    t: "Monster Hunter World",
    a: 3,
    code: "ABC06"
  },
  {
    t: "Left 4 Dead",
    a: 1,
    code: "ABC07"
  },
  {
    t: "Rainbow Six Siege",
    a: 2,
    code: "ABC08"
  },
  {
    t: "Planet Tycoon",
    a: 3,
    code: "ABC09"
  }
];

const tweetSteps = [
  {
    typo: "San Francisco – Oakland Bay Bridge, United States"
  },
  {
    typo: "Step 2"
  },
  {
    typo: "Step 3"
  },
  {
    typo: "Step 4"
  },
  {
    typo: "Step 5"
  }
];

const options = ["Popular", "Release Date", "Price"];

const languages = [
  "English",
  "France",
  "Simplified Chinese",
  "Traditional Chinese",
  "Japanese",
  "Korean",
  "Spanish",
  "Vietnamese"
];

export default function Catalog() {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [openPrice, setOpenPrice] = React.useState(false);
  const [openAvailability, setOpenAvailability] = React.useState(false);
  const [openGenre, setOpenGenre] = React.useState(false);
  const [openDeveloper, setOpenDeveloper] = React.useState(false);
  const [openPlatform, setOpenPlatform] = React.useState(false);
  const [openActivation, setOpenActivation] = React.useState(false);
  const [openReleaseDate, setOpenReleaseDate] = React.useState(false);

  const [value, setValue] = React.useState([10, 100]);
  const [openFilter, setOpenFilter] = React.useState(false);

  const [showSearchBar, setShowSearchBar] = React.useState(false);
  const container = React.useRef(null);

  const [availabilityState, setAvailabilityState] = React.useState({
    checkedA: true,
    checkedU: true,
    checkedP: true
  });

  const [genreState, setGenreState] = React.useState({
    checkedAc: true,
    checkedAd: true,
    checkedAr: true,
    checkedRa: true,
    checkedRp: true,
    checkedSt: true
  });

  const [developerState, setDeveloperState] = React.useState({
    checkedSq: true,
    checkedEa: true,
    checkedCa: true,
    checkedSo: true,
    checkedUb: true
  });

  const [platformState, setPlatformState] = React.useState({
    checkedXb: true,
    checkedPs: true,
    checkedPc: true
  });

  const [activationState, setActivationState] = React.useState({
    checkedAv: true,
    checkedUa: true,
    checkedPr: true
  });

  const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);
  const [selectedLanguage, setSelectedLanguage] = React.useState(1);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [orderAnchorEl, setOrderAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const [date, changeDate] = React.useState(new Date());

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tweetSteps.length;

  const handleClickListLanguage = event => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleMenuLanguageClick = (event, index) => {
    setSelectedLanguage(index);
    setLanguageAnchorEl(null);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleClickFilter = () => {
    setOpenFilter(!openFilter);
  };

  const handleClickListItem = event => {
    setOrderAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOrderAnchorEl(null);
  };

  const handleOrderClose = () => {
    setOrderAnchorEl(null);
  };

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleClickPrice = () => {
    setOpenPrice(!openPrice);
  };

  const handleClickAvailability = () => {
    setOpenAvailability(!openAvailability);
  };

  const handleClickGenre = () => {
    setOpenGenre(!openGenre);
  };

  const handleClickDeveloper = () => {
    setOpenDeveloper(!openDeveloper);
  };

  const handleClickPlatform = () => {
    setOpenPlatform(!openPlatform);
  };

  const handleClickActivation = () => {
    setOpenActivation(!openActivation);
  };

  const handleClickReleaseDate = () => {
    setOpenReleaseDate(!openReleaseDate);
  };

  const handleAvailabilityChange = name => event => {
    setAvailabilityState({
      ...availabilityState,
      [name]: event.target.checked
    });
  };

  const handleGenreChange = name => event => {
    setGenreState({ ...genreState, [name]: event.target.checked });
  };

  const handleDeveloperChange = name => event => {
    setDeveloperState({ ...developerState, [name]: event.target.checked });
  };

  const handlePlatformChange = name => event => {
    setPlatformState({ ...platformState, [name]: event.target.checked });
  };

  const handleActivationChange = name => event => {
    setActivationState({ ...activationState, [name]: event.target.checked });
  };

  const handleValueChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSetShowSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const renderFilter = (
    <React.Fragment>
      {/* Price List Filter */}
      <ListItem
        button
        className={openPrice ? classes.listItemActive : classes.listItem}
        onClick={handleClickPrice}
      >
        <ListItemText primary="Price" />
        {openPrice ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        className={classes.filterContainer}
        in={openPrice}
        timeout="auto"
        unmountOnExit
      >
        <Box display="flex" flexDirection="row" justifyContent="center">
          <CustomSlider
            min={10}
            max={100}
            getAriaLabel={index =>
              index === 0 ? "Minimum price" : "Maximum price"
            }
            defaultValue={[10, 1000]}
            value={value}
            onChange={handleValueChange}
          />
        </Box>
        <Box
          marginTop={3}
          display="flex"
          flexDirection="row"
          justifyContent="space-evenly"
        >
          <Typography gutterBottom>$ {value[0]}</Typography>
          <Typography gutterBottom>-</Typography>
          <Typography gutterBottom>$ {value[1]}</Typography>
        </Box>
      </Collapse>
      {/* Availability List Filter */}
      <ListItem
        button
        className={openAvailability ? classes.listItemActive : classes.listItem}
        onClick={handleClickAvailability}
      >
        <ListItemText primary="Availability" />
        {openAvailability ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        className={classes.filterContainer}
        in={openAvailability}
        timeout="auto"
        unmountOnExit
      >
        <FormGroup column>
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={availabilityState.checkedA}
                onChange={handleAvailabilityChange("checkedA")}
                value="checkedA"
              />
            }
            label="Availability"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={availabilityState.checkedU}
                onChange={handleAvailabilityChange("checkedU")}
                value="checkedU"
              />
            }
            label="Unavailability"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={availabilityState.checkedP}
                onChange={handleAvailabilityChange("checkedP")}
                value="checkedP"
              />
            }
            label="Pre-order"
          />
        </FormGroup>
      </Collapse>
      {/* Genre List Filter */}
      <ListItem
        button
        className={openGenre ? classes.listItemActive : classes.listItem}
        onClick={handleClickGenre}
      >
        <ListItemText primary="Genre" />
        {openGenre ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        className={classes.filterContainer}
        in={openGenre}
        timeout="auto"
        unmountOnExit
      >
        <FormGroup column>
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={genreState.checkedAc}
                onChange={handleGenreChange("checkedAc")}
                value="checkedAc"
              />
            }
            label="Action"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={genreState.checkedAd}
                onChange={handleGenreChange("checkedAd")}
                value="checkedAd"
              />
            }
            label="Adventure"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={genreState.checkedAr}
                onChange={handleGenreChange("checkedAr")}
                value="checkedAr"
              />
            }
            label="Arcade"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={genreState.checkedRa}
                onChange={handleGenreChange("checkedRa")}
                value="checkedRa"
              />
            }
            label="Racing"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={genreState.checkedRp}
                onChange={handleGenreChange("checkedRp")}
                value="checkedRp"
              />
            }
            label="RPG"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={genreState.checkedSt}
                onChange={handleGenreChange("checkedSt")}
                value="checkedSt"
              />
            }
            label="Strategy"
          />
        </FormGroup>
      </Collapse>
      {/* Developer List Filter */}
      <ListItem
        button
        className={openDeveloper ? classes.listItemActive : classes.listItem}
        onClick={handleClickDeveloper}
      >
        <ListItemText primary="Developer" />
        {openDeveloper ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        className={classes.filterContainer}
        in={openDeveloper}
        timeout="auto"
        unmountOnExit
      >
        <FormGroup column>
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={developerState.checkedCa}
                onChange={handleDeveloperChange("checkedCa")}
                value="checkedCa"
              />
            }
            label="Capcom"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={developerState.checkedEa}
                onChange={handleDeveloperChange("checkedEa")}
                value="checkedEa"
              />
            }
            label="Electronic Arts"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={developerState.checkedUb}
                onChange={handleDeveloperChange("checkedUb")}
                value="checkedUb"
              />
            }
            label="Ubisoft"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={developerState.checkedSo}
                onChange={handleGenreChange("checkedSo")}
                value="checkedSo"
              />
            }
            label="Sony"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={developerState.checkedSq}
                onChange={handleGenreChange("checkedSq")}
                value="checkedSq"
              />
            }
            label="Square Enix"
          />
        </FormGroup>
      </Collapse>
      {/* Platform List Filter */}
      <ListItem
        button
        className={openPlatform ? classes.listItemActive : classes.listItem}
        onClick={handleClickPlatform}
      >
        <ListItemText primary="Platform" />
        {openPlatform ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        className={classes.filterContainer}
        in={openPlatform}
        timeout="auto"
        unmountOnExit
      >
        <FormGroup column>
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={platformState.checkedXb}
                onChange={handlePlatformChange("checkedXb")}
                value="checkedXb"
              />
            }
            label="Xbox"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={platformState.checkedPs}
                onChange={handlePlatformChange("checkedPs")}
                value="checkedPs"
              />
            }
            label="Playstation"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={platformState.checkedPc}
                onChange={handlePlatformChange("checkedPc")}
                value="checkedPc"
              />
            }
            label="Window"
          />
        </FormGroup>
      </Collapse>
      {/* Activation List Filter */}
      <ListItem
        button
        className={openActivation ? classes.listItemActive : classes.listItem}
        onClick={handleClickActivation}
      >
        <ListItemText primary="Activation" />
        {openActivation ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        className={classes.filterContainer}
        in={openActivation}
        timeout="auto"
        unmountOnExit
      >
        <FormGroup column>
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={activationState.checkedAv}
                onChange={handleActivationChange("checkedAv")}
                value="checkedAv"
              />
            }
            label="Available"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={activationState.checkedUa}
                onChange={handleActivationChange("checkedUa")}
                value="checkedUa"
              />
            }
            label="Unavailable"
          />
          <FormControlLabel
            control={
              <CustomCheckbox
                checked={activationState.checkedPr}
                onChange={handleActivationChange("checkedPr")}
                value="checkedPr"
              />
            }
            label="Pre-order"
          />
        </FormGroup>
      </Collapse>
      {/* Release Date List Filter */}
      <ListItem
        button
        className={openReleaseDate ? classes.listItemActive : classes.listItem}
        onClick={handleClickReleaseDate}
      >
        <ListItemText primary="Release Date" />
        {openReleaseDate ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        className={classes.filterContainer}
        in={openReleaseDate}
        timeout="auto"
        unmountOnExit
      >
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            className={classes.calendar}
            variant="inline"
            value={date}
            onChange={changeDate}
          />
        </MuiPickersUtilsProvider>
      </Collapse>
    </React.Fragment>
  );

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-haspopup="true" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-haspopup="true" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
      <div className={classes.grow}>
        <AppBar className={classes.appbar1} position="sticky">
          <Toolbar>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={5}
              >
                <Grid item>
                  <Typography variant="h6" noWrap>
                    Material-UI
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="default"
                    className={classes.giveawayBtn}
                    startIcon={<RedeemIcon />}
                  >
                    Giveaway
                  </Button>
                </Grid>
                <Grid item>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                      }}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </div>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item>
                      <IconButton
                        aria-label="show 4 items in cart"
                        color="inherit"
                      >
                        <Badge badgeContent={4} color="secondary">
                          <ShoppingCartIcon />
                        </Badge>
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" noWrap>
                        Remagi
                      </Typography>
                    </Grid>
                    <Grid item>
                      <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                      >
                        <StyledBadge
                          overlap="circle"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right"
                          }}
                          variant="dot"
                        >
                          <Avatar
                            alt="Remagi"
                            src="/static/images/avatar/1.jpg"
                          />
                        </StyledBadge>
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <div className={classes.sectionMobile}>
              <Grid container direction="column" alignItems="center">
                <Grid
                  item
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={5}
                >
                  <Grid item>
                    <Typography variant="h6" noWrap>
                      Material-UI
                    </Typography>
                  </Grid>
                  <Grid item>
                    <IconButton className={classes.giveawayBtn} color="inherit">
                      <RedeemIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    {showSearchBar ? (
                      <Portal container={container.current}>
                        <div className={classes.search}>
                          <div className={classes.searchIcon}>
                            <SearchIcon />
                          </div>
                          <InputBase
                            placeholder="Search…"
                            classes={{
                              root: classes.inputRoot,
                              input: classes.inputInput
                            }}
                            inputProps={{ "aria-label": "search" }}
                          />
                        </div>
                      </Portal>
                    ) : null}
                    <IconButton
                      color="inherit"
                      onClick={handleSetShowSearchBar}
                    >
                      <SearchIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      spacing={2}
                    >
                      <Grid item>
                        <IconButton
                          aria-label="show 4 items in cart"
                          color="inherit"
                        >
                          <Badge badgeContent={4} color="secondary">
                            <ShoppingCartIcon />
                          </Badge>
                        </IconButton>
                      </Grid>

                      <Grid item>
                        <IconButton
                          edge="end"
                          aria-label="account of current user"
                          aria-controls={mobileMenuId}
                          aria-haspopup="true"
                          onClick={handleMobileMenuOpen}
                          color="inherit"
                        >
                          <StyledBadge
                            overlap="circle"
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "right"
                            }}
                            variant="dot"
                          >
                            <Avatar
                              alt="Remagi"
                              src="/static/images/avatar/1.jpg"
                            />
                          </StyledBadge>
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <div ref={container} />
                </Grid>
              </Grid>
            </div>
          </Toolbar>
        </AppBar>

        <AppBar className={classes.appbar2} position="relative">
          <Toolbar>
            <Box
              width="100vw"
              display="flex"
              justifyContent="center"
              m={1}
              p={1}
            >
              <Button className={classes.appbar2Btn} color="inherit">
                Home
              </Button>
              <Button className={classes.pageBtn} color="inherit">
                Catalog
              </Button>
              <Button className={classes.appbar2Btn} color="inherit">
                News
              </Button>
              <Button className={classes.appbar2Btn} color="inherit">
                PC
              </Button>
              <Button className={classes.appbar2Btn} color="inherit">
                Playstation
              </Button>
              <Button className={classes.appbar2Btn} color="inherit">
                Xbox
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        {renderMobileMenu}
        {renderMenu}

        {/*Main content*/}
        <Container maxWidth="lg" className={classes.mainContainer}>
          {/* Title */}
          <Box className={classes.titleBox}>
            <Typography className={classes.title} variant="h3" noWrap>
              Catalog
            </Typography>
            <Typography className={classes.title} variant="h5" noWrap>
              GAMES
            </Typography>
          </Box>

          {/* Search content */}
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
          >
            <Grid item xs={12} sm={6} md={3}>
              <div className={classes.root}>
                <List component="nav">
                  <ListItem
                    button
                    className={classes.orderByBtn}
                    aria-haspopup="true"
                    aria-controls="lock-menu"
                    onClick={handleClickListItem}
                  >
                    <ListItemText
                      primary="Order by:"
                      secondary={options[selectedIndex]}
                    />
                  </ListItem>
                </List>
                <StyledMenu
                  id="lock-menu"
                  anchorEl={orderAnchorEl}
                  keepMounted
                  open={Boolean(orderAnchorEl)}
                  onClose={handleOrderClose}
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                  }}
                >
                  {options.map((option, index) => (
                    <StyledMenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={event => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </StyledMenuItem>
                  ))}
                </StyledMenu>
              </div>
            </Grid>
            <Hidden mdUp>
              <Grid item xs={12} sm={6}>
                <ListItem
                  button
                  className={
                    openFilter ? classes.listItemActive : classes.listItem
                  }
                  onClick={handleClickFilter}
                >
                  <ListItemText primary="Filter" />
                  {openFilter ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
              </Grid>
              <Collapse
                className={classes.filterContainerM}
                in={openFilter}
                timeout="auto"
                unmountOnExit
              >
                {renderFilter}
              </Collapse>
            </Hidden>

            <Grid item xs={12} md={9}>
              <div className={classes.mainSearch}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputMainRoot,
                    input: classes.inputMainInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Grid>
          </Grid>

          {/* Main body*/}
          <Grid container spacing={5}>
            {/* Filter */}
            <Hidden smDown>
              <Grid item md={3}>
                {renderFilter}
              </Grid>
            </Hidden>

            {/* Main Content */}
            <Grid item xs={12} md={9}>
              <Grid container className={classes.gridList} spacing={3}>
                <GridList cellHeight="auto">
                  {games.map(game => (
                    <Grid item xs={12} sm={6} md={4}>
                      <GridListTile className={classes.gridTile}>
                        <img
                          src="https://source.unsplash.com/random"
                          alt="broken"
                        />
                        <GridListTileBar
                          titlePosition="top"
                          title={
                            <Grid container spacing={2}>
                              <Grid item>
                                <SvgIcon className={classes.xboxIcon}>
                                  <path
                                    id="Imported Path"
                                    fill="none"
                                    stroke="black"
                                    stroke-width="1"
                                    d="M 12.00,2.00
           C 10.38,2.00 8.38,2.50 6.88,3.41
             6.82,3.44 6.71,3.54 6.59,3.62
             8.23,2.69 11.92,5.62 12.00,5.69
             12.08,5.62 15.77,2.69 17.41,3.62
             17.29,3.54 17.18,3.44 17.12,3.41
             15.62,2.50 13.88,2.00 12.00,2.00 Z
           M 5.69,4.59
           C 5.35,4.65 4.98,4.87 4.66,5.22
             3.00,7.00 2.00,9.38 2.00,12.00
             2.00,14.59 2.98,16.94 4.59,18.72
             4.06,16.15 4.55,14.35 6.00,12.00
             7.45,9.65 10.00,7.00 10.00,7.00
             7.90,5.02 6.41,4.66 6.03,4.59
             5.93,4.57 5.80,4.57 5.69,4.59 Z
           M 4.59,18.72
           C 6.42,20.73 9.08,22.00 12.00,22.00
             14.93,22.00 17.58,20.73 19.41,18.72
             19.40,18.69 19.19,17.39 17.84,15.53
             16.79,14.08 13.67,10.58 12.00,9.00
             10.33,10.58 7.21,14.05 6.16,15.50
             4.81,17.36 4.60,18.69 4.59,18.72 Z
           M 19.41,18.72
           C 21.02,16.94 22.00,14.59 22.00,12.00
             22.00,9.38 21.00,7.00 19.34,5.22
             18.91,4.75 18.37,4.52 17.97,4.59
             17.59,4.66 16.10,5.02 14.00,7.00
             14.00,7.00 16.55,9.65 18.00,12.00
             19.45,14.35 19.94,16.15 19.41,18.72 Z"
                                  />
                                </SvgIcon>
                              </Grid>
                              <Grid item>
                                <SvgIcon className={classes.playstationIcon}>
                                  <path
                                    id="Imported Path"
                                    fill="none"
                                    stroke="black"
                                    stroke-width="1"
                                    d="M 9.00,3.19
           C 9.00,3.19 9.00,19.81 9.00,19.81
             9.00,19.81 12.59,20.91 12.59,20.91
             12.59,20.91 12.59,7.00 12.59,7.00
             12.59,6.60 12.61,6.39 12.81,6.19
             12.91,5.99 13.11,5.99 13.31,6.09
             13.81,6.29 14.09,6.70 14.09,7.50
             14.09,7.50 14.09,13.00 14.09,13.00
             15.29,13.60 16.29,13.60 17.09,13.00
             17.89,12.40 18.31,11.50 18.31,10.00
             18.31,8.40 18.01,7.39 17.31,6.59
             16.71,5.79 15.60,5.09 14.00,4.59
             12.00,3.99 10.30,3.49 9.00,3.19 Z
           M 8.00,13.59
           C 8.00,13.59 3.41,15.19 3.41,15.19
             3.41,15.19 2.69,15.50 2.69,15.50
             1.59,16.00 1.00,16.50 1.00,17.00
             1.10,17.60 1.31,18.41 2.81,18.91
             4.21,19.41 5.29,19.61 8.09,18.81
             8.09,18.81 8.09,17.00 8.09,17.00
             5.39,17.90 4.99,17.79 4.59,17.59
             4.20,17.39 4.21,17.20 4.31,17.09
             4.61,16.89 5.69,16.50 5.69,16.50
             5.69,16.50 8.00,15.69 8.00,15.69
             8.00,15.69 8.00,13.59 8.00,13.59 Z
           M 18.19,14.38
           C 17.86,14.36 17.51,14.38 17.19,14.41
             16.09,14.41 15.11,14.61 13.91,14.91
             13.91,14.91 13.91,17.00 13.91,17.00
             13.91,17.00 16.09,16.19 16.09,16.19
             16.09,16.19 17.31,15.81 17.31,15.81
             17.31,15.81 17.79,15.70 18.09,15.59
             18.59,15.49 19.19,15.69 19.19,15.69
             19.49,15.69 19.69,15.80 19.69,16.00
             19.79,16.20 19.59,16.30 19.09,16.50
             19.09,16.50 18.00,16.91 18.00,16.91
             18.00,16.91 14.00,18.41 14.00,18.41
             14.00,18.41 14.00,20.50 14.00,20.50
             14.00,20.50 15.81,19.91 15.81,19.91
             15.81,19.91 20.81,18.09 20.81,18.09
             20.81,18.09 21.41,17.81 21.41,17.81
             22.61,17.41 23.10,16.91 23.00,16.31
             23.00,15.71 22.29,15.30 21.09,14.91
             20.12,14.61 19.16,14.41 18.19,14.38 Z"
                                  />
                                </SvgIcon>
                              </Grid>
                              <Grid item>
                                <SvgIcon className={classes.windowIcon}>
                                  <path
                                    id="Imported Path"
                                    fill="none"
                                    stroke="black"
                                    stroke-width="1"
                                    d="M 20.25,3.75
           C 20.25,3.75 3.75,5.99 3.75,5.99
             3.75,5.99 3.75,18.01 3.75,18.01
             3.75,18.01 20.25,20.25 20.25,20.25
             20.25,20.25 20.25,3.75 20.25,3.75 Z
           M 18.75,5.47
           C 18.75,5.47 18.75,11.25 18.75,11.25
             18.75,11.25 11.25,11.25 11.25,11.25
             11.25,11.25 11.25,6.49 11.25,6.49
             11.25,6.49 18.75,5.47 18.75,5.47 Z
           M 9.75,6.69
           C 9.75,6.69 9.75,11.25 9.75,11.25
             9.75,11.25 5.25,11.25 5.25,11.25
             5.25,11.25 5.25,7.30 5.25,7.30
             5.25,7.30 9.75,6.69 9.75,6.69 Z
           M 5.25,12.75
           C 5.25,12.75 9.75,12.75 9.75,12.75
             9.75,12.75 9.75,17.31 9.75,17.31
             9.75,17.31 5.25,16.70 5.25,16.70
             5.25,16.70 5.25,12.75 5.25,12.75 Z
           M 11.25,12.75
           C 11.25,12.75 18.75,12.75 18.75,12.75
             18.75,12.75 18.75,18.53 18.75,18.53
             18.75,18.53 11.25,17.51 11.25,17.51
             11.25,17.51 11.25,12.75 11.25,12.75 Z"
                                  />
                                </SvgIcon>
                              </Grid>
                            </Grid>
                          }
                        />

                        <GridListTileBar
                          title={
                            <Grid>
                              <Typography variant="h5">{game.t}</Typography>
                            </Grid>
                          }
                          style={{ marginBottom: "116px" }}
                        />

                        <GridListTileBar
                          title={
                            <Grid
                              container
                              direction="row"
                              justify="space-between"
                            >
                              <Grid item>
                                <Typography variant="subtitle1">
                                  Available
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant="paragraph">
                                  {game.a === 1 ? (
                                    <Typography style={{ color: "#039e0b" }}>
                                      Available
                                    </Typography>
                                  ) : game.a === 2 ? (
                                    <Typography style={{ color: "#b52700" }}>
                                      Unavailable
                                    </Typography>
                                  ) : (
                                    <Typography style={{ color: "#ffcf40" }}>
                                      Pre-order
                                    </Typography>
                                  )}
                                </Typography>
                              </Grid>
                            </Grid>
                          }
                          subtitle={
                            <Grid
                              container
                              direction="row"
                              justify="space-between"
                            >
                              <Grid item>
                                <Typography variant="subtitle2">
                                  Product code:
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant="paragraph">
                                  {game.code}
                                </Typography>
                              </Grid>
                            </Grid>
                          }
                          style={{ marginBottom: "48px" }}
                        />

                        <GridListTileBar
                          title="$10.60"
                          actionIcon={
                            game.a === 1 ? (
                              <Button
                                variant="contained"
                                color="primary"
                                className={classes.buyBtn}
                                startIcon={<MonetizationOnIcon />}
                              >
                                Buy
                              </Button>
                            ) : game.a === 3 ? (
                              <Button
                                variant="contained"
                                className={classes.preorderBtn}
                              >
                                Pre-order
                              </Button>
                            ) : null
                          }
                        />
                      </GridListTile>
                    </Grid>
                  ))}
                </GridList>
              </Grid>
            </Grid>
          </Grid>

          {/* Footer */}
          <Grid container className={classes.footer} spacing={5}>
            {/* Main footer content */}
            <Grid
              item
              xs={12}
              md={7}
              container
              direction="column"
              justify="center"
            >
              <Grid
                className={classes.footerContent}
                item
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="h6" noWrap>
                    Material-UI
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton className={classes.iconBtn} aria-label="facebook">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton className={classes.iconBtn} aria-label="twitter">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    className={classes.iconBtn}
                    aria-label="instagram"
                  >
                    <InstagramIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography variant="paragraph" noWrap>
                    2020 Remagi.
                  </Typography>
                </Grid>
              </Grid>
              <Divider style={{ border: "0.5px solid #ffffff" }} />
              <Grid
                className={classes.footerContent}
                item
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                <Grid item>
                  <Button className={classes.supportBtn}>Support</Button>
                </Grid>

                {/* Language button */}
                <Grid item>
                  <div className={classes.root}>
                    <List component="nav">
                      <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="lock-menu"
                        onClick={handleClickListLanguage}
                      >
                        <ListItemText
                          primary={"Language: " + languages[selectedLanguage]}
                        />
                      </ListItem>
                    </List>
                    <StyledMenu
                      id="lock-menu"
                      anchorEl={languageAnchorEl}
                      keepMounted
                      open={Boolean(languageAnchorEl)}
                      onClose={handleLanguageClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center"
                      }}
                    >
                      {languages.map((language, index) => (
                        <StyledMenuItem
                          key={language}
                          selected={index === selectedLanguage}
                          onClick={event =>
                            handleMenuLanguageClick(event, index)
                          }
                        >
                          {language}
                        </StyledMenuItem>
                      ))}
                    </StyledMenu>
                  </div>
                </Grid>
                <Grid item>
                  <Button className={classes.text}>Affiliate</Button>
                </Grid>
                <Grid item>
                  <Button className={classes.text}>Sponsor</Button>
                </Grid>
              </Grid>
            </Grid>

            {/* TweetBox */}
            <Grid item xs={12} md={5}>
              <Box className={classes.tweetBox}>
                <Typography
                  className={classes.tweetTitle}
                  variant="h6"
                  gutterBottom
                >
                  Tweets
                </Typography>
                <MobileStepper
                  className={classes.tweetStep}
                  steps={maxSteps}
                  position="static"
                  variant="dots"
                  activeStep={activeStep}
                  nextButton={
                    <Button
                      className={classes.tweetStepBtn}
                      size="small"
                      onClick={handleNext}
                      disabled={activeStep === maxSteps - 1}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      className={classes.tweetStepBtn}
                      size="small"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                    </Button>
                  }
                />
                <Container className={classes.tweetContainer}>
                  <Grid
                    container
                    className={classes.tweetContent}
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Grid
                      item
                      xs={10}
                      container
                      spacing={2}
                      direction="row"
                      alignItems="center"
                    >
                      <Grid item>
                        <Avatar>R</Avatar>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">Remagi</Typography>
                        <Typography variant="subtitle2" gutterBottom>
                          @Remagi98
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="subtitle2" gutterBottom>
                        2h ago
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography
                    className={classes.tweetContent}
                    variant="paragraph"
                    gutterBottom
                  >
                    {/* This one is test template. Hope it's OK. Using React. External
                  library: Material-UI. */}
                    {tweetSteps[activeStep].typo}
                  </Typography>
                  <Grid
                    className={classes.tweetContent}
                    container
                    direction="row"
                    justify="space-evenly"
                  >
                    <Grid item>
                      <ReplyIcon />
                    </Grid>
                    <Grid item>
                      <SyncIcon />
                    </Grid>
                    <Grid item>
                      <FavoriteIcon />
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}
