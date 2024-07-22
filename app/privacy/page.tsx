import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-12 px-4 md:px-8 lg:px-16">
        <section className="mb-12">
          <p className="text-lg mb-8">
            solvIT (“solvIT,” “we,” “us,” “our”) understands how important privacy is for our customers, and we endeavour to be transparent about how we gather, use, reveal, transfer, and collect your information. This Privacy Policy gives a summary of our information systems. The Privacy Policy refers to websites or online applications that apply to or link to the Privacy Policy.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Personal Information We Use and Collect</h2>
          <p className="text-lg mb-8">
            ● We may obtain personal information about users when they visit our website that includes their name, address, date of birth, email address, phone numbers, information used for personalization, and other information. solvIT uses this information to offer better service to users so we can contact them in case of any problem arises.
          </p>
          <p className="text-lg mb-8">
            ● We may request you to get personal data on other occasions, including when you utilize the services of solvIT; when you fill surveys on solvIT’s website; when you take participation in a blog or user forum hosted by solvIT or any of our business companies. We may apply the information which you provide us to help you offer better services, to personalize your experience when you visit our website, and to guide you, provide purchase recommendations and for other objectives in line with this statement. We may also use this user information with third-party or parties’ data to serve our customers better.
          </p>
          <p className="text-lg mb-8">
            ● We may use the personal information that you provide us through the Website to answer your questions, have effective communication and to give you best-in-class customer service. Once you have entered your personal data in the user form or information field that we have used on the website, we could use some technologies to permit that website to “remember” your personal preferences, like parts of the website that you simply visit more often and, if you select, your user ID.
          </p>
          <p className="text-lg mb-8">
            ● We will gather, store and utilize your data as per the applicable laws. You may restrict the amount and the type of personal data that we get about you by deciding not to give us any personal data into the information fields on the Website. A part of our online services can be offered only when you give us an appropriate amount of your personal information. Some other sections of our Website may request you if you wish to opt-in or opt-out into our lists of contacts for promotions, offers, and other additional services that may be of your interest. If you opt to do so, we can use this data for our promotional and marketing purposes. For instance, with your consent and as per the applicable laws, we may use your provided email ID to send you news and newsletters, promotions, and special offers, and to reach you about information or products that we think could be of your interest. However, you will always have the option to unsubscribe from our newsletters or other services if you wish to.
          </p>
          <p className="text-lg mb-8">
            ● solvIT also carries out an analysis of its visitors’ interests, behaviour, and demographics which is based upon the data given to us in a place where the users visit our website or engage with us for giving any services. We usually do this activity to understand our users and serve them in a better way. The data collected during this research is accumulated and examined to prevent the identification of personal data linking to any one person. solvIT may share this accumulated data with our subsidiaries or business partners. We strictly do not share this information with any unauthorised third party or entity.
          </p>
          <p className="text-lg mb-8">
            ● In addition, our net server logs collect the domain names and other related information of the users visiting our website. This information is collected so that we can determine the number of visits, the average time a user spent on our website, the number of pages viewed and other website usage information. We may use this data to estimate the usage of our website; improve its content; and provide you with tailored advertisements. In any case, we do not collect information and use it in a form that may allow a direct connection with any of the personal data to our visitors.
          </p>
          <p className="text-lg mb-8">
            ● solvIT intends to collect as minimum information as possible that is needed to manage and fulfil your request or to complete other objectives for which we process your personal information. In case you believe our website has obtained excessive data about you, feel free to contact us to raise your concern.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Cookies</h2>
          <p className="text-lg mb-8">
            As was stated on the home page, we use cookies on our website. Cookies are nothing but small text files that may get placed automatically on your computer or laptop, mobiles phones or other devices and get stored in it. The usage of cookies is now a standard process in most websites.
          </p>
          <p className="text-lg mb-8">
            The first time you visit solvIT’s website, we inform you about accepting cookies with the help of a notification banner popping on your screen. When you click the “Accept” button, you give us your consent to use cookies on your device. You can refuse or not accept cookies if you wish to. We want to tell you that cookies can be placed on your computer or laptop or any other device only if you give us your consent.
          </p>
          <p className="text-lg mb-8">
            We use the following categories of cookies:
          </p>
          <h3 className="text-2xl font-semibold mb-4">Performance Cookies</h3>
          <p className="text-lg mb-8">
            Performance cookies are usually third-party cookies of the vendors or partners we work with or who operate with us to collect data about your use and visit our website. This collected data includes, for instance, the browsers or operating systems you are using, the name of the domain of the website you visited previously, the average duration you spend on our website, the count of your visits, and pages you viewed while visiting our website.
          </p>
          <p className="text-lg mb-8">
            Performance cookies don’t gather data that recognises a visitor. All data these cookies accumulate is kept anonymous and used to enhance the working of our website. The third-party vendors may use this data to better their services and offerings.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Advertising and Social Media Cookies</h3>
          <p className="text-lg mb-8">
            Advertising and social media cookies are generally used to:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Present advertisements that are important to you and could be of your interests</li>
            <li>Limit how many times you are presented with an advertisement</li>
            <li>Assist us to estimate the success of an advertising campaign</li>
            <li>Better understand visitors’ behaviour after they see an advertisement on the website.</li>
          </ul>
          <p className="text-lg mb-8">
            These advertisements are normally placed on behalf of the third-party advertisers with the permission of the site operator. Advertising and social media cookies recognise that you have already visited this site. This may affect the messages and content you view on different websites you visit.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Functionality Cookies</h3>
          <p className="text-lg mb-8">
            Functionality cookies permit a website to recognise the selections you perform. These cookies do not track your browsing actions on other websites you visit. They don’t collect any data about you that anyone can use for advertisements or remembering which websites you have visited on the internet.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Beacons</h3>
          <p className="text-lg mb-8">
            solvIT and some other third parties may also use another form of technology called beacons or pixels that are capable of communicating your information from the device you are using to a server. These beacons can be inserted in the online videos, emails, and content, and may support a server to read some sort of information through your device which may get to know when you have seen a specific content or an email message and ascertain the date and time during which you have seen the beacon, and the IP address of the device.
          </p>
          <p className="text-lg mb-8">
            solvIT and some third-party vendors can use beacons to obtain information about how you use the web, and your interaction with emails so that we can measure and enhance the working of our website. We can use beacons to operate the recognition of cookies on your device.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Changes to This Privacy Statement</h2>
          <p className="text-lg mb-8">
            If we make any changes to this privacy statement, we will announce the changes on our website and update the date mentioned at the end of this document.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg mb-8">
            In case of any questions regarding our Privacy Policy, please contact us at krishgoyal101@gmail.com.
          </p>
        </section>

        <p className="text-lg mb-8">
          This privacy policy is effective as of 15th July.
        </p>

        <div className="text-center mt-12">
          <Link href="/">
            <p className="text-blue-500 hover:underline">Return to Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
