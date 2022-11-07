import { MetadataLinkType } from '../models'
import { deepFreeze } from '../utils'

export const LINK_FIXTURES = deepFreeze({
  readmeLink: {
    protocol: 'WWW:LINK',
    description: 'Readme page',
    label: 'Readme page',
    url: 'http://envlit.ifremer.fr/resultats/quadrige',
    type: MetadataLinkType.OTHER,
  },
  doiLink: {
    protocol: 'WWW:DOI',
    description: 'DOI for the resource',
    label: 'DOI for the resource',
    url: 'http://doi.org/123-456-678',
    type: MetadataLinkType.OTHER,
  },
  dataCsv: {
    protocol: 'WWW:DOWNLOAD',
    description: 'Data in CSV format',
    label: 'Data in CSV format',
    name: 'abc.csv',
    url: 'http://my.server/files/abc.csv',
    type: MetadataLinkType.DOWNLOAD,
  },
  dataPdf: {
    protocol: 'WWW:DOWNLOAD',
    description: 'Data in PDF format',
    label: 'Data in PDF format',
    name: 'abc.pdf',
    url: 'https://my.server/files/abc.pdf',
    type: MetadataLinkType.DOWNLOAD,
  },
  dataJpg: {
    protocol: 'WWW:DOWNLOAD',
    description: 'Data in JPG format',
    label: 'Data in JPG format',
    name: 'abc.jpg',
    url: 'https://my.server/files/abc.jpg',
    type: MetadataLinkType.DOWNLOAD,
  },
  dataZip: {
    protocol: 'WWW:DOWNLOAD',
    description: 'Data in ZIP format',
    label: 'Data in ZIP format',
    name: 'abc.zip',
    url: 'https://my.server/files/abc.zip',
    type: MetadataLinkType.DOWNLOAD,
  },
  dataXls: {
    protocol: 'WWW:DOWNLOAD',
    description: 'Data in XLS format',
    label: 'Data in XLS format',
    name: 'abc.xls',
    url: 'https://my.server/files/abc.xls',
    type: MetadataLinkType.DOWNLOAD,
  },
  dataXlsx: {
    protocol: 'WWW:DOWNLOAD',
    description: 'Data in XLSX format',
    label: 'Data in XLSX format',
    name: 'abc.XLSX',
    url: 'https://my.server/files/abc.XLSX',
    type: MetadataLinkType.DOWNLOAD,
  },
  dataJson: {
    protocol: 'WWW:DOWNLOAD',
    description: 'Data in JSON format',
    label: 'Data in JSON format',
    name: 'abc.json',
    url: 'https://my.server/files/abc.json',
    type: MetadataLinkType.DOWNLOAD,
  },
  geodataJson: {
    protocol: 'WWW:DOWNLOAD',
    description: 'Geographic data in GeoJSON format',
    label: 'Geographic data in GeoJSON format',
    name: 'dataset.geojson',
    url: 'http://my.server/files/geographic/dataset.geojson',
    type: MetadataLinkType.DOWNLOAD,
  },
  geodataJsonWithMimeType: {
    protocol: 'WWW:DOWNLOAD:application/vnd.geo+json',
    description: 'Geographic data in GeoJSON format',
    label: 'Geographic data in GeoJSON format',
    name: 'dataset.geojson',
    url: 'http://my.server/files/geographic/dataset',
    mimeType: 'application/vnd.geo+json',
    type: MetadataLinkType.DOWNLOAD,
  },
  geodataKml: {
    protocol: 'WWW:DOWNLOAD',
    description: 'Geographic data in KML format',
    label: 'Geographic data in KML format',
    name: 'dataset.kml',
    url: 'http://my.server/files/geographic/dataset.kml',
    type: MetadataLinkType.DOWNLOAD,
  },
  geodataGpkg: {
    protocol: 'WWW:DOWNLOAD',
    description: 'Geographic data in geopackage format',
    label: 'Geographic data in geopackage format',
    name: 'dataset.gpkg',
    url: 'http://my.server/files/geographic/dataset.gpkg',
    type: MetadataLinkType.DOWNLOAD,
  },
  geodataShp: {
    protocol: 'WWW:DOWNLOAD',
    description: 'Geographic data in shapefile format',
    label: 'Geographic data in shapefile format',
    name: 'dataset.shp',
    url: 'http://my.server/files/geographic/dataset.zip',
    type: MetadataLinkType.DOWNLOAD,
  },
  geodataShpWithMimeType: {
    protocol: 'WWW:DOWNLOAD:x-gis/x-shapefile',
    description: 'Geographic data in shapefile format',
    label: 'Geographic data in shapefile format',
    name: 'dataset',
    url: 'http://my.server/files/geographic/dataset.zip',
    mimeType: 'x-gis/x-shapefile',
    type: MetadataLinkType.DOWNLOAD,
  },
  geodataWms: {
    protocol: 'OGC:WMS',
    name: 'mylayer',
    label: 'mylayer',
    url: 'https://my.ogc.server/wms',
    type: MetadataLinkType.WMS,
  },
  geodataWmts: {
    protocol: 'OGC:WMTS',
    name: 'mylayer',
    label: 'mylayer',
    url: 'https://my.ogc.server/wmts',
    type: MetadataLinkType.WMTS,
  },
  geodataWfs: {
    protocol: 'OGC:WFS',
    name: 'mylayer',
    label: 'mylayer',
    url: 'https://my.ogc.server/wfs',
    type: MetadataLinkType.WFS,
  },
  geodataWms2: {
    protocol: 'OGC:WMS',
    name: 'myotherlayer',
    label: 'myotherlayer',
    url: 'https://my.ogc.server/wms',
    type: MetadataLinkType.WMS,
  },
  geodataWfs2: {
    protocol: 'OGC:WFS',
    name: 'myotherlayer',
    label: 'myotherlayer',
    url: 'https://my.ogc.server/wfs',
    type: MetadataLinkType.WFS,
  },
  geodataRest: {
    protocol: 'ESRI:REST',
    name: 'myrestlayer',
    label: 'myrestlayer',
    url: 'https://my.esri.server/FeatureServer',
    type: MetadataLinkType.ESRI_REST,
  },
  geodataRestWfs: {
    protocol: 'OGC:WFS',
    name: 'mywfsrestlayer',
    label: 'mywfsrestlayer',
    url: 'https://my.esri.server/WFSServer',
    type: MetadataLinkType.WFS,
  },
  maplayerRest: {
    protocol: 'ESRI:REST',
    name: 'myotherrestlayer',
    label: 'myotherrestlayer',
    url: 'https://my.esri.server/MapServer',
    type: MetadataLinkType.OTHER,
  },
  landingPage: {
    protocol: 'WWW:LINK:LANDING_PAGE',
    name: 'landingpage link',
    label: 'landingpage link',
    url: 'https://landing.page',
    type: MetadataLinkType.LANDING_PAGE,
  },
  unknownFormat: {
    protocol: 'WWW:DOWNLOAD-1.0-http--download',
    name: 'Vue HTML des métadonnées sur internet',
    label: 'Vue HTML des métadonnées sur internet',
    url: 'http://catalogue.geo-ide.developpement-durable.gouv.fr/catalogue/srv/fre/catalog.search#/metadata/fr-120066022-jdd-199fd14c-2abb-4c14-b0f8-6c8d92e7b480',
    type: MetadataLinkType.DOWNLOAD,
  },
})
