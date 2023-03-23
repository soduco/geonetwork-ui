import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { Choice } from '@geonetwork-ui/ui/inputs'
import {
  AggregationsOrderEnum,
  AggregationsTypesEnum,
} from '@geonetwork-ui/util/shared'
import { Observable } from 'rxjs'
import { filter, map, startWith } from 'rxjs/operators'
import { SearchFacade } from '../state/search.facade'
import { AggregationsService } from '../utils/service/aggregations.service'
import { SearchService } from '../utils/service/search.service'

@Component({
  selector: 'gn-ui-filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterDropdownComponent implements OnInit {
  @Input() fieldName: string
  @Input() title: string
  @Input() order: AggregationsOrderEnum = AggregationsOrderEnum.ASC
  @Input() aggregationType: AggregationsTypesEnum = AggregationsTypesEnum.TERMS

  choices$: Observable<Choice[]>
  selected$ = this.searchFacade.searchFilters$.pipe(
    map((filters) => Object.keys(filters[this.fieldName] ?? {})),
    filter((selected) => !!selected)
  )

  onSelectedValues(values: unknown[]) {
    this.searchService.updateFilters({
      [this.fieldName]: values.reduce<Record<string, boolean>>((acc, val) => {
        return { ...acc, [val.toString()]: true }
      }, {}),
    })
  }

  constructor(
    private searchFacade: SearchFacade,
    private searchService: SearchService,
    private aggregationsService: AggregationsService
  ) {}

  ngOnInit() {
    this.choices$ = (
      this.aggregationType === AggregationsTypesEnum.HISTOGRAM
        ? this.aggregationsService.getHistogramAggregation(
            this.fieldName,
            this.order
          )
        : this.aggregationsService.getFullSearchTermAggregation(
            this.fieldName,
            this.order
          )
    ).pipe(
      map((agg) =>
        agg.buckets.map((bucket) => ({
          label: `${bucket.key} (${bucket.doc_count})`,
          value: bucket.key.toString(),
        }))
      ),
      filter((choices) => !!choices),
      startWith([])
    )
  }
}
