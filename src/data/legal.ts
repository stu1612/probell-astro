// src/data/legal.ts

export interface LegalSection {
  heading: string;
  content: string;
}

export interface LegalPage {
  slug: string;
  title: string;
  metaDescription: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export const LEGAL_PAGES: LegalPage[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    metaDescription:
      "Privacy Policy for Probell Nutrition. How we collect, use, and protect your personal data.",
    lastUpdated: "June 13, 2026",
    intro:
      'Probell LLC ("Probell Nutrition", "we", "us", "our") is committed to protecting your personal data. This policy explains how we collect, use, and safeguard information submitted through this website.',
    sections: [
      {
        heading: "Who We Are",
        content: `Probell LLC
8 The Green STE
Dover, DE 19901
USA
Email: info@probellnutrition.com

This website is a brand presentation and business development tool. It is not an ecommerce store. No payment data is collected or processed through this site.`,
      },
      {
        heading: "What Data We Collect",
        content: `When you submit the contact form on this website, we collect:

- Full name
- Business name
- Email address
- Business type (gym, distributor, retailer, or other)
- Any information you choose to include in your message

We do not collect payment information, browsing history, or any data beyond what you voluntarily submit.`,
      },
      {
        heading: "How We Use Your Data",
        content: `We use the information you submit solely to:

- Respond to your business enquiry
- Assess whether a partnership with Probell Nutrition is a good fit
- Follow up on wholesale, distribution, or retail conversations

We do not use your data for marketing without your explicit consent. We do not sell, rent, or share your data with third parties for commercial purposes.`,
      },
      {
        heading: "Data Processors",
        content: `Your form submission is processed by Web3Forms (web3forms.com), a third-party form handling service. Web3Forms transmits your submission to our inbox and does not store your data permanently. Their privacy policy is available at web3forms.com/privacy.`,
      },
      {
        heading: "Legal Basis for Processing",
        content: `We process your data on the basis of legitimate interest — specifically, to respond to a business enquiry you have voluntarily initiated. By submitting the contact form, you consent to us using your information to respond to that enquiry.`,
      },
      {
        heading: "Data Retention",
        content: `We retain your enquiry data for as long as is necessary to manage the business relationship or conversation. If no partnership is established, enquiry data is deleted within 12 months of the last communication.`,
      },
      {
        heading: "Your Rights",
        content: `Under GDPR and applicable data protection law, you have the right to:

- Access the personal data we hold about you
- Request correction of inaccurate data
- Request deletion of your data
- Object to processing
- Lodge a complaint with a supervisory authority

To exercise any of these rights, contact us at info@probellnutrition.com.`,
      },
      {
        heading: "Cookies",
        content: `This website uses no tracking cookies, analytics cookies, or advertising cookies. hCaptcha is used on the contact form to prevent spam. hCaptcha's privacy policy is available at hcaptcha.com/privacy.`,
      },
      {
        heading: "Changes to This Policy",
        content: `We may update this policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of this website after any update constitutes acceptance of the revised policy.`,
      },
      {
        heading: "Contact",
        content: `For any privacy-related questions or requests:

Probell LLC
8 The Green STE
Dover, DE 19901
USA
Email: info@probellnutrition.com`,
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms & Conditions",
    metaDescription:
      "Terms and conditions for use of the Probell Nutrition website.",
    lastUpdated: "June 13, 2026",
    intro:
      "By accessing and using this website, you agree to the following terms and conditions. Please read them carefully.",
    sections: [
      {
        heading: "About This Website",
        content: `This website is operated by Probell LLC, 8 The Green STE, Dover, DE 19901, USA. It is a brand presentation and business development tool intended for gyms, distributors, and retailers interested in stocking Probell Nutrition products. It is not a consumer ecommerce store.`,
      },
      {
        heading: "Use of This Website",
        content: `You may use this website for lawful purposes only. You must not:

- Use this website in any way that breaches applicable laws or regulations
- Transmit unsolicited commercial communications
- Attempt to gain unauthorised access to any part of this website
- Use this website to transmit harmful, offensive, or misleading content`,
      },
      {
        heading: "Intellectual Property",
        content: `All content on this website — including text, images, graphics, logos, and brand assets — is the property of Probell LLC or its licensors. No content may be reproduced, distributed, or used without prior written permission from Probell LLC.`,
      },
      {
        heading: "Business Enquiries",
        content: `Submitting the contact form on this website constitutes an expression of interest only. It does not constitute a binding agreement, purchase order, or contract of any kind. All partnership arrangements are subject to separate written agreement between the parties.`,
      },
      {
        heading: "Disclaimer",
        content: `This website is provided on an "as is" basis. Probell LLC makes no warranties, express or implied, regarding the accuracy, completeness, or fitness for purpose of any content on this website. Product information, availability, and pricing are subject to change without notice.`,
      },
      {
        heading: "Limitation of Liability",
        content: `To the fullest extent permitted by law, Probell LLC shall not be liable for any indirect, incidental, or consequential damages arising from use of this website or reliance on any content it contains.`,
      },
      {
        heading: "Governing Law",
        content: `These terms are governed by the laws of the State of Delaware, USA. Any disputes arising from use of this website shall be subject to the exclusive jurisdiction of the courts of Delaware.`,
      },
      {
        heading: "Changes to These Terms",
        content: `We reserve the right to update these terms at any time. The date at the top of this page reflects the most recent revision. Continued use of this website after any update constitutes acceptance of the revised terms.`,
      },
      {
        heading: "Contact",
        content: `For any questions regarding these terms:

Probell LLC
8 The Green STE
Dover, DE 19901
USA
Email: info@probellnutrition.com`,
      },
    ],
  },
  {
    slug: "returns",
    title: "Returns Policy",
    metaDescription:
      "Returns and refund policy for Probell Nutrition wholesale and retail partners.",
    lastUpdated: "June 13, 2026",
    intro:
      "This returns policy applies to wholesale and retail partners of Probell Nutrition. Consumer returns are handled through the stockist from whom the product was purchased.",
    sections: [
      {
        heading: "B2B Returns",
        content: `As a brand operating through wholesale and distribution partnerships, Probell Nutrition handles returns directly with its trade partners. If you are a gym, distributor, or retailer and have a returns enquiry, please contact us directly at info@probellnutrition.com with your order details.`,
      },
      {
        heading: "Damaged or Defective Products",
        content: `If you receive products that are damaged in transit or defective, notify us within 7 days of receipt. Include:

- Your business name and order reference
- A description of the issue
- Photographic evidence where applicable

We will arrange replacement or credit at our discretion.`,
      },
      {
        heading: "Incorrect Orders",
        content: `If you receive an incorrect order, notify us within 7 days of receipt at info@probellnutrition.com. We will arrange collection and redelivery of the correct items at no additional cost.`,
      },
      {
        heading: "Change of Mind",
        content: `We are unable to accept returns for change of mind on wholesale orders once goods have been dispatched. Please review your order carefully before confirming.`,
      },
      {
        heading: "Consumer Returns",
        content: `Consumers who purchased Probell Nutrition products through a retail stockist should contact that stockist directly regarding returns. The stockist's own returns policy applies to consumer transactions.`,
      },
      {
        heading: "Contact",
        content: `For all returns and refund enquiries:

Probell LLC
8 The Green STE
Dover, DE 19901
USA
Email: info@probellnutrition.com`,
      },
    ],
  },
  {
    slug: "shipping",
    title: "Shipping Policy",
    metaDescription:
      "Shipping and delivery information for Probell Nutrition wholesale partners.",
    lastUpdated: "June 13, 2026",
    intro:
      "This shipping policy applies to wholesale and distribution orders placed with Probell Nutrition. Full shipping terms are confirmed at the time of partnership agreement.",
    sections: [
      {
        heading: "Wholesale Shipping",
        content: `Shipping terms for wholesale partners are agreed as part of the onboarding process. Specific lead times, minimum order quantities, and delivery arrangements are confirmed in writing before the first order is placed.`,
      },
      {
        heading: "Delivery Timeframes",
        content: `Standard wholesale delivery timeframes are confirmed at the time of order. Probell Nutrition will notify partners of any delays as soon as reasonably possible. We are not liable for delays caused by third-party carriers or circumstances outside our control.`,
      },
      {
        heading: "Shipping Costs",
        content: `Shipping costs for wholesale orders are calculated based on order volume, destination, and agreed partner terms. Costs are confirmed at the time of order and included in the invoice.`,
      },
      {
        heading: "International Shipping",
        content: `Probell Nutrition currently supplies partners within the USA. International distribution enquiries are welcome — contact us at info@probellnutrition.com to discuss availability in your market.`,
      },
      {
        heading: "Tracking",
        content: `Tracking information is provided for all wholesale orders where available. Contact info@probellnutrition.com with your order reference for tracking updates.`,
      },
      {
        heading: "Contact",
        content: `For all shipping enquiries:

Probell LLC
8 The Green STE
Dover, DE 19901
USA
Email: info@probellnutrition.com`,
      },
    ],
  },
];
