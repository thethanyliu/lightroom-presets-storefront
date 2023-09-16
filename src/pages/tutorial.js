import React from "react";
import Head from "next/head";
import { Footer, Layout, Navbar } from "@/components";

const tutorial = () => {
  return (
    <>
      <Head>
        <title>PnutPresets | Tutorial</title>
        <meta name="description" content="PnutPresets Tutorial" />
        <meta property="og:title" content="PnutPresets | Tutorial" />
        <meta property="og:description" content="PnutPresets Tutorial" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Navbar bg={10} darkMode={true} />
        <div className="misc-container">
          <div className="misc-inner-container">
            <h1>For Mobile </h1>
            <br />
            <h2>IOS</h2>
            <br />
            <p>
              Make sure that you have the Lightroom Mobile app installed on your
              phone. Lightroom Mobile is free. Download and extract the "DNG
              Files" zip files. IOS users will need to install a "Zip Extractor"
              app of some type as the IOS operating system does not support zip
              files. We recommend using the "Zip and RAR File Extractor" app to
              extract your purchased presets. This app is free to download and
              use.
            </p>
            <br />
            <p>
              After you have extracted the zip files using your file extractor
              of choice you will then need to open the extracted folder in your
              phone's "Files" app. The folder contains a list of "DNG Files"
              (which are presets). What you will need to do now is click on the
              little "i" icon (some cases it may be a three dot icon). Then
              click on "Open In" and then select the Lightroom app (not "Copy to
              Lightroom"). Note: If you do not see "Lightroom", simply slide
              right and then tap the three dot icon at the end. Then click
              "Lightroom". Do this for all the "DNG Files."
            </p>
            <br />
            <p>
              In the "Lightroom Mobile" app go to your recently added content
              and tap the three dot icon at the top right corner. Next tap
              "Select" and choose all the DNG files you just imported and tap
              "Add To" at the bottom left. Next tap "+" at the top right and
              click "Album" at the bottom. (This is simply a way of helping you
              keep organized). Next open one of the DNG files that you have just
              imported. Then tap the three dot icon in the upper right corner
              and tap "Create Presets". The name of the preset as well as the
              bundle it is a part of is on the image. But if you want, you can
              always give presets your own personalized name.
            </p>
            <br />
            <p>Repeat this process for all other DNG files. </p> <br />
            <h2>Android</h2>
            <br />
            <p>Download "Lightroom Mobile".</p>
            <br />
            <p>
              Download the "DNG files" zip file and extract the folder in your
              phone's "Files" app.
            </p>
            <br />
            <p>
              Import the DNG files into the Lightroom app. Then go to your
              recently added content and tap the three dot icon at the top right
              corner.
            </p>
            <br />
            <p>
              Next tap “Select” and choose all the DNG files from the specific
              presets you just imported and tap "Add To" at the bottom left.
              Next tap "+" at the top right and click "Album" at the bottom.
              (This is simply a way of helping you keep organized).
            </p>
            <br />
            <p>
              Next tap “Select” and choose all the DNG files from the specific
              presets you just imported and tap "Add To" at the bottom left.
              Next tap "+" at the top right and click "Album" at the bottom.
              (This is simply a way of helping you keep organized).
            </p>
            <br />
            <p>
              Next open one of the DNG files that you have just imported. Then
              tap the three dot icon in the upper right corner and tap "Create
              Presets". The name of the preset as well as the bundle it is a
              part of is on the image. But if you want, you can always give the
              presets your own name. Repeat this process for all other DNG
              files.
            </p>
            <br />
            <p>
              Organizing Your Presets Once you have created all your presets
              they should appear in the "User Presets" tab. A way of organizing
              them would be to put the presets in separate preset folders. You
              can do this by going into your presets tab, clicking on "User
              Presets" and for each preset click that you have just imported,
              click on the little three dot icon on the right. Then click "Move
              To" and then click on the "+" icon at the top right to create a
              new preset collection.
            </p>
            <br />
            <h2>Lightroom Classic CC (Desktop) </h2>
            <br />
            <p>
              Download the "XMP Files" zip file on the checkout page. Open
              Lightroom Classic CC. Go to your presets tab and click "+". Click
              on "Import Presets" and find the XMP files you have just
              downloaded onto your desktop device. If you have any questions or
              concerns, feel free to reach out to us here and we will get back
              to you as soon as possible.
            </p>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default tutorial;
