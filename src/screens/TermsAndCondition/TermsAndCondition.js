import { ScrollView, View } from "react-native";
import React from "react";
import styles from "./styles";
import HeadText from "../../components/HeadText";
import TwoFormatText from "../../components/TwoFormatText";
import FlatText from "../../components/FlatText";
export default function TermsAndCondition() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.mainContainer}>
      <View style={styles.gap} />
      <View style={styles.gap} />
        <FlatText
          text="Terms and Conditions"
          font="extrabold"
          color="#333333"
          size={24}
          textalign="center"
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="Last updated: May 14, 2022"
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="Please read these terms and conditions carefully before using Our Service."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="Interpretation and Definitions
Interpretation"
          font="bold"
          color="#333333"
          size={20}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="The words in the initial letter are capitalized and have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="Definitions"
          font="q_bold"
          color="#333333"
          size={20}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="For these Terms and Conditions:"
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <TwoFormatText
          boldText="♦ Application"
          normalText="means the software program provided by the Company downloaded by You on any electronic device, named foodmoodbd."
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
          text="Acknowledgment"
          font="q_bold"
          color="#333333"
          size={20}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users, and others who access or use the Service."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="Links to Other Websites"
          font="q_bold"
          color="#333333"
          size={20}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="Our Service may contain links to third-party websites or services that are not owned or controlled by the Company."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="The Company has no control over and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such web sites or services."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="Termination"
          font="q_bold"
          color="#333333"
          size={20}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="Upon termination, Your right to use the Service will cease immediately."
          font="q_regular"
          color="#333333"
          size={16}
        />

        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="Limitation of Liability"
          font="q_bold"
          color="#333333"
          size={20}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount paid by You through the Service or 100 USD if You haven't purchased anything through the Service."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount paid by You through the Service or 100 USD if You haven't purchased anything through the Service."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="'AS IS' and 'AS AVAILABLE' Disclaimer"
          font="q_bold"
          color="#333333"
          size={20}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="The Service is provided to You 'AS IS' and 'AS AVAILABLE' and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its behalf and behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory, or otherwise, concerning the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of a course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems, or services, operate without interruption, meet any performance or reliability standards or be error-free or that any errors or defects can or will be corrected."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="Without limiting the foregoing, neither the Company nor any of the company's providers makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations outlined in this section shall be applied to the greatest extent enforceable under applicable law."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="Ordering"
          font="q_bold"
          color="#333333"
          size={20}
        />
        <View style={styles.gap} />
        <FlatText
          text="♦ Any contract for the supply of Food Delivery from this Website is either between you and the Participating Restaurant or you and foodmoodbd, depending on how Participating Restaurant decided to serve you; for the supply of Goods or Services from this Website, any contact is between you and foodmoodbd. You agree to take particular care when providing us with your details and warrant that these details are accurate and complete at the time of ordering. You also warrant that the credit or debit card details that you provide are of your own credit or debit card and that you have sufficient funds to make the payment."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          text="♦ When ordering from this Website you may be required to provide an e-mail address and password. You must ensure that you keep the combination of these details secure and do not provide this information to a third party."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          text="♦ We will take all reasonable care, in so far as it is in our power to do so, to keep the details of your order and payment secure, but in the absence of negligence on our part, we cannot be held liable for any loss you may suffer if a third party procures unauthorized access to any data you provide when accessing or ordering from the Website."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          text="♦ Any order that you place with us is subject to product availability, delivery capacity, and acceptance by us and the Participating Restaurant. When you place your order online, we will send you an email to confirm that we have received your order. This email confirmation will be produced automatically so that you have confirmation of your order details. You must inform us immediately if any details are incorrect. Inform us over the phone within 5 minutes of receiving the mail. The fact that you receive an automatic confirmation does not necessarily mean that either we or the Participating Restaurant will be able to fill your order. Once we have sent the confirmation email we will check availability and delivery capacity. We may choose to call you at times when you are ordering in bulk."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          text="♦ If the ordered Food and delivery capacity are available, the foodmoodbd will accept the order and confirm it to the relevant restaurant."
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <FlatText
          text="♦ If any/all ordered food item(s) are not available or if there is no delivery capacity, our customer service will call you to discuss alternatives."
          font="q_regular"
          color="#333333"
          size={16}
        />
             <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="Prices and Payment"
          font="q_bold"
          color="#333333"
          size={20}
        />
        <View style={styles.gap} />
        <FlatText
          text="♦ Any contract for the supply of food from this Website is between you and the participating restaurant; for the supply of food, any contact is between you and foodmoodbd. You agree to take particular care when providing us with your details and warrant that these details are accurate and complete at the time of ordering. You also warrant that the credit or debit card ♦ details that you provide are for your own credit or debit card and that you have sufficient funds to make the payment."
          font="q_regular"
          color="#333333"
          size={16}
        />
          <View style={styles.gap} />
        <FlatText
          text="♦ All prices listed on the website are correct at the time of publication and have been input as received by the restaurant; while we give great care to keep them up to date, the final price charged to you by the restaurant can change at the time of delivery based on the latest menu and prices of the restaurant. We also reserve the right to alter the food menu available for sale on the Website and to stop listing restaurants."
          font="q_regular"
          color="#333333"
          size={16}
        />
          <View style={styles.gap} />
        <FlatText
          text="♦ All prices listed on the Website for the food menu by the participating restaurant or a delivery partner listed the Website reflect the price the Participating Restaurant or the third-party provider charges at the time of listing. In case the price listed is not current and the restaurant informs us immediately after placing the order, we will put our best effort to contact you to inform you about the price difference and you can choose to opt out of the order at that time."
          font="q_regular"
          color="#333333"
          size={16}
        />
          <View style={styles.gap} />
        <FlatText
          text="♦ All prices for delivery by foodmoodbd or a third-party provider assigned by foodmoodbd listed on the Website are correct at the time of publication; however, we reserve the right to alter these in the future."
          font="q_regular"
          color="#333333"
          size={16}
        />
          <View style={styles.gap} />
        <FlatText
          text="♦ The total price for Food Delivery, Goods, or Services ordered, including delivery charges and other charges, will be displayed on the Website when you place your order. Full payment must be made for all Goods despatched and Services provided. Payment has to be made by online payment, e.g. credit or debit card, or bKash or Rocket or COD."
          font="q_regular"
          color="#333333"
          size={16}
        />
          <View style={styles.gap} />
        <FlatText
          text="♦ If you choose online payment, you must pay for your order before it is delivered. To ensure that shopping online is secure, your debit/credit card details will be encrypted to prevent the possibility of someone being able to read them as they are sent over the internet. Your credit card company may also conduct security checks to confirm it is you placing the order. All local and international debit and credits are accepted."
          font="q_regular"
          color="#333333"
          size={16}
        />
            <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="Prices and Payment"
          font="q_bold"
          color="#333333"
          size={20}
        />
               <View style={styles.gap} />
        <FlatText
          text="♦ Any contract for the supply of food from this Website is between you and the participating restaurant; for the supply of food, any contact is between you and foodmoodbd. You agree to take particular care when providing us with your details and warrant that these details are accurate and complete at the time of ordering. You also warrant that the credit or debit card ♦ details that you provide are for your own credit or debit card and that you have sufficient funds to make the payment."
          font="q_regular"
          color="#333333"
          size={16}
        />
               <View style={styles.gap} />
        <FlatText
          text="♦ All prices listed on the website are correct at the time of publication and have been input as received by the restaurant; while we give great care to keep them up to date, the final price charged to you by the restaurant can change at the time of delivery based on the latest menu and prices of the restaurant. We also reserve the right to alter the food menu available for sale on the Website and to stop listing restaurants."
          font="q_regular"
          color="#333333"
          size={16}
        />
               <View style={styles.gap} />
        <FlatText
          text="♦ All prices listed on the Website for the food menu by the participating restaurant or a delivery partner listed the Website reflect the price the Participating Restaurant or the third-party provider charges at the time of listing. In case the price listed is not current and the restaurant informs us immediately after placing the order, we will put our best effort to contact you to inform you about the price difference and you can choose to opt out of the order at that time."
          font="q_regular"
          color="#333333"
          size={16}
        />
               <View style={styles.gap} />
        <FlatText
          text="♦ All prices for delivery by foodmoodbd or a third-party provider assigned by foodmoodbd listed on the Website are correct at the time of publication; however, we reserve the right to alter these in the future."
          font="q_regular"
          color="#333333"
          size={16}
        />
               <View style={styles.gap} />
        <FlatText
          text="♦ The total price for Food Delivery, Goods, or Services ordered, including delivery charges and other charges, will be displayed on the Website when you place your order. Full payment must be made for all Goods despatched and Services provided. Payment has to be made by online payment, e.g. credit or debit card, or bKash or Rocket or COD."
          font="q_regular"
          color="#333333"
          size={16}
        />
               <View style={styles.gap} />
        <FlatText
          text="♦ If you choose online payment, you must pay for your order before it is delivered. To ensure that shopping online is secure, your debit/credit card details will be encrypted to prevent the possibility of someone being able to read them as they are sent over the internet. Your credit card company may also conduct security checks to confirm it is you placing the order. All local and international debit and credits are accepted."
          font="q_regular"
          color="#333333"
          size={16}
        />
               <View style={styles.gap} />
        <FlatText
          text="Delivery"
          font="q_regular"
          color="#333333"
          size={16}
        />
               <View style={styles.gap} />
        <FlatText
          text="♦ Delivery periods quoted at the time of ordering are approximate only and may vary. Goods will be delivered to the address designated by you at the time of ordering."
          font="q_regular"
          color="#333333"
          size={16}
        />
               <View style={styles.gap} />
        <FlatText
          text="♦ If delivery is done by the Participating Restaurant or delivery partners, it is the Participating Restaurant's sole responsibility to provide Food Delivery in a timely manner."
          font="q_regular"
          color="#333333"
          size={16}
        />
               <View style={styles.gap} />
        <FlatText
          text="♦ In the case delivery is done by foodmoodbd or a third-party delivery partner assigned by foodmoodbd, we will take full responsibility to deliver in a timely manner. However, if the process is hampered due to unavoidable issues, i.e- traffic jams then it is not our responsibility to take."
          font="q_regular"
          color="#333333"
          size={16}
        />
               <View style={styles.gap} />
        <FlatText
          text="♦ All risk in the Food Delivery shall pass to you upon delivery."
          font="q_regular"
          color="#333333"
          size={16}
        />
            <View style={styles.gap} />
        <FlatText
          text="♦ If you fail to accept delivery of Food and/or Goods at the time they are ready for delivery, or we are unable to deliver at the nominated time due to your failure to provide appropriate instructions or authorizations, then such goods shall be deemed to have been delivered to you and all risk and responsibility in relation to such goods shall pass to you. Any storage, insurance, and other costs which we incur as a result of the inability to deliver shall be your responsibility and you shall indemnify us in full for such costs."
          font="q_regular"
          color="#333333"
          size={16}
        />
                    <View style={styles.gap} />
        <FlatText
          text="♦ You must ensure that at the time of delivery of Food Delivery adequate arrangements, including access where necessary, are in place for the safe delivery of such goods. We cannot be held liable for any damage, cost, or expense incurred to such goods or premises where this arises as a result of a failure to provide adequate access or arrangements for delivery."
          font="q_regular"
          color="#333333"
          size={16}
        />
            <View style={styles.gap} />
        <FlatText
          text="♦ Participating restaurants, who will prepare your order, aim To deliver the product to you at the place of delivery requested by you in your order To deliver within the time confirmed by the restaurant To inform you if they expect that they are unable to meet the estimated delivery time."
          font="q_regular"
          color="#333333"
          size={16}
        />
                    <View style={styles.gap} />
        <FlatText
          text="♦ Participating Restaurants and we shall not be liable to you for any losses, liabilities, costs, damages, charges, or expenses arising out of late delivery."
          font="q_regular"
          color="#333333"
          size={16}
        />
            <View style={styles.gap} />
        <FlatText
          text="♦ Please note that it might not be possible for Participating Restaurants to deliver to some locations. If this is the case, our Participating Restaurants or we will inform you using the contact details that you provide to us when you make your order and arrange for cancellation of the order or delivery to an alternative delivery address."
          font="q_regular"
          color="#333333"
          size={16}
        />
            <View style={styles.gap} />
        <FlatText
          textalign={"center"}
          text="Cancellation"
          font="q_bold"
          color="#333333"
          size={20}
        />
               <View style={styles.gap} />
        <FlatText
          text="♦ You must notify foodmoodbd immediately if you decide to cancel your order, by phone within 5 minutes, and quote your order number. If the restaurant accepts your cancellation, no cancellation fee applies. If the restaurant refuses cancellation, e.g. because preparation of Food Delivery has been completed and/or delivery personnel has already been dispatched, it may not be canceled. We will not be able to refund any order, which has been already dispatched."
          font="q_regular"
          color="#333333"
          size={16}
        />
               <View style={styles.gap} />
        <FlatText
          text="♦ We may cancel a contract if the product is not available for any reason. We will notify you if this is the case and return any payment that you have made."
          font="q_regular"
          color="#333333"
          size={16}
        />
               <View style={styles.gap} />
        <FlatText
          text="♦ If the cancellation was made in time and once the restaurant has accepted your cancellation, we will refund or re-credit your debit or credit card with the full amount within 14 days, which includes the initial delivery charge (where applicable) which you paid for the delivery of the Goods or the Services, as applicable."
          font="q_regular"
          color="#333333"
          size={16}
        />
               <View style={styles.gap} />
        <FlatText
          text="♦ In the unlikely event that the Participating Restaurant or foodmoodbd delivers a wrong item, you have the right to reject the delivery of the wrong item and you shall be fully refunded for the missing item. If the Participating Restaurant or foodmoodbd can only do a partial delivery (a few items might be not available), its staff should inform you or propose a replacement for missing items. You have the right to refuse a partial order before delivery and get a refund."
          font="q_regular"
          color="#333333"
          size={16}
        />
             <View style={styles.gap} />
        <FlatText
          text="Governing Law"
          font="q_regular"
          color="#333333"
          size={16}
        />
               <View style={styles.gap} />
        <FlatText
          text="The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws."
          font="q_regular"
          color="#333333"
          size={16}
        />
           <View style={styles.gap} />
        <FlatText
          text="Disputes Resolution"
          font="q_regular"
          color="#333333"
          size={16}
        />
               <View style={styles.gap} />
        <FlatText
          text="If You have any concerns or disputes about the Service, You agree first to try to resolve the dispute informally by contacting the Company."
          font="q_regular"
          color="#333333"
          size={16}
        />
              <View style={styles.gap} />
        <FlatText
          text="Severability and Waiver Severability"
          font="q_regular"
          color="#333333"
          size={16}
        />
               <View style={styles.gap} />
        <FlatText
          text="If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect."
          font="q_regular"
          color="#333333"
          size={16}
        />
            <View style={styles.gap} />
        <FlatText
          text="Waiver"
          font="q_regular"
          color="#333333"
          size={16}
        />
               <View style={styles.gap} />
        <FlatText
          text="Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach."
          font="q_regular"
          color="#333333"
          size={16}
        />
            <View style={styles.gap} />
        <FlatText
          text="Translation Interpretation"
          font="q_regular"
          color="#333333"
          size={16}
        />
               <View style={styles.gap} />
        <FlatText
          text="These Terms and Conditions may have been translated if We have made them available to You on our Service.\ You agree that the original English text shall prevail in the case of a dispute."
          font="q_regular"
          color="#333333"
          size={16}
        />
            <View style={styles.gap} />
        <FlatText
          text="Changes to These Terms and Conditions"
          font="q_regular"
          color="#333333"
          size={16}
        />
               <View style={styles.gap} />
        <FlatText
          text="We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is a material, we will make reasonable efforts to provide at least 30 days' notice before any new terms. What constitutes a material change will be determined at Our sole discretion."
          font="q_regular"
          color="#333333"
          size={16}
        />
            <View style={styles.gap} />
            <FlatText
          text="By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service."
          font="q_regular"
          color="#333333"
          size={16}
        />
            <View style={styles.gap} />
        <FlatText
        textalign={"center"}
          text="Contact Us"
          font="q_bold"
          color="#333333"
          size={20}
        />
               <View style={styles.gap} />
        <FlatText
          text="If you have any questions about these Terms and Conditions, You can contact us:"
          font="q_regular"
          color="#333333"
          size={16}
        />
                  <View style={styles.gap} />
        <FlatText
          text="♦ By email: info@foodmoodbd.com"
          font="q_regular"
          color="#333333"
          size={16}
        />
                  <View style={styles.gap} />
        <FlatText
          text="♦ By phone: +8801322446790"
          font="q_regular"
          color="#333333"
          size={16}
        />
        <View style={styles.gap} />
        <View style={styles.gap} />
        <View style={styles.gap} />
        <View style={styles.gap} />
      </View>
    </ScrollView>
  );
}
