import type { Schema, Struct } from "@strapi/strapi";

export interface StaticPagesContentSection extends Struct.ComponentSchema {
  collectionName: "components_static_pages_content_sections";
  info: {
    displayName: "ContentSection";
  };
  attributes: {
    primaryDescription: Schema.Attribute.Text;
    secondaryDescription: Schema.Attribute.Text;
  };
}

export interface StaticPagesFeaturedGridBlock extends Struct.ComponentSchema {
  collectionName: "components_static_pages_featured_grid_block";
  info: {
    description: "";
    displayName: "FeaturedGridBlock";
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StaticPagesHalfBanner extends Struct.ComponentSchema {
  collectionName: "components_static_pages_half_banners";
  info: {
    displayName: "HalfBanner";
    icon: "chartBubble";
  };
  attributes: {
    banner_image: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
    banner_subtitle: Schema.Attribute.String;
    banner_title: Schema.Attribute.String;
  };
}

export interface StaticPagesHeroSection extends Struct.ComponentSchema {
  collectionName: "components_static_pages_hero_section";
  info: {
    description: "";
    displayName: "HeroSection";
  };
  attributes: {
    images: Schema.Attribute.Media<"images", true> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StaticPagesImageGallery extends Struct.ComponentSchema {
  collectionName: "components_static_pages_image_gallery";
  info: {
    description: "";
    displayName: "ImageGallery";
  };
  attributes: {
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<"images", true> & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface StaticPagesImageTitleText extends Struct.ComponentSchema {
  collectionName: "components_static_pages_image_title_texts";
  info: {
    description: "";
    displayName: "ImageTitleText";
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StaticPagesQuote extends Struct.ComponentSchema {
  collectionName: "components_static_pages_quotes";
  info: {
    description: "";
    displayName: "Quote";
  };
  attributes: {
    quote_text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface StaticPagesTitleText extends Struct.ComponentSchema {
  collectionName: "components_static_pages_title_texts";
  info: {
    displayName: "TitleText";
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StaticPagesTitleTextImage extends Struct.ComponentSchema {
  collectionName: "components_static_pages_title_text_images";
  info: {
    displayName: "TitleTextImage";
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface StaticPagesYouTube extends Struct.ComponentSchema {
  collectionName: "components_static_pages_you_tubes";
  info: {
    description: "";
    displayName: "YouTubeVideoWindow";
  };
  attributes: {
    video_url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "static-pages.content-section": StaticPagesContentSection;
      "static-pages.featured-grid-block": StaticPagesFeaturedGridBlock;
      "static-pages.half-banner": StaticPagesHalfBanner;
      "static-pages.hero-section": StaticPagesHeroSection;
      "static-pages.image-gallery": StaticPagesImageGallery;
      "static-pages.image-title-text": StaticPagesImageTitleText;
      "static-pages.quote": StaticPagesQuote;
      "static-pages.title-text": StaticPagesTitleText;
      "static-pages.title-text-image": StaticPagesTitleTextImage;
      "static-pages.you-tube": StaticPagesYouTube;
    }
  }
}
