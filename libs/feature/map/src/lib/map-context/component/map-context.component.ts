import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core'
import { MapUtilsService } from '../../utils/map-utils.service'
import Feature from 'ol/Feature'
import { Geometry } from 'ol/geom'

import Map from 'ol/Map'
import { FeatureInfoService } from '../../feature-info/feature-info.service'
import { MapManagerService } from '../../manager/map-manager.service'
import { MapContextModel } from '../map-context.model'
import { MapContextService } from '../map-context.service'

@Component({
  selector: 'gn-ui-map-context',
  templateUrl: './map-context.component.html',
  styleUrls: ['./map-context.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapContextComponent implements OnChanges {
  @Input() context: MapContextModel
  @Output() featureClicked = new EventEmitter<Feature<Geometry>[]>()

  map: Map

  constructor(
    private service: MapContextService,
    private featureInfo: FeatureInfoService,
    private manager: MapManagerService,
    private utils: MapUtilsService
  ) {
    this.map = manager.map
  }

  ngOnChanges() {
    if (this.context) {
      if (this.context.extent) {
        if (!this.map.getSize()) {
          this.map.once('change:size', () => {
            this.updateContextByExtent()
          })
        } else {
          this.updateContextByExtent()
        }
      } else {
        this.service.resetMapFromContext(this.map, this.context)
      }
    }
  }

  private updateContextByExtent() {
    this.context.view = this.utils.getViewFromExtent(
      this.context.extent,
      this.map
    )
    this.service.resetMapFromContext(this.map, this.context)
  }
}
