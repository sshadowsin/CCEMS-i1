angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.category', {
    url: '/Category_Tab',
    views: {
      'tab1': {
        templateUrl: 'templates/category.html',
        controller: 'categoryCtrl'
      }
    }
  })

  .state('tabsController.medications', {
    url: '/Medications_Tab',
    views: {
      'tab2': {
        templateUrl: 'templates/medications.html',
        controller: 'medicationsCtrl'
      }
    }
  })

  .state('tabsController.protocolsByNumber', {
    url: '/ProtocolsByNum_Tab',
    views: {
      'tab3': {
        templateUrl: 'templates/protocolsByNumber.html',
        controller: 'protocolsByNumberCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/Tabs_Controller',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.protocol1000ActivatedCharcoal', {
    url: '/Protocol_1000',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1000ActivatedCharcoal.html',
        controller: 'protocol1000ActivatedCharcoalCtrl'
      }
    }
  })

  .state('tabsController.protocol1001Adenosine', {
    url: '/Protocol_1001',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1001Adenosine.html',
        controller: 'protocol1001AdenosineCtrl'
      }
    }
  })

  .state('tabsController.protocol1002Albuterol', {
    url: '/Protocol_1002',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1002Albuterol.html',
        controller: 'protocol1002AlbuterolCtrl'
      }
    }
  })

  .state('tabsController.protocol1003Amiodarone', {
    url: '/Protocol_1003',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1003Amiodarone.html',
        controller: 'protocol1003AmiodaroneCtrl'
      }
    }
  })

  .state('tabsController.protocol1004Aspirin', {
    url: '/Protocol_1004',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1004Aspirin.html',
        controller: 'protocol1004AspirinCtrl'
      }
    }
  })

  .state('tabsController.protocol1005Atropine', {
    url: '/Protocol_1005',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1005Atropine.html',
        controller: 'protocol1005AtropineCtrl'
      }
    }
  })

  .state('tabsController.protocol1006Atrovent', {
    url: '/protocol_1006',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1006Atrovent.html',
        controller: 'protocol1006AtroventCtrl'
      }
    }
  })

  .state('tabsController.protocol1007Benadryl', {
    url: '/protocol_1007',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1007Benadryl.html',
        controller: 'protocol1007BenadrylCtrl'
      }
    }
  })

  .state('tabsController.protocol1008Dextrose', {
    url: '/protocol_1008',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1008Dextrose.html',
        controller: 'protocol1008DextroseCtrl'
      }
    }
  })

  .state('tabsController.protocol1009Epinephrine', {
    url: '/Protocol_1009',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1009Epinephrine.html',
        controller: 'protocol1009EpinephrineCtrl'
      }
    }
  })

  .state('tabsController.protocol1010SodiumBicarbonate', {
    url: '/Protocol_1010',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1010SodiumBicarbonate.html',
        controller: 'protocol1010SodiumBicarbonateCtrl'
      }
    }
  })

  .state('tabsController.protocol1011Fentanyl', {
    url: '/Protocol_1011',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1011Fentanyl.html',
        controller: 'protocol1011FentanylCtrl'
      }
    }
  })

  .state('tabsController.protocol1012Glucagon', {
    url: '/Protocol_1012',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1012Glucagon.html',
        controller: 'protocol1012GlucagonCtrl'
      }
    }
  })

  .state('tabsController.protocol1013Haldol', {
    url: '/Protocol_1013',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1013Haldol.html',
        controller: 'protocol1013HaldolCtrl'
      }
    }
  })

  .state('tabsController.protocol1014Lasix', {
    url: '/Protocol_1014',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1014Lasix.html',
        controller: 'protocol1014LasixCtrl'
      }
    }
  })

  .state('tabsController.protocol1015Lidocaine', {
    url: '/Protocol_1015',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1015Lidocaine.html',
        controller: 'protocol1015LidocaineCtrl'
      }
    }
  })

  .state('tabsController.protocol1016MagSulfate', {
    url: '/Protocol_1016',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1016MagSulfate.html',
        controller: 'protocol1016MagSulfateCtrl'
      }
    }
  })

  .state('tabsController.protocol1017Morphine', {
    url: '/Protocol_1017',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1017Morphine.html',
        controller: 'protocol1017MorphineCtrl'
      }
    }
  })

  .state('tabsController.protocol1019Nitroglycerin', {
    url: '/Protocol_1019',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1019Nitroglycerin.html',
        controller: 'protocol1019NitroglycerinCtrl'
      }
    }
  })

  .state('tabsController.protocol1018Naloxone', {
    url: '/Protocol_1018',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1018Naloxone.html',
        controller: 'protocol1018NaloxoneCtrl'
      }
    }
  })

  .state('tabsController.protocol1020Phenergan', {
    url: '/Protocol_1020',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1020Phenergan.html',
        controller: 'protocol1020PhenerganCtrl'
      }
    }
  })

  .state('tabsController.protocol1021Pitocin', {
    url: '/Protocol_1021',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1021Pitocin.html',
        controller: 'protocol1021PitocinCtrl'
      }
    }
  })

  .state('tabsController.protocol1022Tylenol', {
    url: '/Protocol_1022',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1022Tylenol.html',
        controller: 'protocol1022TylenolCtrl'
      }
    }
  })

  .state('tabsController.protocol1023Valium', {
    url: '/Protocol_1023',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1023Valium.html',
        controller: 'protocol1023ValiumCtrl'
      }
    }
  })

  .state('tabsController.protocol1024Versed', {
    url: '/Protocol_1024',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1024Versed.html',
        controller: 'protocol1024VersedCtrl'
      }
    }
  })

  .state('tabsController.protocol1025Zofran', {
    url: '/Protocol_1025',
    views: {
      'tab2': {
        templateUrl: 'templates/protocol1025Zofran.html',
        controller: 'protocol1025ZofranCtrl'
      }
    }
  })

  .state('login', {
    url: '/page14',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.information', {
    url: '/Information',
    views: {
      'tab6': {
        templateUrl: 'templates/information.html',
        controller: 'informationCtrl'
      }
    }
  })

  .state('tabsController.cardiacArrest', {
    url: '/Cardiac_Arrest',
    views: {
      'tab1': {
        templateUrl: 'templates/cardiacArrest.html',
        controller: 'cardiacArrestCtrl'
      }
    }
  })

  .state('tabsController.cardiacRateProblems', {
    url: '/Cardiac_Rate_Problems',
    views: {
      'tab1': {
        templateUrl: 'templates/cardiacRateProblems.html',
        controller: 'cardiacRateProblemsCtrl'
      }
    }
  })

  .state('tabsController.medicalEmergencies', {
    url: '/Medical_Emergencies',
    views: {
      'tab1': {
        templateUrl: 'templates/medicalEmergencies.html',
        controller: 'medicalEmergenciesCtrl'
      }
    }
  })

  .state('tabsController.respiratoryEmergencies', {
    url: '/Respiratory_Emergencies',
    views: {
      'tab1': {
        templateUrl: 'templates/respiratoryEmergencies.html',
        controller: 'respiratoryEmergenciesCtrl'
      }
    }
  })

  .state('tabsController.trauma', {
    url: '/Trauma',
    views: {
      'tab1': {
        templateUrl: 'templates/trauma.html',
        controller: 'traumaCtrl'
      }
    }
  })

  .state('tabsController.obstetricsGynocology', {
    url: '/Obstetrics_Gynocology',
    views: {
      'tab1': {
        templateUrl: 'templates/obstetricsGynocology.html',
        controller: 'obstetricsGynocologyCtrl'
      }
    }
  })

  .state('tabsController.pediatrics', {
    url: '/Pediatrics',
    views: {
      'tab1': {
        templateUrl: 'templates/pediatrics.html',
        controller: 'pediatricsCtrl'
      }
    }
  })

  .state('tabsController.behavioralEmergencies', {
    url: '/Behavioral_Emergencies',
    views: {
      'tab1': {
        templateUrl: 'templates/behavioralEmergencies.html',
        controller: 'behavioralEmergenciesCtrl'
      }
    }
  })

  .state('tabsController.proceduralProtocols', {
    url: '/Procedural_Protocols',
    views: {
      'tab1': {
        templateUrl: 'templates/proceduralProtocols.html',
        controller: 'proceduralProtocolsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol100LVAD'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol100LVAD');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_100
      /Tabs_Controller/tab3/Protocol_100
  */
  .state('tabsController.protocol100LVAD', {
    url: '/Protocol_100',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol100LVAD.html',
        controller: 'protocol100LVADCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol100LVAD.html',
        controller: 'protocol100LVADCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol101MedicalCardiacArrestInitialCare'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol101MedicalCardiacArrestInitialCare');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_101
      /Tabs_Controller/tab3/Protocol_101
  */
  .state('tabsController.protocol101MedicalCardiacArrestInitialCare', {
    url: '/Protocol_101',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol101MedicalCardiacArrestInitialCare.html',
        controller: 'protocol101MedicalCardiacArrestInitialCareCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol101MedicalCardiacArrestInitialCare.html',
        controller: 'protocol101MedicalCardiacArrestInitialCareCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol102VentricularFibrillationPulselessVentricularTachycardia'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol102VentricularFibrillationPulselessVentricularTachycardia');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_102
      /Tabs_Controller/tab3/Protocol_102
  */
  .state('tabsController.protocol102VentricularFibrillationPulselessVentricularTachycardia', {
    url: '/Protocol_102',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol102VentricularFibrillationPulselessVentricularTachycardia.html',
        controller: 'protocol102VentricularFibrillationPulselessVentricularTachycardiaCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol102VentricularFibrillationPulselessVentricularTachycardia.html',
        controller: 'protocol102VentricularFibrillationPulselessVentricularTachycardiaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol103AsystoleAndPulselessElectricalActivity'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol103AsystoleAndPulselessElectricalActivity');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_103
      /Tabs_Controller/tab3/Protocol_103
  */
  .state('tabsController.protocol103AsystoleAndPulselessElectricalActivity', {
    url: '/Protocol_103',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol103AsystoleAndPulselessElectricalActivity.html',
        controller: 'protocol103AsystoleAndPulselessElectricalActivityCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol103AsystoleAndPulselessElectricalActivity.html',
        controller: 'protocol103AsystoleAndPulselessElectricalActivityCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol104TraumaticCardiacArrest'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol104TraumaticCardiacArrest');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_104
      /Tabs_Controller/tab3/Protocol_104
  */
  .state('tabsController.protocol104TraumaticCardiacArrest', {
    url: '/Protocol_104',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol104TraumaticCardiacArrest.html',
        controller: 'protocol104TraumaticCardiacArrestCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol104TraumaticCardiacArrest.html',
        controller: 'protocol104TraumaticCardiacArrestCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol105HypothermicCardiacArrest'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol105HypothermicCardiacArrest');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_105
      /Tabs_Controller/tab3/Protocol_105
  */
  .state('tabsController.protocol105HypothermicCardiacArrest', {
    url: '/Protocol_105',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol105HypothermicCardiacArrest.html',
        controller: 'protocol105HypothermicCardiacArrestCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol105HypothermicCardiacArrest.html',
        controller: 'protocol105HypothermicCardiacArrestCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol106CeasingResuscitativeEfforts'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol106CeasingResuscitativeEfforts');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_106
      /Tabs_Controller/tab3/Protocol_106
  */
  .state('tabsController.protocol106CeasingResuscitativeEfforts', {
    url: '/Protocol_106',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol106CeasingResuscitativeEfforts.html',
        controller: 'protocol106CeasingResuscitativeEffortsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol106CeasingResuscitativeEfforts.html',
        controller: 'protocol106CeasingResuscitativeEffortsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol200CardiacMonitoring12Lead'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol200CardiacMonitoring12Lead');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_200
      /Tabs_Controller/tab3/Protocol_200
  */
  .state('tabsController.protocol200CardiacMonitoring12Lead', {
    url: '/Protocol_200',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol200CardiacMonitoring12Lead.html',
        controller: 'protocol200CardiacMonitoring12LeadCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol200CardiacMonitoring12Lead.html',
        controller: 'protocol200CardiacMonitoring12LeadCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol201Bradycardia'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol201Bradycardia');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_201
      /Tabs_Controller/tab3/Protocol_201
  */
  .state('tabsController.protocol201Bradycardia', {
    url: '/Protocol_201',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol201Bradycardia.html',
        controller: 'protocol201BradycardiaCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol201Bradycardia.html',
        controller: 'protocol201BradycardiaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol202Tachycardia'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol202Tachycardia');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_202
      /Tabs_Controller/tab3/Protocol_202
  */
  .state('tabsController.protocol202Tachycardia', {
    url: '/Protocol_202',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol202Tachycardia.html',
        controller: 'protocol202TachycardiaCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol202Tachycardia.html',
        controller: 'protocol202TachycardiaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol300ChestPain'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol300ChestPain');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_300
      /Tabs_Controller/tab3/Protocol_300
  */
  .state('tabsController.protocol300ChestPain', {
    url: '/Protocol_300',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol300ChestPain.html',
        controller: 'protocol300ChestPainCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol300ChestPain.html',
        controller: 'protocol300ChestPainCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol301Shock'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol301Shock');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_301
      /Tabs_Controller/tab3/Protocol_301
  */
  .state('tabsController.protocol301Shock', {
    url: '/Protocol_301',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol301Shock.html',
        controller: 'protocol301ShockCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol301Shock.html',
        controller: 'protocol301ShockCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol302HypovolemicShock'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol302HypovolemicShock');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_302
      /Tabs_Controller/tab3/Protocol_302
  */
  .state('tabsController.protocol302HypovolemicShock', {
    url: '/Protocol_302',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol302HypovolemicShock.html',
        controller: 'protocol302HypovolemicShockCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol302HypovolemicShock.html',
        controller: 'protocol302HypovolemicShockCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol303CardiogenicShock'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol303CardiogenicShock');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_303
      /Tabs_Controller/tab3/Protocol_303
  */
  .state('tabsController.protocol303CardiogenicShock', {
    url: '/Protocol_303',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol303CardiogenicShock.html',
        controller: 'protocol303CardiogenicShockCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol303CardiogenicShock.html',
        controller: 'protocol303CardiogenicShockCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol304VascularShockAndObstructiveShock'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol304VascularShockAndObstructiveShock');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_304
      /Tabs_Controller/tab3/Protocol_304
  */
  .state('tabsController.protocol304VascularShockAndObstructiveShock', {
    url: '/Protocol_304',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol304VascularShockAndObstructiveShock.html',
        controller: 'protocol304VascularShockAndObstructiveShockCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol304VascularShockAndObstructiveShock.html',
        controller: 'protocol304VascularShockAndObstructiveShockCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol305HypertensiveEmergency'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol305HypertensiveEmergency');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_305
      /Tabs_Controller/tab3/Protocol_305
  */
  .state('tabsController.protocol305HypertensiveEmergency', {
    url: '/Protocol_305',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol305HypertensiveEmergency.html',
        controller: 'protocol305HypertensiveEmergencyCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol305HypertensiveEmergency.html',
        controller: 'protocol305HypertensiveEmergencyCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol306AlteredLevelOfConsciousness'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol306AlteredLevelOfConsciousness');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_306
      /Tabs_Controller/tab3/Protocol_306
  */
  .state('tabsController.protocol306AlteredLevelOfConsciousness', {
    url: '/Protocol_306',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol306AlteredLevelOfConsciousness.html',
        controller: 'protocol306AlteredLevelOfConsciousnessCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol306AlteredLevelOfConsciousness.html',
        controller: 'protocol306AlteredLevelOfConsciousnessCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol307SuspectedCVATIAStroke'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol307SuspectedCVATIAStroke');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_307
      /Tabs_Controller/tab3/Protocol_307
  */
  .state('tabsController.protocol307SuspectedCVATIAStroke', {
    url: '/Protocol_307',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol307SuspectedCVATIAStroke.html',
        controller: 'protocol307SuspectedCVATIAStrokeCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol307SuspectedCVATIAStroke.html',
        controller: 'protocol307SuspectedCVATIAStrokeCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol308Seizure'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol308Seizure');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_308
      /Tabs_Controller/tab3/Protocol_308
  */
  .state('tabsController.protocol308Seizure', {
    url: '/Protocol_308',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol308Seizure.html',
        controller: 'protocol308SeizureCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol308Seizure.html',
        controller: 'protocol308SeizureCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol309Syncope'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol309Syncope');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/PROTOCOL_309
      /Tabs_Controller/tab3/PROTOCOL_309
  */
  .state('tabsController.protocol309Syncope', {
    url: '/PROTOCOL_309',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol309Syncope.html',
        controller: 'protocol309SyncopeCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol309Syncope.html',
        controller: 'protocol309SyncopeCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol310AllergicReactionAnaphylaxis'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol310AllergicReactionAnaphylaxis');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_310
      /Tabs_Controller/tab3/Protocol_310
  */
  .state('tabsController.protocol310AllergicReactionAnaphylaxis', {
    url: '/Protocol_310',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol310AllergicReactionAnaphylaxis.html',
        controller: 'protocol310AllergicReactionAnaphylaxisCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol310AllergicReactionAnaphylaxis.html',
        controller: 'protocol310AllergicReactionAnaphylaxisCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol311ToxicSubstanceExposureOverdose'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol311ToxicSubstanceExposureOverdose');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_311
      /Tabs_Controller/tab3/Protocol_311
  */
  .state('tabsController.protocol311ToxicSubstanceExposureOverdose', {
    url: '/Protocol_311',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol311ToxicSubstanceExposureOverdose.html',
        controller: 'protocol311ToxicSubstanceExposureOverdoseCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol311ToxicSubstanceExposureOverdose.html',
        controller: 'protocol311ToxicSubstanceExposureOverdoseCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol312ToxicSubstanceExposureCarbonMonoxideClosedSpaceFireAndSmokeExposure'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol312ToxicSubstanceExposureCarbonMonoxideClosedSpaceFireAndSmokeExposure');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_312
      /Tabs_Controller/tab3/Protocol_312
  */
  .state('tabsController.protocol312ToxicSubstanceExposureCarbonMonoxideClosedSpaceFireAndSmokeExposure', {
    url: '/Protocol_312',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol312ToxicSubstanceExposureCarbonMonoxideClosedSpaceFireAndSmokeExposure.html',
        controller: 'protocol312ToxicSubstanceExposureCarbonMonoxideClosedSpaceFireAndSmokeExposureCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol312ToxicSubstanceExposureCarbonMonoxideClosedSpaceFireAndSmokeExposure.html',
        controller: 'protocol312ToxicSubstanceExposureCarbonMonoxideClosedSpaceFireAndSmokeExposureCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol313ToxicExposureCyanide'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol313ToxicExposureCyanide');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_313
      /Tabs_Controller/tab3/Protocol_313
  */
  .state('tabsController.protocol313ToxicExposureCyanide', {
    url: '/Protocol_313',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol313ToxicExposureCyanide.html',
        controller: 'protocol313ToxicExposureCyanideCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol313ToxicExposureCyanide.html',
        controller: 'protocol313ToxicExposureCyanideCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol314ToxicExposureHydrofluoricAcid'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol314ToxicExposureHydrofluoricAcid');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_314
      /Tabs_Controller/tab3/Protocol_314
  */
  .state('tabsController.protocol314ToxicExposureHydrofluoricAcid', {
    url: '/Protocol_314',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol314ToxicExposureHydrofluoricAcid.html',
        controller: 'protocol314ToxicExposureHydrofluoricAcidCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol314ToxicExposureHydrofluoricAcid.html',
        controller: 'protocol314ToxicExposureHydrofluoricAcidCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol315OrganophosphatesNerveAgents'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol315OrganophosphatesNerveAgents');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_315
      /Tabs_Controller/tab3/Protocol_315
  */
  .state('tabsController.protocol315OrganophosphatesNerveAgents', {
    url: '/Protocol_315',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol315OrganophosphatesNerveAgents.html',
        controller: 'protocol315OrganophosphatesNerveAgentsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol315OrganophosphatesNerveAgents.html',
        controller: 'protocol315OrganophosphatesNerveAgentsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol316TemperatureAndEnvironmentalEmergencies'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol316TemperatureAndEnvironmentalEmergencies');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_316
      /Tabs_Controller/tab3/Protocol_316
  */
  .state('tabsController.protocol316TemperatureAndEnvironmentalEmergencies', {
    url: '/Protocol_316',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol316TemperatureAndEnvironmentalEmergencies.html',
        controller: 'protocol316TemperatureAndEnvironmentalEmergenciesCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol316TemperatureAndEnvironmentalEmergencies.html',
        controller: 'protocol316TemperatureAndEnvironmentalEmergenciesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol317ImmunocompromisedPatients'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol317ImmunocompromisedPatients');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_317
      /Tabs_Controller/tab3/Protocol_317
  */
  .state('tabsController.protocol317ImmunocompromisedPatients', {
    url: '/Protocol_317',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol317ImmunocompromisedPatients.html',
        controller: 'protocol317ImmunocompromisedPatientsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol317ImmunocompromisedPatients.html',
        controller: 'protocol317ImmunocompromisedPatientsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol318SnakeBites'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol318SnakeBites');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_318
      /Tabs_Controller/tab3/Protocol_318
  */
  .state('tabsController.protocol318SnakeBites', {
    url: '/Protocol_318',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol318SnakeBites.html',
        controller: 'protocol318SnakeBitesCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol318SnakeBites.html',
        controller: 'protocol318SnakeBitesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol319GlucoseEmergenciesHypoglycemiaHyperglycemia'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol319GlucoseEmergenciesHypoglycemiaHyperglycemia');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_319
      /Tabs_Controller/tab3/Protocol_319
  */
  .state('tabsController.protocol319GlucoseEmergenciesHypoglycemiaHyperglycemia', {
    url: '/Protocol_319',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol319GlucoseEmergenciesHypoglycemiaHyperglycemia.html',
        controller: 'protocol319GlucoseEmergenciesHypoglycemiaHyperglycemiaCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol319GlucoseEmergenciesHypoglycemiaHyperglycemia.html',
        controller: 'protocol319GlucoseEmergenciesHypoglycemiaHyperglycemiaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol400UpperAirwayObstruction'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol400UpperAirwayObstruction');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_400
      /Tabs_Controller/tab3/Protocol_400
  */
  .state('tabsController.protocol400UpperAirwayObstruction', {
    url: '/Protocol_400',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol400UpperAirwayObstruction.html',
        controller: 'protocol400UpperAirwayObstructionCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol400UpperAirwayObstruction.html',
        controller: 'protocol400UpperAirwayObstructionCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol401BronchospasmWheezing'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol401BronchospasmWheezing');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_401
      /Tabs_Controller/tab3/Protocol_401
  */
  .state('tabsController.protocol401BronchospasmWheezing', {
    url: '/Protocol_401',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol401BronchospasmWheezing.html',
        controller: 'protocol401BronchospasmWheezingCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol401BronchospasmWheezing.html',
        controller: 'protocol401BronchospasmWheezingCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol402AcutePulmonaryEdemaCongestiveHeartFailure'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol402AcutePulmonaryEdemaCongestiveHeartFailure');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_402
      /Tabs_Controller/tab3/Protocol_402
  */
  .state('tabsController.protocol402AcutePulmonaryEdemaCongestiveHeartFailure', {
    url: '/Protocol_402',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol402AcutePulmonaryEdemaCongestiveHeartFailure.html',
        controller: 'protocol402AcutePulmonaryEdemaCongestiveHeartFailureCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol402AcutePulmonaryEdemaCongestiveHeartFailure.html',
        controller: 'protocol402AcutePulmonaryEdemaCongestiveHeartFailureCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol404SupraglotticAirwayTheKingAirway'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol404SupraglotticAirwayTheKingAirway');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_404
      /Tabs_Controller/tab3/Protocol_404
  */
  .state('tabsController.protocol404SupraglotticAirwayTheKingAirway', {
    url: '/Protocol_404',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol404SupraglotticAirwayTheKingAirway.html',
        controller: 'protocol404SupraglotticAirwayTheKingAirwayCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol404SupraglotticAirwayTheKingAirway.html',
        controller: 'protocol404SupraglotticAirwayTheKingAirwayCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol403ContinuousPositiveAirwayPressure'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol403ContinuousPositiveAirwayPressure');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_403
      /Tabs_Controller/tab3/Protocol_403
  */
  .state('tabsController.protocol403ContinuousPositiveAirwayPressure', {
    url: '/Protocol_403',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol403ContinuousPositiveAirwayPressure.html',
        controller: 'protocol403ContinuousPositiveAirwayPressureCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol403ContinuousPositiveAirwayPressure.html',
        controller: 'protocol403ContinuousPositiveAirwayPressureCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol500DrowningOrSubmersion'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol500DrowningOrSubmersion');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_500
      /Tabs_Controller/tab3/Protocol_500
  */
  .state('tabsController.protocol500DrowningOrSubmersion', {
    url: '/Protocol_500',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol500DrowningOrSubmersion.html',
        controller: 'protocol500DrowningOrSubmersionCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol500DrowningOrSubmersion.html',
        controller: 'protocol500DrowningOrSubmersionCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol501MajorOrMultiSystemTrauma'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol501MajorOrMultiSystemTrauma');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_501
      /Tabs_Controller/tab3/Protocol_501
  */
  .state('tabsController.protocol501MajorOrMultiSystemTrauma', {
    url: '/Protocol_501',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol501MajorOrMultiSystemTrauma.html',
        controller: 'protocol501MajorOrMultiSystemTraumaCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol501MajorOrMultiSystemTrauma.html',
        controller: 'protocol501MajorOrMultiSystemTraumaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol502HeadTrauma'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol502HeadTrauma');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_502
      /Tabs_Controller/tab3/Protocol_502
  */
  .state('tabsController.protocol502HeadTrauma', {
    url: '/Protocol_502',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol502HeadTrauma.html',
        controller: 'protocol502HeadTraumaCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol502HeadTrauma.html',
        controller: 'protocol502HeadTraumaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol503SpinalCordInjury'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol503SpinalCordInjury');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_503
      /Tabs_Controller/tab3/Protocol_503
  */
  .state('tabsController.protocol503SpinalCordInjury', {
    url: '/Protocol_503',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol503SpinalCordInjury.html',
        controller: 'protocol503SpinalCordInjuryCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol503SpinalCordInjury.html',
        controller: 'protocol503SpinalCordInjuryCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol504ChestTrauma'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol504ChestTrauma');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_504
      /Tabs_Controller/tab3/Protocol_504
  */
  .state('tabsController.protocol504ChestTrauma', {
    url: '/Protocol_504',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol504ChestTrauma.html',
        controller: 'protocol504ChestTraumaCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol504ChestTrauma.html',
        controller: 'protocol504ChestTraumaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol505IntraosseousVascularAccessEZIOIllinoisBoneNeedle'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol505IntraosseousVascularAccessEZIOIllinoisBoneNeedle');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_505
      /Tabs_Controller/tab3/Protocol_505
  */
  .state('tabsController.protocol505IntraosseousVascularAccessEZIOIllinoisBoneNeedle', {
    url: '/Protocol_505',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol505IntraosseousVascularAccessEZIOIllinoisBoneNeedle.html',
        controller: 'protocol505IntraosseousVascularAccessEZIOIllinoisBoneNeedleCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol505IntraosseousVascularAccessEZIOIllinoisBoneNeedle.html',
        controller: 'protocol505IntraosseousVascularAccessEZIOIllinoisBoneNeedleCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol506ExtremityFractureDislocation'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol506ExtremityFractureDislocation');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_506
      /Tabs_Controller/tab3/Protocol_506
  */
  .state('tabsController.protocol506ExtremityFractureDislocation', {
    url: '/Protocol_506',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol506ExtremityFractureDislocation.html',
        controller: 'protocol506ExtremityFractureDislocationCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol506ExtremityFractureDislocation.html',
        controller: 'protocol506ExtremityFractureDislocationCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol507Amputations'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol507Amputations');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_507
      /Tabs_Controller/tab3/Protocol_507
  */
  .state('tabsController.protocol507Amputations', {
    url: '/Protocol_507',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol507Amputations.html',
        controller: 'protocol507AmputationsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol507Amputations.html',
        controller: 'protocol507AmputationsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol508BurnsAndInhalationInjuries'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol508BurnsAndInhalationInjuries');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_508
      /Tabs_Controller/tab3/Protocol_508
  */
  .state('tabsController.protocol508BurnsAndInhalationInjuries', {
    url: '/Protocol_508',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol508BurnsAndInhalationInjuries.html',
        controller: 'protocol508BurnsAndInhalationInjuriesCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol508BurnsAndInhalationInjuries.html',
        controller: 'protocol508BurnsAndInhalationInjuriesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol509PainControlNauseaVomitingAnxiety'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol509PainControlNauseaVomitingAnxiety');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_509
      /Tabs_Controller/tab3/Protocol_509
  */
  .state('tabsController.protocol509PainControlNauseaVomitingAnxiety', {
    url: '/Protocol_509',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol509PainControlNauseaVomitingAnxiety.html',
        controller: 'protocol509PainControlNauseaVomitingAnxietyCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol509PainControlNauseaVomitingAnxiety.html',
        controller: 'protocol509PainControlNauseaVomitingAnxietyCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol510NubainPainControl'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol510NubainPainControl');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_510
      /Tabs_Controller/tab3/Protocol_510
  */
  .state('tabsController.protocol510NubainPainControl', {
    url: '/Protocol_510',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol510NubainPainControl.html',
        controller: 'protocol510NubainPainControlCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol510NubainPainControl.html',
        controller: 'protocol510NubainPainControlCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol511ExtricationCrushInjuries'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol511ExtricationCrushInjuries');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_511
      /Tabs_Controller/tab3/Protocol_511
  */
  .state('tabsController.protocol511ExtricationCrushInjuries', {
    url: '/Protocol_511',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol511ExtricationCrushInjuries.html',
        controller: 'protocol511ExtricationCrushInjuriesCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol511ExtricationCrushInjuries.html',
        controller: 'protocol511ExtricationCrushInjuriesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol512EMSTourniquet'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol512EMSTourniquet');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_512
      /Tabs_Controller/tab3/Protocol_512
  */
  .state('tabsController.protocol512EMSTourniquet', {
    url: '/Protocol_512',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol512EMSTourniquet.html',
        controller: 'protocol512EMSTourniquetCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol512EMSTourniquet.html',
        controller: 'protocol512EMSTourniquetCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol600ObstetricEmergencies'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol600ObstetricEmergencies');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_600
      /Tabs_Controller/tab3/Protocol_600
  */
  .state('tabsController.protocol600ObstetricEmergencies', {
    url: '/Protocol_600',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol600ObstetricEmergencies.html',
        controller: 'protocol600ObstetricEmergenciesCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol600ObstetricEmergencies.html',
        controller: 'protocol600ObstetricEmergenciesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol601LaborPains'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol601LaborPains');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_601
      /Tabs_Controller/tab3/Protocol_601
  */
  .state('tabsController.protocol601LaborPains', {
    url: '/Protocol_601',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol601LaborPains.html',
        controller: 'protocol601LaborPainsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol601LaborPains.html',
        controller: 'protocol601LaborPainsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol602FullTermImminentDeliveryNewbornResuscitation'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol602FullTermImminentDeliveryNewbornResuscitation');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_602
      /Tabs_Controller/tab3/Protocol_602
  */
  .state('tabsController.protocol602FullTermImminentDeliveryNewbornResuscitation', {
    url: '/Protocol_602',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol602FullTermImminentDeliveryNewbornResuscitation.html',
        controller: 'protocol602FullTermImminentDeliveryNewbornResuscitationCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol602FullTermImminentDeliveryNewbornResuscitation.html',
        controller: 'protocol602FullTermImminentDeliveryNewbornResuscitationCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol603FullTermNonImminentDeliverySeizure'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol603FullTermNonImminentDeliverySeizure');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_603
      /Tabs_Controller/tab3/Protocol_603
  */
  .state('tabsController.protocol603FullTermNonImminentDeliverySeizure', {
    url: '/Protocol_603',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol603FullTermNonImminentDeliverySeizure.html',
        controller: 'protocol603FullTermNonImminentDeliverySeizureCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol603FullTermNonImminentDeliverySeizure.html',
        controller: 'protocol603FullTermNonImminentDeliverySeizureCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol604PretermLabor'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol604PretermLabor');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_604
      /Tabs_Controller/tab3/Protocol_604
  */
  .state('tabsController.protocol604PretermLabor', {
    url: '/Protocol_604',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol604PretermLabor.html',
        controller: 'protocol604PretermLaborCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol604PretermLabor.html',
        controller: 'protocol604PretermLaborCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol605MalPresentation'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol605MalPresentation');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_605
      /Tabs_Controller/tab3/Protocol_605
  */
  .state('tabsController.protocol605MalPresentation', {
    url: '/Protocol_605',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol605MalPresentation.html',
        controller: 'protocol605MalPresentationCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol605MalPresentation.html',
        controller: 'protocol605MalPresentationCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol606MeconiumAspiration'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol606MeconiumAspiration');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_606
      /Tabs_Controller/tab3/Protocol_606
  */
  .state('tabsController.protocol606MeconiumAspiration', {
    url: '/Protocol_606',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol606MeconiumAspiration.html',
        controller: 'protocol606MeconiumAspirationCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol606MeconiumAspiration.html',
        controller: 'protocol606MeconiumAspirationCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol607VaginalHemorrhage'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol607VaginalHemorrhage');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_607
      /Tabs_Controller/tab3/Protocol_607
  */
  .state('tabsController.protocol607VaginalHemorrhage', {
    url: '/Protocol_607',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol607VaginalHemorrhage.html',
        controller: 'protocol607VaginalHemorrhageCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol607VaginalHemorrhage.html',
        controller: 'protocol607VaginalHemorrhageCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol608HypertensiveEmergenciesPreEclampsiaAndEclampsia'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol608HypertensiveEmergenciesPreEclampsiaAndEclampsia');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_608
      /Tabs_Controller/tab3/Protocol_608
  */
  .state('tabsController.protocol608HypertensiveEmergenciesPreEclampsiaAndEclampsia', {
    url: '/Protocol_608',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol608HypertensiveEmergenciesPreEclampsiaAndEclampsia.html',
        controller: 'protocol608HypertensiveEmergenciesPreEclampsiaAndEclampsiaCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol608HypertensiveEmergenciesPreEclampsiaAndEclampsia.html',
        controller: 'protocol608HypertensiveEmergenciesPreEclampsiaAndEclampsiaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol609BleedingAbdominalPainDuringPregnancy'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol609BleedingAbdominalPainDuringPregnancy');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_609
      /Tabs_Controller/tab3/Protocol_609
  */
  .state('tabsController.protocol609BleedingAbdominalPainDuringPregnancy', {
    url: '/Protocol_609',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol609BleedingAbdominalPainDuringPregnancy.html',
        controller: 'protocol609BleedingAbdominalPainDuringPregnancyCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol609BleedingAbdominalPainDuringPregnancy.html',
        controller: 'protocol609BleedingAbdominalPainDuringPregnancyCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol610ProlapsedUmbilicalCord'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol610ProlapsedUmbilicalCord');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_610
      /Tabs_Controller/tab3/Protocol_610
  */
  .state('tabsController.protocol610ProlapsedUmbilicalCord', {
    url: '/Protocol_610',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol610ProlapsedUmbilicalCord.html',
        controller: 'protocol610ProlapsedUmbilicalCordCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol610ProlapsedUmbilicalCord.html',
        controller: 'protocol610ProlapsedUmbilicalCordCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol700PediatricAssessment'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol700PediatricAssessment');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_700
      /Tabs_Controller/tab3/Protocol_700
  */
  .state('tabsController.protocol700PediatricAssessment', {
    url: '/Protocol_700',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol700PediatricAssessment.html',
        controller: 'protocol700PediatricAssessmentCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol700PediatricAssessment.html',
        controller: 'protocol700PediatricAssessmentCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol701PediatricAirwayObstruction'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol701PediatricAirwayObstruction');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_701
      /Tabs_Controller/tab3/Protocol_701
  */
  .state('tabsController.protocol701PediatricAirwayObstruction', {
    url: '/Protocol_701',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol701PediatricAirwayObstruction.html',
        controller: 'protocol701PediatricAirwayObstructionCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol701PediatricAirwayObstruction.html',
        controller: 'protocol701PediatricAirwayObstructionCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol702PediatricRespiratoryDistress'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol702PediatricRespiratoryDistress');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_702
      /Tabs_Controller/tab3/Protocol_702
  */
  .state('tabsController.protocol702PediatricRespiratoryDistress', {
    url: '/Protocol_702',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol702PediatricRespiratoryDistress.html',
        controller: 'protocol702PediatricRespiratoryDistressCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol702PediatricRespiratoryDistress.html',
        controller: 'protocol702PediatricRespiratoryDistressCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol703PediatricRespiratoryFailure'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol703PediatricRespiratoryFailure');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_703
      /Tabs_Controller/tab3/Protocol_703
  */
  .state('tabsController.protocol703PediatricRespiratoryFailure', {
    url: '/Protocol_703',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol703PediatricRespiratoryFailure.html',
        controller: 'protocol703PediatricRespiratoryFailureCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol703PediatricRespiratoryFailure.html',
        controller: 'protocol703PediatricRespiratoryFailureCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol704PediatricAnaphylaxis'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol704PediatricAnaphylaxis');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_704
      /Tabs_Controller/tab3/Protocol_704
  */
  .state('tabsController.protocol704PediatricAnaphylaxis', {
    url: '/Protocol_704',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol704PediatricAnaphylaxis.html',
        controller: 'protocol704PediatricAnaphylaxisCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol704PediatricAnaphylaxis.html',
        controller: 'protocol704PediatricAnaphylaxisCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol705PediatricCardiopulmonaryResuscitation'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol705PediatricCardiopulmonaryResuscitation');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_705
      /Tabs_Controller/tab3/Protocol_705
  */
  .state('tabsController.protocol705PediatricCardiopulmonaryResuscitation', {
    url: '/Protocol_705',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol705PediatricCardiopulmonaryResuscitation.html',
        controller: 'protocol705PediatricCardiopulmonaryResuscitationCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol705PediatricCardiopulmonaryResuscitation.html',
        controller: 'protocol705PediatricCardiopulmonaryResuscitationCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol706PediatricAsystoleAndPulselessElectricalActivityPEA'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol706PediatricAsystoleAndPulselessElectricalActivityPEA');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_706
      /Tabs_Controller/tab3/Protocol_706
  */
  .state('tabsController.protocol706PediatricAsystoleAndPulselessElectricalActivityPEA', {
    url: '/Protocol_706',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol706PediatricAsystoleAndPulselessElectricalActivityPEA.html',
        controller: 'protocol706PediatricAsystoleAndPulselessElectricalActivityPEACtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol706PediatricAsystoleAndPulselessElectricalActivityPEA.html',
        controller: 'protocol706PediatricAsystoleAndPulselessElectricalActivityPEACtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol707PediatricVentricularFibrillation'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol707PediatricVentricularFibrillation');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_707
      /Tabs_Controller/tab3/Protocol_707
  */
  .state('tabsController.protocol707PediatricVentricularFibrillation', {
    url: '/Protocol_707',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol707PediatricVentricularFibrillation.html',
        controller: 'protocol707PediatricVentricularFibrillationCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol707PediatricVentricularFibrillation.html',
        controller: 'protocol707PediatricVentricularFibrillationCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol708PEDIATRICCARDIACARRHYTHMIAS'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol708PEDIATRICCARDIACARRHYTHMIAS');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_708
      /Tabs_Controller/tab3/Protocol_708
  */
  .state('tabsController.protocol708PEDIATRICCARDIACARRHYTHMIAS', {
    url: '/Protocol_708',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol708PEDIATRICCARDIACARRHYTHMIAS.html',
        controller: 'protocol708PEDIATRICCARDIACARRHYTHMIASCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol708PEDIATRICCARDIACARRHYTHMIAS.html',
        controller: 'protocol708PEDIATRICCARDIACARRHYTHMIASCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol709PediatricBradyarrhythmias'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol709PediatricBradyarrhythmias');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_709
      /Tabs_Controller/tab3/Protocol_709
  */
  .state('tabsController.protocol709PediatricBradyarrhythmias', {
    url: '/Protocol_709',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol709PediatricBradyarrhythmias.html',
        controller: 'protocol709PediatricBradyarrhythmiasCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol709PediatricBradyarrhythmias.html',
        controller: 'protocol709PediatricBradyarrhythmiasCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol710PediatricSupraventricularTachycardia'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol710PediatricSupraventricularTachycardia');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_710
      /Tabs_Controller/tab3/Protocol_710
  */
  .state('tabsController.protocol710PediatricSupraventricularTachycardia', {
    url: '/Protocol_710',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol710PediatricSupraventricularTachycardia.html',
        controller: 'protocol710PediatricSupraventricularTachycardiaCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol710PediatricSupraventricularTachycardia.html',
        controller: 'protocol710PediatricSupraventricularTachycardiaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol711PediatricVentricularTachycardia'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol711PediatricVentricularTachycardia');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_711
      /Tabs_Controller/tab3/Protocol_711
  */
  .state('tabsController.protocol711PediatricVentricularTachycardia', {
    url: '/Protocol_711',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol711PediatricVentricularTachycardia.html',
        controller: 'protocol711PediatricVentricularTachycardiaCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol711PediatricVentricularTachycardia.html',
        controller: 'protocol711PediatricVentricularTachycardiaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol712PediatricShockGeneralGuidelines'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol712PediatricShockGeneralGuidelines');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_712
      /Tabs_Controller/tab3/Protocol_712
  */
  .state('tabsController.protocol712PediatricShockGeneralGuidelines', {
    url: '/Protocol_712',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol712PediatricShockGeneralGuidelines.html',
        controller: 'protocol712PediatricShockGeneralGuidelinesCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol712PediatricShockGeneralGuidelines.html',
        controller: 'protocol712PediatricShockGeneralGuidelinesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol713PediatricAlteredLevelOfConciousness'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol713PediatricAlteredLevelOfConciousness');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_713
      /Tabs_Controller/tab3/Protocol_713
  */
  .state('tabsController.protocol713PediatricAlteredLevelOfConciousness', {
    url: '/Protocol_713',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol713PediatricAlteredLevelOfConciousness.html',
        controller: 'protocol713PediatricAlteredLevelOfConciousnessCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol713PediatricAlteredLevelOfConciousness.html',
        controller: 'protocol713PediatricAlteredLevelOfConciousnessCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol714PediatricSeizure'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol714PediatricSeizure');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_714
      /Tabs_Controller/tab3/Protocol_714
  */
  .state('tabsController.protocol714PediatricSeizure', {
    url: '/Protocol_714',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol714PediatricSeizure.html',
        controller: 'protocol714PediatricSeizureCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol714PediatricSeizure.html',
        controller: 'protocol714PediatricSeizureCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol715PediatricSyncope'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol715PediatricSyncope');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_715
      /Tabs_Controller/tab3/Protocol_715
  */
  .state('tabsController.protocol715PediatricSyncope', {
    url: '/Protocol_715',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol715PediatricSyncope.html',
        controller: 'protocol715PediatricSyncopeCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol715PediatricSyncope.html',
        controller: 'protocol715PediatricSyncopeCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol716PediatricFeverControl'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol716PediatricFeverControl');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_716
      /Tabs_Controller/tab3/Protocol_716
  */
  .state('tabsController.protocol716PediatricFeverControl', {
    url: '/Protocol_716',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol716PediatricFeverControl.html',
        controller: 'protocol716PediatricFeverControlCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol716PediatricFeverControl.html',
        controller: 'protocol716PediatricFeverControlCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol717PediatricMajorOrMultiSystemTrauma'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol717PediatricMajorOrMultiSystemTrauma');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_717
      /Tabs_Controller/tab3/Protocol_717
  */
  .state('tabsController.protocol717PediatricMajorOrMultiSystemTrauma', {
    url: '/Protocol_717',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol717PediatricMajorOrMultiSystemTrauma.html',
        controller: 'protocol717PediatricMajorOrMultiSystemTraumaCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol717PediatricMajorOrMultiSystemTrauma.html',
        controller: 'protocol717PediatricMajorOrMultiSystemTraumaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol718PediatricHeadTrauma'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol718PediatricHeadTrauma');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_718
      /Tabs_Controller/tab3/Protocol_718
  */
  .state('tabsController.protocol718PediatricHeadTrauma', {
    url: '/Protocol_718',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol718PediatricHeadTrauma.html',
        controller: 'protocol718PediatricHeadTraumaCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol718PediatricHeadTrauma.html',
        controller: 'protocol718PediatricHeadTraumaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol719PediatricSpinalCordInjury'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol719PediatricSpinalCordInjury');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_719
      /Tabs_Controller/tab3/Protocol_719
  */
  .state('tabsController.protocol719PediatricSpinalCordInjury', {
    url: '/Protocol_719',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol719PediatricSpinalCordInjury.html',
        controller: 'protocol719PediatricSpinalCordInjuryCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol719PediatricSpinalCordInjury.html',
        controller: 'protocol719PediatricSpinalCordInjuryCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol720PediatricFlailChest'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol720PediatricFlailChest');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protoco
      /Tabs_Controller/tab3/Protoco
  */
  .state('tabsController.protocol720PediatricFlailChest', {
    url: '/Protoco',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol720PediatricFlailChest.html',
        controller: 'protocol720PediatricFlailChestCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol720PediatricFlailChest.html',
        controller: 'protocol720PediatricFlailChestCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol721PediatricSuckingChestWound'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol721PediatricSuckingChestWound');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_721
      /Tabs_Controller/tab3/Protocol_721
  */
  .state('tabsController.protocol721PediatricSuckingChestWound', {
    url: '/Protocol_721',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol721PediatricSuckingChestWound.html',
        controller: 'protocol721PediatricSuckingChestWoundCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol721PediatricSuckingChestWound.html',
        controller: 'protocol721PediatricSuckingChestWoundCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol722PediatricCardiacTamponadeSuspected'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol722PediatricCardiacTamponadeSuspected');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_722
      /Tabs_Controller/tab3/Protocol_722
  */
  .state('tabsController.protocol722PediatricCardiacTamponadeSuspected', {
    url: '/Protocol_722',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol722PediatricCardiacTamponadeSuspected.html',
        controller: 'protocol722PediatricCardiacTamponadeSuspectedCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol722PediatricCardiacTamponadeSuspected.html',
        controller: 'protocol722PediatricCardiacTamponadeSuspectedCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol723PediatricFracturesDislocations'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol723PediatricFracturesDislocations');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_723
      /Tabs_Controller/tab3/Protocol_723
  */
  .state('tabsController.protocol723PediatricFracturesDislocations', {
    url: '/Protocol_723',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol723PediatricFracturesDislocations.html',
        controller: 'protocol723PediatricFracturesDislocationsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol723PediatricFracturesDislocations.html',
        controller: 'protocol723PediatricFracturesDislocationsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol724PediatricAmputationsCrushInjuries'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol724PediatricAmputationsCrushInjuries');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_724
      /Tabs_Controller/tab3/Protocol_724
  */
  .state('tabsController.protocol724PediatricAmputationsCrushInjuries', {
    url: '/Protocol_724',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol724PediatricAmputationsCrushInjuries.html',
        controller: 'protocol724PediatricAmputationsCrushInjuriesCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol724PediatricAmputationsCrushInjuries.html',
        controller: 'protocol724PediatricAmputationsCrushInjuriesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol725PediatricThermalElectricalBurns'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol725PediatricThermalElectricalBurns');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_725
      /Tabs_Controller/tab3/Protocol_725
  */
  .state('tabsController.protocol725PediatricThermalElectricalBurns', {
    url: '/Protocol_725',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol725PediatricThermalElectricalBurns.html',
        controller: 'protocol725PediatricThermalElectricalBurnsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol725PediatricThermalElectricalBurns.html',
        controller: 'protocol725PediatricThermalElectricalBurnsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol726PediatricSuspectedChildAbuseAndNeglect'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol726PediatricSuspectedChildAbuseAndNeglect');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_726
      /Tabs_Controller/tab3/Protocol_726
  */
  .state('tabsController.protocol726PediatricSuspectedChildAbuseAndNeglect', {
    url: '/Protocol_726',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol726PediatricSuspectedChildAbuseAndNeglect.html',
        controller: 'protocol726PediatricSuspectedChildAbuseAndNeglectCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol726PediatricSuspectedChildAbuseAndNeglect.html',
        controller: 'protocol726PediatricSuspectedChildAbuseAndNeglectCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol727ChildrenWithSpecialHealthcareNeeds'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol727ChildrenWithSpecialHealthcareNeeds');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_727
      /Tabs_Controller/tab3/Protocol_727
  */
  .state('tabsController.protocol727ChildrenWithSpecialHealthcareNeeds', {
    url: '/Protocol_727',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol727ChildrenWithSpecialHealthcareNeeds.html',
        controller: 'protocol727ChildrenWithSpecialHealthcareNeedsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol727ChildrenWithSpecialHealthcareNeeds.html',
        controller: 'protocol727ChildrenWithSpecialHealthcareNeedsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol801EmergencyCareToTheSuicidalPatient'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol801EmergencyCareToTheSuicidalPatient');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_801
      /Tabs_Controller/tab3/Protocol_801
  */
  .state('tabsController.protocol801EmergencyCareToTheSuicidalPatient', {
    url: '/Protocol_801',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol801EmergencyCareToTheSuicidalPatient.html',
        controller: 'protocol801EmergencyCareToTheSuicidalPatientCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol801EmergencyCareToTheSuicidalPatient.html',
        controller: 'protocol801EmergencyCareToTheSuicidalPatientCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol802BehavioralDisorders'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol802BehavioralDisorders');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_802
      /Tabs_Controller/tab3/Protocol_802
  */
  .state('tabsController.protocol802BehavioralDisorders', {
    url: '/Protocol_802',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol802BehavioralDisorders.html',
        controller: 'protocol802BehavioralDisordersCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol802BehavioralDisorders.html',
        controller: 'protocol802BehavioralDisordersCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol803RestraintsPhysicalViolentPatientChemicalSedation'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol803RestraintsPhysicalViolentPatientChemicalSedation');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_803
      /Tabs_Controller/tab3/Protocol_803
  */
  .state('tabsController.protocol803RestraintsPhysicalViolentPatientChemicalSedation', {
    url: '/Protocol_803',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol803RestraintsPhysicalViolentPatientChemicalSedation.html',
        controller: 'protocol803RestraintsPhysicalViolentPatientChemicalSedationCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol803RestraintsPhysicalViolentPatientChemicalSedation.html',
        controller: 'protocol803RestraintsPhysicalViolentPatientChemicalSedationCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol900FamilyCenteredCare'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol900FamilyCenteredCare');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_900
      /Tabs_Controller/tab3/Protocol_900
  */
  .state('tabsController.protocol900FamilyCenteredCare', {
    url: '/Protocol_900',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol900FamilyCenteredCare.html',
        controller: 'protocol900FamilyCenteredCareCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol900FamilyCenteredCare.html',
        controller: 'protocol900FamilyCenteredCareCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol901AtSceneRelease'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol901AtSceneRelease');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_901
      /Tabs_Controller/tab3/Protocol_901
  */
  .state('tabsController.protocol901AtSceneRelease', {
    url: '/Protocol_901',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol901AtSceneRelease.html',
        controller: 'protocol901AtSceneReleaseCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol901AtSceneRelease.html',
        controller: 'protocol901AtSceneReleaseCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol902DeathDeterminationAndPronouncementProcess'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol902DeathDeterminationAndPronouncementProcess');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_902
      /Tabs_Controller/tab3/Protocol_902
  */
  .state('tabsController.protocol902DeathDeterminationAndPronouncementProcess', {
    url: '/Protocol_902',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol902DeathDeterminationAndPronouncementProcess.html',
        controller: 'protocol902DeathDeterminationAndPronouncementProcessCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol902DeathDeterminationAndPronouncementProcess.html',
        controller: 'protocol902DeathDeterminationAndPronouncementProcessCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol903ControlledMedications'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol903ControlledMedications');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_903
      /Tabs_Controller/tab3/Protocol_903
  */
  .state('tabsController.protocol903ControlledMedications', {
    url: '/Protocol_903',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol903ControlledMedications.html',
        controller: 'protocol903ControlledMedicationsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol903ControlledMedications.html',
        controller: 'protocol903ControlledMedicationsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol904CancellingOrDowngradingRespondingParamedics'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol904CancellingOrDowngradingRespondingParamedics');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_904
      /Tabs_Controller/tab3/Protocol_904
  */
  .state('tabsController.protocol904CancellingOrDowngradingRespondingParamedics', {
    url: '/Protocol_904',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol904CancellingOrDowngradingRespondingParamedics.html',
        controller: 'protocol904CancellingOrDowngradingRespondingParamedicsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol904CancellingOrDowngradingRespondingParamedics.html',
        controller: 'protocol904CancellingOrDowngradingRespondingParamedicsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol906Nubian'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol906Nubian');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_906
      /Tabs_Controller/tab3/Protocol_906
  */
  .state('tabsController.protocol906Nubian', {
    url: '/Protocol_906',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol906Nubian.html',
        controller: 'protocol906NubianCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol906Nubian.html',
        controller: 'protocol906NubianCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol907AdministrationOfNitroglycerin'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol907AdministrationOfNitroglycerin');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_907
      /Tabs_Controller/tab3/Protocol_907
  */
  .state('tabsController.protocol907AdministrationOfNitroglycerin', {
    url: '/Protocol_907',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol907AdministrationOfNitroglycerin.html',
        controller: 'protocol907AdministrationOfNitroglycerinCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol907AdministrationOfNitroglycerin.html',
        controller: 'protocol907AdministrationOfNitroglycerinCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol908AdministrationOfAspirin'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol908AdministrationOfAspirin');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_908
      /Tabs_Controller/tab3/Protocol_908
  */
  .state('tabsController.protocol908AdministrationOfAspirin', {
    url: '/Protocol_908',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol908AdministrationOfAspirin.html',
        controller: 'protocol908AdministrationOfAspirinCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol908AdministrationOfAspirin.html',
        controller: 'protocol908AdministrationOfAspirinCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol909AdministrationOfPrescribedMeteredDoseInhalerOrSmallVolumeNebulizer'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol909AdministrationOfPrescribedMeteredDoseInhalerOrSmallVolumeNebulizer');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_909
      /Tabs_Controller/tab3/Protocol_909
  */
  .state('tabsController.protocol909AdministrationOfPrescribedMeteredDoseInhalerOrSmallVolumeNebulizer', {
    url: '/Protocol_909',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol909AdministrationOfPrescribedMeteredDoseInhalerOrSmallVolumeNebulizer.html',
        controller: 'protocol909AdministrationOfPrescribedMeteredDoseInhalerOrSmallVolumeNebulizerCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol909AdministrationOfPrescribedMeteredDoseInhalerOrSmallVolumeNebulizer.html',
        controller: 'protocol909AdministrationOfPrescribedMeteredDoseInhalerOrSmallVolumeNebulizerCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol910AdministrationOfEpinephrineByAutoInjector'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol910AdministrationOfEpinephrineByAutoInjector');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_910
      /Tabs_Controller/tab3/Protocol_910
  */
  .state('tabsController.protocol910AdministrationOfEpinephrineByAutoInjector', {
    url: '/Protocol_910',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol910AdministrationOfEpinephrineByAutoInjector.html',
        controller: 'protocol910AdministrationOfEpinephrineByAutoInjectorCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol910AdministrationOfEpinephrineByAutoInjector.html',
        controller: 'protocol910AdministrationOfEpinephrineByAutoInjectorCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol911AdministrationOfOralGlucose'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol911AdministrationOfOralGlucose');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_911
      /Tabs_Controller/tab3/Protocol_911
  */
  .state('tabsController.protocol911AdministrationOfOralGlucose', {
    url: '/Protocol_911',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol911AdministrationOfOralGlucose.html',
        controller: 'protocol911AdministrationOfOralGlucoseCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol911AdministrationOfOralGlucose.html',
        controller: 'protocol911AdministrationOfOralGlucoseCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol912InterfacilityTransportMedications'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol912InterfacilityTransportMedications');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_912
      /Tabs_Controller/tab3/Protocol_912
  */
  .state('tabsController.protocol912InterfacilityTransportMedications', {
    url: '/Protocol_912',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol912InterfacilityTransportMedications.html',
        controller: 'protocol912InterfacilityTransportMedicationsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol912InterfacilityTransportMedications.html',
        controller: 'protocol912InterfacilityTransportMedicationsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol913FamilyCenteredCare'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol913FamilyCenteredCare');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_913
      /Tabs_Controller/tab3/Protocol_913
  */
  .state('tabsController.protocol913FamilyCenteredCare', {
    url: '/Protocol_913',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol913FamilyCenteredCare.html',
        controller: 'protocol913FamilyCenteredCareCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol913FamilyCenteredCare.html',
        controller: 'protocol913FamilyCenteredCareCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol914Ebola'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol914Ebola');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_914
      /Tabs_Controller/tab3/Protocol_914
  */
  .state('tabsController.protocol914Ebola', {
    url: '/Protocol_914',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol914Ebola.html',
        controller: 'protocol914EbolaCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol914Ebola.html',
        controller: 'protocol914EbolaCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol915NeedleDecompressionProcedure'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol915NeedleDecompressionProcedure');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_915
      /Tabs_Controller/tab3/Protocol_915
  */
  .state('tabsController.protocol915NeedleDecompressionProcedure', {
    url: '/Protocol_915',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol915NeedleDecompressionProcedure.html',
        controller: 'protocol915NeedleDecompressionProcedureCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol915NeedleDecompressionProcedure.html',
        controller: 'protocol915NeedleDecompressionProcedureCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol916IntraosseousVascularAccessEZIOOrIllinoisBoneNeedle'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol916IntraosseousVascularAccessEZIOOrIllinoisBoneNeedle');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_916
      /Tabs_Controller/tab3/Protocol_916
  */
  .state('tabsController.protocol916IntraosseousVascularAccessEZIOOrIllinoisBoneNeedle', {
    url: '/Protocol_916',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol916IntraosseousVascularAccessEZIOOrIllinoisBoneNeedle.html',
        controller: 'protocol916IntraosseousVascularAccessEZIOOrIllinoisBoneNeedleCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol916IntraosseousVascularAccessEZIOOrIllinoisBoneNeedle.html',
        controller: 'protocol916IntraosseousVascularAccessEZIOOrIllinoisBoneNeedleCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol917SuckingChestWoun'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol917SuckingChestWoun');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_916
      /Tabs_Controller/tab3/Protocol_916
  */
  .state('tabsController.protocol917SuckingChestWoun', {
    url: '/Protocol_916',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol917SuckingChestWoun.html',
        controller: 'protocol917SuckingChestWounCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol917SuckingChestWoun.html',
        controller: 'protocol917SuckingChestWounCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol905AAmbulanceDestination'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol905AAmbulanceDestination');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_905-A
      /Tabs_Controller/tab3/Protocol_905-A
  */
  .state('tabsController.protocol905AAmbulanceDestination', {
    url: '/Protocol_905-A',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol905AAmbulanceDestination.html',
        controller: 'protocol905AAmbulanceDestinationCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol905AAmbulanceDestination.html',
        controller: 'protocol905AAmbulanceDestinationCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol905BDestinationProtocolForNonTraumaPatients'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol905BDestinationProtocolForNonTraumaPatients');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_905-B
      /Tabs_Controller/tab3/Protocol_905-B
  */
  .state('tabsController.protocol905BDestinationProtocolForNonTraumaPatients', {
    url: '/Protocol_905-B',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol905BDestinationProtocolForNonTraumaPatients.html',
        controller: 'protocol905BDestinationProtocolForNonTraumaPatientsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol905BDestinationProtocolForNonTraumaPatients.html',
        controller: 'protocol905BDestinationProtocolForNonTraumaPatientsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.protocol905CDestinationProtocolForNonTraumaPatients'
      2) Using $state.go programatically:
        $state.go('tabsController.protocol905CDestinationProtocolForNonTraumaPatients');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /Tabs_Controller/tab1/Protocol_905-C
      /Tabs_Controller/tab3/Protocol_905-C
  */
  .state('tabsController.protocol905CDestinationProtocolForNonTraumaPatients', {
    url: '/Protocol_905-C',
    views: {
      'tab1': {
        templateUrl: 'templates/protocol905CDestinationProtocolForNonTraumaPatients.html',
        controller: 'protocol905CDestinationProtocolForNonTraumaPatientsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/protocol905CDestinationProtocolForNonTraumaPatients.html',
        controller: 'protocol905CDestinationProtocolForNonTraumaPatientsCtrl'
      }
    }
  })

  .state('protocolLinkFinder', {
    url: '/Protocol_Link_Finnder',
    templateUrl: 'templates/protocolLinkFinder.html',
    controller: 'protocolLinkFinderCtrl'
  })

  .state('tabsController.quickReference', {
    url: '/Quick_Ref_Main',
    views: {
      'tab7': {
        templateUrl: 'templates/quickReference.html',
        controller: 'quickReferenceCtrl'
      }
    }
  })

  .state('tabsController.12Lead', {
    url: '/12_Lead',
    views: {
      'tab7': {
        templateUrl: 'templates/12Lead.html',
        controller: '12LeadCtrl'
      }
    }
  })

  .state('tabsController.ruleOf9S', {
    url: '/Rule_9',
    views: {
      'tab7': {
        templateUrl: 'templates/ruleOf9S.html',
        controller: 'ruleOf9SCtrl'
      }
    }
  })

  .state('tabsController.glasgowComaScore', {
    url: '/GCS',
    views: {
      'tab7': {
        templateUrl: 'templates/glasgowComaScore.html',
        controller: 'glasgowComaScoreCtrl'
      }
    }
  })

  .state('tabsController.vitalSigns', {
    url: '/Vitals',
    views: {
      'tab7': {
        templateUrl: 'templates/vitalSigns.html',
        controller: 'vitalSignsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page14')


});