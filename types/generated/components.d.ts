import type { Schema, Struct } from '@strapi/strapi';

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
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'static-pages.content-section': StaticPagesContentSection;
      'static-pages.featured-grid-block': StaticPagesFeaturedGridBlock;
      'static-pages.hero-section': StaticPagesHeroSection;
      'static-pages.image-gallery': StaticPagesImageGallery;
    }
  }
}
