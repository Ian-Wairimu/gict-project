import React, {useState} from "react";
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Form} from "../Form/Form.jsx";
import {Table} from "../Table/Table.jsx";

export const TabComponent = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
           <TabContext value={value}>
               <Box>
                   <TabList
                       aria-label="my tab component"
                       onChange={handleChange}
                       textColor="secondary"
                       indicatorColor="secondary"
                       centered
                       >
                       <Tab label="Form" value="1" />
                       <Tab label="Table" value="2" />
                   </TabList>
               </Box>
               <TabPanel value="1">
                   <Form />
               </TabPanel>
               <TabPanel value="2">
                   <Table />
               </TabPanel>
           </TabContext>
        </Box>
    );
}