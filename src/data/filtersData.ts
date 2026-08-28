// data/filtersData.ts
import { Brand, FilterSection } from '../types/filters';

export const BRANDS: Brand[] = [
  { id: '1', name: 'Bell & Ross' },
  { id: '2', name: 'Blancpain' },
  { id: '3', name: 'Breguet' },
  { id: '4', name: 'Breitling' },
  { id: '5', name: 'Cartier' },
  { id: '6', name: 'Chopard' },
  { id: '7', name: 'Frederique Constant' },
  { id: '8', name: 'IWC Schaffhausen' },
  { id: '9', name: 'Jaeger-LeCoultre' },
  { id: '10', name: 'Longines' },
  { id: '11', name: 'Panerai' },
  { id: '12', name: 'Piaget' },
  { id: '13', name: 'Roger Dubuis' },
  { id: '14', name: 'Seiko' },
  { id: '15', name: 'Ulysse Nardin' },
  { id: '16', name: 'Vacheron Constantin' },
  { id: '17', name: 'Zenith' },
];

export const EMIRATES: string[] = ['Abu Dhabi', 'Dubai', 'Sharjah'];

export const CONDITIONS: string[] = ['Excellent', 'Good', 'Mint', 'Very Good'];

export const AUTHENTICATION_STATUS: string[] = ['Any', 'Verified', 'Unverified'];

export const FILTER_SECTIONS: FilterSection[] = [
  {
    id: 'model',
    title: 'Model',
    type: 'search',
    placeholder: 'Search model',
  },
  {
    id: 'brand',
    title: 'Brand',
    type: 'list',
    options: BRANDS.map(b => b.name),
  },
  {
    id: 'emirate',
    title: 'Emirate',
    type: 'chips',
    options: EMIRATES,
  },
  {
    id: 'condition',
    title: 'Condition',
    type: 'chips',
    options: CONDITIONS,
  },
  {
    id: 'price',
    title: 'Price (AED)',
    type: 'range',
  },
  {
    id: 'year',
    title: 'Year',
    type: 'range',
  },
  {
    id: 'authentication',
    title: 'Authentication Status',
    type: 'chips',
    options: AUTHENTICATION_STATUS,
  },
];

  