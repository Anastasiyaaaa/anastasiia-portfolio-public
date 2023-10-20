import {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import classes from './tabs.module.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';


const theme = createTheme({
  palette: {
    secondary: {
      main: '#d5bdfc',
    },
  },
});

function creatListOfItem(string) {
  const itemArr = string.split(',');

  return itemArr.map((item, i) => {
      if (item.trim().length <= 1) {
        return
      }
      return <li key={i}> {item} </li>
    }
  );
}

function CustomTabPanel({children, value, index, ...other}) {

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SkillsTabs({skills, tools, others}) {
  const [value, setValue] = useState(0);

  const skillsList = creatListOfItem(skills)
  const toolsList = creatListOfItem(tools)
  const othersList = creatListOfItem(others)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className={classes.tabsSection}>
      <ThemeProvider theme={theme}>
        <Box sx={{width: '100%'}}>
          <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="secondary"
              indicatorColor="secondary"
              centered>
              <Tab label="Skills" {...a11yProps(0)} />
              <Tab label="Tools" {...a11yProps(1)} />
              <Tab label="Others" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel style={{minHeight: "210px"}} value={value} index={0}>
            <ul className={classes.tabsInfo}>{skillsList}</ul>
          </CustomTabPanel>
          <CustomTabPanel style={{minHeight: "210px"}} value={value} index={1}>
            <ul className={classes.tabsInfo}>{toolsList}</ul>
          </CustomTabPanel>
          <CustomTabPanel style={{minHeight: "210px"}} value={value} index={2}>
            <ul className={classes.tabsInfo}>{othersList}</ul>
          </CustomTabPanel>
        </Box>
      </ThemeProvider>
    </section>
  );
}