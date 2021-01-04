/**
 * GeoNetwork 4.0.2 OpenAPI Documentation
 * This is the description of the GeoNetwork OpenAPI. Use this API to manage your catalog.
 *
 * The version of the OpenAPI document: 4.0.2
 * Contact: geonetwork-users@lists.sourceforge.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { InfoReportApiModel } from './infoReport.api.model'
import { ReportApiModel } from './report.api.model'

export interface XsltMetadataProcessingReportApiModel {
  errors?: Array<ReportApiModel>
  infos?: Array<InfoReportApiModel>
  uuid?: string
  totalRecords?: number
  metadata?: Set<number>
  metadataErrors?: { [key: string]: Array<ReportApiModel> }
  metadataInfos?: { [key: string]: Array<InfoReportApiModel> }
  processId?: string
  noProcessFoundCount?: number
  numberOfRecordNotFound?: number
  numberOfRecordsNotEditable?: number
  numberOfRecordsWithErrors?: number
  numberOfNullRecords?: number
  numberOfRecords?: number
  numberOfRecordsProcessed?: number
  type?: string
  running?: boolean
  endIsoDateTime?: string
  ellapsedTimeInSeconds?: number
  totalTimeInSeconds?: number
  startIsoDateTime?: string
}
