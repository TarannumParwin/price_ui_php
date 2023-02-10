export const Weights = [27, 18, 4.5, 5.95, 7.3, 14.25, 11.99, 16.02, 18.5, 28, 30, 31, 35, 39.5, 45.5, 47.5, 55, 52]




export const FieldsPassing = [
    {
        name: "pricing_details.reg_fee",
        htmlFor: "reg_fee",
        label: "Registeration Fee",
    },
    {
        name: "pricing_details.road_tax",
        htmlFor: "road_tax",
        label: "Road tax",
    },
    {
        name: "pricing_details.hypothecation",
        htmlFor: "hypothecation",
        label: "Hypothecation",
    },
    {
        name: "pricing_details.fitness_fee",
        htmlFor: "fitness_fee",
        label: "Fitness fee",
    },
    {
        name: "pricing_details.user_charges",
        htmlFor: "user_charges",
        label: "User charges",
    },
    {
        name: "pricing_details.postal_fee",
        htmlFor: "postal_fee",
        label: "Postal fee",
    },
    {
        name: "pricing_details.rc_card",
        htmlFor: "rc_card",
        label: "RC card",
    },
    {
        name: "pricing_details.department_expenses",
        htmlFor: "department_expenses",
        label: "Department expenses",
    },
    {
        name: "pricing_details.sc_with_gst",
        htmlFor: "sc_with_gst",
        label: "Service & GST charges",
    },
    {
        name: "pricing_details.permit_application",
        htmlFor: "permit_application",
        label: "Permit application",
    },
    {
        name: "pricing_details.authorization_fee",
        htmlFor: "authorization_fee",
        label: "Authorization fee",
    },
    {
        name: "pricing_details.local_permit_fee",
        htmlFor: "local_permit_fee",
        label: "Local permit fee",
    },
    {
        name: "pricing_details.national_permit_fee",
        htmlFor: "national_permit_fee",
        label: "National permit fee",
    }
]

export const FieldsPassing_additionals = [
    {
        title: "Renewals",
        name: "renewals",
        fields: [
            {
                title: 'Fitness normal',
                name: 'fitness_normal',
                fields: [
                    {
                        name: 'reciept_amount',
                        label: 'Reciept Amount'
                    },
                    {
                        name: 'non_reciept_amount',
                        label: 'Non-reciept amount'
                    },
                    {
                        name: 'sc_with_gst',
                        label: 'Service & GST charges'
                    }
                ],
            },
            {
                title:'Fitness Premium',
                name:'fitness_premium',
                fields:[
                    {
                        name: 'reciept_amount',
                        label: 'Reciept Amount'
                    },
                    {
                        name: 'non_reciept_amount',
                        label: 'Non-reciept amount'
                    },
                    {
                        name: 'sc_with_gst',
                        label: 'Service & GST charges'
                    }
                ]
            },
            {
                title:'National Permit',
                name:'permit_np',
                fields:[
                    {
                        name: 'reciept_amount',
                        label: 'Reciept Amount'
                    },
                    {
                        name: 'non_reciept_amount',
                        label: 'Non-reciept amount'
                    },
                    {
                        name: 'sc_with_gst',
                        label: 'Service & GST charges'
                    }
                ]
            },
            {
                title:'Local Permit',
                name:'permit_lp',
                fields:[
                    {
                        name: 'reciept_amount',
                        label: 'Reciept Amount'
                    },
                    {
                        name: 'non_reciept_amount',
                        label: 'Non-reciept amount'
                    },
                    {
                        name: 'sc_with_gst',
                        label: 'Service & GST charges'
                    }
                ]
            }

        ]
    },
    {
        title: "Other Services",
        name: "other_services",
        fields: [
            {
                title: 'NOC',
                name: 'noc',
                fields: [
                    {
                        name: 'reciept_amount',
                        label: 'Reciept Amount'
                    },
                    {
                        name: 'non_reciept_amount',
                        label: 'Non-reciept amount'
                    },
                    {
                        name: 'sc_with_gst',
                        label: 'Service & GST charges'
                    }
                ],
            },
            {
                title:'Transfer',
                name:'transfer',
                fields:[
                    {
                        name: 'reciept_amount',
                        label: 'Reciept Amount'
                    },
                    {
                        name: 'non_reciept_amount',
                        label: 'Non-reciept amount'
                    },
                    {
                        name: 'sc_with_gst',
                        label: 'Service & GST charges'
                    }
                ]
            },
            {
                title:'HP Cancel',
                name:'hp_cancel',
                fields:[
                    {
                        name: 'reciept_amount',
                        label: 'Reciept Amount'
                    },
                    {
                        name: 'non_reciept_amount',
                        label: 'Non-reciept amount'
                    },
                    {
                        name: 'sc_with_gst',
                        label: 'Service & GST charges'
                    }
                ]
            },
            {
                title:'HP Add',
                name:'hp_add',
                fields:[
                    {
                        name: 'reciept_amount',
                        label: 'Reciept Amount'
                    },
                    {
                        name: 'non_reciept_amount',
                        label: 'Non-reciept amount'
                    },
                    {
                        name: 'sc_with_gst',
                        label: 'Service & GST charges'
                    }
                ]
            },
            {
                title:'Duplicate RC',
                name:'duplicate_rc',
                fields:[
                    {
                        name: 'reciept_amount',
                        label: 'Reciept Amount'
                    },
                    {
                        name: 'non_reciept_amount',
                        label: 'Non-reciept amount'
                    },
                    {
                        name: 'sc_with_gst',
                        label: 'Service & GST charges'
                    }
                ]
            },

        ]
    }
]

export const categoryOptions=[
    {
      name:'4w',
      label:'4 W'
    },
    {
      name:'2w',
      label:'2 W'
    },
    {
      name:'3w',
      label:'3 W'
    }
    // {
    //   name:'bus',
    //   label:'Bus'
    // },
    // {
    //   name:'motor_cab',
    //   label:'Motor Cab'
    // },
  ] 



 export const seatingOptions =[24,34,56,67,54]


export const StateOptions = [
    {
        name: 'Andaman Nikobar',
        code:'an',
        rtos: ['AN01']
    },
    {
        name: 'Arunachal Pradesh',
        code:'ar',
        rtos: ['AR01', 'AR02', 'AR03', 'AR04', 'AR05', 'AR06', 'AR07', 'AR08', 'AR09', 'AR10', 'AR11', 'AR12', 'AR13', 'AR14', 'AR15', 'AR16', 'AR17', 'AR18', 'AR19', 'AR20']
    },
    {
        name: 'Assam',
        code:'as',
        rtos: ['AS01', 'AS02', 'AS03', 'AS04', 'AS05', 'AS06', 'AS07', 'AS08', 'AS09', 'AS10', 'AS11', 'AS12', 'AS13', 'AS14', 'AS15', 'AS16', 'AS17', 'AS18', 'AS19', 'AS20', 'AS21', 'AS22', 'AS23', 'AS24', 'AS25', 'AS26', 'AS27', 'AS29', 'AS30', 'AS31', 'AS32', 'AS33']
    },
    {
        name: 'Bihar',
        code:'br',
        rtos: ['BR01', 'BR02', 'BR03', 'BR04', 'BR05', 'BR06', 'BR07', 'BR08', 'BR09', 'BR10', 'BR11', 'BR12', 'BR13', 'BR14', 'BR15', 'BR16', 'BR17', 'BR18', 'BR19', 'BR20', 'BR21', 'BR22', 'BR23', 'BR24', 'BR25', 'BR26', 'BR27', 'BR28', 'BR29', 'BR30', 'BR31', 'BR32', 'BR33', 'BR34', 'BR35', 'BR36', 'BR37', 'BR38', 'BR39', 'BR40', 'BR41', 'BR42', 'BR43', 'BR44', 'BR45', 'BR46', 'BR47', 'BR48']
    },
    {
        name: 'Chhatisgarh',
        code:'cg',
        rtos: ['CG01', 'CG02', 'CG03', 'CG04', 'CG05', 'CG06', 'CG07', 'CG08', 'CG09', 'CG10', 'CG11', 'CG12', 'CG13', 'CG14', 'CG15', 'CG16', 'CG17', 'CG18', 'CG19', 'CG20', 'CG21', 'CG22', 'CG23', 'CG24', 'CG25', 'CG26', 'CG27', 'CG28', 'CG29', 'CG30']
    },
    {
        name: 'Chandigarh',
        code:'ch',
        rtos: ['CH01']
    },
    {
        name: 'Daman',
        code:'dm',
        rtos: ['DD01', 'DD02', 'DD03',]
    },
    {
        name: 'Delhi',
        code:'dl',
        rtos: ['DL01', 'DL02', 'DL03', 'DL04', 'DL05', 'DL06', 'DL07', 'DL08', 'DL09', 'DL10', 'DL11', 'DL12', 'DL13',]
    },
    {
        name: 'Goa',
        code:'ga',
        rtos: ['GA01', 'GA02', 'GA03', 'GA04', 'GA05', 'GA06', 'GA07', 'GA08', 'GA09', 'GA10', 'GA11', 'GA12',]
    },
    {
        name: 'Gujrat',
        code:'gj',
        rtos: ['GJ01', 'GJ02', 'GJ03', 'GJ04', 'GJ05', 'GJ06', 'GJ07', 'GJ08', 'GJ09', 'GJ10', 'GJ11', 'GJ12', 'GJ13', 'GJ14', 'GJ15', 'GJ16', 'GJ17', 'GJ18', 'GJ19', 'GJ20', 'GJ21', 'GJ22', 'GJ23', 'GJ24', 'GJ25', 'GJ26', 'GJ27', 'GJ28', 'GJ29', 'GJ30', 'GJ31', 'GJ32', 'GJ33', 'GJ34', 'GJ35', 'GJ36', 'GJ37', 'GJ38',]
    },
    {
        name: 'Himachal',
        code:'hp',
        rtos: ['HP01', 'HP02', 'HP03', 'HP04', 'HP05', 'HP06', 'HP07', 'HP08', 'HP09', 'HP10', 'HP11', 'HP12', 'HP13', 'HP14', 'HP15', 'HP16', 'HP16AA', 'HP17', 'HP18', 'HP19', 'HP19AA', 'HP-20', 'HP21', 'HP22', 'HP23', 'HP24', 'HP25', 'HP26', 'HP27', 'HP28', 'HP29', 'HP30', 'HP31', 'HP32', 'HP33', 'HP33AA', 'HP34', 'HP35', 'HP36', 'HP37', 'HP38', 'HP39', 'HP40', 'HP41', 'HP42', 'HP43', 'HP44', 'HP45', 'HP46', 'HP47', 'HP48', 'HP49', 'HP50', 'HP51', 'HP52', 'HP53', 'HP54', 'HP55', 'HP56', 'HP57', 'HP58', 'HP59', 'HP60', 'HP61', 'HP62', 'HP63', 'HP64', 'HP65', 'HP66', 'HP67', 'HP68', 'HP69', 'HP70', 'HP71', 'HP72', 'HP73', 'HP74', 'HP75', 'HP76', 'HP77', 'HP78', 'HP79', 'HP80', 'HP81', 'HP82', 'HP83', 'HP84', 'HP85', 'HP86', 'HP87', 'HP88', 'HP89', 'HP90', 'HP91', 'HP92', 'HP93', 'HP94', 'HP95', 'HP96', 'HP97', 'HP98', 'HP99',]
    },
    {
        name: 'Haryana',
        code:'hr',
        rtos: ['HR01', 'HR02', 'HR03', 'HR04', 'HR05', 'HR06', 'HR07', 'HR08', 'HR09', 'HR10', 'HR11', 'HR12', 'HR13', 'HR14', 'HR15', 'HR16', 'HR17', 'HR18', 'HR19', 'HR20', 'HR21', 'HR22', 'HR23', 'HR24', 'HR25', 'HR26', 'HR27', 'HR28', 'HR29', 'HR30', 'HR31', 'HR32', 'HR33', 'HR34', 'HR35', 'HR36', 'HR37', 'HR38', 'HR39', 'HR40', 'HR41', 'HR42', 'HR43', 'HR44', 'HR45', 'HR46', 'HR47', 'HR48', 'HR49', 'HR50', 'HR51', 'HR52', 'HR53', 'HR54', 'HR55', 'HR56', 'HR57', 'HR58', 'HR59', 'HR60', 'HR61', 'HR62', 'HR63', 'HR64', 'HR65', 'HR66', 'HR67', 'HR68', 'HR69', 'HR70', 'HR71', 'HR72', 'HR73', 'HR74', 'HR75', 'HR76', 'HR77', 'HR78', 'HR79', 'HR80', 'HR81', 'HR82', 'HR83', 'HR84', 'HR85', 'HR86', 'HR87', 'HR88', 'HR89', 'HR90', 'HR91', 'HR-92', 'HR-93', 'HR-94', 'HR-95', 'HR-96', 'HR-97', 'HR-98', 'HR-99',]
    },
    {
        name: 'Jharkhand',
        code:'jh',
        rtos: ['JH01', 'JH02', 'JH03', 'JH04', 'JH05', 'JH06', 'JH07', 'JH08', 'JH09', 'JH10', 'JH11', 'JH12', 'JH13', 'JH14', 'JH15', 'JH16', 'JH17', 'JH18', 'JH19', 'JH20', 'JH21', 'JH22', 'JH23', 'JH24',]
    },
    {
        name: 'Jammu & Kashmir',
        code:'jk',
        rtos: ['JK01', 'JK02', 'JK03', 'JK04', 'JK05', 'JK06', 'JK07', 'JK08', 'JK09', 'JK10', 'JK11', 'JK12', 'JK13', 'JK14', 'JK15', 'JK16', 'JK17', 'JK18', 'JK19', 'JK20',]
    },
    {
        name: 'Karnataka',
        code:'ka',
        rtos: ['KA01', 'KA02', 'KA03', 'KA04', 'KA05', 'KA06', 'KA07', 'KA08', 'KA09', 'KA10', 'KA11', 'KA12', 'KA13', 'KA14', 'KA15', 'KA16', 'KA17', 'KA18', 'KA19', 'KA20', 'KA21', 'KA22', 'KA23', 'KA24', 'KA25', 'KA26', 'KA27', 'KA28', 'KA29', 'KA30', 'KA31', 'KA32', 'KA33', 'KA34', 'KA35', 'KA36', 'KA37', 'KA38', 'KA39', 'KA40', 'KA41', 'KA42', 'KA43', 'KA44', 'KA45', 'KA46', 'KA47', 'KA48', 'KA49', 'KA50', 'KA51', 'KA52', 'KA53', 'KA54', 'KA55', 'KA56', 'KA57', 'KA58', 'KA59', 'KA60', 'KA61', 'KA62', 'KA63', 'KA64', 'KA65', 'KA66', 'KA67', 'KA68', 'KA69', 'KA70', 'KA71',]
    },
    {
        name: 'Kerala',
        code:'kl',
        rtos: ['KL01', 'KL02', 'KL03', 'KL04', 'KL05', 'KL06', 'KL07', 'KL08', 'KL09', 'KL10', 'KL11', 'KL12', 'KL13', 'KL14', 'KL15', 'KL16', 'KL17', 'KL18', 'KL19', 'KL20', 'KL21', 'KL22', 'KL23', 'KL24', 'KL25', 'KL26', 'KL27', 'KL28', 'KL29', 'KL30', 'KL31', 'KL32', 'KL33', 'KL34', 'KL35', 'KL36', 'KL37', 'KL38', 'KL39', 'KL40', 'KL41', 'KL42', 'KL43', 'KL44', 'KL45', 'KL46', 'KL47', 'KL48', 'KL49', 'KL50', 'KL51', 'KL52', 'KL53', 'KL54', 'KL55', 'KL56', 'KL57', 'KL58', 'KL59', 'KL60', 'KL61', 'KL62', 'KL63', 'KL64', 'KL65', 'KL66', 'KL67', 'KL68', 'KL69', 'KL70', 'KL71', 'KL72', 'KL73', 'KL74', 'KL75', 'KL76', 'KL77', 'KL78', 'KL79', 'KL80', 'KL81', 'KL82', 'KL83', 'KL84', 'KL85', 'KL86', 'KL87',]
    },
    {
        name: 'Leh',
        code:'la',
        rtos: ['LA01', 'LA02']
    },
    {
        name: 'Laddakh',
        code:'ld',
        rtos: ['LD01', 'LD02', 'LD03', 'LD04', 'LD05', 'LD06', 'LD07', 'LD08', 'LD09',]
    },
    {
        name: 'Maharashtra',
        code:'mh',
        rtos: ['MH01', 'MH02', 'MH03', 'MH04', 'MH05', 'MH06', 'MH07', 'MH08', 'MH09', 'MH10', 'MH11', 'MH12', 'MH13', 'MH14', 'MH15', 'MH16', 'MH17', 'MH18', 'MH19', 'MH20', 'MH21', 'MH22', 'MH23', 'MH24', 'MH25', 'MH26', 'MH27', 'MH28', 'MH29', 'MH30', 'MH31', 'MH32', 'MH33', 'MH34', 'MH35', 'MH36', 'MH37', 'MH38', 'MH39', 'MH40', 'MH41', 'MH42', 'MH43', 'MH44', 'MH45', 'MH46', 'MH47', 'MH48', 'MH49', 'MH50',]
    },
    {
        name: 'Madhya Pradesh',
        code:'mp',
        rtos: ['MP01', 'MP02', 'MP03', 'MP04', 'MP05', 'MP06', 'MP07', 'MP08', 'MP09', 'MP10', 'MP11', 'MP12', 'MP13', 'MP14', 'MP15', 'MP16', 'MP17', 'MP18', 'MP19', 'MP20', 'MP21', 'MP22', 'MP23', 'MP24', 'MP25', 'MP26', 'MP27', 'MP28', 'MP29', 'MP30', 'MP31', 'MP32', 'MP33', 'MP34', 'MP35', 'MP36', 'MP37', 'MP38', 'MP39', 'MP40', 'MP41', 'MP42', 'MP43', 'MP44', 'MP45', 'MP46', 'MP47', 'MP48', 'MP49', 'MP50', 'MP51', 'MP52', 'MP53', 'MP54', 'MP55', 'MP56', 'MP57', 'MP58', 'MP59', 'MP60', 'MP61', 'MP62', 'MP63', 'MP64', 'MP65', 'MP66', 'MP67', 'MP68', 'MP69', 'MP70', 'MP71', 'MP72', 'MP73', 'MP74',]
    },
    {
        name: 'Meghalaya',
        code:'ml',
        rtos: ['ML01', 'ML02', 'ML03', 'ML04', 'ML05', 'ML06', 'ML07', 'ML08', 'ML09', 'ML10',]
    },
    {
        name: 'Manipur',
        code:'mn',
        rtos: ['MN01', 'MN02', 'MN03', 'MN04', 'MN05', 'MN06', 'MN07',]
    },
    {
        name: 'Mizoram',
        rtos: ['MZ01', 'MZ02', 'MZ03', 'MZ04', 'MZ05', 'MZ06', 'MZ07', 'MZ08',]
    },
    {
        name: 'Nagaland',
        code:'nl',
        rtos: ['NL01', 'NL02', 'NL03', 'NL04', 'NL05', 'NL06', 'NL07', 'NL08', 'NL09', 'NL10',]
    },
    {
        name: 'Odisha',
        code:'od',
        rtos: ['OD01', 'OD02', 'OD03', 'OD04', 'OD05', 'OD06', 'OD07', 'OD08', 'OD09', 'OD10', 'OD11', 'OD12', 'OD13', 'OD14', 'OD15', 'OD16', 'OD17', 'OD18', 'OD19', 'OD20', 'OD21', 'OD22', 'OD23', 'OD24', 'OD25', 'OD26', 'OD27', 'OD28', 'OD29', 'OD30', 'OD31', 'OD32', 'OD33', 'OD34', 'OD35',]
    },
    {
        name: 'Punjab',
        code:'pb',
        rtos: ['PB01', 'PB02', 'PB03', 'PB04', 'PB05', 'PB06', 'PB07', 'PB08', 'PB09', 'PB10', 'PB11', 'PB12', 'PB13', 'PB14', 'PB15', 'PB16', 'PB17', 'PB18', 'PB19', 'PB20', 'PB21', 'PB22', 'PB23', 'PB24', 'PB25', 'PB26', 'PB27', 'PB28', 'PB29', 'PB30', 'PB31', 'PB32', 'PB33', 'PB34', 'PB35', 'PB36', 'PB37', 'PB38', 'PB39', 'PB40', 'PB41', 'PB42', 'PB43', 'PB44', 'PB45', 'PB46', 'PB47', 'PB48', 'PB49', 'PB50', 'PB51', 'PB52', 'PB53', 'PB54', 'PB55', 'PB56', 'PB57', 'PB58', 'PB59', 'PB60', 'PB61', 'PB62', 'PB63', 'PB64', 'PB65', 'PB66', 'PB67', 'PB68', 'PB69', 'PB70', 'PB71', 'PB72', 'PB73', 'PB74', 'PB75', 'PB76', 'PB77', 'PB78', 'PB79', 'PB80', 'PB81', 'PB82', 'PB83', 'PB84', 'PB85', 'PB86', 'PB87', 'PB88', 'PB89', 'PB90', 'PB91', 'PB92',]
    },
    {
        name: 'Pondicherry',
        code:'py',
        rtos: ['PY01', 'PY02', 'PY03', 'PY04', 'PY05',]
    },
    {
        name: 'Rajasthan',
        code:'rj',
        rtos: ['RJ01', 'RJ02', 'RJ03', 'RJ04', 'RJ05', 'RJ06', 'RJ07', 'RJ08', 'RJ09', 'RJ10', 'RJ11', 'RJ12', 'RJ13', 'RJ14', 'RJ15', 'RJ16', 'RJ17', 'RJ18', 'RJ19', 'RJ20', 'RJ21', 'RJ22', 'RJ23', 'RJ24', 'RJ25', 'RJ26', 'RJ27', 'RJ28', 'RJ29', 'RJ30', 'RJ31', 'RJ32', 'RJ33', 'RJ34', 'RJ35', 'RJ36', 'RJ37', 'RJ38', 'RJ39', 'RJ40', 'RJ41', 'RJ42', 'RJ43', 'RJ44', 'RJ45', 'RJ46', 'RJ47', 'RJ48', 'RJ49', 'RJ50', 'RJ51', 'RJ52', 'RJ53', 'RJ54', 'RJ55', 'RJ56', 'RJ57', 'RJ58',]
    },
    {
        name: 'Sikkim',
        code:'sk',
        rtos: ['SK01', 'SK02', 'SK03', 'SK04']
    },
    {
        name: 'Tamilnadu',
        code:'tn',
        rtos: ['TN01', 'TN-02', 'TN-03', 'TN-04', 'TN-05', 'TN-06', 'TN-07', 'TN-09', 'TN-10', 'TN-11', 'TN-12', 'TN-13', 'TN-14', 'TN-15', 'TN-15M', 'TN-16', 'TN-16Z', 'TN-18', 'TN-18Y', 'TN-19', 'TN-19Z', 'TN-20', 'TN-20X', 'TN-21', 'TN-22', 'TN-23', 'TN-23T', 'TN-24', 'TN-25', 'TN-27', 'TN-28', 'TN-28Z', 'TN-29', 'TN-29W', 'TN-29Z', 'TN-30', 'TN-30W', 'TN-31', 'TN-31Z', 'TN-32', 'TN-33', 'TN-34', 'TN-34M', 'TN-36', 'TN-36W', 'TN-36Z', 'TN-37', 'TN-37Z', 'TN-38', 'TN-39', 'TN-39Z', 'TN-40', 'TN-41', 'TN-41W', 'TN-42', 'TN-42Y', 'TN-43', 'TN-43Z', 'TN-45', 'TN-45Z', 'TN-46', 'TN-47', 'TN-47X', 'TN-47Y', 'TN-47Z', 'TN-48', 'TN-48Z', 'TN-48Y', 'TN-48X', 'TN-49', 'TN-49Y', 'TN-50', 'TN-50Y', 'TN-50Z', 'TN-51', 'TN-52', 'TN-54', 'TN-55', 'TN-55X', 'TN-55Y', 'TN-55Z', 'TN-56', 'TN-57', 'TN-57V', 'TN-57W', 'TN-58', 'TN-58Y', 'TN-58Z', 'TN-59', 'TN-59V', 'TN-59Z', 'TN-60', 'TN-60Z', 'TN-61', 'TN-63', 'TN-63Z', 'TN-64', 'TN-65', 'TN-65Z', 'TN-66', 'TN-67', 'TN-67W', 'TN-68', 'TN-69', 'TN-70', 'TN-72', 'TN-72V', 'TN-73', 'TN-73Z', 'TN-74', 'TN-75', 'TN-76', 'TN-76V', 'TN-77', 'TN-77Z', 'TN-78', 'TN-78M', 'TN-79', 'TN-81', 'TN-81Z', 'TN-82', 'TN-82Z', 'TN-83', 'TN-83Y', 'TN-83M', 'TN-84', 'TN-85', 'TN-86', 'TN-87', 'TN-88', 'TN-88Z', 'TN-90', 'TN-91', 'TN-31Y', 'TN-91Z', 'TN-92', 'TN-93', 'TN-94', 'TN-94Z', 'TN-95', 'TN-96', 'TN-97', 'TN-97Z', 'TN-99',]
    },
    {
        name: 'Agartala',
        code:'tr',
        rtos: ['TR01', 'TR02', 'TR03', 'TR04', 'TR05', 'TR06', 'TR07', 'TR08',]
    },
    {
        name: 'Telangana',
        code:'ts',
        rtos: ['TS01', 'TS02', 'TS03', 'TS04', 'TS05', 'TS06', 'TS07', 'TS08', 'TS09', 'TS10', 'TS11', 'TS12', 'TS13', 'TS14', 'TS15', 'TS16', 'TS17', 'TS18', 'TS19', 'TS20', 'TS21', 'TS22', 'TS23', 'TS24', 'TS25', 'TS26', 'TS27', 'TS28', 'TS29', 'TS30', 'TS31', 'TS32', 'TS33', 'TS34', 'TS35', 'TS36', 'TS37', 'TS38',]
    },
    {
        name: 'Uttarakhand',
        code:'uk',
        rtos: ['UK01', 'UK02', 'UK03', 'UK04', 'UK05', 'UK06', 'UK07', 'UK08', 'UK09', 'UK10', 'UK11', 'UK12', 'UK13', 'UK14', 'UK15', 'UK16', 'UK17', 'UK18', 'UK19', 'UK20',]
    },
    {
        name: 'Uttar Pradesh',
        code:'up',
        rtos: ['UP11', 'UP12', 'UP13', 'UP14', 'UP15', 'UP16', 'UP17', 'UP18', 'UP19', 'UP20', 'UP21', 'UP22', 'UP23', 'UP24', 'UP25', 'UP26', 'UP27', 'UP28', 'UP29', 'UP30', 'UP31', 'UP32', 'UP33', 'UP34', 'UP35', 'UP36', 'UP37', 'UP38', 'UP39', 'UP40', 'UP41', 'UP42', 'UP43', 'UP44', 'UP45', 'UP46', 'UP47', 'UP48', 'UP49', 'UP50', 'UP51', 'UP52', 'UP53', 'UP54', 'UP55', 'UP56', 'UP57', 'UP58', 'UP59', 'UP60', 'UP61', 'UP62', 'UP63', 'UP64', 'UP65', 'UP66', 'UP67', 'UP68', 'UP69', 'UP70', 'UP71', 'UP72', 'UP73', 'UP74', 'UP75', 'UP76', 'UP77', 'UP78', 'UP79', 'UP80', 'UP81', 'UP82', 'UP83', 'UP84', 'UP85',]
    },
    {
        name: 'West Bengal',
        code:'wb',
        rtos: ['WB01', 'WB02', 'WB03', 'WB04', 'WB05', 'WB06', 'WB07', 'WB08', 'WB09', 'WB10', 'WB11', 'WB12', 'WB13', 'WB14', 'WB15', 'WB16', 'WB17', 'WB18', 'WB19', 'WB20', 'WB21', 'WB22', 'WB23', 'WB24', 'WB25', 'WB26', 'WB27', 'WB28', 'WB29', 'WB30', 'WB31', 'WB32', 'WB33', 'WB34', 'WB35', 'WB36', 'WB37', 'WB38', 'WB39', 'WB40', 'WB41', 'WB42', 'WB43', 'WB44', 'WB45', 'WB46', 'WB47', 'WB48', 'WB49', 'WB50', 'WB51', 'WB52', 'WB53', 'WB54', 'WB55', 'WB56', 'WB57', 'WB58', 'WB59', 'WB60', 'WB61', 'WB62', 'WB63', 'WB64', 'WB65', 'WB66', 'WB67', 'WB68', 'WB69', 'WB70', 'WB71', 'WB72', 'WB73', 'WB74', 'WB75', 'WB76', 'WB77', 'WB78', 'WB79', 'WB80', 'WB81', 'WB82', 'WB83', 'WB84', 'WB85', 'WB86', 'WB87', 'WB88', 'WB89', 'WB90', 'WB91', 'WB92', 'WB93', 'WB94', 'WB95', 'WB96', 'WB97', 'WB98', 'WB99',]
    }
]




export const FieldsPassing_Partner_4W = [
    {
        title: 'Transfer',
        name: 'transfer',
        Fields: [
            {
                name: 'govt_fee',
                label: 'Govt. Fee'
            }, {
                name: 'reimbursement',
                label: 'Reimbursement'
            }, {
                name: 'service_charges',
                label: 'Service Charges'
            }, {
                name: 'gst_charges',
                label: 'GST Charges'
            }, {
                name: 'vendor_charges',
                label: 'Vendor Charges'
            }, {
                name: 'ope',
                label: 'OPE'
            }, {
                name: 'partner',
                label: 'Partner'
            },
        ]
    },
    {
        title: 'HP Cancel',
        name: 'hp_cancel',
        Fields: [
            {
                name: 'govt_fee',
                label: 'Govt. Fee'
            }, {
                name: 'reimbursement',
                label: 'Reimbursement'
            }, {
                name: 'service_charges',
                label: 'Service Charges'
            }, {
                name: 'gst_charges',
                label: 'GST Charges'
            }, {
                name: 'vendor_charges',
                label: 'Vendor Charges'
            }, {
                name: 'ope',
                label: 'OPE'
            }, {
                name: 'partner',
                label: 'Partner'
            },
        ]
    },
    {
        title: 'HP Add',
        name: 'hp_add',
        Fields: [
            {
                name: 'govt_fee',
                label: 'Govt. Fee'
            }, {
                name: 'reimbursement',
                label: 'Reimbursement'
            }, {
                name: 'service_charges',
                label: 'Service Charges'
            }, {
                name: 'gst_charges',
                label: 'GST Charges'
            }, {
                name: 'vendor_charges',
                label: 'Vendor Charges'
            }, {
                name: 'ope',
                label: 'OPE'
            }, {
                name: 'partner',
                label: 'Partner'
            },
        ]
    },
    {
        title: 'N.O.C',
        name: 'noc',
        Fields: [
            {
                name: 'govt_fee',
                label: 'Govt. Fee'
            }, {
                name: 'reimbursement',
                label: 'Reimbursement'
            }, {
                name: 'service_charges',
                label: 'Service Charges'
            }, {
                name: 'gst_charges',
                label: 'GST Charges'
            }, {
                name: 'vendor_charges',
                label: 'Vendor Charges'
            }, {
                name: 'ope',
                label: 'OPE'
            }, {
                name: 'partner',
                label: 'Partner'
            },
        ]
    },
    {
        title: 'D.R.C',
        name: 'drc',
        Fields: [
            {
                name: 'govt_fee',
                label: 'Govt. Fee'
            }, {
                name: 'reimbursement',
                label: 'Reimbursement'
            }, {
                name: 'service_charges',
                label: 'Service Charges'
            }, {
                name: 'gst_charges',
                label: 'GST Charges'
            }, {
                name: 'vendor_charges',
                label: 'Vendor Charges'
            }, {
                name: 'ope',
                label: 'OPE'
            }, {
                name: 'partner',
                label: 'Partner'
            },
        ]
    },
    {
        title: 'Insurance',
        name: 'insurance',
        Fields: [
            {
                name: 'reimbursement',
                label: 'Reimbursement'
            },
            {
                name: 'gst_charges',
                label: 'GST'
            }
        ]
    },
    {
        title: 'Pollution',
        name: 'pollution',
        Fields: [
            {
                name: 'reimbursement',
                label: 'Reimbursement'
            },
            {
                name: 'gst_charges',
                label: 'GST'
            }
        ]
    }

]

export const Fields_Partner_4W_PV = [
    {
        title: 'Party Video',
        name: 'party_video',
        Fields: [
            {
                name: 'govt_fee',
                label: 'Govt. Fee'
            }, {
                name: 'reimbursement',
                label: 'Reimbursement'
            }, {
                name: 'service_charges',
                label: 'Service Charges'
            }, {
                name: 'gst_charges',
                label: 'GST Charges'
            }, {
                name: 'vendor_charges',
                label: 'Vendor Charges'
            }, {
                name: 'ope',
                label: 'OPE'
            }, {
                name: 'partner',
                label: 'Partner'
            },
        ]
    },
    {
        title: 'Vehicle Video',
        name: 'vehicle_video',
        Fields: [
            {
                name: 'govt_fee',
                label: 'Govt. Fee'
            }, {
                name: 'reimbursement',
                label: 'Reimbursement'
            }, {
                name: 'service_charges',
                label: 'Service Charges'
            }, {
                name: 'gst_charges',
                label: 'GST Charges'
            }, {
                name: 'vendor_charges',
                label: 'Vendor Charges'
            }, {
                name: 'ope',
                label: 'OPE'
            }, {
                name: 'partner',
                label: 'Partner'
            },
        ]
    }
]

export const Fields_Partner_4W_Renewal = [
    {
        title: 'Renewal',
        name: 'renewals',
        Fields: [
            {
                title: 'Fitness Normal',
                name: 'fitness_normal',
                Fields: [
                    {
                        name: 'govt_fee',
                        label: 'Govt. Fee'
                    }, {
                        name: 'reimbursement',
                        label: 'Reimbursement'
                    }, {
                        name: 'service_charges',
                        label: 'Service Charges'
                    }, {
                        name: 'gst_charges',
                        label: 'GST Charges'
                    }, {
                        name: 'vendor_charges',
                        label: 'Vendor Charges'
                    }, {
                        name: 'ope',
                        label: 'OPE'
                    }, {
                        name: 'partner',
                        label: 'Partner'
                    },
                ]
            },
            {
                title: 'Fitness Premium',
                name: 'fitness_premium',
                Fields: [
                    {
                        name: 'govt_fee',
                        label: 'Govt. Fee'
                    }, {
                        name: 'reimbursement',
                        label: 'Reimbursement'
                    }, {
                        name: 'service_charges',
                        label: 'Service Charges'
                    }, {
                        name: 'gst_charges',
                        label: 'GST Charges'
                    }, {
                        name: 'vendor_charges',
                        label: 'Vendor Charges'
                    }, {
                        name: 'ope',
                        label: 'OPE'
                    }, {
                        name: 'partner',
                        label: 'Partner'
                    },
                ]
            },
            {
                title: 'Permit NP',
                name: 'permit_np',
                Fields: [
                    {
                        name: 'govt_fee',
                        label: 'Govt. Fee'
                    }, {
                        name: 'reimbursement',
                        label: 'Reimbursement'
                    }, {
                        name: 'service_charges',
                        label: 'Service Charges'
                    }, {
                        name: 'gst_charges',
                        label: 'GST Charges'
                    }, {
                        name: 'vendor_charges',
                        label: 'Vendor Charges'
                    }, {
                        name: 'ope',
                        label: 'OPE'
                    }, {
                        name: 'partner',
                        label: 'Partner'
                    },
                ]
            },
            {
                title: 'Permit ',
                name: 'permit_np',
                Fields: [
                    {
                        name: 'govt_fee',
                        label: 'Govt. Fee'
                    }, {
                        name: 'reimbursement',
                        label: 'Reimbursement'
                    }, {
                        name: 'service_charges',
                        label: 'Service Charges'
                    }, {
                        name: 'gst_charges',
                        label: 'GST Charges'
                    }, {
                        name: 'vendor_charges',
                        label: 'Vendor Charges'
                    }, {
                        name: 'ope',
                        label: 'OPE'
                    }, {
                        name: 'partner',
                        label: 'Partner'
                    },
                ]
            }
        ]
    }
]