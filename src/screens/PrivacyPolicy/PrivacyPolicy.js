import { ScrollView, View } from "react-native";
import React from "react";
import styles from "./styles";
import HeadText from "../../components/HeadText";
import FlatText from "../../components/FlatText";
import TwoFormatText from "../../components/TwoFormatText";
export default function PrivacyPolicy() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.mainContainer}>
        <HeadText
          text="Privacy Policy"
          font="extrabold"
          color="#333"
          size={24}
          textalign="center"
        />
        <View style={styles.mt12}>
          <FlatText
            textalign={"center"}
            text="This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Generator."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            text="Interpretation and Definitions Interpretation"
            font="q_bold"
            color="#333"
            size={20}
            textalign="center"
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="The words in the initial letter are capitalized and have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in the plural."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="Definitions"
            font="q_bold"
            color="#333"
            size={20}
          />
          <View style={styles.gap} />
          <FlatText
            text="For the purposes of this Privacy Policy:"
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ Account"
            normalText="means a unique account created for You to access our Service or parts of our Service."
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ Affiliate"
            normalText="means an entity that controls, is controlled by, or is under common control with a party, whereas 'control' means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for the election of directors or other managing authority."
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ Application"
            normalText="means the software program provided by the Company downloaded by You on any electronic device, named foodmoodbd."
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ Company"
            normalText=" (referred to as either 'the Company', 'We', 'Us' or 'Our' in this Agreement) refers to SAR Corporation, House # 1/24/C, Road # Kamalapur Manda Rd, South Mugda, Dhaka-1214, Bangladesh."
          />

          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ Cookies"
            normalText="are small files that are placed on Your computer, mobile device, or any other device by a website, containing the details of Your browsing history on that website among its many uses."
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ Country"
            normalText="refers to Bangladesh."
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ Device"
            normalText="means any device that can access the Service such as a computer, a cellphone, or a digital tablet."
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ Personal Data"
            normalText="is any information that relates to an identified or identifiable individual."
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ Service"
            normalText="refers to the Application or the Website or both."
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ Service Provider"
            normalText="means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service, or to assist the Company in analyzing how the Service is used."
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ Usage Data"
            normalText="refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit)."
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ Website"
            normalText="refers to foodmoodbd, accessible from https://foodmoodbd.com/"
          />

          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ You"
            normalText="mean the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."
          />

          <View style={styles.gap} />

          <FlatText
            textalign={"center"}
            text="Collecting and Using Your Personal Data
Types of Data Collected."
            font="q_bold"
            color="#333"
            size={20}
          />
          <View style={styles.gap} />
          <FlatText text="Personal Data" font="q_bold" color="#333" size={17} />
          <View style={styles.gap} />
          <FlatText
            text="While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally, identifiable information may include, but is not limited to:"
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            text="♦ Email address"
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            text="♦ First name and last name"
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            text="♦ Phone number"
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            text="♦ Address, State, Province, ZIP/Postal code, City"
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            text="♦ Usage Data"
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="Usage Data"
            font="q_bold"
            color="#333"
            size={20}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="Usage Data has collected automatically when using the Service."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device's unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="Information Collected while Using the Application"
            font="q_bold"
            color="#333"
            size={20}
          />
          <View style={styles.gap} />
          <FlatText
            text="While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission:"
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            text="♦ Information regarding your location"
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="We use this information to provide features of Our Service, and to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it may be simply stored on Your device."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="You can enable or disable access to this information at any time, through Your Device settings."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="Tracking Technologies and Cookies"
            font="q_bold"
            color="#333"
            size={20}
          />
          <View style={styles.gap} />
          <FlatText
            text="We use cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:"
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ Cookies or Browser Cookies."
            normalText=" A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse cookies, our Service may use Cookies."
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ Flash Cookies."
            normalText="Certain features of our Service may use local stored objects (or Flash cookies) to collect and store information about Your preferences or Your activity on our Service. Flash Cookies are not managed by the same browser settings as those used for Browser Cookies. For more information on how You can delete Flash Cookies, please read 'Where can I change the settings for disabling, or deleting local shared objects?' available at https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_"
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ Web Beacons."
            normalText="Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity)."
          />
          <View style={styles.gap} />
          <FlatText
            text="Cookies can be 'Persistent' or 'Session' Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies: Cookies by PrivacyPolicies Generator."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            text="We use both Session and Persistent Cookies for the purposes set out below:"
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
   
          <FlatText
            text="♦ Necessary / Essential Cookies"
            font="q_bold"
            color="#333"
            size={16}
          />
          <FlatText
            text="Type: Session Cookies"
            font="q_regular"
            color="#333"
            size={16}
          />
          <FlatText
            text="Administered by: Us"
            font="q_regular"
            color="#333"
            size={16}
          />
          <FlatText
            text="Purpose: These cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            text="♦ Cookies Policy / Notice Acceptance Cookies"
            font="q_bold"
            color="#333"
            size={16}
          />
          <FlatText
            text="Type: Persistent Cookies"
            font="q_regular"
            color="#333"
            size={16}
          />
          <FlatText
            text="Administered by: Us"
            font="q_regular"
            color="#333"
            size={16}
          />
          <FlatText
            text="Purpose: These Cookies identify if users have accepted the use of cookies on the Website."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            text="♦ Functionality Cookies"
            font="q_bold"
            color="#333"
            size={16}
          />
          <FlatText
            text="Type: Persistent Cookies"
            font="q_regular"
            color="#333"
            size={16}
          />
          <FlatText
            text="Administered by: Us"
            font="q_regular"
            color="#333"
            size={16}
          />
          <FlatText
            text="Purpose: These cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            text="For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="Use of Your Personal Data"
            font="q_bold"
            color="#333"
            size={20}
          />
          <View style={styles.gap} />

          <FlatText
            text="The Company may use Personal Data for the following purposes:"
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ To provide and maintain our Service,"
            normalText="including monitoring the usage of our Service."
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ To manage Your Account:"
            normalText="to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user."
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ For the performance of a contract:"
            normalText="the development, compliance, and undertaking of the purchase contract for the products, items, or services You have purchased or of any other contract with Us through the Service."
          />
          <View style={styles.gap} />
               <TwoFormatText
            boldText="♦ To contact You:"
            normalText="To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products, or contracted services, including the security updates, when necessary or reasonable for their implementation."
          />
          <View style={styles.gap} />
               <TwoFormatText
            boldText="♦ To provide You"
            normalText="with news, special offers, and general information about other goods, services, and events that we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information."
          />
                <View style={styles.gap} />
               <TwoFormatText
            boldText="♦ To manage Your requests:"
            normalText="To attend and manage Your requests to Us."
          />
      <View style={styles.gap} />
               <TwoFormatText
            boldText="♦ For business transfers:"
            normalText="We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred."
          />

          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ For other purposes:"
            normalText="We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns, and evaluating and improving our Service, products, services, marketing, and your experience."
          />
          <View style={styles.gap} />
          <FlatText
            text="We may share Your personal information in the following situations:"
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />

          <TwoFormatText
            boldText="♦ With Service Providers:"
            normalText="We may share Your personal information with Service Providers to monitor and analyze the use of our Service, and to contact You."
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ For business transfers:"
            normalText="We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of Our business to another company."
          />
          <View style={styles.gap} />

               <TwoFormatText
            boldText="♦ With Affiliates:"
            normalText="We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners, or other companies that We control or that are under common control with Us."
          />
        
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ With Service Providers:"
            normalText="We may share Your personal information with Service Providers to monitor and analyze the use of our Service, and to contact You."
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ For business transfers:"
            normalText="We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of Our business to another company."
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ With Affiliates:"
            normalText="We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners, or other         companies that We control or that are under common control with Us."
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ With other users:"
            normalText=" when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside."
          />
          <View style={styles.gap} />
          <TwoFormatText
            boldText="♦ With Your Consent:"
            normalText="We may disclose Your personal information for any other purpose with Your consent."
          />
          <View style={styles.gap} />
          <FlatText
            text="Retention of Your Personal Data"
            font="q_bold"
            color="#333"
            size={20}
            textalign={"center"}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            text="Transfer of Your Personal Data"
            font="q_bold"
            color="#333"
            size={20}
            textalign={"center"}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of Your jurisdiction."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            text="Disclosure of Your Personal Data"
            font="q_bold"
            color="#333"
            size={24}
            textalign={"center"}
          />
          <View style={styles.gap} />
          <FlatText
            text="Business Transactions"
            font="q_bold"
            color="#333"
            size={20}
            textalign={"center"}
          />
          <View style={styles.gap} />
          <FlatText
            text="If the Company is involved in a merger, acquisition, or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy."
            font="q_regular"
            color="#333"
            size={16}
            textalign={"center"}
          />
          <View style={styles.gap} />
          <FlatText
            text="Law enforcement"
            font="q_bold"
            color="#333"
            size={20}
            textalign={"center"}
          />
          <View style={styles.gap} />
          <FlatText
            text="Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency)."
            font="q_regular"
            color="#333"
            size={16}
            textalign={"center"}
          />
          <View style={styles.gap} />
          <FlatText
            text="Other legal requirements"
            font="q_bold"
            color="#333"
            size={20}
            textalign={"center"}
          />
          <View style={styles.gap} />
          <FlatText
            text="The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:"
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            text="♦ Comply with a legal obligation"
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            text="♦ Protect and defend the rights or property of the Company"
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            text="♦ Prevent or investigate possible wrongdoing in connection with the Service"
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            text="♦ Protect the personal safety of users of the Service or the public"
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            text="♦ Protect against legal liability"
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            text="Security of Your Personal Data"
            font="q_bold"
            color="#333"
            size={20}
            textalign={"center"}
          />
          <View style={styles.gap} />
          <FlatText
            text="The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security."
            font="q_regular"
            color="#333"
            size={16}
            textalign={"center"}
          />
          <View style={styles.gap} />


          <FlatText
            textalign={"center"}
            text="Detailed Information on the Processing of Your Personal Data"
            font="q_bold"
            color="#333"
            size={24}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="The Service Providers We use may have access to Your Personal Data. These third-party vendors collect, store, use, process, and transfer information about Your activity on Our Service in accordance with their Privacy Policies."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="Usage, Performance, and Miscellaneous"
            font="q_bold"
            color="#333"
            size={24}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="We may use third-party Service Providers to provide better improvement of our Service."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            text="♦ Google Places"
            font="semibold"
            color="#333"
            size={18}
            
          />
          <View style={styles.gap} />
          <FlatText
          textalign={"center"}
            text="Google Places is a service that returns information about places using HTTP requests. It is operated by Google
  Google Places service may collect information from You and from Your Device for security purposes."
            font="q_regular"
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="The information gathered by Google Places is held in accordance with the Privacy Policy of Google: https://www.google.com/intl/en/policies/privacy/"
            color="#333"
            font="q_regular"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="Children's Privacy"
            font="q_bold"
            color="#333"
            size={24}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            font="q_regular"
            text="Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please Contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers."
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            font="q_regular"
            text="If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information."
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="Links to Other Websites"
            font="q_bold"
            color="#333"
            size={24}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            font="q_regular"
            text="Our Service may contain links to other websites that are not operated by Us. If You click on a third-party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit."
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            font="q_regular"
            text="We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."
            color="#333"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="Changes to this Privacy Policy"
            font="q_bold"
            color="#333"
            size={24}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."
            color="#333"
            font="q_regular"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="We will let You know via email and/or a prominent notice on Our Service before the change becomes effective and update the 'Last Updated' date at the top of this Privacy Policy."
            color="#333"
            font="q_regular"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
            color="#333"
            font="q_regular"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
            color="#333"
            font="q_regular"
            size={16}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="Contact Us"
            font="q_bold"
            color="#333"
            size={24}
          />
          <View style={styles.gap} />
          <FlatText
            textalign={"center"}
            text="If you have any questions about this Privacy Policy, You can contact us:"
            color="#333"
            font="q_regular"
            size={16}
          />
          <View style={styles.gap} />

          <FlatText
            textalign={"center"}
            text="♦ By email: info@foodmoodbd.com"
            color="#333"
            font="q_regular"
            size={16}
          />
          <View style={styles.gap} />
          <View style={styles.gap} />
          <View style={styles.gap} />
        </View>
      </View>
    </ScrollView>
  );
}
