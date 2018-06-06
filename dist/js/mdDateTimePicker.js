(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'moment', 'draggabilly'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('moment'), require('draggabilly'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.moment, global.draggabilly);
    global.mdDateTimePicker = mod.exports;
  }
})(this, function (exports, _moment, _draggabilly) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _moment2 = _interopRequireDefault(_moment);

  var _draggabilly2 = _interopRequireDefault(_draggabilly);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0, descriptor; i < props.length; i++) {
        descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1;
        descriptor.configurable = !0;
        if ("value" in descriptor) descriptor.writable = !0;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var mdDateTimePicker = function () {
    /**
    * [constructor of the mdDateTimePicker]
    *
    * @method constructor
    *
    * @param  {String}   type = 'date' or 'time                           [type of dialog]
    * @param  {moment}   init                                             [initial value for the dialog date or time, defaults to today] [@default = today]
    * @param  {moment}   past                                             [the past moment till which the calendar shall render] [@default = exactly 21 Years ago from init]
    * @param  {moment}   future                                           [the future moment till which the calendar shall render] [@default = init]
    * @param  {Boolean}  mode                                             [this value tells whether the time dialog will have the 24 hour mode (true) or 12 hour mode (false)] [@default = false]
    * @param  {String}   orientation = 'LANDSCAPE' or 'PORTRAIT'          [force the orientation of the picker @default = 'LANDSCAPE']
    * @param  {element}  trigger                                          [element on which all the events will be dispatched e.g var foo = document.getElementById('bar'), here element = foo]
    * @param  {String}  ok = 'ok'                                         [ok button's text]
    * @param  {String}  cancel = 'cancel'                                 [cancel button's text]
    * @param  {Boolean} colon = true                                      [add an option to enable quote in 24 hour mode]
    * @param  {Boolean} autoClose = false                                 [close dialog on date/time selection]
    * @param  {Boolean} inner24 = false                                   [if 24-hour mode and (true), the PM hours shows in an inner dial]
    * @param  {String} prevHandle = <div class="mddtp-prev-handle"></div> [The HTML content of the handle to go to previous month]
    * @param  {String} nextHandle = <div class="mddtp-next-handle"></div> [The HTML content of the handle to go to next month]
    *
    * @return {Object}                                                    [mdDateTimePicker]
    */
    function mdDateTimePicker(_ref) {
      var type = _ref.type,
          _ref$init = _ref.init,
          init = _ref$init === undefined ? (0, _moment2.default)() : _ref$init,
          _ref$past = _ref.past,
          past = _ref$past === undefined ? (0, _moment2.default)().subtract(21, 'years') : _ref$past,
          _ref$future = _ref.future,
          future = _ref$future === undefined ? init : _ref$future,
          _ref$mode = _ref.mode,
          mode = _ref$mode === undefined ? !1 : _ref$mode,
          _ref$orientation = _ref.orientation,
          orientation = _ref$orientation === undefined ? 'LANDSCAPE' : _ref$orientation,
          _ref$trigger = _ref.trigger,
          trigger = _ref$trigger === undefined ? '' : _ref$trigger,
          _ref$ok = _ref.ok,
          ok = _ref$ok === undefined ? 'ok' : _ref$ok,
          _ref$cancel = _ref.cancel,
          cancel = _ref$cancel === undefined ? 'cancel' : _ref$cancel,
          _ref$unset = _ref.unset,
          unset = _ref$unset === undefined ? 'not set' : _ref$unset,
          _ref$colon = _ref.colon,
          colon = _ref$colon === undefined ? !0 : _ref$colon,
          _ref$autoClose = _ref.autoClose,
          autoClose = _ref$autoClose === undefined ? !1 : _ref$autoClose,
          _ref$alignTo = _ref.alignTo,
          alignTo = _ref$alignTo === undefined ? null : _ref$alignTo,
          _ref$begin = _ref.begin,
          begin = _ref$begin === undefined ? new Date() : _ref$begin,
          _ref$end = _ref.end,
          end = _ref$end === undefined ? new Date() : _ref$end,
          _ref$inner = _ref.inner24,
          inner24 = _ref$inner === undefined ? !1 : _ref$inner,
          _ref$prevHandle = _ref.prevHandle,
          prevHandle = _ref$prevHandle === undefined ? '<div class="mddtp-prev-handle"></div>' : _ref$prevHandle,
          _ref$nextHandle = _ref.nextHandle,
          nextHandle = _ref$nextHandle === undefined ? '<div class="mddtp-next-handle"></div>' : _ref$nextHandle,
          _ref$container = _ref.container,
          container = _ref$container === undefined ? document.body : _ref$container,
          _ref$ranges = _ref.ranges,
          ranges = _ref$ranges === undefined ? null : _ref$ranges,
          _ref$injectElement = _ref.injectElement,
          injectElement = _ref$injectElement === undefined ? null : _ref$injectElement;

      _classCallCheck(this, mdDateTimePicker);

      this._type = type;
      this._init = init;
      this._past = past;
      this._future = future;
      this._mode = mode;
      this._orientation = orientation;
      this._trigger = trigger;
      this._ok = ok;
      this._cancel = cancel;
      this._unset = unset;
      this._colon = colon;
      this._autoClose = autoClose;
      this._inner24 = inner24;
      this._prevHandle = prevHandle;
      this._nextHandle = nextHandle;
      this._container = container;
      this._alignTo = alignTo;
      this._ranges = ranges;
      this._begin = (0, _moment2.default)(begin);
      this._end = (0, _moment2.default)(end);
      this._injectElement = injectElement; // inject element to range panel and style it externally

      /**
      * [dialog selected classes have the same structure as dialog but one level down]
      * @type {Object}
      * All declarations starting with _ are considered @private
      * e.g
      * sDialog = {
      *   picker: 'some-picker-selected'
      * }
      */
      this._sDialog = {};

      // attach the dialog if not present
      if (typeof document !== 'undefined' && !this._container.querySelector('#mddtp-picker__' + this._type)) {
        this._buildDialog();
      }
    }

    /**
    * [time to get or set the current picker's moment]
    *
    * @method time
    *
    */


    _createClass(mdDateTimePicker, [{
      key: 'hide',
      value: function hide() {
        this._selectDialog();
        this._hideDialog();
      }
    }, {
      key: 'show',
      value: function show() {
        this._selectDialog();
        if (this._type === 'date') {
          this._initDateDialog(this._init);
        } else if (this._type === 'time') {
          this._initTimeDialog(this._init);
        }
        this._showDialog();
      }
    }, {
      key: 'isOpen',
      value: function isOpen() {
        this._selectDialog();

        return !!mdDateTimePicker.dialog.state;
      }
    }, {
      key: 'isClosed',
      value: function isClosed() {
        this._selectDialog();

        return !mdDateTimePicker.dialog.state;
      }
    }, {
      key: 'toggle',
      value: function toggle() {
        this._selectDialog();
        // work according to the current state of the dialog
        if (mdDateTimePicker.dialog.state) {
          this.hide();
        } else {
          this.show();
        }
      }
    }, {
      key: '_selectDialog',
      value: function _selectDialog() {
        // now do what you normally would do
        this._sDialog.picker = this._container.querySelector('#mddtp-picker__' + [this._type]);
        /**
        * [sDialogEls stores all inner components of the selected dialog or sDialog to be later getElementById]
        *
        * @type {Array}
        */
        var sDialogEls = ['viewHolder', 'years', 'header', 'unset', 'ranger', 'injected', 'inner', 'cancel', 'ok', 'left', 'right', 'previous', 'current', 'next', 'subtitle', 'title', 'titleDay', 'titleMonth', 'AM', 'PM', 'needle', 'hourView', 'minuteView', 'hour', 'minute', 'fakeNeedle', 'circularHolder', 'circle', 'dotSpan'],
            i = sDialogEls.length;

        while (i--) {
          this._sDialog[sDialogEls[i]] = this._container.querySelector('#mddtp-' + this._type + '__' + sDialogEls[i]);
        }

        this._sDialog.tDate = this._init.clone();
        this._sDialog.sDate = this._init.clone();

        if (this._ranges) {
          this._sDialog.bDate = this._begin.clone();
          this._sDialog.eDate = this._end.clone();
        }
      }
    }, {
      key: '_showDialog',
      value: function _showDialog() {
        var me = this,
            zoomIn = 'zoomIn';

        mdDateTimePicker.dialog.state = !0;
        this._sDialog.picker.classList.remove('mddtp-picker--inactive');
        this._sDialog.picker.classList.add(zoomIn);

        if (this._alignTo) {
          var rect = this._alignTo.getBoundingClientRect(),
              top = rect.y + rect.height + 8 + this._sDialog.picker.offsetHeight / 2,
              left = rect.left + rect.width - this._sDialog.picker.offsetWidth;


          this._sDialog.picker.style.top = top + 'px';
          this._sDialog.picker.style.left = left + 'px';
        }

        // if the dialog is forced into portrait mode
        if (this._orientation === 'PORTRAIT') {
          this._sDialog.picker.classList.add('mddtp-picker--portrait');
        }
        setTimeout(function () {
          me._sDialog.picker.classList.remove(zoomIn);
        }, 300);
      }
    }, {
      key: '_hideDialog',
      value: function _hideDialog() {
        var me = this,
            years = this._sDialog.years,
            title = me._sDialog.title,
            subtitle = me._sDialog.subtitle,
            inner = this._sDialog.inner,
            ranger = this._sDialog.ranger,
            injected = this._sDialog.injected,
            AM = this._sDialog.AM,
            PM = this._sDialog.PM,
            minute = this._sDialog.minute,
            hour = this._sDialog.hour,
            minuteView = this._sDialog.minuteView,
            hourView = this._sDialog.hourView,
            picker = this._sDialog.picker,
            needle = this._sDialog.needle,
            dotSpan = this._sDialog.dotSpan,
            active = 'mddtp-picker__color--active',
            inactive = 'mddtp-picker--inactive',
            invisible = 'mddtp-picker__years--invisible',
            zoomIn = 'zoomIn',
            zoomOut = 'zoomOut',
            hidden = 'mddtp-picker__circularView--hidden',
            selection = 'mddtp-picker__selection';

        mdDateTimePicker.dialog.state = !1;
        mdDateTimePicker.dialog.view = !0;
        this._sDialog.picker.classList.add(zoomOut);
        // reset classes
        if (this._type === 'date') {
          years.classList.remove(zoomIn, zoomOut);
          years.classList.add(invisible);
          title.classList.remove(active);
          subtitle.classList.add(active);
          inner.classList.remove(zoomOut);
          injected && injected.classList.remove(zoomOut);
          ranger && ranger.classList.remove(zoomOut);
        } else {
          AM.classList.remove(active);
          PM.classList.remove(active);
          minute.classList.remove(active);
          hour.classList.add(active);
          minuteView.classList.add(hidden);
          hourView.classList.remove(hidden);
          subtitle.style.display = 'none';
          dotSpan.style.display = 'none';
          needle.className = selection;
        }
        setTimeout(function () {
          // remove portrait mode
          me._sDialog.picker.classList.remove('mddtp-picker--portrait');
          me._sDialog.picker.classList.remove(zoomOut);
          me._sDialog.picker.classList.add(inactive);
          // clone elements and add them again to clear events attached to them
          var pickerClone = picker.cloneNode(!0);
          picker.parentNode.replaceChild(pickerClone, picker);
        }, 300);
      }
    }, {
      key: '_buildDialog',
      value: function _buildDialog() {
        var type = this._type,
            docfrag = document.createDocumentFragment(),
            container = document.createElement('div'),
            header = document.createElement('div'),
            body = document.createElement('div'),
            action = document.createElement('div'),
            cancel = document.createElement('button'),
            ok = document.createElement('button'),
            unset = document.createElement('button');
        // outer most container of the picker

        // header container of the picker

        // body container of the picker

        // action elements container

        // ... add properties to them
        container.id = 'mddtp-picker__' + type;
        container.classList.add('mddtp-picker');
        container.classList.add('mddtp-picker-' + type);
        container.classList.add('mddtp-picker--inactive');
        container.classList.add('animated');
        this._addId(header, 'header');
        this._addClass(header, 'header');
        // add header to container
        container.appendChild(header);
        this._addClass(body, 'body');
        body.appendChild(action);
        // add body to container
        container.appendChild(body);
        // add stuff to header and body according to dialog type
        if (type === 'date') {
          var outer = document.createElement('div'),
              inner = document.createElement('div'),
              subtitle = document.createElement('div'),
              title = document.createElement('div'),
              titleDay = document.createElement('div'),
              titleMonth = document.createElement('div'),
              viewHolder = document.createElement('div'),
              views = document.createElement('ul'),
              previous = document.createElement('li'),
              current = document.createElement('li'),
              next = document.createElement('li'),
              left = document.createElement('button'),
              right = document.createElement('button'),
              years = document.createElement('ul');

          // inside header
          // adding properties to them
          this._addId(subtitle, 'subtitle');
          this._addClass(subtitle, 'subtitle');
          this._addId(title, 'title');
          this._addClass(title, 'title', ['mddtp-picker__color--active']);
          this._addId(titleDay, 'titleDay');
          this._addId(titleMonth, 'titleMonth');
          // add title stuff to it
          title.appendChild(titleDay);
          title.appendChild(titleMonth);
          // add them to header
          header.appendChild(subtitle);
          header.appendChild(title);
          // inside body
          // inside viewHolder
          this._addId(viewHolder, 'viewHolder');
          this._addClass(viewHolder, 'viewHolder', ['animated']);
          this._addClass(views, 'views');
          this._addId(previous, 'previous');
          previous.classList.add('mddtp-picker__view');
          this._addId(current, 'current');
          current.classList.add('mddtp-picker__view');
          this._addId(next, 'next');
          next.classList.add('mddtp-picker__view');
          // fill the views
          this._addView(previous);
          this._addView(current);
          this._addView(next);
          // add them
          viewHolder.appendChild(views);
          views.appendChild(previous);
          views.appendChild(current);
          views.appendChild(next);
          // inside body again
          this._addId(left, 'left');
          left.classList.add('mddtp-button');
          this._addClass(left, 'left');
          left.setAttribute('type', 'button');
          left.innerHTML = this._prevHandle;

          this._addId(right, 'right');
          right.classList.add('mddtp-button');
          this._addClass(right, 'right');
          right.setAttribute('type', 'button');
          right.innerHTML = this._nextHandle;

          this._addId(years, 'years');
          this._addClass(years, 'years', ['mddtp-picker__years--invisible', 'animated']);
          // add them to body

          this._addClass(inner, 'inner', ['animated']);
          this._addId(inner, 'inner');
          inner.appendChild(viewHolder);
          inner.appendChild(left);
          inner.appendChild(right);

          this._addClass(outer, 'outer');
          outer.appendChild(inner);

          if (this._ranges) {
            var ranger = document.createElement('div');
            this._addId(ranger, 'ranger');
            this._addClass(ranger, 'ranger', ['animated']);
            outer.appendChild(ranger);
          }

          if (this._injectElement) {
            var injected = document.createElement('div');
            this._addId(injected, 'injected');
            this._addClass(injected, 'injected', ['animated']);
            outer.appendChild(injected);
          }

          outer.appendChild(years);
          body.appendChild(outer);
        } else {
          var _title = document.createElement('div'),
              hour = document.createElement('span'),
              span = document.createElement('span'),
              minute = document.createElement('span'),
              _subtitle = document.createElement('div'),
              AM = document.createElement('div'),
              PM = document.createElement('div'),
              circularHolder = document.createElement('div'),
              needle = document.createElement('div'),
              dot = document.createElement('span'),
              line = document.createElement('span'),
              circle = document.createElement('span'),
              minuteView = document.createElement('div'),
              fakeNeedle = document.createElement('div'),
              hourView = document.createElement('div');

          // add properties to them
          // inside header
          this._addId(_title, 'title');
          this._addClass(_title, 'title');
          this._addId(hour, 'hour');
          hour.classList.add('mddtp-picker__color--active');
          span.textContent = ':';
          this._addId(span, 'dotSpan');
          span.style.display = 'none';
          this._addId(minute, 'minute');
          this._addId(_subtitle, 'subtitle');
          this._addClass(_subtitle, 'subtitle');
          _subtitle.style.display = 'none';
          this._addId(AM, 'AM');
          // AM.textContent = 'AM'
          // Change to 'AM' to Locale Meridiem
          AM.textContent = (0, _moment2.default)().localeData().meridiem(1, 1, !0);
          this._addId(PM, 'PM');
          // PM.textContent = 'PM'
          // Change to 'PM' to Locale Meridiem
          PM.textContent = (0, _moment2.default)().localeData().meridiem(13, 1, !0);
          // add them to title and subtitle
          _title.appendChild(hour);
          _title.appendChild(span);
          _title.appendChild(minute);
          _subtitle.appendChild(AM);
          _subtitle.appendChild(PM);
          // add them to header
          header.appendChild(_title);
          header.appendChild(_subtitle);
          // inside body
          this._addId(circularHolder, 'circularHolder');
          this._addClass(circularHolder, 'circularHolder');
          this._addId(needle, 'needle');
          needle.classList.add('mddtp-picker__selection');
          this._addClass(dot, 'dot');
          this._addClass(line, 'line');
          this._addId(circle, 'circle');
          this._addClass(circle, 'circle');
          this._addId(minuteView, 'minuteView');
          minuteView.classList.add('mddtp-picker__circularView');
          minuteView.classList.add('mddtp-picker__circularView--hidden');
          this._addId(fakeNeedle, 'fakeNeedle');
          fakeNeedle.classList.add('mddtp-picker__circle--fake');
          this._addId(hourView, 'hourView');
          hourView.classList.add('mddtp-picker__circularView');
          // add them to needle
          needle.appendChild(dot);
          needle.appendChild(line);
          needle.appendChild(circle);
          // add them to circularHolder
          circularHolder.appendChild(needle);
          circularHolder.appendChild(minuteView);
          circularHolder.appendChild(fakeNeedle);
          circularHolder.appendChild(hourView);
          // add them to body
          body.appendChild(circularHolder);
        }
        action.classList.add('mddtp-picker__action');

        if (this._autoClose === !0) {
          action.style.display = 'none';
        }

        this._addId(unset, 'unset');
        unset.classList.add('mddtp-button');
        unset.setAttribute('type', 'button');
        this._addId(cancel, 'cancel');
        cancel.classList.add('mddtp-button');
        cancel.setAttribute('type', 'button');
        this._addId(ok, 'ok');
        ok.classList.add('mddtp-button');
        ok.setAttribute('type', 'button');
        // add actions
        this._unset && action.appendChild(unset);
        action.appendChild(cancel);
        action.appendChild(ok);
        // add actions to body
        body.appendChild(action);
        docfrag.appendChild(container);
        // add the container to the end of body
        this._container.appendChild(docfrag);
      }
    }, {
      key: '_initTimeDialog',
      value: function _initTimeDialog(m) {
        var hour = this._sDialog.hour,
            minute = this._sDialog.minute,
            subtitle = this._sDialog.subtitle,
            dotSpan = this._sDialog.dotSpan;

        // switch according to 12 hour or 24 hour mode
        if (this._mode) {
          // CHANGED exception case for 24 => 0 issue #57
          var text = parseInt(m.format('H'), 10);
          if (text === 0) {
            text = '00';
          }
          this._fillText(hour, text);
          // add the configurable colon in this mode issue #56
          if (this._colon) {
            dotSpan.style.display = 'initial';
          }
        } else {
          this._fillText(hour, m.format('h'));
          // this._sDialog[m.format('A')].classList.add('mddtp-picker__color--active')
          // Using isPM function for Find PM
          if (m._locale.isPM(m.format('A'))) {
            this._sDialog.PM.classList.add('mddtp-picker__color--active');
          } else {
            this._sDialog.AM.classList.add('mddtp-picker__color--active');
          }
          subtitle.style.display = 'initial';
          dotSpan.style.display = 'initial';
        }
        this._fillText(minute, m.format('mm'));
        this._initHour();
        this._initMinute();
        this._attachEventHandlers();
        this._changeM();
        this._dragDial();
        this._switchToView(hour);
        this._switchToView(minute);
        this._addClockEvent();
        this._setButtonText();
      }
    }, {
      key: '_initHour',
      value: function _initHour() {
        var hourView = this._sDialog.hourView,
            needle = this._sDialog.needle,
            hour = 'mddtp-hour__selected',
            selected = 'mddtp-picker__cell--selected',
            rotate = 'mddtp-picker__cell--rotate-',
            rotate24 = 'mddtp-picker__cell--rotate24',
            cell = 'mddtp-picker__cell',
            docfrag = document.createDocumentFragment(),
            hourNow = void 0;

        if (this._mode) {
          var degreeStep = this._inner24 === !0 ? 10 : 5;
          hourNow = parseInt(this._sDialog.tDate.format('H'), 10);
          for (var i = 1, j = degreeStep; i <= 24; i++, j += degreeStep) {
            var div = document.createElement('div'),
                span = document.createElement('span');

            div.classList.add(cell);
            // CHANGED exception case for 24 => 0 issue #57
            if (i === 24) {
              span.textContent = '00';
            } else {
              span.textContent = i;
            }

            var position = j;
            if (this._inner24 === !0 && i > 12) {
              position -= 120;
              div.classList.add(rotate24);
            }

            div.classList.add(rotate + position);
            if (hourNow === i) {
              div.id = hour;
              div.classList.add(selected);
              needle.classList.add(rotate + position);
            }
            // CHANGED exception case for 24 => 0 issue #58
            if (i === 24 && hourNow === 0) {
              div.id = hour;
              div.classList.add(selected);
              needle.classList.add(rotate + position);
            }
            div.appendChild(span);
            docfrag.appendChild(div);
          }
        } else {
          hourNow = parseInt(this._sDialog.tDate.format('h'), 10);
          for (var _i = 1, _j = 10; _i <= 12; _i++, _j += 10) {
            var _div = document.createElement('div'),
                _span = document.createElement('span');

            _div.classList.add(cell);
            _span.textContent = _i;
            _div.classList.add(rotate + _j);
            if (hourNow === _i) {
              _div.id = hour;
              _div.classList.add(selected);
              needle.classList.add(rotate + _j);
            }
            _div.appendChild(_span);
            docfrag.appendChild(_div);
          }
        }
        // empty the hours
        while (hourView.lastChild) {
          hourView.removeChild(hourView.lastChild);
        }
        // set inner html accordingly
        hourView.appendChild(docfrag);
      }
    }, {
      key: '_initMinute',
      value: function _initMinute() {
        var minuteView = this._sDialog.minuteView,
            minuteNow = parseInt(this._sDialog.tDate.format('m'), 10),
            sMinute = 'mddtp-minute__selected',
            selected = 'mddtp-picker__cell--selected',
            rotate = 'mddtp-picker__cell--rotate-',
            cell = 'mddtp-picker__cell',
            docfrag = document.createDocumentFragment();

        for (var i = 5, j = 10; i <= 60; i += 5, j += 10) {
          var div = document.createElement('div'),
              span = document.createElement('span');

          div.classList.add(cell);
          if (i === 60) {
            span.textContent = this._numWithZero(0);
          } else {
            span.textContent = this._numWithZero(i);
          }
          if (minuteNow === 0) {
            minuteNow = 60;
          }
          div.classList.add(rotate + j);
          // (minuteNow === 1 && i === 60) for corner case highlight 00 at 01
          if (minuteNow === i || minuteNow - 1 === i || minuteNow + 1 === i || minuteNow === 1 && i === 60) {
            div.id = sMinute;
            div.classList.add(selected);
          }
          div.appendChild(span);
          docfrag.appendChild(div);
        }
        // empty the hours
        while (minuteView.lastChild) {
          minuteView.removeChild(minuteView.lastChild);
        }
        // set inner html accordingly
        minuteView.appendChild(docfrag);
      }
    }, {
      key: '_initDateDialog',
      value: function _initDateDialog(m) {
        var subtitle = this._sDialog.subtitle,
            title = this._sDialog.title,
            titleDay = this._sDialog.titleDay,
            titleMonth = this._sDialog.titleMonth;


        if (this._ranges) {
          this._fillText(subtitle, m.format('YYYY'));
          this._fillText(titleDay, '');
          this._fillText(titleMonth, this._begin.format('MMM D, YYYY') + ' - ' + this._end.format('MMM D, YYYY'));

          this._initRange();
        } else {
          this._fillText(subtitle, m.format('YYYY'));
          this._fillText(titleDay, m.format('ddd, '));
          this._fillText(titleMonth, m.format('MMM D'));
        }

        if (this._injectElement) {
          this._initInjected();
        }

        this._initYear();
        this._initViewHolder();
        this._attachEventHandlers();
        this._changeMonth();
        this._switchToView(subtitle);
        this._switchToView(title);
        this._setButtonText();
      }
    }, {
      key: '_initViewHolder',
      value: function _initViewHolder() {
        var m = this._sDialog.tDate,
            current = this._sDialog.current,
            previous = this._sDialog.previous,
            next = this._sDialog.next,
            past = this._past,
            future = this._future;

        if (m.isBefore(past, 'month')) {
          m = past.clone();
        }
        if (m.isAfter(future, 'month')) {
          m = future.clone();
        }
        this._sDialog.tDate = m;
        this._initMonth(current, m);
        this._initMonth(next, (0, _moment2.default)(this._getMonth(m, 1)));
        this._initMonth(previous, (0, _moment2.default)(this._getMonth(m, -1)));
        this._toMoveMonth();
      }
    }, {
      key: '_initRange',
      value: function _initRange() {
        var ranger = this._sDialog.ranger,
            frag = new DocumentFragment();


        for (var i = 0; i < this._ranges.length; i++) {
          var range = this._ranges[i],
              date = range.interval(),
              sRangeClass = 'mddtp-picker__range--selected',
              span = document.createElement('span');

          span.innerText = range.label;
          span.classList.add('mddtp-picker__range');
          span.setAttribute('idx', i);
          frag.appendChild(span);

          if (this._sDialog.bDate.isSame(date.begin, 'day') && this._sDialog.eDate.isSame(date.end, 'day')) {
            span.classList.add(sRangeClass);
          }
        }

        while (ranger.lastChild) {
          ranger.removeChild(ranger.lastChild);
        }

        ranger.appendChild(frag);
        this.__endSelected = !0;
        this._trigger.dispatchEvent(new CustomEvent('range-selected', { detail: { begin: this._sDialog.bDate, end: this._sDialog.eDate } }));

        this._addRangeClickEvent(ranger);
      }
    }, {
      key: '_initInjected',
      value: function _initInjected() {
        var injected = this._sDialog.injected,
            frag = new DocumentFragment();


        if (this._injectElement) {
          this._injectElement(frag, this, this._trigger || this._container);
        }

        while (injected.lastChild) {
          injected.removeChild(injected.lastChild);
        }

        injected.appendChild(frag);
      }
    }, {
      key: '_initMonth',
      value: function _initMonth(view, m) {
        var displayMonth = (0, _moment2.default)(m).format('MMMM YYYY'),
            innerDivs = view.getElementsByTagName('div');
        // get the .mddtp-picker__month element using innerDivs[0]

        this._fillText(innerDivs[0], displayMonth);
        var docfrag = document.createDocumentFragment(),
            tr = innerDivs[3],
            firstDayOfMonth = _moment2.default.weekdays(!0).indexOf(_moment2.default.weekdays(!1, (0, _moment2.default)(m).date(1).day())),
            today = -1,
            selected = -1,
            begin = 101,
            end = -1,
            lastDayOfMonth = parseInt((0, _moment2.default)(m).endOf('month').format('D'), 10) + firstDayOfMonth - 1,
            past = firstDayOfMonth,
            cellClass = 'mddtp-picker__cell',
            future = lastDayOfMonth;
        // get the .mddtp-picker__tr element using innerDivs[3]

        /*
        * @netTrek - first day of month dependented from moment.locale
        */


        if ((0, _moment2.default)().isSame(m, 'month')) {
          today = parseInt((0, _moment2.default)().format('D'), 10);
          today += firstDayOfMonth - 1;
        }
        if (this._past.isSame(m, 'month')) {
          past = parseInt(this._past.format('D'), 10);
          past += firstDayOfMonth - 1;
        }
        if (this._future.isSame(m, 'month')) {
          future = parseInt(this._future.format('D'), 10);
          future += firstDayOfMonth - 1;
        }
        if (!this._ranges && this._sDialog.sDate.isSame(m, 'month')) {
          selected = parseInt((0, _moment2.default)(m).format('D'), 10);
          selected += firstDayOfMonth - 1;
        }

        if (this._ranges) {
          if (this._sDialog.bDate.isBefore(m, 'month') && this._sDialog.eDate.isSameOrAfter(m, 'month')) {
            begin = 0;
          } else if (this._sDialog.bDate.isSame(m, 'month')) {
            begin = this._sDialog.bDate.date();
            begin += firstDayOfMonth - 1;
          }

          if (this._sDialog.eDate.isAfter(m, 'month') && this._sDialog.bDate.isSameOrBefore(m, 'month')) {
            end = 42;
          } else if (this._sDialog.eDate.isSame(m, 'month')) {
            end = this._sDialog.eDate.date();
            end += firstDayOfMonth - 1;
          }

          begin = begin !== 101 || end === -1 ? begin : 0;
          end = end !== -1 || begin !== 101 ? end : 42;
        }

        for (var i = 0; i < 42; i++) {
          // create cell
          var p = document.createElement('p'),
              cell = document.createElement('span'),
              currentDay = i - firstDayOfMonth + 1;


          if (i >= firstDayOfMonth && i <= lastDayOfMonth) {
            if (i > future || i < past) {
              p.classList.add(cellClass + '--disabled');
            } else {
              if (i > begin && i < end) {
                p.classList.add(cellClass + '--ranged');
              }

              if (i === begin) {
                p.classList.add(cellClass + '--begin');
                p.classList.add(cellClass + '--selected');
              }

              if (i === end) {
                p.classList.add(cellClass + '--end');
                p.classList.add(cellClass + '--selected');
              }

              p.classList.add(cellClass);

              if (this._ranges) {
                this._addCellMouseEnterEvent(p);
                this._addCellMouseLeaveEvent(p);
              }
            }

            this._fillText(cell, currentDay);
          }

          if (today === i) {
            p.classList.add(cellClass + '--today');
          }

          if (selected === i) {
            p.classList.add(cellClass + '--selected');
            cell.id = 'mddtp-date__selected';
          }

          p.appendChild(cell);
          docfrag.appendChild(p);
        }

        // empty the tr
        while (tr.lastChild) {
          tr.removeChild(tr.lastChild);
        }
        // set inner html accordingly
        tr.appendChild(docfrag);
        this._addCellClickEvent(tr);
      }
    }, {
      key: '_initYear',
      value: function _initYear() {
        var years = this._sDialog.years,
            currentYear = this._sDialog.tDate.year(),
            docfrag = document.createDocumentFragment(),
            past = this._past.year(),
            future = this._future.year();

        for (var year = past; year <= future; year++) {
          var li = document.createElement('li');
          li.textContent = year;
          if (year === currentYear) {
            li.id = 'mddtp-date__currentYear';
            li.classList.add('mddtp-picker__li--current');
          }
          docfrag.appendChild(li);
        }
        // empty the years ul
        while (years.lastChild) {
          years.removeChild(years.lastChild);
        }
        // set inner html accordingly
        years.appendChild(docfrag);
        // attach event handler to the ul to get the benefit of event delegation
        this._changeYear(years);
      }
    }, {
      key: '_pointNeedle',
      value: function _pointNeedle(me) {
        var spoke = 60,
            value = void 0,
            circle = this._sDialog.circle,
            fakeNeedle = this._sDialog.fakeNeedle,
            circularHolder = this._sDialog.circularHolder,
            selection = 'mddtp-picker__selection',
            needle = me._sDialog.needle;

        // move the needle to correct position
        needle.className = '';
        needle.classList.add(selection);
        if (!mdDateTimePicker.dialog.view) {
          value = me._sDialog.sDate.format('m');

          // Need to desactivate for the autoClose mode as it mess things up.  If you have an idea, feel free to give it a shot !
          if (me._autoClose !== !0) {
            // move the fakeNeedle to correct position
            setTimeout(function () {
              var hOffset = circularHolder.getBoundingClientRect(),
                  cOffset = circle.getBoundingClientRect();

              fakeNeedle.style.left = 'left:' + (cOffset.left - hOffset.left) + 'px';
              fakeNeedle.style.top = 'top:' + (cOffset.top - hOffset.top) + 'px';
            }, 300);
          }
        } else if (me._mode) {
          spoke = 24;
          value = parseInt(me._sDialog.sDate.format('H'), 10);
          // CHANGED exception for 24 => 0 issue #58
          if (value === 0) {
            value = 24;
          }
        } else {
          spoke = 12;
          value = me._sDialog.sDate.format('h');
        }

        var parsedValue = parseInt(value, 10),
            rotationClass = me._calcRotation(spoke, parsedValue);

        if (rotationClass) {
          needle.classList.add(rotationClass);

          if (this._inner24 === !0 && spoke === 24 && parsedValue > 12) {
            needle.classList.add('mddtp-picker__cell--rotate24');
          }
        }
      }
    }, {
      key: '_switchToView',
      value: function _switchToView(el) {
        var me = this;
        // attach the view change button
        if (this._type === 'date') {
          el.onclick = function () {
            me._switchToDateView(el, me);
          };
        } else {
          if (this._inner24 === !0 && me._mode) {
            if (parseInt(me._sDialog.sDate.format('H'), 10) > 12) {
              me._sDialog.needle.classList.add('mddtp-picker__cell--rotate24');
            } else {
              me._sDialog.needle.classList.remove('mddtp-picker__cell--rotate24');
            }
          }

          el.onclick = function () {
            me._switchToTimeView(me);
          };
        }
      }
    }, {
      key: '_switchToTimeView',
      value: function _switchToTimeView(me) {
        var hourView = me._sDialog.hourView,
            minuteView = me._sDialog.minuteView,
            hour = me._sDialog.hour,
            minute = me._sDialog.minute,
            activeClass = 'mddtp-picker__color--active',
            hidden = 'mddtp-picker__circularView--hidden';

        // toggle view classes
        hourView.classList.toggle(hidden);
        minuteView.classList.toggle(hidden);
        hour.classList.toggle(activeClass);
        minute.classList.toggle(activeClass);
        // move the needle to correct position
        // toggle the view type
        mdDateTimePicker.dialog.view = !mdDateTimePicker.dialog.view;
        me._pointNeedle(me);
      }
    }, {
      key: '_switchToDateView',
      value: function _switchToDateView(el, me) {
        el.setAttribute('disabled', '');
        var inner = me._sDialog.inner,
            ranger = me._sDialog.ranger,
            injected = me._sDialog.injected,
            years = me._sDialog.years,
            title = me._sDialog.title,
            subtitle = me._sDialog.subtitle,
            currentYear = me._container.querySelector('#mddtp-date__currentYear');

        if (mdDateTimePicker.dialog.view) {
          inner.classList.add('zoomOut');
          ranger && ranger.classList.add('zoomOut');
          injected && injected.classList.add('zoomOut');
          years.classList.remove('mddtp-picker__years--invisible');
          years.classList.add('zoomIn');
          // scroll into the view
          currentYear.scrollIntoViewIfNeeded && currentYear.scrollIntoViewIfNeeded();
        } else {
          years.classList.add('zoomOut');
          inner.classList.remove('zoomOut');
          inner.classList.add('zoomIn');

          if (injected) {
            injected.classList.remove('zoomOut');
            injected.classList.add('zoomIn');
          }

          if (ranger) {
            ranger.classList.remove('zoomOut');
            ranger.classList.add('zoomIn');
          }

          setTimeout(function () {
            years.classList.remove('zoomIn', 'zoomOut');
            years.classList.add('mddtp-picker__years--invisible');
            inner.classList.remove('zoomIn');
            injected && injected.classList.remove('zoomIn');
            ranger && ranger.classList.remove('zoomIn');
          }, 300);
        }
        title.classList.toggle('mddtp-picker__color--active');
        subtitle.classList.toggle('mddtp-picker__color--active');
        mdDateTimePicker.dialog.view = !mdDateTimePicker.dialog.view;
        setTimeout(function () {
          el.removeAttribute('disabled');
        }, 300);
      }
    }, {
      key: '_addClockEvent',
      value: function _addClockEvent() {
        var me = this,
            hourView = this._sDialog.hourView,
            minuteView = this._sDialog.minuteView,
            sClass = 'mddtp-picker__cell--selected';

        hourView.onclick = function (e) {
          var sHour = 'mddtp-hour__selected',
              selectedHour = me._container.querySelector('#' + sHour),
              setHour = 0;

          if (e.target && e.target.nodeName === 'SPAN') {
            // clear the previously selected hour
            selectedHour.id = '';
            selectedHour.classList.remove(sClass);
            // select the new hour
            e.target.parentNode.classList.add(sClass);
            e.target.parentNode.id = sHour;
            // set the sDate according to 24 or 12 hour mode
            if (me._mode) {
              setHour = parseInt(e.target.textContent, 10);
            } else if (me._sDialog.sDate.format('A') === 'AM') {
              setHour = e.target.textContent;
            } else {
              setHour = parseInt(e.target.textContent, 10) + 12;
            }
            me._sDialog.sDate.hour(setHour);
            // set the display hour
            me._sDialog.hour.textContent = e.target.textContent;
            // switch the view
            me._pointNeedle(me);
            setTimeout(function () {
              me._switchToTimeView(me);
            }, 700);
          }
        };
        minuteView.onclick = function (e) {
          var sMinute = 'mddtp-minute__selected',
              selectedMinute = me._container.querySelector('#' + sMinute),
              setMinute = 0;

          if (e.target && e.target.nodeName === 'SPAN') {
            // clear the previously selected hour
            if (selectedMinute) {
              selectedMinute.id = '';
              selectedMinute.classList.remove(sClass);
            }
            // select the new minute
            e.target.parentNode.classList.add(sClass);
            e.target.parentNode.id = sMinute;
            // set the sDate minute
            setMinute = e.target.textContent;
            me._sDialog.sDate.minute(setMinute);
            // set the display minute
            me._sDialog.minute.textContent = setMinute;
            me._pointNeedle(me);

            if (me._autoClose === !0) {
              me._sDialog.ok.onclick();
            }
          }
        };
      }
    }, {
      key: '_addRangeClickEvent',
      value: function _addRangeClickEvent(el) {
        var me = this;

        el.onclick = function (e) {
          if (e.target && e.target.nodeName === 'SPAN') {
            var subtitle = me._sDialog.subtitle,
                titleMonth = me._sDialog.titleMonth,
                titleDay = me._sDialog.titleDay,
                sRangeClass = 'mddtp-picker__range--selected',
                idx = parseInt(e.target.getAttribute('idx'));


            if (idx !== idx) {
              return;
            }

            var date = me._ranges[idx].interval();

            me._sDialog.tDate = _moment2.default.max(date.end, date.begin);
            me._sDialog.bDate = date.begin;
            me._sDialog.eDate = date.end;

            me._initViewHolder();
            me._fillText(subtitle, me._sDialog.tDate.year());
            me._fillText(titleDay, '');
            me._fillText(titleMonth, me._sDialog.bDate.format('MMM D, YYYY') + ' - ' + me._sDialog.eDate.format('MMM D, YYYY'));
            me.__endSelected = !0;
            me._trigger.dispatchEvent(new CustomEvent('range-selected', { detail: { begin: me._sDialog.bDate, end: me._sDialog.eDate } }));

            var els = me._sDialog.ranger.children;

            for (var i = 0; i < els.length; i++) {
              var _el = els[i];

              if (!_el.classList.contains('mddtp-picker__range')) {
                continue;
              }

              if (_el === e.target) {
                _el.classList.add(sRangeClass);
              } else {
                _el.classList.remove(sRangeClass);
              }
            }
          }
        };
      }
    }, {
      key: '_addCellMouseEnterEvent',
      value: function _addCellMouseEnterEvent(el) {
        var me = this;

        el.onmouseenter = function (e) {
          var target = e.target,
              span = target.querySelector('span'),
              day = span.textContent,
              hoveredDate = me._sDialog.tDate.clone().date(day);


          if (!me.__endSelected && hoveredDate.isAfter(me._sDialog.bDate, 'day')) {
            var rangedClass = 'mddtp-picker__cell--ranged',
                tr = target.parentNode.parentNode,
                cells = [].concat(_toConsumableArray(tr.querySelectorAll('p'))),
                idx = cells.indexOf(target);


            for (var i = idx; i >= 0; i--) {
              var cell = cells[i];

              if (!cell.classList.contains('mddtp-picker__cell')) {
                continue;
              }

              if (!cell || cell.classList.contains(rangedClass) || cell.classList.contains('mddtp-picker__cell--begin')) {
                break;
              }

              cell.classList.add(rangedClass);
            }
          }
        };
      }
    }, {
      key: '_addCellMouseLeaveEvent',
      value: function _addCellMouseLeaveEvent(el) {
        var me = this;

        el.onmouseleave = function (e) {
          var target = e.target,
              span = target.querySelector('span'),
              day = span.textContent,
              hoveredDate = me._sDialog.tDate.clone().date(day),
              bDate = me._sDialog.bDate;


          if (!me.__endSelected && hoveredDate.isAfter(bDate, 'day')) {
            var rangedClass = 'mddtp-picker__cell--ranged',
                tr = target.parentNode.parentNode,
                cells = [].concat(_toConsumableArray(tr.querySelectorAll('p'))),
                idx = cells.indexOf(target);


            if (bDate.isSame(hoveredDate, 'month')) {
              for (var i = idx; i >= 0; i--) {
                var cell = cells[i];

                if (!cell.classList.contains('mddtp-picker__cell')) {
                  continue;
                }

                if (cell.classList.contains('mddtp-picker__cell--begin')) {
                  break;
                }

                cell.classList.remove(rangedClass);
              }
            } else {
              for (var _i2 = idx; _i2 >= 0; _i2--) {
                var _cell = cells[_i2];

                if (!_cell.classList.contains('mddtp-picker__cell')) {
                  continue;
                }

                _cell.classList.remove(rangedClass);
              }
            }
          }
        };
      }
    }, {
      key: '_addCellClickEvent',
      value: function _addCellClickEvent(el) {
        var me = this;
        el.onclick = function (e) {
          if (e.target && e.target.nodeName === 'SPAN') {

            if (me._ranges) {
              var start = me._sDialog.bDate,
                  day = e.target.textContent,
                  clickedDate = me._sDialog.tDate.date(day),
                  sClass = 'mddtp-picker__cell--selected',
                  sRangeClass = 'mddtp-picker__range--selected',
                  sId = 'mddtp-date__selected',
                  startId = 'mddtp-date__start',
                  endId = 'mddtp-date__end',
                  subtitle = me._sDialog.subtitle,
                  titleMonth = me._sDialog.titleMonth,
                  titleDay = me._sDialog.titleDay,
                  selected = me._container.querySelector('#' + sId);


              if (selected) {
                selected.classList.remove(sClass);
                selected.id = '';
              }

              if (!_moment2.default.isMoment(start) || clickedDate.isBefore(start) || me.__endSelected) {
                var startEl = me._container.querySelector('#' + startId),
                    endEl = me._container.querySelector('#' + endId);


                if (startEl) {
                  startEl.classList.remove(sClass);
                  startEl.id = '';
                }

                if (endEl) {
                  endEl.classList.remove(sClass);
                  endEl.id = '';
                }

                me._sDialog.bDate = clickedDate.clone();
                me._sDialog.eDate = clickedDate.clone();

                e.target.classList.add(sClass);
                e.target.id = startId;

                me.__endSelected = !1;
              } else {
                me._sDialog.eDate = clickedDate.clone();
                e.target.classList.add(sClass);
                e.target.id = endId;

                me.__endSelected = !0;
                me._trigger.dispatchEvent(new CustomEvent('range-selected', { detail: { begin: me._sDialog.bDate, end: me._sDialog.eDate } }));

                var els = me._sDialog.ranger.children;

                for (var i = 0; i < els.length; i++) {
                  var _el2 = els[i],
                      idx = parseInt(_el2.getAttribute('idx'));


                  if (idx !== idx) {
                    continue;
                  }

                  var range = me._ranges[idx],
                      date = range.interval();


                  if (me._sDialog.bDate.isSame(date.begin, 'day') && me._sDialog.eDate.isSame(date.end, 'day')) {
                    _el2.classList.add(sRangeClass);
                  } else {
                    _el2.classList.remove(sRangeClass);
                  }
                }
              }

              me._fillText(subtitle, '' + clickedDate.format('YYYY'));
              me._fillText(titleDay, '');
              me._fillText(titleMonth, me._sDialog.bDate.format('MMM D, YYYY') + ' - ' + me._sDialog.eDate.format('MMM D, YYYY'));

              me._initViewHolder();
            } else {
              var _day = e.target.textContent,
                  currentDate = me._sDialog.tDate.date(_day),
                  _sId = 'mddtp-date__selected',
                  _sClass = 'mddtp-picker__cell--selected',
                  _selected = me._container.querySelector('#' + _sId),
                  _subtitle2 = me._sDialog.subtitle,
                  _titleDay = me._sDialog.titleDay,
                  _titleMonth = me._sDialog.titleMonth;


              if (_selected) {
                _selected.parentNode.classList.remove(_sClass);
                _selected.id = '';
              }
              e.target.parentNode.classList.add(_sClass);
              e.target.id = _sId;

              // update temp date object with the date selected
              me._sDialog.sDate = currentDate.clone();

              me._fillText(_subtitle2, currentDate.year());
              me._fillText(_titleDay, currentDate.format('ddd, '));
              me._fillText(_titleMonth, currentDate.format('MMM D'));

              if (me._autoClose === !0) {
                me._sDialog.ok.onclick();
              }
            }
          }
        };
      }
    }, {
      key: '_toMoveMonth',
      value: function _toMoveMonth() {
        var m = this._sDialog.tDate,
            left = this._sDialog.left,
            right = this._sDialog.right,
            past = this._past,
            future = this._future;

        left.removeAttribute('disabled');
        right.removeAttribute('disabled');
        left.classList.remove('mddtp-button--disabled');
        right.classList.remove('mddtp-button--disabled');
        if (m.isSame(past, 'month')) {
          left.setAttribute('disabled', '');
          left.classList.add('mddtp-button--disabled');
        }
        if (m.isSame(future, 'month')) {
          right.setAttribute('disabled', '');
          right.classList.add('mddtp-button--disabled');
        }
      }
    }, {
      key: '_changeMonth',
      value: function _changeMonth() {
        var me = this,
            left = this._sDialog.left,
            right = this._sDialog.right,
            mLeftClass = 'mddtp-picker__view--left',
            mRightClass = 'mddtp-picker__view--right',
            pause = 'mddtp-picker__view--pause';

        left.onclick = function () {
          moveStep(mRightClass, me._sDialog.previous);
        };

        right.onclick = function () {
          moveStep(mLeftClass, me._sDialog.next);
        };

        function moveStep(aClass, to) {
          /**
          * [stepBack to know if the to step is going back or not]
          *
          * @type {Boolean}
          */

          var stepBack = !1,
              next = me._sDialog.next,
              current = me._sDialog.current,
              previous = me._sDialog.previous;

          left.setAttribute('disabled', '');
          right.setAttribute('disabled', '');
          current.classList.add(aClass);
          previous.classList.add(aClass);
          next.classList.add(aClass);
          var clone = to.cloneNode(!0),
              del = void 0;

          if (to === next) {
            del = previous;
            current.parentNode.appendChild(clone);
            next.id = current.id;
            current.id = previous.id;
            previous = current;
            current = next;
            next = clone;
          } else {
            stepBack = !0;
            del = next;
            previous.id = current.id;
            current.id = next.id;
            next = current;
            current = previous;
          }
          setTimeout(function () {
            if (to === previous) {
              current.parentNode.insertBefore(clone, current);
              previous = clone;
            }
            // update real values to match these values
            me._sDialog.next = next;
            me._sDialog.current = current;
            me._sDialog.previous = previous;
            current.classList.add(pause);
            next.classList.add(pause);
            previous.classList.add(pause);
            current.classList.remove(aClass);
            next.classList.remove(aClass);
            previous.classList.remove(aClass);
            del.parentNode.removeChild(del);
          }, 300);
          // REVIEW replace below code with requestAnimationFrame
          setTimeout(function () {
            current.classList.remove(pause);
            next.classList.remove(pause);
            previous.classList.remove(pause);
            if (stepBack) {
              me._sDialog.tDate = me._getMonth(me._sDialog.tDate, -1);
            } else {
              me._sDialog.tDate = me._getMonth(me._sDialog.tDate, 1);
            }
            me._initViewHolder();

            // REVIEW initViewHolder above removes disabled attribute very early
            left.setAttribute('disabled', '');
            right.setAttribute('disabled', '');
          }, 350);
          setTimeout(function () {
            if (!left.classList.contains('mddtp-button--disabled')) {
              left.removeAttribute('disabled');
            }
            if (!right.classList.contains('mddtp-button--disabled')) {
              right.removeAttribute('disabled');
            }
          }, 500);
        }
      }
    }, {
      key: '_changeYear',
      value: function _changeYear(el) {
        var me = this;
        el.onclick = function (e) {
          if (e.target && e.target.nodeName === 'LI') {
            var selected = me._container.querySelector('#mddtp-date__currentYear'),
                subtitle = me._sDialog.subtitle;

            // clear previous selected
            selected.id = '';
            selected.classList.remove('mddtp-picker__li--current');
            // add the properties to the newer one
            e.target.id = 'mddtp-date__currentYear';
            e.target.classList.add('mddtp-picker__li--current');
            // switch view
            me._switchToDateView(el, me);
            // set the tdate to it
            me._sDialog.tDate.year(parseInt(e.target.textContent, 10));
            // update the dialog
            me._fillText(subtitle, '' + me._sDialog.tDate.format('YYYY'));
            me._initViewHolder();
          }
        };
      }
    }, {
      key: '_changeM',
      value: function _changeM() {
        var me = this,
            AM = this._sDialog.AM,
            PM = this._sDialog.PM;

        AM.onclick = function () {
          // let m = me._sDialog.sDate.format('A')
          // Change Locale Meridiem to AM/PM String
          var m = 'AM';
          if (me._sDialog.sDate._locale.isPM(me._sDialog.sDate.format('A'))) {
            m = 'PM';
          }
          if (m === 'PM') {
            me._sDialog.sDate.subtract(12, 'h');
            AM.classList.toggle('mddtp-picker__color--active');
            PM.classList.toggle('mddtp-picker__color--active');
          }
        };
        PM.onclick = function () {
          // let m = me._sDialog.sDate.format('A')
          // Change Locale Meridiem to AM/PM String
          var m = 'AM';
          if (me._sDialog.sDate._locale.isPM(me._sDialog.sDate.format('A'))) {
            m = 'PM';
          }
          if (m === 'AM') {
            me._sDialog.sDate.add(12, 'h');
            AM.classList.toggle('mddtp-picker__color--active');
            PM.classList.toggle('mddtp-picker__color--active');
          }
        };
      }
    }, {
      key: '_dragDial',
      value: function _dragDial() {
        var me = this,
            needle = this._sDialog.needle,
            circle = this._sDialog.circle,
            fakeNeedle = this._sDialog.fakeNeedle,
            circularHolder = this._sDialog.circularHolder,
            minute = this._sDialog.minute,
            quick = 'mddtp-picker__selection--quick',
            selection = 'mddtp-picker__selection',
            selected = 'mddtp-picker__cell--selected',
            rotate = 'mddtp-picker__cell--rotate-',
            hOffset = circularHolder.getBoundingClientRect(),
            divides = void 0,
            fakeNeedleDraggabilly = new _draggabilly2.default(fakeNeedle, {
          containment: !0
        });

        fakeNeedleDraggabilly.on('pointerDown', function () {
          // console.info ( 'pointerDown' , e );
          hOffset = circularHolder.getBoundingClientRect();
        });
        /**
         * netTrek
         * fixes for iOS - drag
         */
        fakeNeedleDraggabilly.on('pointerMove', function (e) {
          var clientX = e.clientX,
              clientY = e.clientY;


          if (clientX === undefined) {
            if (e.pageX === undefined) {
              if (e.touches && e.touches.length > 0) {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
              } else {
                throw new Error('coult not detect pageX, pageY');
              }
            } else {
              clientX = e.pageX - document.body.scrollLeft - document.documentElement.scrollLeft;
              clientY = e.pageY - document.body.scrollTop - document.documentElement.scrollTop;
            }
          }
          // console.info ( 'Drag clientX' , clientX, clientY, e );

          var xPos = clientX - hOffset.left - hOffset.width / 2,
              yPos = clientY - hOffset.top - hOffset.height / 2,
              slope = Math.atan2(-yPos, xPos);

          needle.className = '';
          if (slope < 0) {
            slope += 2 * Math.PI;
          }
          slope *= 180 / Math.PI;
          slope = 360 - slope;
          if (slope > 270) {
            slope -= 360;
          }
          divides = parseInt(slope / 6);
          var same = Math.abs(6 * divides - slope),
              upper = Math.abs(6 * (divides + 1) - slope);

          if (upper < same) {
            divides++;
          }
          divides += 15;
          needle.classList.add(selection);
          needle.classList.add(quick);
          needle.classList.add(rotate + divides * 2);
          minute.textContent = me._numWithZero(divides);
        });
        /**
         * netTrek
         * fixes for iOS - drag
         */
        var onDragEnd = function onDragEnd() {
          var minuteViewChildren = me._sDialog.minuteView.getElementsByTagName('div'),
              sMinute = 'mddtp-minute__selected',
              selectedMinute = me._container.querySelector('#' + sMinute),
              cOffset = circle.getBoundingClientRect();

          fakeNeedle.style.left = 'left:' + (cOffset.left - hOffset.left) + 'px';
          fakeNeedle.style.top = 'top:' + (cOffset.top - hOffset.top) + 'px';
          needle.classList.remove(quick);
          var select = divides;
          if (select === 1) {
            select = 60;
          }
          select = me._nearestDivisor(select, 5);
          // normalize 60 => 0
          if (divides === 60) {
            divides = 0;
          }
          // remove previously selected value
          if (selectedMinute) {
            selectedMinute.id = '';
            selectedMinute.classList.remove(selected);
          }
          // add the new selected
          if (select > 0) {
            select /= 5;
            select--;
            minuteViewChildren[select].id = sMinute;
            minuteViewChildren[select].classList.add(selected);
          }
          minute.textContent = me._numWithZero(divides);
          me._sDialog.sDate.minutes(divides);
        };

        fakeNeedleDraggabilly.on('pointerUp', onDragEnd);
        fakeNeedleDraggabilly.on('dragEnd', onDragEnd);
      }
    }, {
      key: '_attachEventHandlers',
      value: function _attachEventHandlers() {
        var me = this,
            ok = this._sDialog.ok,
            cancel = this._sDialog.cancel,
            unset = this._sDialog.unset,
            onCancel = new CustomEvent('onCancel'),
            onOk = new CustomEvent('onOk'),
            onUnset = new CustomEvent('onUnset');

        // create cutom events to dispatch


        if (unset) {
          unset.onclick = function () {
            me.toggle();
            if (me._trigger) {
              me._trigger.dispatchEvent(onUnset);
            }
          };
        }

        cancel.onclick = function () {
          me.toggle();
          if (me._trigger) {
            me._trigger.dispatchEvent(onCancel);
          }
        };
        ok.onclick = function () {
          me._begin = me._sDialog.bDate;
          me._end = me._sDialog.eDate;
          me._init = me._sDialog.sDate;
          me.toggle();
          if (me._trigger) {
            me._trigger.dispatchEvent(onOk);
          }
        };
      }
    }, {
      key: '_setButtonText',
      value: function _setButtonText() {
        this._sDialog.cancel.textContent = this._cancel;
        this._sDialog.ok.textContent = this._ok;

        if (this._unset) {
          this._sDialog.unset.textContent = this._unset;
        }
      }
    }, {
      key: '_getMonth',
      value: function _getMonth(moment, count) {
        var m = void 0;
        m = moment.clone();
        if (count > 0) {
          return m.add(Math.abs(count), 'M');
        }
        return m.subtract(Math.abs(count), 'M');
      }
    }, {
      key: '_nearestDivisor',
      value: function _nearestDivisor(number, divided) {
        if (number % divided === 0) {
          return number;
        } else if ((number - 1) % divided === 0) {
          return number - 1;
        } else if ((number + 1) % divided === 0) {
          return number + 1;
        }
        return -1;
      }
    }, {
      key: '_numWithZero',
      value: function _numWithZero(n) {
        return n > 9 ? '' + n : '0' + n;
      }
    }, {
      key: '_fillText',
      value: function _fillText(el, text) {
        if (el.firstChild) {
          el.firstChild.nodeValue = text;
        } else {
          el.appendChild(document.createTextNode(text));
        }
      }
    }, {
      key: '_addId',
      value: function _addId(el, id) {
        el.id = 'mddtp-' + this._type + '__' + id;
      }
    }, {
      key: '_addClass',
      value: function _addClass(el, aClass, more) {
        el.classList.add('mddtp-picker__' + aClass);
        var i = 0;
        if (more) {
          i = more.length;
          more.reverse();
        }
        while (i--) {
          el.classList.add(more[i]);
        }
      }
    }, {
      key: '_addView',
      value: function _addView(view) {
        var month = document.createElement('div'),
            grid = document.createElement('div'),
            th = document.createElement('div'),
            tr = document.createElement('div'),
            weekDays = _moment2.default.weekdaysMin(!0).reverse(),
            week = 7;
        /**
        * @netTrek - weekday dependented from moment.locale
        */

        while (week--) {
          var span = document.createElement('span');
          span.textContent = weekDays[week];
          th.appendChild(span);
        }
        // add properties to them
        this._addClass(month, 'month');
        this._addClass(grid, 'grid');
        this._addClass(th, 'th');
        this._addClass(tr, 'tr');
        // add them to the view
        view.appendChild(month);
        view.appendChild(grid);
        grid.appendChild(th);
        grid.appendChild(tr);
      }
    }, {
      key: '_calcRotation',
      value: function _calcRotation(spoke, value) {
        // set clocks top and right side value
        if (spoke === 12) {
          value *= 10;
        } else if (spoke === 24) {
          if (this._inner24 === !0) {
            if (value > 12) {
              value -= 12;
            }
            value *= 10;
          } else {
            value *= 5;
          }
        } else {
          value *= 2;
        }
        // special case for 00 => 60
        if (spoke === 60 && value === 0) {
          value = 120;
        }
        return 'mddtp-picker__cell--rotate-' + value;
      }
    }, {
      key: 'time',
      get: function get() {
        return this._init;
      },
      set: function set(m) {
        if (m) {
          this._init = m;
        }
      }
    }, {
      key: 'trigger',
      get: function get() {
        return this._trigger;
      },
      set: function set(el) {
        if (el) {
          this._trigger = el;
        }
      }
    }], [{
      key: 'dialog',
      get: function get() {
        return mdDateTimePicker._dialog;
      },
      set: function set(value) {
        mdDateTimePicker._dialog = value;
      }
    }]);

    return mdDateTimePicker;
  }();

  mdDateTimePicker._dialog = {
    view: !0,
    state: !1
  };

  exports.default = mdDateTimePicker;
});