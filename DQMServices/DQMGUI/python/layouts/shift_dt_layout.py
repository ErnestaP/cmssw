from ..layouts.layout_manager import register_layout

register_layout(source='DT/00-ROChannels/ROChannelSummary', destination='00 Shift/DT/ROChannelSummary', name='00-ROChannelSummary', overlay='')
register_layout(source='DT/01-Digi/OccupancyGlbSummary', destination='00 Shift/DT/OccupancyGlbSummary', name='01-OccupancySummary', overlay='')
register_layout(source='DT/02-Segments/SegmentGlbSummary', destination='00 Shift/DT/SegmentGlbSummary', name='02-SegmentSummary', overlay='')
register_layout(source='DT/03-LocalTrigger-TM/TM_CorrFractionSummaryIn', destination='00 Shift/DT/TM_CorrFractionSummaryIn', name='03-TM-TriggerCorrFractionSummary', overlay='')
register_layout(source='DT/05-Noise/NoiseSummary', destination='00 Shift/DT/NoiseSummary', name='04-NoiseChannelsSummary', overlay='')
register_layout(source='DT/05-Noise/SynchNoise/SynchNoiseSummary', destination='00 Shift/DT/SynchNoiseSummary', name='05-SynchNoiseSummary', overlay='')
