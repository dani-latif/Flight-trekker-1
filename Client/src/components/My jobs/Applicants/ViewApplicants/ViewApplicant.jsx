import React, {useEffect, useState} from "react";
// Core viewer
import { Viewer } from '@react-pdf-viewer/core';
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Worker } from '@react-pdf-viewer/core'; // install this library

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import axios from 'axios';

export const ViewApplicants = ({match}) => {
    const [Cv, setCv] = useState()
    useEffect(() => {
      const fetchedData = async () => {
        // "https://cv-generator-mern.herokuapp.com/api"
        await axios
          .get(`http://localhost:3001/myjobs/viewapplicant/${match.params.id}`)
          .then((res) => {
            if (res.data.success) {
                setCv(res.data.jobData.applicantcv);
            }
          });
      };
      fetchedData();
    }, [match.params.id]);
// Create new plugin instance
const defaultLayoutPluginInstance = defaultLayoutPlugin();
return (
    <div className='container'>
    <br/>
      <div className='pdf-container'>
        {/* show pdf conditionally (if we have one)  */}
        {Cv&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
          <Viewer fileUrl={Cv}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}
    </div>
    </div>
)}