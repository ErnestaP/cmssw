from ..layouts.layout_manager import register_layout

register_layout(source='EcalPreshower/ESIntegrityClient/ES Integrity Summary 1 Z 1 P 1', destination='00 Shift/EcalPreshower/ES Integrity Summary 1 Z 1 P 1', name='01-IntegritySummary', description='ES+ Front Integrity Summary 1 -  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower <br/> <table width=100%> <tr><td>1 - not used<td>2 - fiber problem<td>3 - OK<td>4 - FED problem<td><tr>5 - KCHIP problem<td>6 - ES counters are not synced with GT counters (see ESRawDataTask) <td> 7 - more than one problem<td>8 - SLink CRC error</table> ', overlay='')
register_layout(source='EcalPreshower/ESIntegrityClient/ES Integrity Summary 1 Z -1 P 1', destination='00 Shift/EcalPreshower/ES Integrity Summary 1 Z -1 P 1', name='01-IntegritySummary', description='ES- Front Integrity Summary 1 -  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower <br/> <table width=100%> <tr><td>1 - not used<td>2 - fiber problem<td>3 - OK<td>4 - FED problem<td><tr>5 - KCHIP problem<td>6 - ES counters are not synced with GT counters (see ESRawDataTask) <td> 7 - more than one problem<td>8 - SLink CRC error</table> ', overlay='')
register_layout(source='EcalPreshower/ESIntegrityClient/ES Integrity Summary 1 Z 1 P 2', destination='00 Shift/EcalPreshower/ES Integrity Summary 1 Z 1 P 2', name='01-IntegritySummary', description='ES+ Rear Integrity Summary 1 -  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower <br/> <table width=100%> <tr><td>1 - not used<td>2 - fiber problem<td>3 - OK<td>4 - FED problem<td><tr>5 - KCHIP problem<td>6 - ES counters are not synced with GT counters (see ESRawDataTask) <td> 7 - more than one problem<td>8 - SLink CRC error</table> ', overlay='')
register_layout(source='EcalPreshower/ESIntegrityClient/ES Integrity Summary 1 Z -1 P 2', destination='00 Shift/EcalPreshower/ES Integrity Summary 1 Z -1 P 2', name='01-IntegritySummary', description='ES- Rear Integrity Summary 1 -  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower <br/> <table width=100%> <tr><td>1 - not used<td>2 - fiber problem<td>3 - OK<td>4 - FED problem<td><tr>5 - KCHIP problem<td>6 - ES counters are not synced with GT counters (see ESRawDataTask) <td> 7 - more than one problem<td>8 - SLink CRC error</table> ', overlay='')
register_layout(source='EcalPreshower/ESOccupancyTask/ES Occupancy with selected hits Z 1 P 1', destination='00 Shift/EcalPreshower/ES Occupancy with selected hits Z 1 P 1', name='02-GoodRechitOccupancySummary', description='ES Occupancy for ES+F. The colors in each segment represent the average number of strips per sensor per event that have hits with a pulse shape consistent with a real signal. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower ', overlay='')
register_layout(source='EcalPreshower/ESOccupancyTask/ES Occupancy with selected hits Z -1 P 1', destination='00 Shift/EcalPreshower/ES Occupancy with selected hits Z -1 P 1', name='02-GoodRechitOccupancySummary', description='ES Occupancy for ES-F. The colors in each segment represent the average number of strips per sensor per event that have hits with a pulse shape consistent with a real signal. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower ', overlay='')
register_layout(source='EcalPreshower/ESOccupancyTask/ES Occupancy with selected hits Z 1 P 2', destination='00 Shift/EcalPreshower/ES Occupancy with selected hits Z 1 P 2', name='02-GoodRechitOccupancySummary', description='ES Occupancy for ES+R. The colors in each segment represent the average number of strips per sensor per event that have hits with a pulse shape consistent with a real signal. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower ', overlay='')
register_layout(source='EcalPreshower/ESOccupancyTask/ES Occupancy with selected hits Z -1 P 2', destination='00 Shift/EcalPreshower/ES Occupancy with selected hits Z -1 P 2', name='02-GoodRechitOccupancySummary', description='ES Occupancy for ES-R. The colors in each segment represent the average number of strips per sensor per event that have hits with a pulse shape consistent with a real signal. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower ', overlay='')
register_layout(source='EcalPreshower/ESOccupancyTask/ES RecHit Energy with selected hits Z 1 P 1', destination='00 Shift/EcalPreshower/ES RecHit Energy with selected hits Z 1 P 1', name='03-GoodRechitEnergySummary', description='Energy spectrum with selected hits with a pulse shape consistent with a real signal for ES+F. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower ', overlay='')
register_layout(source='EcalPreshower/ESOccupancyTask/ES RecHit Energy with selected hits Z -1 P 1', destination='00 Shift/EcalPreshower/ES RecHit Energy with selected hits Z -1 P 1', name='03-GoodRechitEnergySummary', description='Energy spectrum with selected hits with a pulse shape consistent with a real signal for ES-F. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower ', overlay='')
register_layout(source='EcalPreshower/ESOccupancyTask/ES RecHit Energy with selected hits Z 1 P 2', destination='00 Shift/EcalPreshower/ES RecHit Energy with selected hits Z 1 P 2', name='03-GoodRechitEnergySummary', description='Energy spectrum with selected hits with a pulse shape consistent with a real signal for ES+R. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower ', overlay='')
register_layout(source='EcalPreshower/ESOccupancyTask/ES RecHit Energy with selected hits Z -1 P 2', destination='00 Shift/EcalPreshower/ES RecHit Energy with selected hits Z -1 P 2', name='03-GoodRechitEnergySummary', description='Energy spectrum with selected hits with a pulse shape consistent with a real signal for ES-R. A good reference run is 251643 for collision and 253299 for cosmic. The detailed description can be found in  href=https://twiki.cern.ch/twiki/bin/view/CMS/DQMShiftPreshower>DQMShiftPreshower ', overlay='')
register_layout(source='EcalPreshower/ESIntegrityTask/ES Gain used for data taking', destination='00 Shift/EcalPreshower/ES Gain used for data taking', name='04-ESGain-EcalPreshower', description='ES Gain configuration in the front-end electronics', overlay='')
