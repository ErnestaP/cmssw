from ..layouts.layout_manager import register_layout

register_layout(source='RPC/EventInfo/reportSummaryMap', destination='00 Shift/RPC/reportSummaryMap', name='00-Summary_Map', description='summary map for rpc, this is NOT an efficiency measurement   >>>  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftRPC>Description', overlay='')
register_layout(source='RPC/FEDIntegrity/FEDFatal', destination='00 Shift/RPC/FEDFatal', name='01-FED_Fatal_Errors', description='FED Fatal Errors. Entries MUST be ZERO at all times. If not, report the problem and ask to stop the run.   >>>  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftRPC>Description', overlay='')
register_layout(source='RPC/DCSInfo/rpcHVStatus', destination='00 Shift/RPC/rpcHVStatus', name='02-RPC_HV_Status', description='High Voltage status per lumi section. If ALL bins are red mark the run as BAD.   >>>  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftRPC>Description', overlay='')
register_layout(source='RPC/AllHits/RPCEvents', destination='00 Shift/RPC/RPCEvents', name='03-RPC_Events', description='Number of processed events.   >>>  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftRPC>Description', overlay='')
register_layout(source='RPC/AllHits/SummaryHistograms/RPC_System_Quality_Overview', destination='00 Shift/RPC/RPC_System_Quality_Overview', name='04-Quality_State_Overview', description='Overview of system quality. Expressed in percentage of chambers.   >>>  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftRPC>Description', overlay='')
register_layout(source='RPC/AllHits/SummaryHistograms/Occupancy_for_Barrel', destination='00 Shift/RPC/Occupancy_for_Barrel', name='05-RPC_Occupancy', description='Occupancy per sector   >>>  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftRPC>Description', overlay='')
register_layout(source='RPC/AllHits/SummaryHistograms/Occupancy_for_Endcap', destination='00 Shift/RPC/Occupancy_for_Endcap', name='05-RPC_Occupancy', description='Occupancy per sector   >>>  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftRPC>Description', overlay='')
register_layout(source='RPC/RPCEfficiency/Statistics', destination='00 Shift/RPC/Statistics', name='06-Statistics', description='RPC Efficiency distribution. Make sure average values is greater than 80.   >>>  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftRPC>Description', overlay='')
register_layout(source='RPC/RPCEfficiency/EffBarrelRoll', destination='00 Shift/RPC/EffBarrelRoll', name='07-Efficiency_Distribution', description='RPC Efficiency distribution. Make sure average values is greater than 80.   >>>  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftRPC>Description', overlay='')
register_layout(source='RPC/RPCEfficiency/EffEndcapPlusRoll', destination='00 Shift/RPC/EffEndcapPlusRoll', name='07-Efficiency_Distribution', description='RPC Efficiency distribution. Make sure average values is greater than 80.   >>>  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftRPC>Description', overlay='')
register_layout(source='RPC/RPCEfficiency/EffEndcapMinusRoll', destination='00 Shift/RPC/EffEndcapMinusRoll', name='07-Efficiency_Distribution', description='RPC Efficiency distribution. Make sure average values is greater than 80.   >>>  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftRPC>Description', overlay='')
