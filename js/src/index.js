import $ from 'jquery'
import Alert from '../../bootstrap/js/src/alert'
import Button from '../../bootstrap/js/src/button'
import Carousel from '../../bootstrap/js/src/carousel'
import Collapse from '../../bootstrap/js/src/collapse'
import Dropdown from '../../bootstrap/js/src/dropdown'
import Modal from '../../bootstrap/js/src/modal'
import Popover from '../../bootstrap/js/src/popover'
import Scrollspy from '../../bootstrap/js/src/scrollspy'
import Tab from '../../bootstrap/js/src/tab'
import Toast from '../../bootstrap/js/src/toast'
import Tooltip from '../../bootstrap/js/src/tooltip'
import Util from '../../bootstrap/js/src/util'

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(() => {
  if (typeof $ === 'undefined') {
    throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.')
  }

  const version = $.fn.jquery.split(' ')[0].split('.')
  const minMajor = 1
  const ltMajor = 2
  const minMinor = 9
  const minPatch = 1
  const maxMajor = 4

  if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')
  }
})()

export {
  Util,
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Popover,
  Scrollspy,
  Tab,
  Toast,
  Tooltip
}
