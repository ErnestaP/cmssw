#include <SimCalorimetry/EcalEBTrigPrimAlgos/interface/EcalEBFenixStripFormatEB.h>
#include <CondFormats/EcalObjects/interface/EcalTPGSlidingWindow.h>
#include "FWCore/MessageLogger/interface/MessageLogger.h"

EcalEBFenixStripFormatEB::EcalEBFenixStripFormatEB() : shift_(0) {}

EcalEBFenixStripFormatEB::~EcalEBFenixStripFormatEB() {}

int EcalEBFenixStripFormatEB::setInput(int input, int inputPeak, int inputsFGVB) {
  inputsFGVB_ = inputsFGVB;
  inputPeak_ = inputPeak;
  input_ = input;
  return 0;
}

int EcalEBFenixStripFormatEB::process() {
  //    buffer_=input_>>shift_;  //FIXME: buffer why?

  if (inputPeak_ == 0)
    return ((inputsFGVB_ & 0x1) << 12);
  //    int output=buffer_;
  int output = input_ >> shift_;
  //std::cout << " EcalEBFenixStripFormatEB::process() input_ " << input_ << " output after shift " << output << std::endl;
  if (output > 0XFFF)
    output = 0XFFF;  //ok: barrel saturates at 12 bits
  // Add stripFGVB
  output |= ((inputsFGVB_ & 0x1) << 12);

  //std::cout << " EcalEBFenixStripFormatEB::process()  output after adding FGVB " << output << std::endl;
  return output;
}

void EcalEBFenixStripFormatEB::process(std::vector<int> &sFGVBout,
                                       std::vector<int> &peakout,
                                       std::vector<int> &filtout,
                                       std::vector<int> &output) {
  if (peakout.size() != filtout.size() || sFGVBout.size() != filtout.size()) {
    edm::LogWarning("EcalTPG")
        << " problem in EcalEBFenixStripFormatEB: sfgvb_out, peak_out and filt_out don't have the same size";
  }
  //std::cout << "  EcalEBFenixStripFormatEB::process(std::vector ... filtout size " << filtout.size() << std::endl;
  for (unsigned int i = 0; i < filtout.size(); i++) {
    //std::cout << " Looping over filtout " << filtout[i] << " " << peakout[i] << std::endl;
    setInput(filtout[i], peakout[i], sFGVBout[i]);

    output[i] = process();
  }
  return;
}

void EcalEBFenixStripFormatEB::setParameters(uint32_t &id, const EcalTPGSlidingWindow *&slWin) {
  const EcalTPGSlidingWindowMap &slwinmap = slWin->getMap();
  EcalTPGSlidingWindowMapIterator it = slwinmap.find(id);
  if (it != slwinmap.end())
    shift_ = (*it).second;
  else
    edm::LogWarning("EcalTPG") << " could not find EcalTPGSlidingWindowMap entry for " << id;
}
