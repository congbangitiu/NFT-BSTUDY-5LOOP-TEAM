import Breadcrumb from "../components/Breadcrumb";
import Divider from "../components/Divider";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import TermsPrivacyContent from "../components/TermsPrivacy";

export default function Terms() {
  return (
    <>
      <Header />

      <Breadcrumb
        breadcrumbTitle="Terms & Conditions"
        breadcrumbNav={[
          {
            navText: "Home",
            path: "/",
          },
        ]}
      />

      <Divider />

      <TermsPrivacyContent
        contentBody={[
          "<h2>USE OF INFORMATION</h2>",
          "<p>For our Clients, we use personal information mainly to provide the Services and contact our Clients regarding account activities, new versions, and product offerings, or other communications relevant to the Services on NFT-BStudy. We do not sell or share any personally identifiable or other information of End Users to any third parties, except, of course, to the applicable Client whose website you are using.</p>",
          "<p>If you contact us by email or by filling out a registration form on NFT-BStudy, we may keep a record of your contact information and correspondence and may use your email address, and any information that you provide to us in your message, to respond to you. In addition, we may use the personal information described above to send you information regarding the Service. If you decide at any time that you no longer wish to receive such information or communications from us, email us at support@nft-bstudy.com and request to be removed from our list. The circumstances under which we may share such information with third parties are described below in “Complying with Legal Process”.</p>",

          "<div class='mb-5'></div>",

          "<h4>STORAGE AND SECURITY OF INFORMATION</h4>",
          "<p>NFT-BStudy operates secure data networks protected by industry-standard firewalls and password protection systems. Our security and privacy policies are periodically reviewed and enhanced as necessary, and only authorized individuals have access to the information provided by our Clients.</p>",

          "<div class='mb-5'></div>",

          "<h4>PERSONALLY IDENTIFIABLE INFORMATION</h4>",
          "<Due>If you are a Client, when you register with NFT-BStudy via our Website, we will ask you for some personally identifiable information, such as your first and last name, company name, email address, billing address, and credit card information. You may review and update this personally identifiable information in your profile by logging in and editing such information on your dashboard. If you decide to delete all of your information, we may cancel your account. We may retain an archived copy of your records as required by law or for reasonable business purposes. Due to the nature of the Service, except to assist Clients with certain limited technical problems or as otherwise legally compelled, we will not access any of the Content that you upload to the Service. Some Personally Identifiable Information may also be provided to intermediaries and third parties who assist us with the Service, but who may make no use of any such information other than to assist us in providing the Service. Except as otherwise provided in this Privacy Policy, however, we will not rent or sell your Personally Identifiable Information to third parties.</p>",

          "<div class='mb-5'></div>",
        ]}
        infoLastUpdated="Last updated June 27, 2024"
      />

      <Divider />

      <Footer />
    </>
  );
}
