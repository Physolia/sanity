import type {RuleDef, ValidationBuilder} from '../../ruleBuilder'
import type {InitialValueProperty} from '../../types'
import type {FieldDefinition} from '../schemaDefinition'
import type {ImageCrop, ImageHotspot} from '../../../assets'
import type {FileOptions, FileValue} from './file'
import type {ObjectDefinition} from './object'

/** @public */
export type ImageMetadataType = 'blurhash' | 'lqip' | 'palette' | 'exif' | 'location'

/** @public */
export interface ImageOptions extends FileOptions {
  metadata?: ImageMetadataType[]
  hotspot?: boolean
}

/** @public */
export interface ImageValue extends FileValue {
  crop?: ImageCrop
  hotspot?: ImageHotspot
  [index: string]: unknown
}

/** @public */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ImageRule extends RuleDef<ImageRule, ImageValue> {}

/** @public */
export interface ImageDefinition
  extends Omit<ObjectDefinition, 'type' | 'fields' | 'options' | 'groups'> {
  type: 'image'
  fields?: FieldDefinition[]
  options?: ImageOptions
  validation?: ValidationBuilder<ImageRule, ImageValue>
  initialValue?: InitialValueProperty<any, ImageValue>
}
