export interface MenuIcon {
  dark: string;
  light: string;
  desc: string;
}

export interface Page {
  content: string;
  active?: boolean;
  link?: string;
  menu_icon?: MenuIcon;
  title?: string;
}

export interface Pages {
  [url: string]: Page;
}

export const pages: Pages = {
  home: {
    content: null,
  },
  about: {
    title: "Why",
    active: true,
    link: "about",
    menu_icon: {
      dark: `<path fill="currentColor" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path>`,
      light: `<path fill="currentColor" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path>`,
      desc: "book",
    },
    content: `<p>At Studio DMLA we believe that work should go beyond the industrial model, and we build a culture that empowers remote collaboration, autonomy, results, and a shared vision. </p>
    <p>We do not do business as usual. Our digital boutique has real connections with our clients, provides perspective, and solutions for problems they did not know they have. </p>
    <p>We partner with the best in each field globally to deliver cutting-edge digital solutions to your organization while being responsible for the strategy, project management, and final product. </p>
    <div class="flex">
    <div class="MP">
      <div class="img"><img src="./assets/MP.webp" alt="Maria Paula" /></div>
      <div class="description"><h3>Maria Paula Murad, Founder & Head of Marketing and Sales</h3>
      <p>Maria Paula Murad has a background in Journalism and more than fifteen years of experience working with strategic communications. Having worked in the international education industry for the past 7 years, Maria Paula built expertise in digital marketing through different roles at GV English Centres and ILSC Education Group. Before that, MP worked with corporate communications back in Brazil. At CDI, she worked with Alcoa to implement public relations initiatives. At Casas Bahia, MP created the content for internal communications, email marketing, and campaigns. At Alto Astral, Maria Paula was part of the team that started the company’s digital marketing department. Portuguese is her native language, and she is proficient in English and Spanish. <a href="https://www.linkedin.com/in/mariapaulamurad/" alt="connect with Maria on LinkedIn">Click here</a> to connect with Maria Paula on LinkedIn or <a href="/meeting" alt="schedule a meeting">here</a> to schedule a meeting. </p></div>
      </div>
      <div class="mission">
        <h3>Mission statement</h3>
        <p>“Design state of art digital marketing solutions through global partnerships and remote work.”</p>
        <h3>Values</h3>
        <ul> 
          <li>Working smart leads to better results</li>
          <li>Trust is the basis of any working relationship</li>
          <li>Be mindful of yourself, others, and the impact of your actions in the world</li>
          <li>Remote work brings global talent together and empowers economic development</li>
          <li>If you want to communicate, language isn’t a barrier </li>
          <li>Life-Work balance is sustainable</li>
          <li>We believe in effective altruism and using our resources to help others.</li>
          </div>
          </div>
    `,
  },
  projects: {
    title: "Portfolio",
    active: true,
    link: "projects",
    menu_icon: {
      dark: `<path 
            d="M427.84 380.67l-196.5 97.82a18.6 18.6 0 0 1-14.67 0L20.16 380.67c-4-2-4-5.28 0-7.29L67.22 350a18.65 18.65 0 0 1 14.69 0l134.76 67a18.51 18.51 0 0 0 14.67 0l134.76-67a18.62 18.62 0 0 1 14.68 0l47.06 23.43c4.05 1.96 4.05 5.24 0 7.24zm0-136.53l-47.06-23.43a18.62 18.62 0 0 0-14.68 0l-134.76 67.08a18.68 18.68 0 0 1-14.67 0L81.91 220.71a18.65 18.65 0 0 0-14.69 0l-47.06 23.43c-4 2-4 5.29 0 7.31l196.51 97.8a18.6 18.6 0 0 0 14.67 0l196.5-97.8c4.05-2.02 4.05-5.3 0-7.31zM20.16 130.42l196.5 90.29a20.08 20.08 0 0 0 14.67 0l196.51-90.29c4-1.86 4-4.89 0-6.74L231.33 33.4a19.88 19.88 0 0 0-14.67 0l-196.5 90.28c-4.05 1.85-4.05 4.88 0 6.74z">
          </path>`,
      light: `<path fill="currentColor"
            d="M427.84 380.67l-196.5 97.82a18.6 18.6 0 0 1-14.67 0L20.16 380.67c-4-2-4-5.28 0-7.29L67.22 350a18.65 18.65 0 0 1 14.69 0l134.76 67a18.51 18.51 0 0 0 14.67 0l134.76-67a18.62 18.62 0 0 1 14.68 0l47.06 23.43c4.05 1.96 4.05 5.24 0 7.24zm0-136.53l-47.06-23.43a18.62 18.62 0 0 0-14.68 0l-134.76 67.08a18.68 18.68 0 0 1-14.67 0L81.91 220.71a18.65 18.65 0 0 0-14.69 0l-47.06 23.43c-4 2-4 5.29 0 7.31l196.51 97.8a18.6 18.6 0 0 0 14.67 0l196.5-97.8c4.05-2.02 4.05-5.3 0-7.31zM20.16 130.42l196.5 90.29a20.08 20.08 0 0 0 14.67 0l196.51-90.29c4-1.86 4-4.89 0-6.74L231.33 33.4a19.88 19.88 0 0 0-14.67 0l-196.5 90.28c-4.05 1.85-4.05 4.88 0 6.74z">
          </path>`,
      desc: "buffer",
    },
    content: `<p>Check out the latest projects we have been working on:</p>
    <div class="portfolio-items">
      <div class="portfolio-card" >
      <h3><span>2021 Global Village Hawaii Fee Sheet:</span></h3>
        <a href="https://lnkd.in/gqXYtsK" target="_blank">
          <div class="img"><img src="/assets/portfolio/hawaii fee sheet.jpg" /></div>
        </a>
      </div>
      <div class="portfolio-card" >
      <h3><span>2021 Global Village Hawaii Brochure:</span></h3>
        <a href="https://lnkd.in/gsZKx9F" target="_blank">
          <div class="img"><img src="/assets/portfolio/hawaii.jpg" /></div>
        </a>
      </div>
      <div class="portfolio-card" >
      <h3><span>Global Village Victoria Website:</span></h3>
        <a href="https://gvenglish.com/canada" target="_blank">
          <div class="img"><img src="/assets/portfolio/gvvic.jpg" /></div>
        </a>
      </div>
      <div class="portfolio-card" >
      <h3><span>Tribe Management:</span></h3>
        <a href="https://tribemgmt.com" target="_blank">
          <div class="img"><img src="/assets/portfolio/tribe.jpg" /></div>
        </a>
      </div>
    </div>`,
  },
  services: {
    title: "Services",
    active: true,
    link: "services",
    menu_icon: {
      dark: `<path 
            d="M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z">
          </path>`,
      light: `<path fill="currentColor"
            d="M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z">
          </path>`,
      desc: "seedling",
    },
    content: ` 
    <ul>
      <li>
        <h3>Web Design</h3>
        <p>Design thinking, lean UX/UI, interface design, prototypes, and gamification.</p>
      </li>
      <li>
        <h3>Web Development</h3>
        <p>Including coding from scratch, implementing web components, Angular developments, and Word Press templates customization. </p>
      </li>
      <li>
        <h3>eCommerce</h3>
        <p>Setup WooCommerce, configuration, SSL Enabling, and server requirements.</p>
      </li>
      <li>
        <h3>CRM set up</h3>
        <p>Database organization; Sales and Marketing workflows; onboarding and training.</p>
      </li>
      <li>
        <h3>SEO & SEM</h3>
        <p>SEO audit, technical SEO, keyword research, online marketing strategy, and implementation.</p>
      </li>
      <li>
        <h3>Offline marketing</h3>
        <p>Visual identity – Brand manual, logo design, and corporate materials. Flyer, folder, and brochure design to be displayed online and/or printed.</p>
      </li>
    </ul>
    <h3>Lets get started:</h3>
    <p >
    1.	Set up an <a href="/meeting">initial call</a> to discuss your digital marketing needs and goals;
    </p>
    <p>
    2.	We’ll create a strategy and source the best professionals globally to work on your project;
    </p>
    <p>
    3.	You’ll have one point of contact, from the planning until the final product is delivered. 
    </p>
    `,
  },
  sign_up: {
    title: "Sign up for work",
    active: false,
    link: "sign_up",
    menu_icon: {
      dark: `<path fill="currentColor"
            d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z">
          </path>`,
      light: `<path fill="currentColor"
            d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z">
          </path>`,
      desc: "book-reader",
    },
    content: ``,
  },
  hire: {
    title: "Hire Staff",
    active: false,
    link: "hire",
    menu_icon: {
      dark: `<path 
            d="M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z">
          </path>`,
      light: `<path fill="currentColor"
            d="M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z">
          </path>`,
      desc: "mug-hot",
    },
    content: ``,
  },
  meet: {
    title: "Book a meeting",
    active: true,
    link: "meeting",
    menu_icon: {
      dark: `<path 
            d="M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z">
          </path>`,
      light: `<path fill="currentColor"
            d="M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z">
          </path>`,
      desc: "mug-hot",
    },
    content: `<div class="iframe"><iframe width="100%" height="400" src="https://meetings.hubspot.com/robert-leeuwerink?embed=true"></iframe></div>`,
  },
  privacy: {
    title: "Cookie and Privacy Policy",
    active: false,
    link: "privacy-policy",
    content: `
    <h3>Purpose</h3>
    <p>The privacy of your personal information is of the utmost importance to Studio DMLA and its affiliates (“Studio DMLA”, “we”, “us” or “our”, as appropriate). This Privacy Policy covers the information that we collect about you or that you provide to us online through our website located at <a href="https://studio-dmla.ca/">https://studio-dmla.ca/</a>. It also explains how we use cookies and similar technologies.</p>
    <h3>Your Consent</h3>
    <p>When you provide us with your personal information, you consent to our collection, use, disclosure, and retention of your information in accordance with this Privacy Policy and as otherwise permitted by law.</p>
    <h3>Cookies and Other Technologies</h3>
    <p>When you visit our website, we use "cookies" and other similar technologies, such as web beacons, pixel or gif tags, and action tags to give you and other visitors the best possible user experience.</p>
    <p>For instance, we’d like to know how many of our visitors use their mobile phones to visit the website. We also like to know how our visitors navigate the website and which content they find most interesting. Having that knowledge enables us to continuously improve the user experience. If you sign up for a meeting, fill in our webform, etc. you provide personal information such as name, email address, and more.</p>
    <p>Some of our cookies are necessary for our website to function as intended, other cookies are related to statistical data, and some cookies support our marketing eﬀorts and, in some instances, will share visitor information to third parties. You can always change your cookie settings.</p>
    <p>You may choose to decline or disable cookies if your web browser permits, but doing so may affect your ability to access or use certain features of our website. </p>
    <p>The applied tools used by us are, among others, Google Analytics and Facebook pixel and HubSpot. We use these tools to analyze the website traﬃc and to measure the eﬃciency of our marketing activities by understanding the actions performed by our website visitors.</p>
    <p>Information provided by cookies may be collected and processed by us or by our third-party service providers, including Google Facebook and HubSpot.</p>
    <p>Our use of cookies and pixels can, as mentioned above, lead to our handling of personal information and we recommend therefore that you also take the time to read and understand our Privacy Policy, which describes our handling of your personal information collected on our website and your rights in relation to that information.</p>
    <h3>Technical Information</h3>
    <p>When you visit our website, we may collect, using electronic means, technical information. This information may include the IP address of your computer and which web browser you used to view our website, operating system, resolution of screen, location, language settings in browsers, the website you came from and searched for keywords (if arriving from a search engine). This technical data is aggregated and used to measure and improve the effectiveness of our website. We do not attempt to combine this technical information with other personal information collected on our website.</p>
    <h3>Studio DMLA’s Data Protection</h3>
    <p>If you have any question regarding our handling of your data, you are more than welcome to contact us via:</p>
    <a href="mailto:mariapaula@studio-dmla.ca">mariapaula@studio-dmla.ca</a>
    <p>The purpose and foundation for our handling of personal data:
    </br>
    We collect data from visitors to our website <a href="https://studio-dmla.ca/">https://studio-dmla.ca/</a> in two ways;
    </p>
    <ul>
      <li>-	Through data provided by the visitor</li>
      <li>-	Through data provided by cookies and similar technologies</li>
    </ul>
    <p>Visitors to the website submit a range of personal data when filling out forms including for meetings, Contact Us form, etc. Specifically, this information may include a visitor’s name, email address, cell phone number, address/city/province/postal code/country.</p>
    <p>This information is necessary in order for us to fulfil the agreement made with the visitor in relation to the submitted form, including sending information materials, arranging for phone calls, email correspondence, mail and etc.</p>
    <h3>Storing of Your Personal Information</h3>
    <p>We retain your personal information for the period necessary to fulfill the purposes outlined in this Privacy Policy or such longer retention period as may be required or permitted by applicable law.</p>
    <p>We will store and process your personal information in Canada and other countries. The laws of other countries regarding the collection, use, disclosure, and retention of personal information may be different from the laws of Canada. The disclosure of your information in accordance with this Privacy Policy may result in your personal information being transferred outside of Canada.</p>
    <p>We employ reasonable safeguards - including administrative, technical and physical measures - appropriate to the sensitivity of the personal information in its possession or under its control in order to protect that information from unauthorized access, collection, use, disclosure, disposal, or similar risks. While we use reasonable efforts to protect your information, no method of transmission over the Internet, or method of electronic storage, is 100% secure, and therefore, we cannot guarantee absolute security of your personal information.</p>
    <h3>Sharing of Personal Information</h3>
    <p>Except as mentioned in this Privacy Policy, unless we have your express consent, we will not sell, rent share or trade your personal information to any third party.</p>
    <p>We may disclose your personal information to internal service providers that we may use to facilitate or outsource one of more aspects of our website or our business. These internal service providers are subject to confidentiality agreements with us and other legal restrictions that prohibit their use of the information we provide them for any purpose other than to facilitate the specific outsourced related operation.</p>
    <p>We may disclose your personal information as required by legal disclosure obligations under applicable law, including to comply with a subpoena, warrant or court or arbitral order, or litigation disclosure obligations. We may also disclose your personal information if we reasonably believe disclosure is necessary or appropriate in connection with national security, law enforcement, or other issues of public importance. We may also disclose your personal information as otherwise required by law, or authorized by law in connection with a legal investigation, or if we reasonably believe the disclosure is necessary or appropriate to protect and enforce our legal rights, interests and remedies or protect the business, operations or customers of Studio DMLA or other persons (including detecting and preventing fraud and preventing violation of the terms of use that govern our websites). We have no control over, or responsibility or liability for, the further use, disclosure, and retention of your personal information disclosed in those circumstances, and the further use, disclosure, and retention of the disclosed information is not subject to this Privacy Policy.</p>
    <p>We may disclose your personal information in connection with a proposed or actual business transaction, such as a corporate reorganization, merger or acquisition, or the sale of some or all of our business or assets (including in connection with a bankruptcy proceeding), but we will require that the information recipient agree to protect the privacy of your personal information in a manner that is consistent with this Privacy Policy.</p>
    <h3>About Studio DMLA</h3>
    <p>This website is owned and managed by Studio DMLA, a sole proprietorship registered in British Columbia, Canada under registration number FM0820043.</p>
    <p>Studio DMLA provides web development and marketing services to clients in Canada and all over the world.</p>
    <h3>English Language</h3>
    <p>You and Studio DMLA have each expressly requested and required that this Privacy Policy and all other related documents be drawn up in the English language. Les parties conviennent et exigent expressément que cette Politique et tous les documents qui s'y rapportent soient rédigés en anglais.</p>
    <h3>Privacy Policy Changes</h3>
    <p>We may change this Privacy Policy from time to time by posting a new version of this Privacy Policy on our website at <a href="https://studio-dmla.ca/">https://studio-dmla.ca/</a></p>
    <p>Our collection, use, disclosure, and retention of your personal information will be governed by the version of this Privacy Policy in effect at that time. Your continued dealings with us subsequent to any changes to this Privacy Policy will signify your consent to the collection, use, disclosure, and retention of your personal information in accordance with the changed Privacy Policy. Accordingly, you should check the "Last updated" date of this Privacy Policy (at the bottom of the page) and review any changes since the last version.</p>
    `,

  },
};
