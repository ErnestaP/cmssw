from ..layouts.layout_manager import register_layout

register_layout(source='L1T/L1TStage2CaloLayer1/ecalOccRecdEtWgt', destination='L1T/Layouts/Stage2-QuickCollection/ecalOccRecdEtWgt', name='00 - Calo Layer1 ECAL Input Occupancy', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer1/hcalOccRecdEtWgt', destination='L1T/Layouts/Stage2-QuickCollection/hcalOccRecdEtWgt', name='01 - Calo Layer1 HCAL Input Occupancy', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer1/maxEvtLinkErrorsByLumi', destination='L1T/Layouts/Stage2-QuickCollection/maxEvtLinkErrorsByLumi', name='02 - Calo Layer1 Input Link Errors', overlay='')
register_layout(source='L1T/L1TStage2uGMT/ugmtMuonBX', destination='L1T/Layouts/Stage2-QuickCollection/ugmtMuonBX', name='03 - uGMT MUON BX', overlay='')
register_layout(source='L1T/L1TStage2uGMT/ugmtMuonEta', destination='L1T/Layouts/Stage2-QuickCollection/ugmtMuonEta', name='04 - uGMT MUON ETA', overlay='')
register_layout(source='L1T/L1TStage2uGMT/ugmtMuonPt', destination='L1T/Layouts/Stage2-QuickCollection/ugmtMuonPt', name='05 - uGMT MUON P_{T}', overlay='')
register_layout(source='L1T/L1TStage2uGMT/ugmtMuonPhivsEta', destination='L1T/Layouts/Stage2-QuickCollection/ugmtMuonPhivsEta', name='06 - uGMT MUON PHI ETA', overlay='')
register_layout(source='L1T/L1TStage2uGT/algoBits_after_prescale_bx_global', destination='L1T/Layouts/Stage2-QuickCollection/algoBits_after_prescale_bx_global', name='07 - uGT Algorithm Trigger Bits (after prescale) vs. Global BX Number', overlay='')
register_layout(source='L1T/L1TStage2uGT/algoBits_after_prescale_bx_inEvt', destination='L1T/Layouts/Stage2-QuickCollection/algoBits_after_prescale_bx_inEvt', name='08 - uGT Algorithm Trigger Bits (after prescale) vs. BX Number in Event', overlay='')
register_layout(source='L1T/L1TStage2uGT/algoBits_after_prescale', destination='L1T/Layouts/Stage2-QuickCollection/algoBits_after_prescale', name='09 - uGT Algorithm Trigger Bits (after prescale)', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Central-Jets/CenJetsBxOcc', destination='L1T/Layouts/Stage2-QuickCollection/CenJetsBxOcc', name='10 - Calo Layer2 Central Jet Bx Occupancy distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Central-Jets/CenJetsEtEtaPhi', destination='L1T/Layouts/Stage2-QuickCollection/CenJetsEtEtaPhi', name='11 - Calo Layer2 Central Jet Et Eta vs Phi distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Central-Jets/CenJetsRank', destination='L1T/Layouts/Stage2-QuickCollection/CenJetsRank', name='12 - Calo Layer2 Central Jets Pt distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Forward-Jets/ForJetsBxOcc', destination='L1T/Layouts/Stage2-QuickCollection/ForJetsBxOcc', name='13 - Calo Layer2 Forward Jet Bx Occupancy distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Forward-Jets/ForJetsEtEtaPhi', destination='L1T/Layouts/Stage2-QuickCollection/ForJetsEtEtaPhi', name='14 - Calo Layer2 Forward Jet Et Eta vs Phi distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Forward-Jets/ForJetsRank', destination='L1T/Layouts/Stage2-QuickCollection/ForJetsRank', name='15 - Calo Layer2 Forward Jet Pt distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Isolated-EG/IsoEGsBxOcc', destination='L1T/Layouts/Stage2-QuickCollection/IsoEGsBxOcc', name='16 - Calo Layer2 Isolated EG Bx Occupancy distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Isolated-EG/IsoEGsEtEtaPhi', destination='L1T/Layouts/Stage2-QuickCollection/IsoEGsEtEtaPhi', name='17 - Calo Layer2 Isolated EG Et Eta vs Phi distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Isolated-EG/IsoEGsRank', destination='L1T/Layouts/Stage2-QuickCollection/IsoEGsRank', name='18 - Calo Layer2 Isolated EG Pt distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/NonIsolated-EG/NonIsoEGsBxOcc', destination='L1T/Layouts/Stage2-QuickCollection/NonIsoEGsBxOcc', name='19 - Calo Layer2 Non-Isolated EG Bx Occupancy distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/NonIsolated-EG/NonIsoEGsEtEtaPhi', destination='L1T/Layouts/Stage2-QuickCollection/NonIsoEGsEtEtaPhi', name='20 - Calo Layer2 Non-Isolated EG Et Eta vs Phi distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/NonIsolated-EG/NonIsoEGsRank', destination='L1T/Layouts/Stage2-QuickCollection/NonIsoEGsRank', name='21 - Calo Layer2 Non-Isolated EG Pt distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Isolated-Tau/IsoTausBxOcc', destination='L1T/Layouts/Stage2-QuickCollection/IsoTausBxOcc', name='22 - Calo Layer2 Isolated Tau Bx Occupancy distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Isolated-Tau/IsoTausEtEtaPhi', destination='L1T/Layouts/Stage2-QuickCollection/IsoTausEtEtaPhi', name='23 - Calo Layer2 Isolated Tau Et Eta vs Phi distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Isolated-Tau/IsoTausRank', destination='L1T/Layouts/Stage2-QuickCollection/IsoTausRank', name='24 - Calo Layer2 Isolated Tau Pt distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/NonIsolated-Tau/TausBxOcc', destination='L1T/Layouts/Stage2-QuickCollection/TausBxOcc', name='25 - Calo Layer2 Non-Isolated Tau Bx Occupancy distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/NonIsolated-Tau/TausEtEtaPhi', destination='L1T/Layouts/Stage2-QuickCollection/TausEtEtaPhi', name='26 - Calo Layer2 Non-Isolated Tau Et Eta vs Phi distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/NonIsolated-Tau/TausRank', destination='L1T/Layouts/Stage2-QuickCollection/TausRank', name='27 - Calo Layer2 Non-Isolated Tau Pt distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Energy-Sums/ETTEMRank', destination='L1T/Layouts/Stage2-QuickCollection/ETTEMRank', name='28 - Calo Layer2 ETTEM Et distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Energy-Sums/ETTRank', destination='L1T/Layouts/Stage2-QuickCollection/ETTRank', name='29 - Calo Layer2 ETT Et distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Energy-Sums/EtSumBxOcc', destination='L1T/Layouts/Stage2-QuickCollection/EtSumBxOcc', name='30 - Calo Layer2 EtSum Bx Occupancy distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Energy-Sums/HTTRank', destination='L1T/Layouts/Stage2-QuickCollection/HTTRank', name='31 - Calo Layer2 HTT Et distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Energy-Sums/METHFPhi', destination='L1T/Layouts/Stage2-QuickCollection/METHFPhi', name='32 - Calo Layer2 METHF Phi distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Energy-Sums/METHFRank', destination='L1T/Layouts/Stage2-QuickCollection/METHFRank', name='33 - Calo Layer2 METHF Et distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Energy-Sums/METPhi', destination='L1T/Layouts/Stage2-QuickCollection/METPhi', name='34 - Calo Layer2 MET Phi distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Energy-Sums/METRank', destination='L1T/Layouts/Stage2-QuickCollection/METRank', name='35 - Calo Layer2 MET Et distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Energy-Sums/MHTHFPhi', destination='L1T/Layouts/Stage2-QuickCollection/MHTHFPhi', name='36 - Calo Layer2 MHTHF Phi distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Energy-Sums/MHTHFRank', destination='L1T/Layouts/Stage2-QuickCollection/MHTHFRank', name='37 - Calo Layer2 MHTHF Et distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Energy-Sums/MHTPhi', destination='L1T/Layouts/Stage2-QuickCollection/MHTPhi', name='38 - Calo Layer2 MHT Phi distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer2/Energy-Sums/MHTRank', destination='L1T/Layouts/Stage2-QuickCollection/MHTRank', name='39 - Calo Layer2 MHT Et distribution', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer1/MismatchDetail/maxEvtLinkErrorsByLumiECAL', destination='L1T/Layouts/Stage2-QuickCollection/maxEvtLinkErrorsByLumiECAL', name='40 - ECAL TPG Input Link Errors', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer1/MismatchDetail/maxEvtMismatchByLumiECAL', destination='L1T/Layouts/Stage2-QuickCollection/maxEvtMismatchByLumiECAL', name='41 - ECAL TPG Event Mismatches', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer1/MismatchDetail/maxEvtLinkErrorsByLumiHCAL', destination='L1T/Layouts/Stage2-QuickCollection/maxEvtLinkErrorsByLumiHCAL', name='42 - HCAL TPG Input Link Errors', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer1/MismatchDetail/maxEvtMismatchByLumiHCAL', destination='L1T/Layouts/Stage2-QuickCollection/maxEvtMismatchByLumiHCAL', name='43 - HCAL TPG Event Mismatches', overlay='')
register_layout(source='L1T/L1TStage2CaloLayer1/maxEvtMismatchByLumi', destination='L1T/Layouts/Stage2-QuickCollection/maxEvtMismatchByLumi', name='44 - Calo Layer1 Event Mismatches', overlay='')
register_layout(source='L1T/L1TStage2BMTF/bmtf_hwPt', destination='L1T/Layouts/Stage2-QuickCollection/bmtf_hwPt', name='45 - BMTF Muon HW p_{T}', overlay='')
register_layout(source='L1T/L1TStage2BMTF/bmtf_wedge_bx', destination='L1T/Layouts/Stage2-QuickCollection/bmtf_wedge_bx', name='46 - BMTF Muon Wedge vs BX', overlay='')
register_layout(source='L1T/L1TStage2EMTF/cscLCTOccupancy', destination='L1T/Layouts/Stage2-QuickCollection/cscLCTOccupancy', name='47 - EMTF LCT Occupancy', overlay='')
register_layout(source='L1T/L1TStage2EMTF/emtfTrackBX', destination='L1T/Layouts/Stage2-QuickCollection/emtfTrackBX', name='48 - EMTF Track vs BX', overlay='')
register_layout(source='L1T/L1TStage2uGMT/BMTFInput/ugmtBMTFBX', destination='L1T/Layouts/Stage2-QuickCollection/ugmtBMTFBX', name='49 - uGMT BMTF BX', overlay='')
register_layout(source='L1T/L1TStage2uGMT/BMTFInput/ugmtBMTFglbhwPhi', destination='L1T/Layouts/Stage2-QuickCollection/ugmtBMTFglbhwPhi', name='50 - uGMT BMTF HW Phi', overlay='')
register_layout(source='L1T/L1TStage2uGMT/BMTFInput/ugmtBMTFhwEta', destination='L1T/Layouts/Stage2-QuickCollection/ugmtBMTFhwEta', name='51 - uGMT BMTF HW Eta', overlay='')
register_layout(source='L1T/L1TStage2uGMT/BMTFInput/ugmtBMTFhwSign', destination='L1T/Layouts/Stage2-QuickCollection/ugmtBMTFhwSign', name='52 - uGMT BMTF HW vs Sign', overlay='')
register_layout(source='L1T/L1TStage2uGMT/OMTFInput/ugmtOMTFBX', destination='L1T/Layouts/Stage2-QuickCollection/ugmtOMTFBX', name='53 - uGMT OMTF BX', overlay='')
register_layout(source='L1T/L1TStage2uGMT/OMTFInput/ugmtOMTFglbhwPhiPos', destination='L1T/Layouts/Stage2-QuickCollection/ugmtOMTFglbhwPhiPos', name='54 - uGMT OMTF Positive HW Phi', overlay='')
register_layout(source='L1T/L1TStage2uGMT/OMTFInput/ugmtOMTFglbhwPhiNeg', destination='L1T/Layouts/Stage2-QuickCollection/ugmtOMTFglbhwPhiNeg', name='55 - uGMT OMTF Negative HW Phi', overlay='')
register_layout(source='L1T/L1TStage2uGMT/OMTFInput/ugmtOMTFhwEta', destination='L1T/Layouts/Stage2-QuickCollection/ugmtOMTFhwEta', name='56 - uGMT OMTF HW Eta', overlay='')
register_layout(source='L1T/L1TStage2uGMT/OMTFInput/ugmtOMTFhwPt', destination='L1T/Layouts/Stage2-QuickCollection/ugmtOMTFhwPt', name='57 - uGMT OMTF HW p_{T}', overlay='')
register_layout(source='L1T/L1TStage2uGMT/OMTFInput/ugmtOMTFhwSign', destination='L1T/Layouts/Stage2-QuickCollection/ugmtOMTFhwSign', name='58 - uGMT OMTF HW Sign', overlay='')
register_layout(source='L1T/L1TStage2uGMT/EMTFInput/ugmtEMTFBX', destination='L1T/Layouts/Stage2-QuickCollection/ugmtEMTFBX', name='59 - uGMT EMTF BX', overlay='')
register_layout(source='L1T/L1TStage2uGMT/ugmtMuonPhiEmtf', destination='L1T/Layouts/Stage2-QuickCollection/ugmtMuonPhiEmtf', name='60 - uGMT EMTF Phi', overlay='')
register_layout(source='L1T/L1TStage2uGMT/BMTFoutput_vs_uGMTinput/mismatchRatio', destination='L1T/Layouts/Stage2-QuickCollection/mismatchRatio', name='61 - uGMT Input vs BMTF Output misMatch Ratio', overlay='')
register_layout(source='L1T/L1TStage2uGMT/uGMTMuonCopies/uGMTMuonCopy1/mismatchRatio', destination='L1T/Layouts/Stage2-QuickCollection/mismatchRatio', name='62 - uGMT Muon Copy 1 misMatch Ratio', overlay='')
register_layout(source='L1T/L1TStage2uGMT/uGMTMuonCopies/uGMTMuonCopy2/mismatchRatio', destination='L1T/Layouts/Stage2-QuickCollection/mismatchRatio', name='63 - uGMT Muon Copy 2 misMatch Ratio', overlay='')
register_layout(source='L1T/L1TStage2uGMT/uGMTMuonCopies/uGMTMuonCopy3/mismatchRatio', destination='L1T/Layouts/Stage2-QuickCollection/mismatchRatio', name='64 - uGMT Muon Copy 3 misMatch Ratio', overlay='')
register_layout(source='L1T/L1TStage2uGMT/uGMTMuonCopies/uGMTMuonCopy4/mismatchRatio', destination='L1T/Layouts/Stage2-QuickCollection/mismatchRatio', name='65 - uGMT Muon Copy 4 misMatch Ratio', overlay='')
register_layout(source='L1T/L1TStage2uGMT/uGMTMuonCopies/uGMTMuonCopy5/mismatchRatio', destination='L1T/Layouts/Stage2-QuickCollection/mismatchRatio', name='66 - uGMT Muon Copy 5 misMatch Ratio', overlay='')
register_layout(source='L1T/L1TStage2uGMT/zeroSuppression/AllEvts/mismatchRatio', destination='L1T/Layouts/Stage2-QuickCollection/mismatchRatio', name='67 - uGMT Zero Suppression misMatch Ratio (All Events)', overlay='')
register_layout(source='L1T/L1TStage2uGMT/zeroSuppression/FatEvts/mismatchRatio', destination='L1T/Layouts/Stage2-QuickCollection/mismatchRatio', name='68 - uGMT Zero Suppression misMatch Ratio (Fat Events)', overlay='')
register_layout(source='L1T/L1TStage2uGT/uGMToutput_vs_uGTinput/mismatchRatio', destination='L1T/Layouts/Stage2-QuickCollection/mismatchRatio', name='69 - uGT Input vs uGMT Output misMatch Ratio', overlay='')
register_layout(source='L1T/L1TStage2uGT/algoBits_before_prescale_bx_global', destination='L1T/Layouts/Stage2-QuickCollection/algoBits_before_prescale_bx_global', name='70 - uGT Algoritm Trigger Bits (before prescale) vs Global BX Number', overlay='')
