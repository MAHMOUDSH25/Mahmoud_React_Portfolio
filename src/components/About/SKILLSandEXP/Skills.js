import * as React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { padding } from '@mui/system'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

export default function FullWidthTabs() {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  //  ********************* DESIGN *********************

  let sx = {
    Tabs: {
      width: '700px',
      height: '500px',
      //   bgcolor: "rgb(21, 21, 21)",
      backgroundColor: 'rgb(31,31,31)',
      borderRadius: '20px',
      //   borderEndEndRadius: "30px",
      //   borderEndStartRadius: "30px",
      boxShadow: 10,

      marginTop: '-0.1%',
      marginLeft: '-9%',
    },
    AppBar: {
      color: 'rgb(0, 255, 255)',
      backgroundColor: 'rgb(41, 41, 41)',
      borderStartStartRadius: '20px',
      borderStartEndRadius: '20px',
      boxShadow: 20,
    },
    Label: {
      fontSize: '13px',
    },
    SkillStyle: {
      textAlign: 'center',
      fontSize: '13px',
      lineHeight: '15px',
    },
    DescriptionBox: {
      fontWeight: 'Bold',
    },
    // SkillTwo: {
    //   textAlign: "center",
    //   fontSize:'13px',
    //   lineHeight: '15px'
    // },
    // SkillThree: {
    // //   marginLeft: "1020px",
    //   textAlign: "center",
    //   fontSize:'13px',
    //   lineHeight: '15px'
    // },
  }

  return (
    <Box sx={sx.Tabs}>
      <AppBar sx={sx.AppBar} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          aria-label="full width tabs example"
        >
          <Tab sx={sx.Label} label="Technical Skills" {...a11yProps(0)} />
          <Tab
            sx={sx.Label}
            label="Education & Certificates"
            {...a11yProps(1)}
          />
          <Tab
            sx={sx.Label}
            label="Key Skills & Characteristics"
            {...a11yProps(2)}
          />
          <Tab
            sx={sx.Label}
            label="Web development intern (capture beauty)"
            {...a11yProps(3)}
          />
          <Tab
            sx={sx.Label}
            label="Mobile development Intern (PocketDoc)"
            {...a11yProps(4)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Stack sx={sx.SkillStyle} spacing={2}>
            <Box>
              Advanced skills in Web development in <br /> HTML, CSS,
              JavaScript, Bootstrap, Nodejs, Reactjs, Git, and Github.
            </Box>
            <Box>
              Advanced skills in Mobile development using <br /> Flutter
              framework and Google Firebase in Visual Studio IDE.
            </Box>
            <Box>Advanced skills knowledge in using SQL commands.</Box>
            <Box>
              Advanced skills at using Adobe Photoshop <br /> to design web
              pages and user interface.
            </Box>
            <Box>
              Advanced skills at using Adobe Illustrator to <br /> make logos,
              icons, and illustrations to use them in my <br /> Web development
              and Mobile Applications.
            </Box>
            <Box>Advanced knowledge in React Native.</Box>
            <Box>Advanced knowledge in programing in Python.</Box>
          </Stack>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Stack sx={sx.SkillStyle} spacing={2}>
            <Box>Astrolabes Web development Bootcamp / 2022.</Box>
            <Box>
              University of Petra Bachelor’s degree in Software engineering 2017
              – 2021.
            </Box>
            <Box>Flutter & Dart - The Complete Guide - Udemy / 2021.</Box>
            <Box>React Native - The Practical Guide - Udemy / 2021.</Box>
            <Box>
              Complete Python Bootcamp from Zero to Hero - Udemy / 2021.
            </Box>
            <Box>
              Adobe Photoshop CC - Advanced Training Course - Udemy / 2021.
            </Box>
            <Box>
              Master The Coding Interview Data Structure & Algorithms - Udemy /
              2021.
            </Box>
            <Box>
              Adobe Illustrator CC - Essentials Training Course - Udemy / 2021.
            </Box>
            <Box>Web Development – The complete guide – Udemy / 2021.</Box>
          </Stack>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Stack sx={sx.SkillStyle} spacing={2}>
            <Box>Fluent in Arabic and English.</Box>
            <Box>Excellent communication skills.</Box>
            <Box>Advanced Knowledge of Windows and Microsoft Suite.</Box>
            <Box>Creative and Imaginative.</Box>
            <Box>Can work under pressure.</Box>
            <Box>
              Constant desire to develop and sharpen my skills and capabilities.
            </Box>
            <Box>Research methodology.</Box>
            <Box>Service quality.</Box>
            <Box>Willing to relocate where needed.</Box>
            <Box>Valid driving license.</Box>
          </Stack>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Stack sx={sx.SkillStyle} spacing={2}>
            <Box sx={sx.DescriptionBox}>
              Discription: In this project I used my idea to implement it in
              Astrolabe Bootcamp, and the idea of this website is to help
              photographers and beginner photographers to use their work to
              collaborate with other customers and help photographers to boost
              their work and passion.
            </Box>
            <Box>
              Coordinated and managed team members tasks and activities.
            </Box>
            <Box>
              Creatively Designed the Website interface and inner dynamics
            </Box>
            <Box>
              Developed the flow of events about how the Website will function.
            </Box>
            <Box>Implemented the Back-end of the Website</Box>
            <Box>
              Tested the Website functional and non-functional requirements.
            </Box>
            <Box>Fixed bugs and issues in the Website..</Box>
            <Box>Uploaded the code work to Github.</Box>
            <Box>Maintained the Website for future updates.</Box>
          </Stack>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Stack sx={sx.SkillStyle} spacing={2}>
            <Box sx={sx.DescriptionBox}>
              Description: The idea of this application is to ease the
              communication between the patient and the doctor and to lessen the
              need for going to the doctor's clinic.
            </Box>
            <Box>Gathered the Requirements for the application.</Box>
            <Box>
              Coordinated and managed team members tasks and activities.
            </Box>
            <Box>
              Creatively Designed the application interface and inner dynamics.
            </Box>
            <Box>
              Made the scenarios about how the application will function.
            </Box>
            <Box>Designed flow charts for sequence events.</Box>
            <Box>Designed the logo for the application.</Box>
            <Box>Implemented the application for the patient's side.</Box>
            <Box>
              Implemented the chat screen between the patient and the doctor.
            </Box>
            <Box>Fixed the bugs and issues in the application.</Box>
            <Box>
              Tested the application's functional and non-functional
              requirements.
            </Box>
            <Box>Maintained the application for future updates.</Box>
          </Stack>
        </TabPanel>
      </SwipeableViews>
    </Box>
  )
}

// import * as React from 'react'
// import Box from '@mui/material/Box'
// import Tab from '@mui/material/Tab'
// import TabContext from '@mui/lab/TabContext'
// import TabList from '@mui/lab/TabList'
// import TabPanel from '@mui/lab/TabPanel'
// import Stack from '@mui/material/Stack'
// import { useTheme } from '@mui/material/styles'

// function TabPanel(props) {
//   const { children, value, index, ...other } = props

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   )
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// }

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   }
// }

// export default function LabTabs() {
//   const theme = useTheme()
//   const [value, setValue] = React.useState('1')

//   const handleChange = (event, newValue) => {
//     setValue(newValue)
//   }

//   // Styling
//   const sx = {
//     TabColor: {
//       color: '#fff',
//       fontSize: '13px',
//     },
//   }

//   return (
//     <>
//       <Box sx={{ width: '100%', typography: 'body1' }}>
//         <TabContext value={value}>
//           <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//             <TabList onChange={handleChange} aria-label="lab API tabs example">
//               <Tab label="Technical Skills" value="1" sx={sx.TabColor} />
//               <Tab
//                 label="Education & Certificates"
//                 value="2"
//                 sx={sx.TabColor}
//               />
//               <Tab
//                 label="Key Skills & Characteristics"
//                 value="3"
//                 sx={sx.TabColor}
//               />
//             </TabList>
//           </Box>
//           <TabPanel value={value} index={0} dir={theme.direction}>
//             <Stack sx={sx.SkillStyle} spacing={2}>
//               <Box>
//                 Advanced skills in Web development in HTML, CSS, JavaScript,
//                 Bootstrap, Nodejs, Reactjs, Git, and Github.
//               </Box>
//               <Box>
//                 Advanced skills in Mobile development using Flutter framework
//                 and Google Firebase in Visual Studio IDE.
//               </Box>
//               <Box>Advanced skills knowledge in using SQL commands.</Box>
//               <Box>
//                 Advanced skills at using Adobe Photoshop to design web pages and
//                 user interface.
//               </Box>
//               <Box>
//                 Advanced skills at using Adobe Illustrator to make logos, icons,
//                 and illustrations to use them in my Web development and Mobile
//                 Applications.
//               </Box>
//               <Box>Advanced knowledge in React Native.</Box>
//               <Box>Advanced knowledge in programing in Python.</Box>
//             </Stack>
//           </TabPanel>
//           <TabPanel value="2">Item Two</TabPanel>
//           <TabPanel value="3">Item Three</TabPanel>
//         </TabContext>
//       </Box>
//     </>
//   )
// }
