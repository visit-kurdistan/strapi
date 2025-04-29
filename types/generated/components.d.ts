import type { Schema, Struct } from '@strapi/strapi';

export interface StaticPagesActivitiesInKurdistan
  extends Struct.ComponentSchema {
  collectionName: 'components_static_pages_activities_in_kurdistans';
  info: {
    displayName: 'Activities In Kurdistan';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    location_card: Schema.Attribute.Component<
      'static-pages.partner-card',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 6;
        },
        number
      >;
    primary_button: Schema.Attribute.Component<
      'static-pages.primary-button',
      false
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StaticPagesContentSection extends Struct.ComponentSchema {
  collectionName: 'components_static_pages_content_sections';
  info: {
    displayName: 'ContentSection';
  };
  attributes: {
    primaryDescription: Schema.Attribute.Text;
    secondaryDescription: Schema.Attribute.Text;
  };
}

export interface StaticPagesDynamicBanner extends Struct.ComponentSchema {
  collectionName: 'components_static_pages_dynamic_banners';
  info: {
    displayName: 'dynamic-banner';
    icon: 'apps';
  };
  attributes: {
    banner_type: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    centerAligned: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    dynamic_banner_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    main_heading: Schema.Attribute.String;
    pre_heading: Schema.Attribute.String;
    primary_button: Schema.Attribute.Component<
      'static-pages.primary-button',
      false
    >;
    right_arrow_button: Schema.Attribute.Component<
      'static-pages.right-arrow-button',
      false
    >;
    sub_heading: Schema.Attribute.String;
  };
}

export interface StaticPagesFeaturedGridBlock extends Struct.ComponentSchema {
  collectionName: 'components_static_pages_featured_grid_block';
  info: {
    description: '';
    displayName: 'FeaturedGridBlock';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StaticPagesHalfBanner extends Struct.ComponentSchema {
  collectionName: 'components_static_pages_half_banners';
  info: {
    displayName: 'HalfBanner';
    icon: 'chartBubble';
  };
  attributes: {
    banner_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    banner_subtitle: Schema.Attribute.String;
    banner_title: Schema.Attribute.String;
  };
}

export interface StaticPagesHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_static_pages_hero_section';
  info: {
    description: '';
    displayName: 'HeroSection';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StaticPagesImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_static_pages_image_gallery';
  info: {
    description: '';
    displayName: 'ImageGallery';
  };
  attributes: {
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface StaticPagesImageTitleText extends Struct.ComponentSchema {
  collectionName: 'components_static_pages_image_title_texts';
  info: {
    description: '';
    displayName: 'ImageTitleText';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StaticPagesLegacyCards extends Struct.ComponentSchema {
  collectionName: 'components_static_pages_legacy_cards';
  info: {
    displayName: 'Legacy Cards';
  };
  attributes: {
    legacy_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    legacy_url: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StaticPagesLegacyImageCarousal extends Struct.ComponentSchema {
  collectionName: 'components_static_pages_legacy_image_carousals';
  info: {
    description: '';
    displayName: 'LegacyImageCarousal';
  };
  attributes: {
    description: Schema.Attribute.String;
    legacy_cards: Schema.Attribute.Component<
      'static-pages.legacy-cards',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    right_arrow_button: Schema.Attribute.Component<
      'static-pages.right-arrow-button',
      false
    >;
    title: Schema.Attribute.String;
  };
}

export interface StaticPagesMainPartnerSection extends Struct.ComponentSchema {
  collectionName: 'components_static_pages_main_partner_section_s';
  info: {
    description: '';
    displayName: 'Main Partner Section ';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    main_title: Schema.Attribute.String & Schema.Attribute.Required;
    partner_card: Schema.Attribute.Component<
      'static-pages.partner-card',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface StaticPagesPartnerCard extends Struct.ComponentSchema {
  collectionName: 'components_static_pages_partner_cards';
  info: {
    description: '';
    displayName: 'Partner Card';
  };
  attributes: {
    card_category: Schema.Attribute.String & Schema.Attribute.Required;
    card_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    card_title: Schema.Attribute.String & Schema.Attribute.Required;
    card_url: Schema.Attribute.String;
  };
}

export interface StaticPagesPrimaryButton extends Struct.ComponentSchema {
  collectionName: 'components_static_pages_primary_buttons';
  info: {
    displayName: 'primary-button';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    redirect_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StaticPagesQuote extends Struct.ComponentSchema {
  collectionName: 'components_static_pages_quotes';
  info: {
    description: '';
    displayName: 'Quote';
  };
  attributes: {
    quote_text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface StaticPagesRightArrowButton extends Struct.ComponentSchema {
  collectionName: 'components_static_pages_right_arrow_buttons';
  info: {
    displayName: 'right-arrow-button';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    redirect_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StaticPagesTitleText extends Struct.ComponentSchema {
  collectionName: 'components_static_pages_title_texts';
  info: {
    displayName: 'TitleText';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StaticPagesTitleTextImage extends Struct.ComponentSchema {
  collectionName: 'components_static_pages_title_text_images';
  info: {
    displayName: 'TitleTextImage';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StaticPagesVerticalSpacer extends Struct.ComponentSchema {
  collectionName: 'components_static_pages_vertical_spacers';
  info: {
    displayName: 'VerticalSpacer';
  };
  attributes: {
    vertical_space: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<16>;
  };
}

export interface StaticPagesYouTube extends Struct.ComponentSchema {
  collectionName: 'components_static_pages_you_tubes';
  info: {
    description: '';
    displayName: 'YouTubeVideoWindow';
  };
  attributes: {
    video_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'static-pages.activities-in-kurdistan': StaticPagesActivitiesInKurdistan;
      'static-pages.content-section': StaticPagesContentSection;
      'static-pages.dynamic-banner': StaticPagesDynamicBanner;
      'static-pages.featured-grid-block': StaticPagesFeaturedGridBlock;
      'static-pages.half-banner': StaticPagesHalfBanner;
      'static-pages.hero-section': StaticPagesHeroSection;
      'static-pages.image-gallery': StaticPagesImageGallery;
      'static-pages.image-title-text': StaticPagesImageTitleText;
      'static-pages.legacy-cards': StaticPagesLegacyCards;
      'static-pages.legacy-image-carousal': StaticPagesLegacyImageCarousal;
      'static-pages.main-partner-section': StaticPagesMainPartnerSection;
      'static-pages.partner-card': StaticPagesPartnerCard;
      'static-pages.primary-button': StaticPagesPrimaryButton;
      'static-pages.quote': StaticPagesQuote;
      'static-pages.right-arrow-button': StaticPagesRightArrowButton;
      'static-pages.title-text': StaticPagesTitleText;
      'static-pages.title-text-image': StaticPagesTitleTextImage;
      'static-pages.vertical-spacer': StaticPagesVerticalSpacer;
      'static-pages.you-tube': StaticPagesYouTube;
    }
  }
}
