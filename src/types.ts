export interface PhotoItem {
  id: string;
  title: string;
  description: string;
  svgType: 'manufacturing' | 'block-detail' | 'facility' | 'workforce';
  aspectRatio?: string;
  technicalLabel: string;
}

export interface GalleryAlbum {
  id: string;
  title: string;
  subtitle: string;
  coverImage: PhotoItem;
  photos: PhotoItem[];
}

export interface SpecRow {
  metric: string;
  modifyBlock: string;
  sandcreteStandard: string;
  notes?: string;
}

export interface MarketItem {
  category: string;
  description: string;
}
