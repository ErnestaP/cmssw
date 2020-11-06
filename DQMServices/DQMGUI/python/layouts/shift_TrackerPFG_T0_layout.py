from ..layouts.layout_manager import register_layout

register_layout(source='PixelPhase1/Phase1_MechanicalView/num_clusters_per_LumiBlock_PXBarrel', destination='00 Shift/TrackerOfflinePromptFeedback/num_clusters_per_LumiBlock_PXBarrel', name='01 - PixelPhase1 # of Cluster Trend', description='Mean cluster value per lumisection in barrel', overlay='')
register_layout(source='PixelPhase1/Phase1_MechanicalView/num_clusters_per_LumiBlock_PXForward', destination='00 Shift/TrackerOfflinePromptFeedback/num_clusters_per_LumiBlock_PXForward', name='01 - PixelPhase1 # of Cluster Trend', description='Mean cluster value per lumisection in endcap', overlay='')
register_layout(source='SiStrip/MechanicalView/TIB/TotalNumberOfClusterProfile__TIB', destination='00 Shift/TrackerOfflinePromptFeedback/TotalNumberOfClusterProfile__TIB', name='02 -SiStrip  # of Cluster Trend', description='Total # of Clusters in TIB with event time in Seconds  -  href=https://twiki.cern.ch/twiki/bin/view/CMS/SiStripOfflineDQMInstructions>SiStripOfflineDQMInstructions ', overlay='')
register_layout(source='SiStrip/MechanicalView/TOB/TotalNumberOfClusterProfile__TOB', destination='00 Shift/TrackerOfflinePromptFeedback/TotalNumberOfClusterProfile__TOB', name='02 -SiStrip  # of Cluster Trend', description='Total # of Clusters in TOB with event time in Seconds  -  href=https://twiki.cern.ch/twiki/bin/view/CMS/SiStripOfflineDQMInstructions>SiStripOfflineDQMInstructions ', overlay='')
register_layout(source='SiStrip/MechanicalView/TID/MINUS/TotalNumberOfClusterProfile__TID__MINUS', destination='00 Shift/TrackerOfflinePromptFeedback/TotalNumberOfClusterProfile__TID__MINUS', name='02 -SiStrip  # of Cluster Trend', description='Total # of Clusters in TID -ve side with event time in Seconds  -  href=https://twiki.cern.ch/twiki/bin/view/CMS/SiStripOfflineDQMInstructions>SiStripOfflineDQMInstructions ', overlay='')
register_layout(source='SiStrip/MechanicalView/TID/PLUS/TotalNumberOfClusterProfile__TID__PLUS', destination='00 Shift/TrackerOfflinePromptFeedback/TotalNumberOfClusterProfile__TID__PLUS', name='02 -SiStrip  # of Cluster Trend', description='Total # of Clusters in TID +ve side with event time in Seconds  -  href=https://twiki.cern.ch/twiki/bin/view/CMS/SiStripOfflineDQMInstructions>SiStripOfflineDQMInstructions ', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/MINUS/TotalNumberOfClusterProfile__TEC__MINUS', destination='00 Shift/TrackerOfflinePromptFeedback/TotalNumberOfClusterProfile__TEC__MINUS', name='02 -SiStrip  # of Cluster Trend', description='Total # of Clusters in TEC -ve side with event time in Seconds  -  href=https://twiki.cern.ch/twiki/bin/view/CMS/SiStripOfflineDQMInstructions>SiStripOfflineDQMInstructions ', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/PLUS/TotalNumberOfClusterProfile__TEC__PLUS', destination='00 Shift/TrackerOfflinePromptFeedback/TotalNumberOfClusterProfile__TEC__PLUS', name='02 -SiStrip  # of Cluster Trend', description='Total # of Clusters in TEC +ve side with event time in Seconds  -  href=https://twiki.cern.ch/twiki/bin/view/CMS/SiStripOfflineDQMInstructions>SiStripOfflineDQMInstructions ', overlay='')
register_layout(source='SiStrip/MechanicalView/TIB/Summary_ClusterStoNCorr_OnTrack__TIB', destination='00 Shift/TrackerOfflinePromptFeedback/Summary_ClusterStoNCorr_OnTrack__TIB', name='03a SiStrip OnTrackCluster', description='Signal-to-Noise (corrected for the angle) for On-Track clusters in TIB  -  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftOfflineSiStrip>DQMShiftOfflineSiStrip ', overlay='')
register_layout(source='SiStrip/MechanicalView/TOB/Summary_ClusterStoNCorr_OnTrack__TOB', destination='00 Shift/TrackerOfflinePromptFeedback/Summary_ClusterStoNCorr_OnTrack__TOB', name='03a SiStrip OnTrackCluster', description='Signal-to-Noise (corrected for the angle) for On-Track clusters in TOB  -  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftOfflineSiStrip>DQMShiftOfflineSiStrip ', overlay='')
register_layout(source='SiStrip/MechanicalView/TID/MINUS/Summary_ClusterStoNCorr_OnTrack__TID__MINUS', destination='00 Shift/TrackerOfflinePromptFeedback/Summary_ClusterStoNCorr_OnTrack__TID__MINUS', name='03a SiStrip OnTrackCluster', description='Signal-to-Noise (corrected for the angle) for On-Track clusters in TID -ve side -  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftOfflineSiStrip>DQMShiftOfflineSiStrip ', overlay='')
register_layout(source='SiStrip/MechanicalView/TID/PLUS/Summary_ClusterStoNCorr_OnTrack__TID__PLUS', destination='00 Shift/TrackerOfflinePromptFeedback/Summary_ClusterStoNCorr_OnTrack__TID__PLUS', name='03a SiStrip OnTrackCluster', description='Signal-to-Noise (corrected for the angle) for On-Track clusters in TID +ve side -  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftOfflineSiStrip>DQMShiftOfflineSiStrip ', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/MINUS/Summary_ClusterStoNCorr_OnTrack__TEC__MINUS', destination='00 Shift/TrackerOfflinePromptFeedback/Summary_ClusterStoNCorr_OnTrack__TEC__MINUS', name='03a SiStrip OnTrackCluster', description='Signal-to-Noise (corrected for the angle) for On-Track clusters in TEC -ve side -  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftOfflineSiStrip>DQMShiftOfflineSiStrip ', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/PLUS/Summary_ClusterStoNCorr_OnTrack__TEC__PLUS', destination='00 Shift/TrackerOfflinePromptFeedback/Summary_ClusterStoNCorr_OnTrack__TEC__PLUS', name='03a SiStrip OnTrackCluster', description='Signal-to-Noise (corrected for the angle) for On-Track clusters in TEC +ve side -  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftOfflineSiStrip>DQMShiftOfflineSiStrip ', overlay='')
register_layout(source='SiStrip/MechanicalView/TIB/Summary_ClusterChargePerCMfromOrigin_OnTrack__TIB', destination='00 Shift/TrackerOfflinePromptFeedback/Summary_ClusterChargePerCMfromOrigin_OnTrack__TIB', name='03b - Cluster Charge per CM (On-Track)', description='Charge per CM TIB ', overlay='')
register_layout(source='SiStrip/MechanicalView/TOB/Summary_ClusterChargePerCMfromOrigin_OnTrack__TOB', destination='00 Shift/TrackerOfflinePromptFeedback/Summary_ClusterChargePerCMfromOrigin_OnTrack__TOB', name='03b - Cluster Charge per CM (On-Track)', description='Charge per CM TOB', overlay='')
register_layout(source='SiStrip/MechanicalView/TID/MINUS/Summary_ClusterChargePerCMfromOrigin_OnTrack__TID__MINUS', destination='00 Shift/TrackerOfflinePromptFeedback/Summary_ClusterChargePerCMfromOrigin_OnTrack__TID__MINUS', name='03b - Cluster Charge per CM (On-Track)', description='Charge per CM TID MINUS ', overlay='')
register_layout(source='SiStrip/MechanicalView/TID/PLUS/Summary_ClusterChargePerCMfromOrigin_OnTrack__TID__PLUS', destination='00 Shift/TrackerOfflinePromptFeedback/Summary_ClusterChargePerCMfromOrigin_OnTrack__TID__PLUS', name='03b - Cluster Charge per CM (On-Track)', description='Charge per CM TID PLUS  ', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/MINUS/Summary_ClusterChargePerCMfromOrigin_OnTrack__TEC__MINUS', destination='00 Shift/TrackerOfflinePromptFeedback/Summary_ClusterChargePerCMfromOrigin_OnTrack__TEC__MINUS', name='03b - Cluster Charge per CM (On-Track)', description='Charge per CM TEC MINUS  ', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/PLUS/Summary_ClusterChargePerCMfromOrigin_OnTrack__TEC__PLUS', destination='00 Shift/TrackerOfflinePromptFeedback/Summary_ClusterChargePerCMfromOrigin_OnTrack__TEC__PLUS', name='03b - Cluster Charge per CM (On-Track)', description='Charge per CM TEC PLUS ', overlay='')
register_layout(source='PixelPhase1/Tracks/PXBarrel/chargeInner_PXLayer_1', destination='00 Shift/TrackerOfflinePromptFeedback/chargeInner_PXLayer_1', name='04 - Cluster on track charge per Inner Ladders', description='corrected cluster charge (on track) in inner ladders in PXLayer 1', overlay='')
register_layout(source='PixelPhase1/Tracks/PXBarrel/chargeInner_PXLayer_2', destination='00 Shift/TrackerOfflinePromptFeedback/chargeInner_PXLayer_2', name='04 - Cluster on track charge per Inner Ladders', description='corrected cluster charge (on track) in inner ladders in PXLayer 2', overlay='')
register_layout(source='PixelPhase1/Tracks/PXBarrel/chargeInner_PXLayer_3', destination='00 Shift/TrackerOfflinePromptFeedback/chargeInner_PXLayer_3', name='04 - Cluster on track charge per Inner Ladders', description='corrected cluster charge (on track) in inner ladders in PXLayer 3', overlay='')
register_layout(source='PixelPhase1/Tracks/PXBarrel/chargeInner_PXLayer_4', destination='00 Shift/TrackerOfflinePromptFeedback/chargeInner_PXLayer_4', name='04 - Cluster on track charge per Inner Ladders', description='corrected cluster charge (on track) in inner ladders in PXLayer 4', overlay='')
register_layout(source='PixelPhase1/Tracks/PXBarrel/chargeOuter_PXLayer_1', destination='00 Shift/TrackerOfflinePromptFeedback/chargeOuter_PXLayer_1', name='05 - Cluster on track charge per Outer Ladders', description='corrected cluster charge (on track) in outer ladders in PXLayer 1', overlay='')
register_layout(source='PixelPhase1/Tracks/PXBarrel/chargeOuter_PXLayer_2', destination='00 Shift/TrackerOfflinePromptFeedback/chargeOuter_PXLayer_2', name='05 - Cluster on track charge per Outer Ladders', description='corrected cluster charge (on track) in outer ladders in PXLayer 2', overlay='')
register_layout(source='PixelPhase1/Tracks/PXBarrel/chargeOuter_PXLayer_3', destination='00 Shift/TrackerOfflinePromptFeedback/chargeOuter_PXLayer_3', name='05 - Cluster on track charge per Outer Ladders', description='corrected cluster charge (on track) in outer ladders in PXLayer 3', overlay='')
register_layout(source='PixelPhase1/Tracks/PXBarrel/chargeOuter_PXLayer_4', destination='00 Shift/TrackerOfflinePromptFeedback/chargeOuter_PXLayer_4', name='05 - Cluster on track charge per Outer Ladders', description='corrected cluster charge (on track) in outer ladders in PXLayer 4', overlay='')
register_layout(source='PixelPhase1/deadRocTotal', destination='00 Shift/TrackerOfflinePromptFeedback/deadRocTotal', name='06 - PixelPhase1 DeadROC Summary', description='Number of total dead ROCs summary', overlay='')
register_layout(source='PixelPhase1/Phase1_MechanicalView/PXBarrel/clusterposition_zphi_PXLayer_1', destination='00 Shift/TrackerOfflinePromptFeedback/clusterposition_zphi_PXLayer_1', name='07 - PixelPhase1 Cluster Position: Z vs Phi barrel summary', description='Cluster position in global coordinates by Global Phi (y-axis) vs Global Z (x-axis) in layer 1 of pixel endcap', overlay='')
register_layout(source='PixelPhase1/Phase1_MechanicalView/PXBarrel/clusterposition_zphi_PXLayer_2', destination='00 Shift/TrackerOfflinePromptFeedback/clusterposition_zphi_PXLayer_2', name='07 - PixelPhase1 Cluster Position: Z vs Phi barrel summary', description='Cluster position in global coordinates by Global Phi (y-axis) vs Global Z (x-axis) in layer 2 of pixel endcap', overlay='')
register_layout(source='PixelPhase1/Phase1_MechanicalView/PXBarrel/clusterposition_zphi_PXLayer_3', destination='00 Shift/TrackerOfflinePromptFeedback/clusterposition_zphi_PXLayer_3', name='07 - PixelPhase1 Cluster Position: Z vs Phi barrel summary', description='Cluster position in global coordinates by Global Phi (y-axis) vs Global Z (x-axis) in layer 3 of pixel endcap', overlay='')
register_layout(source='PixelPhase1/Phase1_MechanicalView/PXBarrel/clusterposition_zphi_PXLayer_4', destination='00 Shift/TrackerOfflinePromptFeedback/clusterposition_zphi_PXLayer_4', name='07 - PixelPhase1 Cluster Position: Z vs Phi barrel summary', description='Cluster position in global coordinates by Global Phi (y-axis) vs Global Z (x-axis) in layer 4 of pixel endcap', overlay='')
register_layout(source='PixelPhase1/Phase1_MechanicalView/PXForward/clusterposition_xy_PXDisk_+1', destination='00 Shift/TrackerOfflinePromptFeedback/clusterposition_xy_PXDisk_+1', name='08 - PixelPhase1 Cluster Position: X vs Y endcap summary', description='Cluster position in global coordinates by Global Y (y-axis) vs Global X (x-axis) in disk +1 of pixel endcap', overlay='')
register_layout(source='PixelPhase1/Phase1_MechanicalView/PXForward/clusterposition_xy_PXDisk_+2', destination='00 Shift/TrackerOfflinePromptFeedback/clusterposition_xy_PXDisk_+2', name='08 - PixelPhase1 Cluster Position: X vs Y endcap summary', description='Cluster position in global coordinates by Global Y (y-axis) vs Global X (x-axis) in disk +2 of pixel endcap', overlay='')
register_layout(source='PixelPhase1/Phase1_MechanicalView/PXForward/clusterposition_xy_PXDisk_+3', destination='00 Shift/TrackerOfflinePromptFeedback/clusterposition_xy_PXDisk_+3', name='08 - PixelPhase1 Cluster Position: X vs Y endcap summary', description='Cluster position in global coordinates by Global Y (y-axis) vs Global X (x-axis) in disk +3 of pixel endcap', overlay='')
register_layout(source='PixelPhase1/Phase1_MechanicalView/PXForward/clusterposition_xy_PXDisk_-1', destination='00 Shift/TrackerOfflinePromptFeedback/clusterposition_xy_PXDisk_-1', name='08 - PixelPhase1 Cluster Position: X vs Y endcap summary', description='Cluster position in global coordinates by Global Y (y-axis) vs Global X (x-axis) in disk -1 of pixel endcap', overlay='')
register_layout(source='PixelPhase1/Phase1_MechanicalView/PXForward/clusterposition_xy_PXDisk_-2', destination='00 Shift/TrackerOfflinePromptFeedback/clusterposition_xy_PXDisk_-2', name='08 - PixelPhase1 Cluster Position: X vs Y endcap summary', description='Cluster position in global coordinates by Global Y (y-axis) vs Global X (x-axis) in disk -2 of pixel endcap', overlay='')
register_layout(source='PixelPhase1/Phase1_MechanicalView/PXForward/clusterposition_xy_PXDisk_-3', destination='00 Shift/TrackerOfflinePromptFeedback/clusterposition_xy_PXDisk_-3', name='08 - PixelPhase1 Cluster Position: X vs Y endcap summary', description='Cluster position in global coordinates by Global Y (y-axis) vs Global X (x-axis) in disk -3 of pixel endcap', overlay='')
register_layout(source='PixelPhase1/Tracks/residual_x_PXBarrel', destination='00 Shift/TrackerOfflinePromptFeedback/residual_x_PXBarrel', name='09 - PixelPhase1 Residuals', description='Track residuals x in PXBarrel', overlay='')
register_layout(source='PixelPhase1/Tracks/residual_x_PXForward', destination='00 Shift/TrackerOfflinePromptFeedback/residual_x_PXForward', name='09 - PixelPhase1 Residuals', description='Track residuals x in PXForward', overlay='')
register_layout(source='PixelPhase1/Tracks/residual_y_PXBarrel', destination='00 Shift/TrackerOfflinePromptFeedback/residual_y_PXBarrel', name='09 - PixelPhase1 Residuals', description='Track residuals y in PXBarrel', overlay='')
register_layout(source='PixelPhase1/Tracks/residual_y_PXForward', destination='00 Shift/TrackerOfflinePromptFeedback/residual_y_PXForward', name='09 - PixelPhase1 Residuals', description='Track residuals y in PXForward', overlay='')
register_layout(source='SiStrip/MechanicalView/TIB/layer_1/HitResiduals_TIB__Layer__1', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TIB__Layer__1', name='10a - TIB Residuals', description='Hit Residual in TIB Layer #1', overlay='')
register_layout(source='SiStrip/MechanicalView/TIB/layer_2/HitResiduals_TIB__Layer__2', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TIB__Layer__2', name='10a - TIB Residuals', description='Hit Residual in TIB Layer #2', overlay='')
register_layout(source='SiStrip/MechanicalView/TIB/layer_3/HitResiduals_TIB__Layer__3', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TIB__Layer__3', name='10a - TIB Residuals', description='Hit Residual in TIB Layer #3', overlay='')
register_layout(source='SiStrip/MechanicalView/TIB/layer_4/HitResiduals_TIB__Layer__4', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TIB__Layer__4', name='10a - TIB Residuals', description='Hit Residual in TIB Layer #4', overlay='')
register_layout(source='SiStrip/MechanicalView/TOB/layer_1/HitResiduals_TOB__Layer__1', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TOB__Layer__1', name='10b - TOB Residuals', description='Hit Residual in TOB Layer #1', overlay='')
register_layout(source='SiStrip/MechanicalView/TOB/layer_2/HitResiduals_TOB__Layer__2', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TOB__Layer__2', name='10b - TOB Residuals', description='Hit Residual in TOB Layer #2', overlay='')
register_layout(source='SiStrip/MechanicalView/TOB/layer_3/HitResiduals_TOB__Layer__3', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TOB__Layer__3', name='10b - TOB Residuals', description='Hit Residual in TOB Layer #3', overlay='')
register_layout(source='SiStrip/MechanicalView/TOB/layer_4/HitResiduals_TOB__Layer__4', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TOB__Layer__4', name='10b - TOB Residuals', description='Hit Residual in TOB Layer #4', overlay='')
register_layout(source='SiStrip/MechanicalView/TOB/layer_5/HitResiduals_TOB__Layer__5', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TOB__Layer__5', name='10b - TOB Residuals', description='Hit Residual in TOB Layer #5', overlay='')
register_layout(source='SiStrip/MechanicalView/TOB/layer_6/HitResiduals_TOB__Layer__6', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TOB__Layer__6', name='10b - TOB Residuals', description='Hit Residual in TOB Layer #6', overlay='')
register_layout(source='SiStrip/MechanicalView/TID/PLUS/wheel_1/HitResiduals_TID__wheel__1', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TID__wheel__1', name='10c - TID+ Residuals', description='Hit Residuals in TID+ Wheel #1', overlay='')
register_layout(source='SiStrip/MechanicalView/TID/PLUS/wheel_2/HitResiduals_TID__wheel__2', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TID__wheel__2', name='10c - TID+ Residuals', description='Hit Residuals in TID+ Wheel #2', overlay='')
register_layout(source='SiStrip/MechanicalView/TID/PLUS/wheel_3/HitResiduals_TID__wheel__3', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TID__wheel__3', name='10c - TID+ Residuals', description='Hit Residuals in TID+ Wheel #3 ', overlay='')
register_layout(source='SiStrip/MechanicalView/TID/MINUS/wheel_1/HitResiduals_TID__wheel__1', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TID__wheel__1', name='10d - TID- Residuals', description='Hit Residuals in TID- Wheel #1', overlay='')
register_layout(source='SiStrip/MechanicalView/TID/MINUS/wheel_2/HitResiduals_TID__wheel__2', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TID__wheel__2', name='10d - TID- Residuals', description='Hit Residuals in TID- Wheel #2', overlay='')
register_layout(source='SiStrip/MechanicalView/TID/MINUS/wheel_3/HitResiduals_TID__wheel__3', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TID__wheel__3', name='10d - TID- Residuals', description='Hit Residuals in TID- Wheel #3 ', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/PLUS/wheel_1/HitResiduals_TEC__wheel__1', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TEC__wheel__1', name='10e - TEC+ Residual', description='Hit Residual in TEC+ Wheel #1', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/PLUS/wheel_2/HitResiduals_TEC__wheel__2', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TEC__wheel__2', name='10e - TEC+ Residual', description='Hit Residual in TEC+ Wheel #2', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/PLUS/wheel_3/HitResiduals_TEC__wheel__3', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TEC__wheel__3', name='10e - TEC+ Residual', description='Hit Residual in TEC+ Wheel #3', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/PLUS/wheel_4/HitResiduals_TEC__wheel__4', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TEC__wheel__4', name='10e - TEC+ Residual', description='Hit Residual in TEC+ Wheel #4', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/PLUS/wheel_5/HitResiduals_TEC__wheel__5', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TEC__wheel__5', name='10e - TEC+ Residual', description='Hit Residual in TEC+ Wheel #5', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/PLUS/wheel_6/HitResiduals_TEC__wheel__6', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TEC__wheel__6', name='10e - TEC+ Residual', description='Hit Residual in TEC+ Wheel #6', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/PLUS/wheel_7/HitResiduals_TEC__wheel__7', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TEC__wheel__7', name='10e - TEC+ Residual', description='Hit Residual in TEC+ Wheel #7', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/PLUS/wheel_8/HitResiduals_TEC__wheel__8', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TEC__wheel__8', name='10e - TEC+ Residual', description='Hit Residual in TEC+ Wheel #8', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/PLUS/wheel_9/HitResiduals_TEC__wheel__9', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TEC__wheel__9', name='10e - TEC+ Residual', description='Hit Residual in TEC+ Wheel #9', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/MINUS/wheel_1/HitResiduals_TEC__wheel__1', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TEC__wheel__1', name='10f - TEC- Residual', description='Hit Residual in TEC- Wheel #1', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/MINUS/wheel_2/HitResiduals_TEC__wheel__2', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TEC__wheel__2', name='10f - TEC- Residual', description='Hit Residual in TEC- Wheel #2', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/MINUS/wheel_3/HitResiduals_TEC__wheel__3', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TEC__wheel__3', name='10f - TEC- Residual', description='Hit Residual in TEC- Wheel #3', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/MINUS/wheel_4/HitResiduals_TEC__wheel__4', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TEC__wheel__4', name='10f - TEC- Residual', description='Hit Residual in TEC- Wheel #4', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/MINUS/wheel_5/HitResiduals_TEC__wheel__5', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TEC__wheel__5', name='10f - TEC- Residual', description='Hit Residual in TEC- Wheel #5', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/MINUS/wheel_6/HitResiduals_TEC__wheel__6', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TEC__wheel__6', name='10f - TEC- Residual', description='Hit Residual in TEC- Wheel #6', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/MINUS/wheel_7/HitResiduals_TEC__wheel__7', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TEC__wheel__7', name='10f - TEC- Residual', description='Hit Residual in TEC- Wheel #7', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/MINUS/wheel_8/HitResiduals_TEC__wheel__8', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TEC__wheel__8', name='10f - TEC- Residual', description='Hit Residual in TEC- Wheel #8', overlay='')
register_layout(source='SiStrip/MechanicalView/TEC/MINUS/wheel_9/HitResiduals_TEC__wheel__9', destination='00 Shift/TrackerOfflinePromptFeedback/HitResiduals_TEC__wheel__9', name='10f - TEC- Residual', description='Hit Residual in TEC- Wheel #9', overlay='')
register_layout(source='Tracking/TrackParameters/highPurityTracks/pt_1/GeneralProperties/NumberOfTracks_GenTk', destination='00 Shift/TrackerOfflinePromptFeedback/NumberOfTracks_GenTk', name='11a - Tracks (pp collisions)', description='Number of Reconstructed Tracks -  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftOfflineTracking>DQMShiftOfflineTracking ', overlay='')
register_layout(source='Tracking/TrackParameters/highPurityTracks/pt_1/HitProperties/NumberOfRecHitsPerTrack_GenTk', destination='00 Shift/TrackerOfflinePromptFeedback/NumberOfRecHitsPerTrack_GenTk', name='11a - Tracks (pp collisions)', description='Number of RecHits per Track -  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftOfflineTracking>DQMShiftOfflineTracking ', overlay='')
register_layout(source='Tracking/TrackParameters/highPurityTracks/pt_1/GeneralProperties/TrackPt_ImpactPoint_GenTk', destination='00 Shift/TrackerOfflinePromptFeedback/TrackPt_ImpactPoint_GenTk', name='11a - Tracks (pp collisions)', description='Pt of Reconstructed Track -  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftOfflineTracking>DQMShiftOfflineTracking ', overlay='')
register_layout(source='Tracking/TrackParameters/highPurityTracks/pt_1/GeneralProperties/Chi2oNDF_GenTk', destination='00 Shift/TrackerOfflinePromptFeedback/Chi2oNDF_GenTk', name='11a - Tracks (pp collisions)', description='Chi Square per DoF -   href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftOfflineTracking>DQMShiftOfflineTracking ', overlay='')
register_layout(source='Tracking/TrackParameters/highPurityTracks/pt_1/GeneralProperties/TrackPhi_ImpactPoint_GenTk', destination='00 Shift/TrackerOfflinePromptFeedback/TrackPhi_ImpactPoint_GenTk', name='11a - Tracks (pp collisions)', description='Phi distribution of Reconstructed Tracks -   href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftOfflineTracking>DQMShiftOfflineTracking ', overlay='')
register_layout(source='Tracking/TrackParameters/highPurityTracks/pt_1/GeneralProperties/TrackEta_ImpactPoint_GenTk', destination='00 Shift/TrackerOfflinePromptFeedback/TrackEta_ImpactPoint_GenTk', name='11a - Tracks (pp collisions)', description=' Eta distribution of Reconstructed Tracks -  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftOfflineTracking>DQMShiftOfflineTracking ', overlay='')
register_layout(source='Tracking/TrackParameters/GeneralProperties/NumberOfTracks_CKFTk', destination='00 Shift/TrackerOfflinePromptFeedback/NumberOfTracks_CKFTk', name='11b - Tracks (Cosmic Tracking)', description='Number of Reconstructed Tracks -  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftOfflineTracking>DQMShiftOfflineTracking ', overlay='')
register_layout(source='Tracking/TrackParameters/HitProperties/NumberOfRecHitsPerTrack_CKFTk', destination='00 Shift/TrackerOfflinePromptFeedback/NumberOfRecHitsPerTrack_CKFTk', name='11b - Tracks (Cosmic Tracking)', description='Number of RecHits per Track  -  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftOfflineTracking>DQMShiftOfflineTracking ', overlay='')
register_layout(source='Tracking/TrackParameters/GeneralProperties/TrackPt_CKFTk', destination='00 Shift/TrackerOfflinePromptFeedback/TrackPt_CKFTk', name='11b - Tracks (Cosmic Tracking)', description='Pt of Reconstructed Track  -  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftOfflineTracking>DQMShiftOfflineTracking ', overlay='')
register_layout(source='Tracking/TrackParameters/GeneralProperties/Chi2oNDF_CKFTk', destination='00 Shift/TrackerOfflinePromptFeedback/Chi2oNDF_CKFTk', name='11b - Tracks (Cosmic Tracking)', description='Chi Sqare per DoF  -   href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftOfflineTracking>DQMShiftOfflineTracking ', overlay='')
register_layout(source='Tracking/TrackParameters/GeneralProperties/TrackPhi_CKFTk', destination='00 Shift/TrackerOfflinePromptFeedback/TrackPhi_CKFTk', name='11b - Tracks (Cosmic Tracking)', description='Phi distribution of Reconstructed Tracks -   href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftOfflineTracking>DQMShiftOfflineTracking ', overlay='')
register_layout(source='Tracking/TrackParameters/GeneralProperties/TrackEta_CKFTk', destination='00 Shift/TrackerOfflinePromptFeedback/TrackEta_CKFTk', name='11b - Tracks (Cosmic Tracking)', description=' Eta distribution of Reconstructed Tracks -  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftOfflineTracking>DQMShiftOfflineTracking ', overlay='')
