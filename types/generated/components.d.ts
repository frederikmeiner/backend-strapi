import type { Schema, Struct } from '@strapi/strapi';

export interface FeaturesRichText extends Struct.ComponentSchema {
  collectionName: 'components_features_rich_texts';
  info: {
    displayName: 'richText';
    icon: 'crop';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface FeaturesSlider extends Struct.ComponentSchema {
  collectionName: 'components_features_sliders';
  info: {
    displayName: 'slider';
    icon: 'car';
  };
  attributes: {
    slide_image: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

export interface FeaturesSpoiler extends Struct.ComponentSchema {
  collectionName: 'components_features_spoilers';
  info: {
    displayName: 'spoiler';
    icon: 'alien';
  };
  attributes: {
    actualSpoiler: Schema.Attribute.Text;
    clickableText: Schema.Attribute.String;
  };
}

export interface FeaturesTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_features_testimonials';
  info: {
    description: '';
    displayName: 'testimonial';
    icon: 'archive';
  };
  attributes: {
    authorName: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images' | 'files'>;
    quote: Schema.Attribute.Text;
    smallimage: Schema.Attribute.Media<'images' | 'files'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'features.rich-text': FeaturesRichText;
      'features.slider': FeaturesSlider;
      'features.spoiler': FeaturesSpoiler;
      'features.testimonial': FeaturesTestimonial;
    }
  }
}
