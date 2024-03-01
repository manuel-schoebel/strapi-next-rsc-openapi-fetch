import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentHero extends Schema.Component {
  collectionName: 'components_content_heroes';
  info: {
    displayName: 'hero';
    icon: 'circle';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    subTitle: Attribute.Text;
    titleColor: Attribute.Enumeration<['white', 'fuchsia', 'black']> &
      Attribute.DefaultTo<'white'>;
    backgroundImage: Attribute.Media;
  };
}

export interface ContentImageText extends Schema.Component {
  collectionName: 'components_content_image_texts';
  info: {
    displayName: 'imageText';
    icon: 'circle';
    description: '';
  };
  attributes: {
    text: Attribute.RichText;
    textAlign: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
    image: Attribute.Media;
    imagePriority: Attribute.Boolean;
    mediaPosition: Attribute.Enumeration<['left', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
    fixedHeight: Attribute.Integer;
    screenHeight: Attribute.Boolean;
    imageColumns: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<1>;
    textColumns: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<1>;
    headline: Attribute.Component<'elements.headline'>;
    button: Attribute.Component<'elements.button'>;
  };
}

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    target: Attribute.Enumeration<['_self', '_blank']> &
      Attribute.DefaultTo<'_self'>;
    externalUrl: Attribute.String;
    variant: Attribute.Enumeration<['text', 'outlined', 'filled']> &
      Attribute.DefaultTo<'filled'>;
    style: Attribute.Enumeration<['primary', 'secondary']>;
    page: Attribute.Relation<'elements.button', 'oneToOne', 'api::page.page'>;
  };
}

export interface ElementsHeadline extends Schema.Component {
  collectionName: 'components_elements_headlines';
  info: {
    displayName: 'headline';
    icon: 'heading';
    description: '';
  };
  attributes: {
    text: Attribute.Text;
    variant: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5']>;
    align: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
  };
}

export interface ElementsPricingPlan extends Schema.Component {
  collectionName: 'components_elements_pricing_plans';
  info: {
    displayName: 'pricingPlan';
    description: '';
  };
  attributes: {
    price: Attribute.String;
    name: Attribute.String;
    features: Attribute.Text;
    href: Attribute.String;
    btnLabel: Attribute.String;
    highlightedText: Attribute.String;
    discountedPrice: Attribute.String;
  };
}

export interface ElementsQuestionAndAnswer extends Schema.Component {
  collectionName: 'components_elements_question_and_answers';
  info: {
    displayName: 'Question and Answer';
    description: '';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    answer: Attribute.Blocks & Attribute.Required;
  };
}

export interface ElementsResponsiveImage extends Schema.Component {
  collectionName: 'components_elements_responsive_images';
  info: {
    displayName: 'responsiveImage';
    icon: 'circle';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    screenSize: Attribute.Enumeration<
      ['small mobile', 'medium mobile', 'large mobile', 'tablet', 'desktop']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'desktop'>;
  };
}

export interface ElementsRichText extends Schema.Component {
  collectionName: 'components_elements_rich_texts';
  info: {
    displayName: 'richText';
    icon: 'circle';
    description: '';
  };
  attributes: {
    text: Attribute.RichText;
    align: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.DefaultTo<'left'>;
  };
}

export interface ElementsSeo extends Schema.Component {
  collectionName: 'components_elements_seos';
  info: {
    displayName: 'seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaRobots: Attribute.Enumeration<
      ['Show in search engines', 'Do not show in search engines']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Show in search engines'>;
    structuredData: Attribute.JSON;
    metaKeywords: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ElementsSpacer extends Schema.Component {
  collectionName: 'components_elements_spacers';
  info: {
    displayName: 'Spacer';
    icon: 'expand';
    description: '';
  };
  attributes: {
    size: Attribute.Enumeration<['small', 'medium', 'large']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.hero': ContentHero;
      'content.image-text': ContentImageText;
      'elements.button': ElementsButton;
      'elements.headline': ElementsHeadline;
      'elements.pricing-plan': ElementsPricingPlan;
      'elements.question-and-answer': ElementsQuestionAndAnswer;
      'elements.responsive-image': ElementsResponsiveImage;
      'elements.rich-text': ElementsRichText;
      'elements.seo': ElementsSeo;
      'elements.spacer': ElementsSpacer;
    }
  }
}
