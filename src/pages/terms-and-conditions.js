import React from "react";
import Head from "next/head";
import { Navbar, Footer } from "@/components";

const termsAndConditions = () => {
  const subHeadingStyle = "text-3xl font-semibold h-10";

  return (
    <>
      <Head>
        <title>PnutPresets | Terms and Conditions</title>
        <meta name="description" content="PnutPresets Terms and Conditions" />
        <meta
          property="og:title"
          content="PnutPresets | Terms and Conditions"
        />
        <meta
          property="og:description"
          content="PnutPresets Terms and Conditions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar bgOn={10} darkMode={true} />
      <div className="misc-container">
        <div className="misc-inner-container">
          <h1 className="text-4xl font-bold h-12">Terms and Conditions</h1>
          <br />
          <p>Our website address is: pnutpresets.com </p>

          <br />

          <h2 className={subHeadingStyle}>Intellectual Property</h2>
          <br />
          <p>
            All content on the Website, including but not limited to text,
            graphics, logos, images, and software, is the property of
            PnutPresets and is protected by applicable intellectual property
            laws. You may not reproduce, distribute, modify, or create
            derivative works from any content on the Website without prior
            written consent from PnutPresets.
          </p>
          <br />
          <h2 className={subHeadingStyle}>User Conduct</h2>
          <br />
          <p>When using the Website, you agree to:</p>
          <br />
          <ul>
            <li className="bullet-point">
              a. Comply with all applicable laws and regulations.{" "}
            </li>
            <li className="bullet-point">
              b. Use the Website only for lawful purposes and in a manner that
              does not infringe upon the rights of others.{" "}
            </li>
            <li className="bullet-point">
              c. Refrain from transmitting any content that is unlawful,
              harmful, defamatory, obscene, or otherwise objectionable.
            </li>
            <li className="bullet-point">
              d. Maintain the confidentiality of any account credentials and not
              share them with unauthorized individuals.
            </li>
          </ul>
          <br />

          <h2 className={subHeadingStyle}>Third-Party Links</h2>
          <br />
          <p>
            The Website may contain links to third-party websites or services.
            PnutPresets does not endorse or assume any responsibility for the
            content, privacy practices, or actions of any third-party websites
            or services. You access and use these third-party websites or
            services at your own risk.
          </p>
          <br />
          <h2 className={subHeadingStyle}>Disclaimer of Warranties </h2>
          <br />
          <p>
            The Website and its content are provided on an "as-is" basis without
            any warranties, express or implied. PnutPresets does not guarantee
            the accuracy, reliability, or availability of the Website. You use
            the Website at your own risk.
          </p>
          <br />
          <h2 className={subHeadingStyle}>Limitation of Liability</h2>
          <br />
          <p>
            In no event shall PnutPresets be liable for any direct, indirect,
            incidental, consequential, or punitive damages arising out of or in
            connection with the use of the Website. This includes, but is not
            limited to, any errors or omissions in the content, loss of data, or
            interruption of business.
          </p>
          <br />

          <h2>Modification and Termination</h2>
          <br />
          <p>
            PnutPresets reserves the right to modify or terminate the Website or
            any part thereof, at any time without notice. PnutPresets may also
            revise these terms and conditions by posting an updated version on
            the Website. Continued use of the Website after any such changes
            shall constitute your consent to such changes.
          </p>
          <br />
          <h2 className={subHeadingStyle}>Governing Law</h2>
          <br />
          <p>
            These terms and conditions shall be governed by and construed in
            accordance with the laws of [your jurisdiction]. Any legal action or
            proceeding arising out of or related to these terms shall be brought
            exclusively in the courts of [your jurisdiction].
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default termsAndConditions;
