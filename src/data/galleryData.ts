import { GalleryAlbum } from '../types';

/**
 * PLACEHOLDER GALLERY ASSETS
 * Note: These entries and SVG renderings serve as professional placeholders
 * for production and facility imagery. Replace with official high-resolution
 * photography upon deployment.
 */

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'manufacturing-production',
    title: 'Manufacturing and Production',
    subtitle: 'Block-pressing, vibration compaction, and automated quality checks',
    coverImage: {
      id: 'mfg-cover',
      title: 'Hydraulic Compaction Station',
      description: 'High-pressure hydraulic press station for precision block curing and compaction.',
      svgType: 'manufacturing',
      technicalLabel: 'Plant Line 01: Automated Hydraulic Press (Placeholder)',
    },
    photos: [
      {
        id: 'mfg-01',
        title: 'Automated Hydraulic Compaction Rig',
        description: 'Vibration and high-tonnage compaction system ensuring uniform 22.2 MPa density across each unit.',
        svgType: 'manufacturing',
        technicalLabel: 'Production Unit A1: Compaction Stage (Placeholder)',
      },
      {
        id: 'mfg-02',
        title: 'Precision Aggregate Batching System',
        description: 'Computer-controlled moisture and aggregate ratio blending unit for consistency.',
        svgType: 'manufacturing',
        technicalLabel: 'Batching Unit: Moisture Calibration (Placeholder)',
      },
      {
        id: 'mfg-03',
        title: 'Automated De-molding and Curing Racks',
        description: 'Controlled humidity curing bay ensuring gradual hydration and low permeability.',
        svgType: 'manufacturing',
        technicalLabel: 'Curing Bay 04: Hydration Cycle (Placeholder)',
      },
      {
        id: 'mfg-04',
        title: 'SGS Matrocast Quality Sampling Bench',
        description: 'On-site compressive testing and dimensional tolerance validation per SANS 1215 standards.',
        svgType: 'manufacturing',
        technicalLabel: 'Quality Control Bench: Batch Validation (Placeholder)',
      },
    ],
  },
  {
    id: 'modify-block',
    title: 'The Modify Block',
    subtitle: 'Interlocking geometry, hollow cores, and structural assemblies',
    coverImage: {
      id: 'block-cover',
      title: 'Interlocking Engineered Block',
      description: 'Standard 385 x 190 x 180 mm interlocking unit with dual hollow cores.',
      svgType: 'block-detail',
      technicalLabel: 'Modify Block Geometry: Ref 65749 (Placeholder)',
    },
    photos: [
      {
        id: 'block-01',
        title: 'Standard Interlocking Unit (385 x 190 x 180 mm)',
        description: 'Engineered interlocking tongue-and-groove interface eliminating thick horizontal mortar joints.',
        svgType: 'block-detail',
        technicalLabel: 'Component Specification: Unit Model ST-180 (Placeholder)',
      },
      {
        id: 'block-02',
        title: 'Dual Hollow-Core Conduit Alignment',
        description: 'Vertical alignment of cores allows continuous runs for electrical wiring and plumbing pipes.',
        svgType: 'block-detail',
        technicalLabel: 'Conduit Channel Integration Detail (Placeholder)',
      },
      {
        id: 'block-03',
        title: 'Dry-Stacking Wall Assembly Test',
        description: 'Modular wall section demonstrating precise self-alignment and tight joints.',
        svgType: 'block-detail',
        technicalLabel: 'Wall Assembly Test: Tolerance Verification (Placeholder)',
      },
      {
        id: 'block-04',
        title: 'Corner Interlock and Grout Integration',
        description: 'Corner block configuration showing rebar placement and localized structural grout fill.',
        svgType: 'block-detail',
        technicalLabel: 'Structural Corner Detail (Placeholder)',
      },
    ],
  },
  {
    id: 'facilities-sites',
    title: 'Facilities and Sites',
    subtitle: 'Regional zonal plants, stockyards, and assembly infrastructure',
    coverImage: {
      id: 'facility-cover',
      title: 'Zonal Plant Layout and Logistics Yard',
      description: 'Decentralized production facility designed for modular scalability across geopolitical zones.',
      svgType: 'facility',
      technicalLabel: 'Regional Zonal Plant 01: South-West Hub (Placeholder)',
    },
    photos: [
      {
        id: 'fac-01',
        title: 'Primary Zonal Manufacturing Facility',
        description: 'Enclosed batching plant, pressing shed, and covered storage infrastructure.',
        svgType: 'facility',
        technicalLabel: 'Zonal Facility Overview: South-West (Placeholder)',
      },
      {
        id: 'fac-02',
        title: 'Organized Distribution Stockyard',
        description: 'Palletized stock waiting for regional dispatch to infrastructure projects.',
        svgType: 'facility',
        technicalLabel: 'Logistics Staging Area: Pallet Storage (Placeholder)',
      },
      {
        id: 'fac-03',
        title: 'Satellite Assembly and Batching Site',
        description: 'Modular satellite plant footprint designed for swift deployment in state capitals.',
        svgType: 'facility',
        technicalLabel: 'Satellite Plant Blueprint: Zone Expansion (Placeholder)',
      },
      {
        id: 'fac-04',
        title: 'Quality Testing Laboratory Site',
        description: 'Calibrated laboratory area for continuous compressive stress and absorption checks.',
        svgType: 'facility',
        technicalLabel: 'SANAS Accredited Test Facility Layout (Placeholder)',
      },
    ],
  },
  {
    id: 'community-workforce',
    title: 'Community and Workforce',
    subtitle: 'Technical training, plant operators, and local capacity building',
    coverImage: {
      id: 'workforce-cover',
      title: 'Technical Plant Operations Team',
      description: 'Trained local operators managing precision batching and machine maintenance.',
      svgType: 'workforce',
      technicalLabel: 'Operations Crew: Regional Plant Training (Placeholder)',
    },
    photos: [
      {
        id: 'work-01',
        title: 'Technical Operators at Batching Console',
        description: 'Local technicians operating the digital batching and hydration control interface.',
        svgType: 'workforce',
        technicalLabel: 'Operator Certification Program (Placeholder)',
      },
      {
        id: 'work-02',
        title: 'Quality Assurance and Sampling Staff',
        description: 'Quality technicians conducting hourly dimensional and density audit logs.',
        svgType: 'workforce',
        technicalLabel: 'Plant Quality Team: Batch Inspection (Placeholder)',
      },
      {
        id: 'work-03',
        title: 'Masonry and Dry-Stack Training Session',
        description: 'Practical training for regional contractors and artisans on interlocking construction methods.',
        svgType: 'workforce',
        technicalLabel: 'Vocational Masonry Workshop (Placeholder)',
      },
      {
        id: 'work-04',
        title: 'Plant Safety and Maintenance Team',
        description: 'Dedicated team ensuring strict adherence to industrial safety and machine upkeep protocols.',
        svgType: 'workforce',
        technicalLabel: 'Plant Safety & Operations Review (Placeholder)',
      },
    ],
  },
];
