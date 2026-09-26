/* @ds-bundle: {"format":4,"namespace":"Solotvj","components":[{"name":"Wordmark"},{"name":"NavBar"},{"name":"SectionHeader"},{"name":"Button"},{"name":"Input"},{"name":"Badge"},{"name":"Alert"},{"name":"Card"},{"name":"Stat"},{"name":"Table"},{"name":"CodeBlock"},{"name":"ChatBubble"},{"name":"Conversation"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(obj, keys) {
    var r = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) < 0) r[k] = obj[k];
    return r;
  }

  var uid = 0;
  function useId(prefix) {
    var ref = React.useRef(null);
    if (ref.current === null) { uid += 1; ref.current = prefix + '-' + uid; }
    return ref.current;
  }

  /* ---- icons (inline, single stroke, inherit currentColor) ---- */
  function Icon(props) {
    return h('svg', { className: cx('stv-icon', props.className), width: props.size || 16, height: props.size || 16, viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' }, props.children);
  }
  var icons = {
    check: function () { return h(Icon, null, h('path', { d: 'M3.5 8.5l3 3 6-7' })); },
    checks: function () { return h(Icon, null, h('path', { d: 'M1.5 8.5l3 3 6-7' }), h('path', { d: 'M7.5 11.5l6-7' })); },
    alert: function () { return h(Icon, null, h('circle', { cx: 8, cy: 8, r: 6.25 }), h('path', { d: 'M8 4.75v3.75' }), h('path', { d: 'M8 11.1v0.15' })); },
    info: function () { return h(Icon, null, h('circle', { cx: 8, cy: 8, r: 6.25 }), h('path', { d: 'M8 7.25v4' }), h('path', { d: 'M8 4.8v0.15' })); },
    ok: function () { return h(Icon, null, h('circle', { cx: 8, cy: 8, r: 6.25 }), h('path', { d: 'M5.5 8.25l1.75 1.75 3.25-3.75' })); },
    arrow: function () { return h(Icon, null, h('path', { d: 'M3 8h10' }), h('path', { d: 'M9 4l4 4-4 4' })); },
    clock: function () { return h(Icon, null, h('circle', { cx: 8, cy: 8, r: 6.25 }), h('path', { d: 'M8 4.75V8l2 1.5' })); }
  };

  /* ---- Wordmark ---- */
  function Wordmark(props) {
    var size = props.size || 'md';
    return h('span', { className: cx('stv-wordmark', 'stv-wordmark-' + size, props.onBone && 'stv-on-bone', props.className), 'aria-label': 'Solotvj' },
      'Solotvj', props.mark === false ? null : h('span', { className: 'stv-wordmark-dot', 'aria-hidden': 'true' }, '.'));
  }

  /* ---- Button ---- */
  function Button(props) {
    var variant = props.variant || 'primary';
    var size = props.size || 'md';
    var rest = omit(props, ['variant', 'size', 'className', 'children', 'iconRight', 'href']);
    var inner = [h('span', { key: 'l' }, props.children), props.iconRight ? h('span', { key: 'i', className: 'stv-btn-icon' }, icons.arrow()) : null];
    var cls = cx('stv-btn', 'stv-btn-' + variant, 'stv-btn-' + size, props.className);
    if (props.href) return h('a', Object.assign({ href: props.href, className: cls }, rest), inner);
    return h('button', Object.assign({ type: 'button', className: cls }, rest), inner);
  }

  /* ---- Input ---- */
  function Input(props) {
    var autoId = useId('stv-input');
    var id = props.id || autoId;
    var hintId = id + '-hint';
    var rest = omit(props, ['label', 'hint', 'error', 'multiline', 'className', 'id']);
    var fieldProps = Object.assign({ id: id, className: cx('stv-input', props.error && 'stv-input-error'), 'aria-invalid': props.error ? 'true' : undefined, 'aria-describedby': (props.hint || props.error) ? hintId : undefined }, rest);
    return h('div', { className: cx('stv-field', props.className) },
      props.label ? h('label', { className: 'stv-field-label', htmlFor: id }, props.label) : null,
      props.multiline ? h('textarea', Object.assign({ rows: 4 }, fieldProps)) : h('input', Object.assign({ type: 'text' }, fieldProps)),
      props.error ? h('p', { id: hintId, className: 'stv-field-hint stv-field-hint-error' }, icons.alert(), h('span', null, props.error))
        : props.hint ? h('p', { id: hintId, className: 'stv-field-hint' }, props.hint) : null);
  }

  /* ---- Badge ---- */
  function Badge(props) {
    var tone = props.tone || 'neutral';
    return h('span', { className: cx('stv-badge', 'stv-badge-' + tone, props.className) },
      props.dot === false ? null : h('span', { className: 'stv-badge-dot', 'aria-hidden': 'true' }), props.children);
  }

  /* ---- Alert ---- */
  function Alert(props) {
    var tone = props.tone || 'info';
    var icon = tone === 'success' ? icons.ok() : tone === 'danger' ? icons.alert() : icons.info();
    return h('div', { className: cx('stv-alert', 'stv-alert-' + tone, props.className), role: tone === 'danger' ? 'alert' : 'status' },
      h('span', { className: 'stv-alert-icon' }, icon),
      h('div', { className: 'stv-alert-body' },
        props.title ? h('p', { className: 'stv-alert-title' }, props.title) : null,
        props.children ? h('div', { className: 'stv-alert-text' }, props.children) : null),
      props.action ? h('div', { className: 'stv-alert-action' }, props.action) : null);
  }

  /* ---- Card ---- */
  function Card(props) {
    var tone = props.tone || 'default';
    var El = props.as || 'section';
    return h(El, { className: cx('stv-card', 'stv-card-' + tone, props.className) },
      (props.eyebrow || props.title) ? h('header', { className: 'stv-card-head' },
        props.eyebrow ? h('p', { className: 'stv-eyebrow' }, props.eyebrow) : null,
        props.title ? h('h3', { className: 'stv-card-title' }, props.title) : null) : null,
      props.children ? h('div', { className: 'stv-card-body' }, props.children) : null,
      props.footer ? h('footer', { className: 'stv-card-foot' }, props.footer) : null);
  }

  /* ---- SectionHeader ---- */
  function SectionHeader(props) {
    var Tag = 'h' + (props.level || 2);
    return h('header', { className: cx('stv-section-header', props.align === 'center' && 'stv-center', props.className) },
      props.eyebrow ? h('p', { className: 'stv-eyebrow' }, props.eyebrow) : null,
      h(Tag, { className: cx('stv-section-title', props.size === 'xl' && 'stv-section-title-xl') }, props.title),
      props.lede ? h('p', { className: 'stv-section-lede' }, props.lede) : null,
      props.actions ? h('div', { className: 'stv-section-actions' }, props.actions) : null);
  }

  /* ---- Stat ---- */
  function Stat(props) {
    return h('div', { className: cx('stv-stat', props.className) },
      h('p', { className: cx('stv-stat-value', props.highlight && 'stv-stat-accent') }, props.value, props.unit ? h('span', { className: 'stv-stat-unit' }, props.unit) : null),
      h('p', { className: 'stv-stat-label' }, props.label),
      props.note ? h('p', { className: 'stv-stat-note' }, props.note) : null);
  }

  /* ---- Table ---- */
  function Table(props) {
    var cols = props.columns || [];
    var rows = props.rows || [];
    return h('div', { className: cx('stv-table-wrap', props.className) },
      h('table', { className: 'stv-table' },
        props.caption ? h('caption', null, props.caption) : null,
        h('thead', null, h('tr', null, cols.map(function (c) { return h('th', { key: c.key, scope: 'col', className: c.align === 'right' ? 'stv-right' : null }, c.label); }))),
        h('tbody', null, rows.map(function (r, i) {
          return h('tr', { key: r.id || i }, cols.map(function (c) {
            var v = c.render ? c.render(r) : r[c.key];
            return h('td', { key: c.key, className: cx(c.align === 'right' && 'stv-right', c.mono && 'stv-mono') }, v);
          }));
        }))));
  }

  /* ---- CodeBlock ---- */
  function CodeBlock(props) {
    return h('figure', { className: cx('stv-code', props.className) },
      props.title ? h('figcaption', { className: 'stv-code-title' }, props.title) : null,
      h('pre', null, h('code', null, props.children)));
  }

  /* ---- ChatBubble ---- */
  function ChatBubble(props) {
    var from = props.from || 'customer';
    var status = props.status;
    var statusIcon = status === 'read' ? icons.checks() : status === 'delivered' ? icons.checks() : status === 'sent' ? icons.check() : status === 'pending' ? icons.clock() : status === 'failed' ? icons.alert() : null;
    var statusLabel = { read: 'Read', delivered: 'Delivered', sent: 'Sent', pending: 'Sending', failed: 'Not delivered' }[status];
    return h('div', { className: cx('stv-bubble-row', 'stv-bubble-' + from, props.className) },
      h('div', { className: 'stv-bubble' },
        props.author ? h('p', { className: 'stv-bubble-author' }, props.author) : null,
        h('div', { className: 'stv-bubble-text' }, props.children),
        (props.time || status) ? h('p', { className: 'stv-bubble-meta' },
          props.time ? h('span', null, props.time) : null,
          statusIcon ? h('span', { className: cx('stv-bubble-status', 'stv-status-' + status), title: statusLabel, 'aria-label': statusLabel, role: 'img' }, statusIcon) : null) : null));
  }

  /* ---- Conversation ---- */
  function Conversation(props) {
    return h('section', { className: cx('stv-convo', props.className), 'aria-label': props.title || 'Conversation' },
      h('header', { className: 'stv-convo-head' },
        h('span', { className: 'stv-convo-avatar', 'aria-hidden': 'true' }, (props.title || '?').charAt(0)),
        h('div', { className: 'stv-convo-who' },
          h('p', { className: 'stv-convo-title' }, props.title),
          props.subtitle ? h('p', { className: 'stv-convo-sub' }, props.subtitle) : null),
        props.status ? h('div', { className: 'stv-convo-status' }, props.status) : null),
      h('div', { className: 'stv-convo-body' }, props.children));
  }

  /* ---- NavBar ---- */
  function NavBar(props) {
    var links = props.links || [];
    return h('nav', { className: cx('stv-nav', props.className), 'aria-label': 'Main' },
      h('a', { className: 'stv-nav-brand', href: props.homeHref || '#' }, h(Wordmark, { size: 'sm' })),
      h('ul', { className: 'stv-nav-links' }, links.map(function (l) {
        return h('li', { key: l.label }, h('a', { href: l.href || '#', className: cx('stv-nav-link', l.active && 'stv-active'), 'aria-current': l.active ? 'page' : undefined }, l.label));
      })),
      props.action ? h('div', { className: 'stv-nav-action' }, props.action) : null);
  }

  var api = { Wordmark: Wordmark, NavBar: NavBar, SectionHeader: SectionHeader, Button: Button, Input: Input, Badge: Badge, Alert: Alert, Card: Card, Stat: Stat, Table: Table, CodeBlock: CodeBlock, ChatBubble: ChatBubble, Conversation: Conversation };
  window.Solotvj = window.Solotvj || {};
  Object.assign(window.Solotvj, api);
})();
