import { GalleryAlbum } from '../types';
import blockImg1 from '../assets/images/modify-block/block_img_1.jpg';
import blockImg2 from '../assets/images/modify-block/block_img_2.jpg';
import blockImg3 from '../assets/images/modify-block/block_img_3.jpg';
import blockImg4 from '../assets/images/modify-block/block_img_4.jpg';
import blockImg5 from '../assets/images/modify-block/block_img_5.jpg';

import facilityImg1 from '../assets/images/facilities-sites/facility_img_1.jpg';
import facilityImg2 from '../assets/images/facilities-sites/facility_img_2.jpg';
import facilityImg3 from '../assets/images/facilities-sites/facility_img_3.jpg';
import facilityImg4 from '../assets/images/facilities-sites/facility_img_4.jpg';
import facilityImg5 from '../assets/images/facilities-sites/facility_img_5.jpg';
import facilityImg6 from '../assets/images/facilities-sites/facility_img_6.jpg';

import workforceImg1 from '../assets/images/community-workforce/workforce_img_1.jpg';
import workforceImg2 from '../assets/images/community-workforce/workforce_img_2.jpg';
import workforceImg3 from '../assets/images/community-workforce/workforce_img_3.jpg';
import workforceImg4 from '../assets/images/community-workforce/workforce_img_4.jpg';
import workforceImg5 from '../assets/images/community-workforce/workforce_img_5.jpg';

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'modify-block',
    title: 'The Modify Block',
    subtitle: 'Interlocking geometry, certified specifications, and structural versatility',
    coverImage: {
      id: 'block-cover',
      title: 'Modify Block Foundation',
      description: 'The foundation layer using the Modify Block.',
      svgType: 'block-detail',
      technicalLabel: 'Block Details',
      imageUrl: blockImg1,
    },
    photos: [
      {
        id: 'block-img-1',
        title: 'Block Overview 1',
        description: 'First view of the Modify Block.',
        svgType: 'block-detail',
        technicalLabel: 'Block View 1',
        imageUrl: blockImg1,
      },
      {
        id: 'block-img-2',
        title: 'Block Overview 2',
        description: 'Second view of the Modify Block.',
        svgType: 'block-detail',
        technicalLabel: 'Block View 2',
        imageUrl: blockImg2,
      },
      {
        id: 'block-img-3',
        title: 'Block Overview 3',
        description: 'Third view of the Modify Block.',
        svgType: 'block-detail',
        technicalLabel: 'Block View 3',
        imageUrl: blockImg3,
      },
      {
        id: 'block-img-4',
        title: 'Block Overview 4',
        description: 'Fourth view of the Modify Block.',
        svgType: 'block-detail',
        technicalLabel: 'Block View 4',
        imageUrl: blockImg4,
      },
      {
        id: 'block-img-5',
        title: 'Block Overview 5',
        description: 'Fifth view of the Modify Block.',
        svgType: 'block-detail',
        technicalLabel: 'Block View 5',
        imageUrl: blockImg5,
      },
    ],
  },
  {
    id: 'facilities-sites',
    title: 'Facilities and Sites',
    subtitle: 'Regional zonal plants, active sites, and building infrastructure',
    coverImage: {
      id: 'facility-cover',
      title: 'Facility and Site Infrastructure',
      description: 'Decentralized production facility and project sites designed for modular scalability across geopolitical zones.',
      svgType: 'facility',
      technicalLabel: 'Regional Zonal Plant 01: Infrastructure Hub',
      imageUrl: facilityImg1,
    },
    photos: [
      {
        id: 'facility-img-1',
        title: 'Facility Interior Layout',
        description: 'Clean interior view of the facility.',
        svgType: 'facility',
        technicalLabel: 'Facility Interior',
        imageUrl: facilityImg1,
      },
      {
        id: 'facility-img-2',
        title: 'Facility Exterior with Team',
        description: 'Exterior view of the facility building with an artisan working.',
        svgType: 'facility',
        technicalLabel: 'Facility Exterior 1',
        imageUrl: facilityImg2,
      },
      {
        id: 'facility-img-3',
        title: 'Modular Site Structure',
        description: 'A completed standalone block structure on site.',
        svgType: 'facility',
        technicalLabel: 'Standalone Structure',
        imageUrl: facilityImg3,
      },
      {
        id: 'facility-img-4',
        title: 'Crane Assisted Operation 1',
        description: 'Crane lifting materials during facility construction.',
        svgType: 'facility',
        technicalLabel: 'Crane Operations 1',
        imageUrl: facilityImg4,
      },
      {
        id: 'facility-img-5',
        title: 'Completed House with Dark Roof',
        description: 'A completed residential structure built with Modify blocks, featuring a multi-hipped dark roof.',
        svgType: 'facility',
        technicalLabel: 'Residential Structure 1',
        imageUrl: facilityImg5,
      },
      {
        id: 'facility-img-6',
        title: 'Completed House with Blue Roof',
        description: 'A single-story residential structure built with Modify blocks, featuring a pitched blue roof.',
        svgType: 'facility',
        technicalLabel: 'Residential Structure 2',
        imageUrl: facilityImg6,
      },
    ],
  },
  {
    id: 'community-workforce',
    title: 'Community and Workforce',
    subtitle: 'Technical training, on-site artisans, and local workforce development',
    coverImage: {
      id: 'workforce-cover',
      title: 'Technical Plant Operations & Artisan Workforce',
      description: 'Trained local operators and artisans managing precision assembly, batching, and site construction.',
      svgType: 'workforce',
      technicalLabel: 'Operations Crew: Regional Training Hub',
      imageUrl: workforceImg1,
    },
    photos: [
      {
        id: 'workforce-img-1',
        title: 'Artisan Scaffolding Work',
        description: 'Artisans on scaffolding coordinating block placement.',
        svgType: 'workforce',
        technicalLabel: 'Elevated Wall Assembly',
        imageUrl: workforceImg1,
      },
      {
        id: 'workforce-img-2',
        title: 'Foundation Trenching',
        description: 'Workers digging and setting out the foundation trenches.',
        svgType: 'workforce',
        technicalLabel: 'Site Preparation',
        imageUrl: workforceImg2,
      },
      {
        id: 'workforce-img-3',
        title: 'Slab Installation',
        description: 'Team coordinating with crane operators for heavy slab placement.',
        svgType: 'workforce',
        technicalLabel: 'Crane Operations',
        imageUrl: workforceImg3,
      },
      {
        id: 'workforce-img-4',
        title: 'On-site Masonry Work',
        description: 'Masons staging material and mixing for a retaining wall.',
        svgType: 'workforce',
        technicalLabel: 'Masonry Staging',
        imageUrl: workforceImg4,
      },
      {
        id: 'workforce-img-5',
        title: 'Precision Alignment',
        description: 'Worker using a spirit level to ensure the top course is plumb.',
        svgType: 'workforce',
        technicalLabel: 'Alignment Check',
        imageUrl: workforceImg5,
      },
    ],
  },
];

