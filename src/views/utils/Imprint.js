import React from 'react'

import Container from 'react-bootstrap/Container'

export const Imprint = () => {
  return (
    <Container className="p-3">
      <h1>Legal Disclosure</h1>
      <p>Information in accordance with section 5 TMG</p>
      <p>Robert Bouschery<br />
      Rhöndorfer Straße 86<br />
      50939 Köln</p>
      <h2>Contact</h2>
      <p>E-Mail: <a href="mailto:robert@bouschery.com">robert@bouschery.com</a><br />
      Website: <a href="http://www.rbouschery.xyz/" target="_blank" rel="noopener noreferrer">rbouschery.xyz</a></p>
      <h2>Person responsible for content in accordance with 55 Abs. 2 RStV</h2>
      <p>Robert Bouschery, Rhöndorfer Straße 86, 50939 Cologne, Germany</p>
      <h2>Disclaimer</h2>
      <p>Accountability for content<br />
      The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents&#8216; accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this context, please note that we are accordingly not obliged to monitor merely the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).</p>
      <p>Accountability for links<br />
      Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.</p>
      <p>Copyright<br />
      Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law (§ 44a et seq. of the copyright law), every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are allowed only for private use, so must not serve either directly or indirectly for earnings. Unauthorized utilization of copyrighted works is punishable (§ 106 of the copyright law).</p>
    </Container>
  )
}

export default Imprint