import * as React from "react"; { React.useState, React.useEffect } 
import Papa from 'papaparse';
import { School } from './types';
import { SchoolAnalyzer } from './components/SchoolAnalyzer';
import { School2 } from 'lucide-react';

const csvData = `State,District,Block,Cluster,Ward,Pincode,Panchayat,Municipality,Year of Establishment,UDISE Code,School Nmae,School Category,School Management,School Type,Class From,Class To,Medium of instruction,is this a Shift School, Building Status , Boundary wall ,No.of Building Blocks, Pucca Building Blocks,Is Special School for CWSN?,Availability of Ramps, Availability of Handrails,Anganwadi At Premises,Anganwadi Boys,Anganwadi Girls ,Anganwadi Worker,Residential School,Residential Type,Minority School, Approachable By All Weather Road,Toilets for Boys Girls,Urinal , Handwash Near Toilet , Handwash Facility for Meal,Total Class Rooms ,In Good Condition,Needs Minor Repair, Needs Major Repair ,Library Availability,Separate Room for HM,Drinking Water Available ,Drinking Water Functional ,Rain Water Harvesting, Playground Available, Furniture Availability ,Electricity Availability,Medical checkups ,DIGITAL FACILITIE-S,No.of Students Received DCF,SMC Exists ,SMDC Constituted,Text Books Received ,Special Training ,Material for Training,Grants Details under Samagra Shiksha (DCF Sl. No.  8.3),Grants Receipt,Grants Expenditure ,Avg.School hrs.Std.(Primary),Avg.School hrs.Std.(UP),Avg.School hrs.Std.(Sc),Avg.School hrs.Std.(Hsc),Avg.School hrs.Tch.(Primary),Avg.School hrs.Tch(UP).,Avg.School hrs.Tch.(SC),Avg.School hrs.Tch(HSc),Instructional days(Primary),Instructional days(UP),Instructional days(SC),Instructional days(HSc),CCE
Maharashtra,Pune,AKURDI,AKURDI,AKURDIGAON,,,,,27252000102,VASANTDADA PATIL BOYS/GIRLS AKURDI,2 - Primary with Upper Primary,,3-Co-educational,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
Maharashtra,Pune,AKURDI,AKURDI,AKURDIGAON,,,,,27252000102,FAKIRBHAI PANSARE AKURDI URDU GIRLS/ BOYS SCH.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,`;

function App() {
  const [schools, setSchools] = React.useState<School[]>([]);

  React.useEffect(() => {
    Papa.parse(csvData, {
      header: true,
      complete: (results: { data: School[]; }) => {
        setSchools(results.data as School[]);
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-6 mb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-3">
            <School2 className="w-8 h-8" />
            <h1 className="text-3xl font-bold">School Improvement Analyzer</h1>
          </div>
          <p className="mt-2 text-blue-100">
            ML-powered analysis and budget estimation for school improvements
          </p>
        </div>
      </header>

      <main>
        <SchoolAnalyzer schools={schools} />
      </main>
    </div>
  );
}

export default App;