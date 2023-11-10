import type { Schema, Attribute } from '@strapi/strapi';

export interface FooterColumn extends Schema.Component {
  collectionName: 'components_shared_columns';
  info: {
    displayName: 'Column';
    icon: 'crop';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Link1: Attribute.String;
    Link2: Attribute.String;
    Link3: Attribute.String;
    Link4: Attribute.String;
    Link5: Attribute.String;
    Link6: Attribute.String;
    Link7: Attribute.String;
    Link8: Attribute.String;
    Link9: Attribute.String;
    Link11: Attribute.String;
    Link12: Attribute.String;
    Link13: Attribute.String;
    Link14: Attribute.String;
    Link15: Attribute.String;
    Link16: Attribute.String;
  };
}

export interface FooterFooterBase extends Schema.Component {
  collectionName: 'components_shared_footer_bases';
  info: {
    displayName: 'Footer-Base';
    icon: 'folder';
    description: '';
  };
  attributes: {
    BaseLogo: Attribute.Media;
    Link1: Attribute.String;
    Link2: Attribute.String;
    Link3: Attribute.String;
    Link4: Attribute.String;
    Link5: Attribute.String;
    Link6: Attribute.String;
    Link7: Attribute.String;
    Link8: Attribute.String;
    Link9: Attribute.String;
  };
}

export interface HomePageAwards extends Schema.Component {
  collectionName: 'components_home_page_awards';
  info: {
    displayName: 'Awards';
    icon: 'thumbUp';
  };
  attributes: {
    Badge: Attribute.Media;
    Title: Attribute.String;
    Description: Attribute.String;
    Plateform: Attribute.Component<'spare-part.plateform', true>;
  };
}

export interface HomePageBanner extends Schema.Component {
  collectionName: 'components_home_page_banners';
  info: {
    displayName: 'Banner';
    icon: 'picture';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Button: Attribute.String;
    BannerImage: Attribute.Media;
    ProjectsImage: Attribute.Media;
  };
}

export interface HomePageBusinessVision extends Schema.Component {
  collectionName: 'components_home_page_business_visions';
  info: {
    displayName: 'BusinessVision';
    icon: 'code';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    BusinessCard: Attribute.Component<'spare-part.business-card', true>;
  };
}

export interface HomePageCounter extends Schema.Component {
  collectionName: 'components_shared_counters';
  info: {
    displayName: 'Counter';
    icon: 'clock';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    CounterSection: Attribute.Component<'spare-part.counter-section', true>;
  };
}

export interface HomePageDevelopmentStack extends Schema.Component {
  collectionName: 'components_home_page_development_stacks';
  info: {
    displayName: 'Development-Stack';
    icon: 'cog';
    description: '';
  };
  attributes: {
    Text: Attribute.String;
    Title: Attribute.String;
    Description: Attribute.Text;
    TechCategories: Attribute.Component<'spare-part.tech-categories', true>;
    Tech1: Attribute.String;
    Tech2: Attribute.String;
  };
}

export interface HomePageGlimpses extends Schema.Component {
  collectionName: 'components_home_page_glimpses';
  info: {
    displayName: 'Glimpses';
    icon: 'cloud';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
    GlimpsesCard: Attribute.Component<'spare-part.glimpses-card', true>;
    Asking: Attribute.String;
    Button: Attribute.String;
  };
}

export interface HomePageIndustries extends Schema.Component {
  collectionName: 'components_home_page_industries';
  info: {
    displayName: 'Industries';
    icon: 'attachment';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
    IndustriesView: Attribute.Component<'spare-part.industries-view', true>;
  };
}

export interface HomePageRating extends Schema.Component {
  collectionName: 'components_home_page_ratings';
  info: {
    displayName: 'Rating';
    icon: 'thumbUp';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    ReviewCard: Attribute.Component<'spare-part.review-card', true>;
  };
}

export interface HomePageServices extends Schema.Component {
  collectionName: 'components_home_page_services';
  info: {
    displayName: 'Services';
    icon: 'archive';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
    ServicesCard: Attribute.Component<'spare-part.services-card', true>;
  };
}

export interface HomePageTalents extends Schema.Component {
  collectionName: 'components_home_page_talents';
  info: {
    displayName: 'Talents';
  };
  attributes: {
    Image: Attribute.Media;
    Title: Attribute.String;
    Description: Attribute.String;
    Stack: Attribute.Component<'spare-part.stack', true>;
    Button: Attribute.String;
  };
}

export interface NavbarNavbarFooter extends Schema.Component {
  collectionName: 'components_navbar_navbar_footers';
  info: {
    displayName: 'Navbar-Footer';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Logo: Attribute.Media;
    Email: Attribute.String;
    SocialLink1: Attribute.String;
    SocialLink2: Attribute.String;
    SocialLink3: Attribute.String;
    SocialLink4: Attribute.String;
  };
}

export interface NavbarNavbarLinks extends Schema.Component {
  collectionName: 'components_navbar_navbar_links';
  info: {
    displayName: 'Navbar-Links';
    icon: 'stack';
    description: '';
  };
  attributes: {
    LinkTitle: Attribute.String;
  };
}

export interface NavbarNavbarMenu extends Schema.Component {
  collectionName: 'components_navbar_navbar_menus';
  info: {
    displayName: 'NavbarMenu';
    icon: 'check';
    description: '';
  };
  attributes: {
    StackTitle: Attribute.String;
    List1: Attribute.String;
    List2: Attribute.String;
    List3: Attribute.String;
    List4: Attribute.String;
    List5: Attribute.String;
    List6: Attribute.String;
    List7: Attribute.String;
    List8: Attribute.String;
    List9: Attribute.String;
    logo: Attribute.Media;
  };
}

export interface SharedContactForm extends Schema.Component {
  collectionName: 'components_home_page_contact_forms';
  info: {
    displayName: 'Contact-Form';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
    ProjectsImage: Attribute.Media;
    Form: Attribute.Component<'shared.form'>;
    FormFooter: Attribute.Component<'spare-part.form-footer'>;
  };
}

export interface SharedContactInfo extends Schema.Component {
  collectionName: 'components_shared_contact_infos';
  info: {
    displayName: 'Contact-Info';
    icon: 'brush';
  };
  attributes: {
    Logo: Attribute.Media;
    QueryTitle: Attribute.String;
    EmailLogo: Attribute.Media;
    Email: Attribute.String;
    CallLogo: Attribute.Media;
    Number: Attribute.Integer;
    Location1: Attribute.String;
    Address1: Attribute.Text;
    Number1: Attribute.Integer;
    Location2: Attribute.String;
    Address2: Attribute.String;
    Number2: Attribute.Integer;
  };
}

export interface SharedFooter extends Schema.Component {
  collectionName: 'components_home_page_footers';
  info: {
    displayName: 'Footer';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Column: Attribute.Component<'footer.column', true>;
    FooterBase: Attribute.Component<'footer.footer-base'>;
  };
}

export interface SharedForm extends Schema.Component {
  collectionName: 'components_shared_forms';
  info: {
    displayName: 'Form';
    icon: 'repeat';
    description: '';
  };
  attributes: {
    Field1: Attribute.Enumeration<
      [
        'Name',
        'Email',
        'Contact',
        'Purpose',
        'How can we help you?',
        'Send me NDA'
      ]
    >;
    Field2: Attribute.Enumeration<
      [
        'Name',
        'Email',
        'Contact',
        'Purpose',
        'How can we help you?',
        'Send me NDA'
      ]
    >;
    Field3: Attribute.Enumeration<
      [
        'Name',
        'Email',
        'Contact',
        'Purpose',
        'How can we help you?',
        'Send me NDA'
      ]
    >;
    Field4: Attribute.Enumeration<
      [
        'Name',
        'Email',
        'Contact',
        'Purpose',
        'How can we help you?',
        'Send me NDA'
      ]
    >;
    Field5: Attribute.Enumeration<
      [
        'Name',
        'Email',
        'Contact',
        'Purpose',
        'How can we help you?',
        'Send me NDA'
      ]
    >;
    Field6: Attribute.Enumeration<
      [
        'Name',
        'Email',
        'Contact',
        'Purpose',
        'How can we help you?',
        'Send me NDA'
      ]
    >;
    Button: Attribute.String;
  };
}

export interface SharedNavbar extends Schema.Component {
  collectionName: 'components_shared_seo_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'bell';
    description: '';
  };
  attributes: {
    Logo: Attribute.Media;
    NavbarLinks: Attribute.Component<'navbar.navbar-links', true>;
    NavbarMenu: Attribute.Component<'navbar.navbar-menu', true>;
    NavbarFooter: Attribute.Component<'navbar.navbar-footer'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'Seo';
    icon: 'code';
    description: '';
  };
  attributes: {
    MetaTitle: Attribute.String;
    MetaDescription: Attribute.String;
    MetaRobot: Attribute.String;
    Keyword: Attribute.String;
    Slug: Attribute.String;
  };
}

export interface SharedTestimonial extends Schema.Component {
  collectionName: 'components_home_page_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'quote';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
    TestimonialCard: Attribute.Component<'spare-part.testimonial-card', true>;
  };
}

export interface SparePartBusinessCard extends Schema.Component {
  collectionName: 'components_shared_business_cards';
  info: {
    displayName: 'Business-Card';
    icon: 'chartPie';
    description: '';
  };
  attributes: {
    Logo: Attribute.Media;
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface SparePartCounterSection extends Schema.Component {
  collectionName: 'components_shared_counter_sections';
  info: {
    displayName: 'Counter-Section';
    icon: 'plus';
    description: '';
  };
  attributes: {
    Value: Attribute.Integer;
    Text: Attribute.String;
  };
}

export interface SparePartFormFooter extends Schema.Component {
  collectionName: 'components_shared_form_footers';
  info: {
    displayName: 'Form-Footer';
    icon: 'feather';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Button: Attribute.String;
    ConnectTitle: Attribute.String;
    EmailLogo: Attribute.Media;
    EmailText: Attribute.String;
    WhatsappLogo: Attribute.Media;
    WhatsappText: Attribute.String;
    SkypeLogo: Attribute.Media;
    SkypeText: Attribute.String;
  };
}

export interface SparePartGlimpsesCard extends Schema.Component {
  collectionName: 'components_shared_glimpses_cards';
  info: {
    displayName: 'Glimpses-Card';
    icon: 'expand';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
    Logo: Attribute.Media;
    Description: Attribute.Text;
    Button: Attribute.String;
  };
}

export interface SparePartIndustriesView extends Schema.Component {
  collectionName: 'components_shared_industries_views';
  info: {
    displayName: 'Industries-View';
    icon: 'book';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Button: Attribute.String;
    Image: Attribute.Media;
  };
}

export interface SparePartPlateform extends Schema.Component {
  collectionName: 'components_shared_plateforms';
  info: {
    displayName: 'Plateform';
    icon: 'crown';
    description: '';
  };
  attributes: {
    Logo: Attribute.Media;
  };
}

export interface SparePartReviewCard extends Schema.Component {
  collectionName: 'components_shared_seo_review_cards';
  info: {
    displayName: 'Review-Card';
    icon: 'cog';
    description: '';
  };
  attributes: {
    Logo: Attribute.Media;
    CompanyName: Attribute.String;
    Rating: Attribute.Float;
    Description: Attribute.String;
  };
}

export interface SparePartServicesCard extends Schema.Component {
  collectionName: 'components_shared_services_cards';
  info: {
    displayName: 'Services-Card';
    icon: 'priceTag';
    description: '';
  };
  attributes: {
    Logo: Attribute.Media;
    Title: Attribute.String;
    Description: Attribute.Text;
    Button: Attribute.String;
  };
}

export interface SparePartStack extends Schema.Component {
  collectionName: 'components_shared_stacks';
  info: {
    displayName: 'Stack';
    icon: 'stack';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
  };
}

export interface SparePartTechCategories extends Schema.Component {
  collectionName: 'components_shared_tech_categories';
  info: {
    displayName: 'Tech-Categories';
    icon: 'grid';
    description: '';
  };
  attributes: {
    Categories: Attribute.String;
    Image1: Attribute.Media;
    Language1: Attribute.String;
    Image2: Attribute.Media;
    Language2: Attribute.String;
    Image3: Attribute.Media;
    Language3: Attribute.String;
    Image4: Attribute.Media;
    Language4: Attribute.String;
    Image5: Attribute.Media;
    Language5: Attribute.String;
    Image6: Attribute.Media;
    Language6: Attribute.String;
  };
}

export interface SparePartTestimonialCard extends Schema.Component {
  collectionName: 'components_shared_testimonial_cards';
  info: {
    displayName: 'Testimonial-Card';
    icon: 'bell';
    description: '';
  };
  attributes: {
    Words: Attribute.Text;
    PersonImage: Attribute.Media;
    PersonName: Attribute.String;
    PersonPosition: Attribute.String;
    Button: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'footer.column': FooterColumn;
      'footer.footer-base': FooterFooterBase;
      'home-page.awards': HomePageAwards;
      'home-page.banner': HomePageBanner;
      'home-page.business-vision': HomePageBusinessVision;
      'home-page.counter': HomePageCounter;
      'home-page.development-stack': HomePageDevelopmentStack;
      'home-page.glimpses': HomePageGlimpses;
      'home-page.industries': HomePageIndustries;
      'home-page.rating': HomePageRating;
      'home-page.services': HomePageServices;
      'home-page.talents': HomePageTalents;
      'navbar.navbar-footer': NavbarNavbarFooter;
      'navbar.navbar-links': NavbarNavbarLinks;
      'navbar.navbar-menu': NavbarNavbarMenu;
      'shared.contact-form': SharedContactForm;
      'shared.contact-info': SharedContactInfo;
      'shared.footer': SharedFooter;
      'shared.form': SharedForm;
      'shared.navbar': SharedNavbar;
      'shared.seo': SharedSeo;
      'shared.testimonial': SharedTestimonial;
      'spare-part.business-card': SparePartBusinessCard;
      'spare-part.counter-section': SparePartCounterSection;
      'spare-part.form-footer': SparePartFormFooter;
      'spare-part.glimpses-card': SparePartGlimpsesCard;
      'spare-part.industries-view': SparePartIndustriesView;
      'spare-part.plateform': SparePartPlateform;
      'spare-part.review-card': SparePartReviewCard;
      'spare-part.services-card': SparePartServicesCard;
      'spare-part.stack': SparePartStack;
      'spare-part.tech-categories': SparePartTechCategories;
      'spare-part.testimonial-card': SparePartTestimonialCard;
    }
  }
}
