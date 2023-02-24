import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TaskModal from '../components/TaskModal';
import CreateTask from '../components/CreateTask';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`}   {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <table width="" className='text-center border-separate border-spacing-y-3.5 w-[1300px]' cellPadding="20px">
            <thead className='text-[#707eae]'>
              <tr >
                <th>Task</th>
                <th>Assign To</th>
                <th>Start Date</th>
                <th>Due Date</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {children}
            </tbody>
          </table>
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

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const projects = ['HRM', 'SQA', 'Frontend', 'Backend', 'Marketing']

  return (
    <div className='p-7 bg-gray-200 rounded-xl border border-[#72c179]'>

      <div className='flex justify-between items-center mb-10 mx-10'>
        <div className='text-2xl font-semibold'>Tasks- Project Name</div>
        <div className='flex items-center bg-slate-100 p-1 rounded-md shadow-sm'>
          <i className="fa-solid fa-magnifying-glass mx-2 text-gray-300"></i>
          <input className='bg-slate-100 px-3 py-1 rounded-md' type="text" placeholder='Search' />
          <i className="fa-solid fa-filter mx-2 text-gray-300"></i>
        </div>

        <div>
          <CreateTask />
        </div>
      </div>

      <Box className="shadow-2xl" sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '67vh', borderRadius: '20px' }}>
        <Tabs className='py-6' TabIndicatorProps={{ style: { backgroundColor: "#72c179", width: '5px' } }} orientation="vertical" variant="standard" value={value} onChange={handleChange} aria-label="Vertical tabs example" sx={{ borderRight: 1, borderColor: 'divider', width: '250px' }}>
          {projects.map((val, key) => <Tab key={key} label={val} {...a11yProps(key)} />)}

        </Tabs>

        {
          projects.map((val, key) =>
            <TabPanel value={value} index={key} key={key}>
              <tr className='shadow-lg rounded-md bg-gray-50'>
                <td>1 {val}</td>
                <td>2 {val}</td>
                <td>3 {val}</td>
                <td>4 {val}</td>
                <td><TaskModal /></td>
              </tr>
            </TabPanel>)
        }


      </Box>
    </div>
  );
}



