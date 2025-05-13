// Re-export composables to maintain compatibility
import { useCommon, useResourceLookup } from '@/composables'

// For backwards compatibility
import CommonMixin from './common-mixin'
import ResourceLookupMixin from '@/mixins/resource-lookup-mixin'

export {
  // Legacy mixins (deprecated)
  CommonMixin,
  ResourceLookupMixin,
  
  // New composables (preferred)
  useCommon,
  useResourceLookup
}
