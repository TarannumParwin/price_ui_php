import React from 'react'
import Price from './Price';
import { useState } from 'react';
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import { style } from '@mui/system';




function Cardseating({ service_for, passing, rto }) {




  const [data, setData] = useState({
    "_id": "63bff93a0b2d222b469a74f2",
    "seating": 13,
    "rto": "HR55",
    "location": "Gurgaon",
    "pricing_details": {
      "reg_fee": 76,
      "road_tax": 87,
      "hypothecation": 786,
      "fitness_fee": 786,
      "user_charges": 786,
      "postal_fee": 876,
      "rc_card": 87,
      "permit_application": 698,
      "authorization_fee": 83,
      "local_permit_fee": 8968,
      "national_permit_fee": 76,
      "department_expenses": 698,
      "sc_with_gst": 78
    },
    "renewals": {
      "fitness_normal": {
        "reciept_amount": 876,
        "non_reciept_amount": 876,
        "sc_with_gst": 786
      },
      "fitness_premium": {
        "reciept_amount": 78,
        "non_reciept_amount": 6,
        "sc_with_gst": 786
      },
      "permit_np": {
        "reciept_amount": 786,
        "non_reciept_amount": 87,
        "sc_with_gst": 678
      },
      "permit_lp": {
        "reciept_amount": 678,
        "non_reciept_amount": 6,
        "sc_with_gst": 786
      }
    },
    "other_services": {
      "noc": {
        "reciept_amount": 876,
        "non_reciept_amount": 78,
        "sc_with_gst": 678
      },
      "transfer": {
        "reciept_amount": 6,
        "non_reciept_amount": 876,
        "sc_with_gst": 876
      },
      "hp_cancel": {
        "reciept_amount": 876,
        "non_reciept_amount": 78,
        "sc_with_gst": 678
      },
      "hp_add": {
        "reciept_amount": 67,
        "non_reciept_amount": 86,
        "sc_with_gst": 786
      },
      "duplicate_rc": {
        "reciept_amount": 786,
        "non_reciept_amount": 786,
        "sc_with_gst": 891
      },
      "insurance": 78,
      "pollution": 6876
    },
    totals: {
      reg_lp: {
        reciept_amount: 65,
        non_reciept_amount: 70,
        service_charges: 75,
        total_amount: 100
      },
      reg_np: {
        reciept_amount: 65,
        non_reciept_amount: 70,
        service_charges: 75,
        total_amount: 100
      },
      renewals: {
        fitness_normal: 89,
        fitness_premium: 64,
        permit_np: 35,
        permit_lp: 68
      },
      other_services: {
        noc: 89,
        transfer: 98,
        hp_cancel: 78,
        hp_add: 77,
        duplicate_rc: 99,
        insurance: 33,
        pollution: 89
      }
    }

  });



  return (
    <>


      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: '360px', padding: '20px', alignItems: 'center', height: 'auto' }}>
          <div className='card-content'style={{ width: '100%' }}>
            <div className='card-header'>
              <strong style={{ fontSize: '32px' }}>Loading</strong>
            </div>

            <div className='flexed'  >
              <span>Regd.with local permit </span><span>600000</span>
            </div>


            <div className='flexed' >
              <span>Regd.with national permit </span><span>600000</span>
            </div>

            <div >
              <span className='flexed' >Renewals</span>
             

            </div>
             <ul>
                <li>
                  <span> Fittness Premium </span><span>34</span>
                </li>
                <li>
                  <span>  Fittness Normal</span><span>56</span>
                </li>
                <li>
                  <span>Permit NP</span><span>78</span>
                </li>
                <li>
                  <span>Permit LP</span><span> 60</span>
                </li>
              </ul>
            <div >
              <span className='flexed' >Other Services</span>
             


            </div>
             <ul>
                <li>
                  <span>NOC</span><span>56</span>
                </li>
                <li>
                  <span>Transfer</span><span>65</span>
                </li>
                <li>
                  <span>HP Cancel</span><span>45</span>
                </li>
                <li>
                  <span>HP add</span><span>78</span>
                </li>
                <li>
                  <span> Duplicate RC</span><span>87</span>
                </li>
                <li>
                  <span>Insurance</span><span>76</span>
                </li>
                <li>
                  <span> Polution</span><span>98</span>
                </li>

              </ul>

          </div>
          
        </Card>
      </div>
    </>

  );
}


export default Cardseating;
