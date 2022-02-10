import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Inovations from './Inovations'
import Sidebar2 from './Sidebar2'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Sidebar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{display:"grid"}}>
           <Tab label="Connections"  {...a11yProps(0)} />
           <Tab label="Invitations" {...a11yProps(1)} />
           <Tab label="Teammates" {...a11yProps(2)} />
           <Tab label="Groups" {...a11yProps(3)} />
           <Tab label="Pages" {...a11yProps(4)} />
           <Tab label="Hashtags" {...a11yProps(5)} />
         </Tabs>
         <TabPanel value={value} className="tabpanel" index={0}>
         Under construction
</TabPanel>
  <TabPanel value={value} className="tabpanel" index={1}>
  <Sidebar2/>
  </TabPanel>
  <TabPanel value={value} className="tabpanel" index={2}>
  Under construction
  </TabPanel>
  <TabPanel value={value} className="tabpanel" index={3}>
  Under construction
    </TabPanel>
  <TabPanel value={value} className="tabpanel" index={4}>
  Under construction
    </TabPanel>
  <TabPanel value={value} className="tabpanel" index={5}>
  Under construction
    </TabPanel>
    </Box>
  );
}