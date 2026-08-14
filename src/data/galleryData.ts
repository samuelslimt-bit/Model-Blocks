import { GalleryAlbum } from '../types';
import modifySpecImg from '../assets/images/modify_spec_infographic_1786675625233.jpg';
import modifyRebarImg from '../assets/images/modify_block_rebar_1786675637844.jpg';
import modifyColorsImg from '../assets/images/modify_block_colors_1786675650243.jpg';
import modifyFoundationImg from '../assets/images/modify_block_foundation_1786675662985.jpg';
import modifyOnsiteImg from '../assets/images/modify_block_onsite_1786675675215.jpg';
import facRoofImg from '../assets/images/facility_roof_painting_1786676154788.jpg';
import facCraneSlabImg from '../assets/images/crane_slab_installation_1786676165500.jpg';
import facSiteGarageImg from '../assets/images/site_garage_crane_1786676175845.jpg';
import facUtilitySubstationImg from '../assets/images/facility_utility_substation_1786676280500.jpg';
import facBlueRoofImg from '../assets/images/facility_blue_roof_1786676303811.jpg';
import facInteriorRoomImg from '../assets/images/facility_interior_room_1786676324032.jpg';
import facBungalowImg from '../assets/images/facility_bungalow_house_1786676343762.jpg';
import workSpiritLevelImg from '../assets/images/workforce_spirit_level_1786676679350.jpg';
import workScaffoldingImg from '../assets/images/workforce_scaffolding_team_1786676690401.jpg';
import workFoundationTrenchImg from '../assets/images/workforce_foundation_trench_1786676703266.jpg';
import workRetainingWallImg from '../assets/images/workforce_retaining_wall_1786676713449.jpg';
import workCraneInstallImg from '../assets/images/workforce_crane_installation_1786676732210.jpg';

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'modify-block',
    title: 'The Modify Block',
    subtitle: 'Interlocking geometry, certified specifications, core reinforcement, and site assemblies',
    coverImage: {
      id: 'block-cover',
      title: 'Modify Block Certified Specifications & Structural Versatility',
      description: 'SGS Matrocast certified interlocking system featuring 22.2 MPa average compressive strength, 700 kN maximum load capacity, precision 385 x 180 x 190 mm dimensions, and dry-stacking mortarless alignment.',
      svgType: 'block-detail',
      imageUrl: modifySpecImg,
      technicalLabel: 'Certified Technical Specifications (SANS 1215 / SGS Matrocast)',
    },
    photos: [
      {
        id: 'block-spec-infographic',
        title: 'Certified Technical Specifications & Structural Versatility',
        description: 'Official SGS Matrocast laboratory-validated technical specifications: 22.2 MPa compressive strength, 700 kN load capacity, precision 385 x 180 x 190 mm geometry, mortarless alignment, and advanced structural design applications.',
        svgType: 'block-detail',
        imageUrl: modifySpecImg,
        technicalLabel: 'SGS Matrocast Lab Test Results (SANS 1215)',
      },
      {
        id: 'block-rebar-reinforcement',
        title: 'Hollow-Core Vertical & Horizontal Steel Reinforcement',
        description: 'Close-up detail showing vertical rebar tying and continuous horizontal reinforcement running through recessed conduit channels and hollow core cavities without disrupting interlocking alignment.',
        svgType: 'block-detail',
        imageUrl: modifyRebarImg,
        technicalLabel: 'Core Rebar & Structural Tie Integration',
      },
      {
        id: 'block-color-strata',
        title: 'Interlocking Multi-Tone Dry-Stack Test Wall',
        description: 'Precision factory assembly demonstrating interlocking lugs, recessed stumble design, tight mortarless joints, and varied natural pigment strata (terracotta, sandstone, and standard grey).',
        svgType: 'block-detail',
        imageUrl: modifyColorsImg,
        technicalLabel: 'Precision Interlocking Mechanism & Color Finishes',
      },
      {
        id: 'block-foundation-layout',
        title: 'Substructure Perimeter Foundation Wall',
        description: 'On-site installation showing rapid dry-stacking of Modify Blocks forming a true, plumb perimeter foundation with corner interlocking returns and gravel backfill bed.',
        svgType: 'block-detail',
        imageUrl: modifyFoundationImg,
        technicalLabel: 'Foundation Layout & Perimeter Dry-Stacking',
      },
      {
        id: 'block-site-assembly',
        title: 'Completed Interlocking Wall on Active Project Site',
        description: 'Finished multi-course Modify Block masonry wall constructed on an active residential infrastructure site, demonstrating high structural plumbness and clean surface lines.',
        svgType: 'block-detail',
        imageUrl: modifyOnsiteImg,
        technicalLabel: 'Field Assembly & Full Wall Demonstration',
      },
    ],
  },
  {
    id: 'facilities-sites',
    title: 'Facilities and Sites',
    subtitle: 'Regional zonal plants, active sites, and building infrastructure',
    coverImage: {
      id: 'facility-cover',
      title: 'Facility and Site Construction',
      description: '',
      svgType: 'facility',
      imageUrl: facBungalowImg,
      technicalLabel: 'Infrastructure Facility 01',
    },
    photos: [
      {
        id: 'fac-01',
        title: 'Completed Residential Infrastructure Project',
        description: '',
        svgType: 'facility',
        imageUrl: facBungalowImg,
        technicalLabel: 'Site Reference 01',
      },
      {
        id: 'fac-02',
        title: 'Community Facility Finishing and Roofing',
        description: '',
        svgType: 'facility',
        imageUrl: facRoofImg,
        technicalLabel: 'Site Reference 02',
      },
      {
        id: 'fac-03',
        title: 'Crane-Assisted Hollowcore Slab Installation',
        description: '',
        svgType: 'facility',
        imageUrl: facCraneSlabImg,
        technicalLabel: 'Site Reference 03',
      },
      {
        id: 'fac-04',
        title: 'Facility Yards and Logistics Site',
        description: '',
        svgType: 'facility',
        imageUrl: facSiteGarageImg,
        technicalLabel: 'Site Reference 04',
      },
      {
        id: 'fac-05',
        title: 'Interlocking Masonry Substation Unit',
        description: '',
        svgType: 'facility',
        imageUrl: facUtilitySubstationImg,
        technicalLabel: 'Site Reference 05',
      },
      {
        id: 'fac-06',
        title: 'Pitched Roof Facility Structure',
        description: '',
        svgType: 'facility',
        imageUrl: facBlueRoofImg,
        technicalLabel: 'Site Reference 06',
      },
      {
        id: 'fac-07',
        title: 'Finished Facility Interior Space',
        description: '',
        svgType: 'facility',
        imageUrl: facInteriorRoomImg,
        technicalLabel: 'Site Reference 07',
      },
    ],
  },
  {
    id: 'community-workforce',
    title: 'Community and Workforce',
    subtitle: 'Technical training, on-site artisans, and local workforce development',
    coverImage: {
      id: 'workforce-cover',
      title: 'Workforce Assembly and Alignment',
      description: '',
      svgType: 'workforce',
      imageUrl: workSpiritLevelImg,
      technicalLabel: 'Workforce Reference 01',
    },
    photos: [
      {
        id: 'work-01',
        title: 'Precision Spirit Level Alignment on Wall Assembly',
        description: '',
        svgType: 'workforce',
        imageUrl: workSpiritLevelImg,
        technicalLabel: 'Workforce Reference 01',
      },
      {
        id: 'work-02',
        title: 'Artisan Team on Wall Scaffolding',
        description: '',
        svgType: 'workforce',
        imageUrl: workScaffoldingImg,
        technicalLabel: 'Workforce Reference 02',
      },
      {
        id: 'work-03',
        title: 'Foundation Trenching & Base Course Setting',
        description: '',
        svgType: 'workforce',
        imageUrl: workFoundationTrenchImg,
        technicalLabel: 'Workforce Reference 03',
      },
      {
        id: 'work-04',
        title: 'Masonry Crew Retaining Wall Assembly',
        description: '',
        svgType: 'workforce',
        imageUrl: workRetainingWallImg,
        technicalLabel: 'Workforce Reference 04',
      },
      {
        id: 'work-05',
        title: 'Crane Slabs Installation Team',
        description: '',
        svgType: 'workforce',
        imageUrl: workCraneInstallImg,
        technicalLabel: 'Workforce Reference 05',
      },
    ],
  },
];
